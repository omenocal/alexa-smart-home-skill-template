declare namespace Alexa.PowerLevelControllerResponse {
  export interface PowerLevelControllerResponse {
    context: Context
    event: Event
  }
  export interface Context {
    properties: PropertiesItem[]
  }
  export interface PropertiesItem {
    namespace: string
    name: string
    value: number | Value
    timeOfSample: string
    uncertaintyInMilliseconds: number
  }
  export interface Value {
    value: string
  }
  export interface Event {
    header: Header
    endpoint: Endpoint
    payload: Payload
  }
  export interface Header {
    namespace: string
    name: string
    payloadVersion: string
    messageId: string
    correlationToken: string
  }
  export interface Endpoint {
    scope: Scope
    endpointId: string
  }
  export interface Scope {
    type: string
    token: string
  }
  export interface Payload {}
}