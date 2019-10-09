import React from "react";
import { createBrowserHistory } from "history";
import { IntlProvider } from "react-intl";
import { mount } from "enzyme";
import { Router } from "react-router-dom";

import messages_en from "../src/i18n/en_CA.json";

export default function wrapThenMount(node, useIntl = true, useRouter = true) {
  if (useRouter) {
    let history = createBrowserHistory();
    node = <Router history={history}>{node}</Router>;
  }

  if (useIntl) {
    return mount(node, {
      wrappingComponent: IntlProvider,
      wrappingComponentProps: {
        locale: "en",
        messages: messages_en
      }
    });
  }
  return mount(node);
}
