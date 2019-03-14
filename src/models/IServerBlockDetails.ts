interface IServerBlockDetails {
    hasSsl: boolean
    forceSsl: boolean
    publicDomain: string
    localDomain: string
    nginxConfigTemplate: string
    containerHttpPort: number
    httpBasicAuth?: string
    httpBasicAuthPath?: string

    crtPath?: string
    keyPath?: string
    customErrorPagesDirectory: string
    staticWebRoot: string
}
