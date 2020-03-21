import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AlertEvent, AlertType } from '../model/alert';
@Injectable({
  providedIn: 'root'
})
export class AlertEventService {
  
  private subject = new Subject<AlertEvent>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
      // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
      this.router.events.subscribe(event => {
          if (event instanceof NavigationStart) {
              if (this.keepAfterRouteChange) {
                  // only keep for a single route change
                  this.keepAfterRouteChange = false;
              } else {
                  // clear alert messages
                  this.clear();
              }
          }
      });
  }

  // enable subscribing to alerts observable
  onAlert(alertId?: string): Observable<AlertEvent> {
      return this.subject.asObservable().pipe(filter(x => x && x.alertId === alertId));
  }

  // convenience methods
  success(message: string, alertId?: string) {
      this.alert(new AlertEvent({ message, type: AlertType.Success, alertId }));
      this.automaticClean();
  }

  error(message: string, alertId?: string) {
      this.alert(new AlertEvent({ message, type: AlertType.Error, alertId }));
      this.automaticClean();
  }

  info(message: string, alertId?: string) {
      this.alert(new AlertEvent({ message, type: AlertType.Info, alertId }));
      this.automaticClean();
  }

  warn(message: string, alertId?: string) {
      this.alert(new AlertEvent({ message, type: AlertType.Warning, alertId }));
      this.automaticClean();
  }
  
  alert(alert: AlertEvent) {
      this.keepAfterRouteChange = alert.keepAfterRouteChange;
      this.subject.next(alert);
  }

  automaticClean() {
      setTimeout(() =>this.clear() ,5000);
  }

  clear(alertId?: string) {
      this.subject.next(new AlertEvent({ alertId }));
  }
}
