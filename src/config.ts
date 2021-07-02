type EnvConfig = {
  port: number
}
type Env = 'development' | 'production'

const allEnvConfig: Record<Env, EnvConfig> = {
  development: {
    port: 8000
  },
  production: {
    port: 8000
  }
}

export const config = () => allEnvConfig[process.env.NODE_ENV as Env]
