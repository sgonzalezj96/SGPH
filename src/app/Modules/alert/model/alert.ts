export class AlertEvent {
    type: AlertType;
    message: string;
    title:string;
    alertId: string;
    keepAfterRouteChange: boolean;

    constructor(init?:Partial<AlertEvent>) {
        Object.assign(this, init);
    }
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}