const UrlPattern = require('url-pattern');

class CommunicationService {
  constructor() {
    this.router = null;
    this.latestMessages = {};
  }

  setRouter(router) {
    this.router = router;
    return this;
  }

  async processHTTPRequest(req, res, action, middlewares) {
    this.handleMiddlewares(middlewares, req, 0, async () => {
      let data = {};

      try {

        if (req.files) {
          const image = {
            image: req.files
          }
          data = Object.assign(req.body || {}, req.params || {}, req.query || {}, image);
        } else {
          data = Object.assign(req.body || {}, req.params || {}, req.query || {});
        }

        const result = await action(data, this, req);

        res.type('json');
        if (result) {
          res.send(result);
        }
      } catch (e) {
        res.statusCode = e.status || 500;
        res.send({
          error: e.message
        });
      }
    });
  }

  get(route, cb, middlewares) {
    this.router.get(route, (req, res) => {
      this.processHTTPRequest(req, res, cb, middlewares);
    });
  }

  post(route, cb, middlewares) {
    this.router.post(route, (req, res) => {
      this.processHTTPRequest(req, res, cb, middlewares);
    });
  }

  put(route, cb, middlewares) {
    this.router.put(route, (req, res) => {
      this.processHTTPRequest(req, res, cb, middlewares);
    });
  }

  delete(route, cb, middlewares) {
    this.router.delete(route, (req, res) => {
      this.processHTTPRequest(req, res, cb, middlewares);
    });
  }

  all(route, cb, middlewares) {
    this.router.all(route, (req, res) => {
      this.processHTTPRequest(req, res, cb, middlewares);
    });
  }

  handleMiddlewares(middlewares = [], req, position, finalNext) {
    try {
      if (middlewares.length > 0) {
        middlewares[position](req, () => {
          if (middlewares[position + 1]) {
            return this.handleMiddlewares(middlewares, req, position + 1, finalNext);
          } else {
            return finalNext();
          }
        });
      } else {
        return finalNext();
      }
    } catch (err) {
      throw err;
    }
  }
}

module.exports = CommunicationService;
