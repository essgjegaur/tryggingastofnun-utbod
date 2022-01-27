import {NestFactory} from '@nestjs/core'
import {AppModule} from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  let port = 3001
  let prefix = '/tr-api'
  app.setGlobalPrefix(prefix)
  await app.listen(port)
  console.log('service is running. http://localhost:' + port + prefix)
}
bootstrap()
