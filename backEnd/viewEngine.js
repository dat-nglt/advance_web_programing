import path from 'path';

const viewEngine = (app) => {
  app.set('view engine', 'ejs')
  app.set('views', './views')}

export default viewEngine
