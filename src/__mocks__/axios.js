class AxiosMocker {
  constructor() {
    this.getRoutes = {};
    this.unknownRequests = 0;
    this.getCalls = 0;

    this.testFunc = jest.fn();
  }

  _addGetRoute(url, func) {
    this.getRoutes = { ...this.getRoutes, [url]: func };
  }

  async get(url) {
    this.getCalls++;
    const getFunc = this.getRoutes[url];
    if (getFunc === undefined) {
      console.log(" UNDEFINED ROUTE *****************", url);
      return {};
    } else {
      return getFunc(url);
    }
  }

  _getGetCalls() {
    return this.getCalls;
  }

  _getGetRoutes() {
    return this.getRoutes;
  }
}

const axiosMocker = new AxiosMocker();

export default axiosMocker;
