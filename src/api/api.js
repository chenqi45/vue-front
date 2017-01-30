import superagent from 'superagent';

const methods = [
  'get',
  'head',
  'post',
  'put',
  'del'
];

class _Api {
  constructor(opts) {
    this.opts = opts || {}

    methods.forEach(method =>
      this[method] = (path, { params, data, callback } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](path)

        if (this.opts.headers) {
          request.set(this.opts.headers);
        }

        if (params) {
          request.query(params);
        }

        if (data) {
          const paramsBody = {}
          paramsBody.random = Math.random();
          paramsBody.timestamp = new Date();
          paramsBody.body = data;
          
          request.send(paramsBody);
        }

        if(callback) {
          request.end(function(err, res){
            if(res.ok)
              callback()
          })
        } else {
          request.end((err, { body } = {}) => err ? reject(body || err) : resolve(body))
        }

      })
    )
  }
}

const Api = _Api

export default Api
