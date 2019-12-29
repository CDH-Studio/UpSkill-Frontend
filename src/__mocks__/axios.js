import { tsConstructorType } from "@babel/types";

let getCalls = [];

const getFunc = jest.fn(url => {
  getCalls.push(url);
  return Promise.resolve(profileMockData);
});

class GetRoute {
  constructor(url, func) {
    this.func = func;
    this.url = url;
    this.callCount = 0;
  }

  async handleGet(url) {
    this.callCount++;
    return await this.func(url);
  }

  getCallCount() {
    return this.callCount;
  }
}

class AxiosMocker {
  constructor() {
    this.getRoutes = {};
    this.unknownRequests = 0;
  }

  _addGetRoute(url, func) {
    this.getRoutes = { ...this.getRoutes, [url]: new GetRoute(url, func) };
  }

  async get(url) {
    const route = this.getRoutes[url];
    if (route === undefined) {
      console.log(" UNDEFINED ROUTE *****************", url);
      return {};
    } else {
      console.log("REDINFED ROUTE", url);
      return route.handleGet(url);
    }
  }

  _getGetRoutes() {
    return this.getRoutes;
  }
}

const axiosMocker = new AxiosMocker();

export default axiosMocker;
