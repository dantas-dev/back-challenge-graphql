import 'dotenv/config'
import './config/module-alias'
import { Connection } from '@/drivers/db/mysql/helpers/connection'
import 'reflect-metadata'

Connection.getInstance().connect()
  .then(async () => {
    const { app } = await import('@/drivers/api/config/app')
    const port = process.env.PORT || 5050
    console.log(process.env.MYSQL_HOSTNAME)
    app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
  })
  .catch(console.error)
