import app from './app';
import dbInit from './db/init'

dbInit()

app.listen(5000);