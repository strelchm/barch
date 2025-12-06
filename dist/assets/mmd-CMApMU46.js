function t(e){switch(e){case"index":return`---\r
title: "System Landscape"\r
---\r
graph TB\r
  Customer[fa:fa-user Customer]\r
  Boutique[Online Boutique System]\r
  Payment-gateway[Payment Gateway]\r
  Email-provider[Email Provider]\r
  Customer -. "uses" .-> Boutique\r
  Boutique -. "processes payments" .-> Payment-gateway\r
  Boutique -. "delegates email sending" .-> Email-provider\r
`;case"customer":return`---\r
title: "Customer"\r
---\r
graph TB\r
  Customer[fa:fa-user Customer]\r
  subgraph Boutique["Online Boutique System"]\r
    Boutique.Frontend[Frontend]\r
  end\r
  Customer -. "browses and buys products" .-> Boutique.Frontend\r
`;case"boutique":return`---\r
title: "Online Boutique System"\r
---\r
graph TB\r
  Customer[fa:fa-user Customer]\r
  subgraph Boutique["Online Boutique System"]\r
    Boutique.Frontend[Frontend]\r
    Boutique.Checkout[Checkout Service]\r
    Boutique.Cart[Cart Service]\r
    Boutique.Email[Email Service]\r
    Boutique.Payments[Payment Service]\r
    Boutique.Shipping[Shipping Service]\r
    Boutique.ActionLog[Action Log Service]\r
    Boutique.Catalogue[Product Catalogue Service]\r
    Boutique.Db([Boutique Database])\r
  end\r
  Customer -. "browses and buys products" .-> Boutique.Frontend\r
  Boutique.Checkout -. "sends order confirmation" .-> Boutique.Email\r
  Boutique.Checkout -. "sends activity data" .-> Boutique.ActionLog\r
  Boutique.Checkout -. "sends payment request" .-> Boutique.Payments\r
  Boutique.Checkout -. "sends checkout data" .-> Boutique.Shipping\r
  Boutique.Frontend -. "sends checkout information" .-> Boutique.Checkout\r
  Boutique.Cart -. "sends activity data" .-> Boutique.ActionLog\r
  Boutique.Cart -. "gets product data" .-> Boutique.Catalogue\r
  Boutique.Frontend -. "gets cart data" .-> Boutique.Cart\r
  Boutique.Payments -. "updates order status" .-> Boutique.Db\r
  Boutique.Frontend -. "gets exchange rates" .-> Boutique.Payments\r
  Boutique.Frontend -. "gets shipping cost" .-> Boutique.Shipping\r
  Boutique.Catalogue -. "gets products" .-> Boutique.Db\r
  Boutique.Frontend -. "gets product data" .-> Boutique.Catalogue\r
`;case"frontend":return`---\r
title: "Frontend"\r
---\r
graph TB\r
  Customer[fa:fa-user Customer]\r
  subgraph Boutique["Online Boutique System"]\r
    subgraph Boutique.Frontend["Frontend"]\r
      Boutique.Frontend.Catalogue[Product Catalogue]\r
      Boutique.Frontend.Checkout[Checkout]\r
      Boutique.Frontend.Profile[User Profile]\r
    end\r
    Boutique.Catalogue[Product Catalogue Service]\r
    Boutique.Checkout[Checkout Service]\r
    Boutique.Cart[Cart Service]\r
    Boutique.Payments[Payment Service]\r
    Boutique.Shipping[Shipping Service]\r
  end\r
  Customer -. "browses products" .-> Boutique.Frontend.Catalogue\r
  Customer -. "buys products" .-> Boutique.Frontend.Checkout\r
  Customer -. "manages account and reviews history" .-> Boutique.Frontend.Profile\r
  Boutique.Frontend.Catalogue -. "puts items in cart" .-> Boutique.Cart\r
  Boutique.Frontend.Catalogue -. "gets product data" .-> Boutique.Catalogue\r
  Boutique.Frontend.Checkout -. "sends checkout information" .-> Boutique.Checkout\r
  Boutique.Frontend.Checkout -. "gets cart data" .-> Boutique.Cart\r
  Boutique.Frontend.Checkout -. "gets exchange rates" .-> Boutique.Payments\r
  Boutique.Frontend.Checkout -. "gets shipping cost" .-> Boutique.Shipping\r
`;case"checkout":return`---\r
title: "Checkout Service"\r
---\r
graph TB\r
  Customer[fa:fa-user Customer]\r
  subgraph Boutique["Online Boutique System"]\r
    Boutique.Frontend[Frontend]\r
    Boutique.Checkout[Checkout Service]\r
    Boutique.Email[Email Service]\r
    Boutique.ActionLog[Action Log Service]\r
    Boutique.Payments[Payment Service]\r
    Boutique.Shipping[Shipping Service]\r
  end\r
  Email-provider[Email Provider]\r
  Payment-gateway[Payment Gateway]\r
  Boutique.Frontend -. "sends checkout information" .-> Boutique.Checkout\r
  Boutique.Checkout -. "sends order confirmation" .-> Boutique.Email\r
  Boutique.Checkout -. "sends activity data" .-> Boutique.ActionLog\r
  Boutique.Checkout -. "sends payment request" .-> Boutique.Payments\r
  Boutique.Checkout -. "sends checkout data" .-> Boutique.Shipping\r
  Customer -. "browses and buys products" .-> Boutique.Frontend\r
  Boutique.Payments -. "processes payments" .-> Payment-gateway\r
  Boutique.Email -. "delegates email sending" .-> Email-provider\r
`;case"cart":return`---\r
title: "Cart Service"\r
---\r
graph TB\r
  Customer[fa:fa-user Customer]\r
  subgraph Boutique["Online Boutique System"]\r
    subgraph Boutique.Frontend["Frontend"]\r
      Boutique.Frontend.Catalogue[Product Catalogue]\r
      Boutique.Frontend.Checkout[Checkout]\r
    end\r
    subgraph Boutique.Cart["Cart Service"]\r
      Boutique.Cart.Api[Cart API]\r
      Boutique.Cart.Cache[Cart Cache]\r
    end\r
    Boutique.ActionLog[Action Log Service]\r
    Boutique.Catalogue[Product Catalogue Service]\r
  end\r
  Boutique.Cart.Api -. "gets cart data" .-> Boutique.Cart.Cache\r
  Boutique.Cart.Api -. "sends activity data" .-> Boutique.ActionLog\r
  Boutique.Cart.Api -. "gets product data" .-> Boutique.Catalogue\r
  Boutique.Frontend.Catalogue -. "puts items in cart" .-> Boutique.Cart.Api\r
  Boutique.Frontend.Checkout -. "gets cart data" .-> Boutique.Cart.Api\r
  Customer -. "browses products" .-> Boutique.Frontend.Catalogue\r
  Customer -. "buys products" .-> Boutique.Frontend.Checkout\r
`;case"payments":return`---\r
title: "Payment Service"\r
---\r
graph TB\r
  Customer[fa:fa-user Customer]\r
  subgraph Boutique["Online Boutique System"]\r
    Boutique.Frontend[Frontend]\r
    Boutique.Checkout[Checkout Service]\r
    subgraph Boutique.Payments["Payment Service"]\r
      Boutique.Payments.Processor[Payment Processor]\r
      Boutique.Payments.Currency[Currency Service]\r
    end\r
    subgraph Boutique.Db["Boutique Database"]\r
      Boutique.Db.Orders([Orders])\r
    end\r
  end\r
  Payment-gateway[Payment Gateway]\r
  Boutique.Checkout -. "sends payment request" .-> Boutique.Payments.Processor\r
  Boutique.Frontend -. "gets exchange rates" .-> Boutique.Payments.Currency\r
  Boutique.Payments.Processor -. "processes payments" .-> Payment-gateway\r
  Customer -. "browses and buys products" .-> Boutique.Frontend\r
  Boutique.Payments.Processor -. "updates order status" .-> Boutique.Db.Orders\r
  Boutique.Frontend -. "sends checkout information" .-> Boutique.Checkout\r
`;case"actionLog":return`---\r
title: "Action Log Service"\r
---\r
graph TB\r
  BoutiqueCheckout[Checkout Service]\r
  BoutiqueCart[Cart Service]\r
  BoutiqueFrontend[Frontend]\r
  BoutiqueActionLog[Action Log Service]\r
  BoutiqueCheckout -. "sends activity data" .-> BoutiqueActionLog\r
  BoutiqueCart -. "sends activity data" .-> BoutiqueActionLog\r
  BoutiqueFrontend -. "sends user activity data" .-> BoutiqueActionLog\r
`;case"shipping":return`---\r
title: "Shipping Service"\r
---\r
graph TB\r
  subgraph Boutique["Online Boutique System"]\r
    Boutique.Checkout[Checkout Service]\r
    Boutique.Frontend[Frontend]\r
    Boutique.Shipping[Shipping Service]\r
  end\r
  Boutique.Checkout -. "sends checkout data" .-> Boutique.Shipping\r
  Boutique.Frontend -. "gets shipping cost" .-> Boutique.Shipping\r
`;case"database":return`---\r
title: "Boutique Database"\r
---\r
graph TB\r
  subgraph Boutique["Online Boutique System"]\r
    Boutique.Payments[Payment Service]\r
    Boutique.Catalogue[Product Catalogue Service]\r
    subgraph Boutique.Db["Boutique Database"]\r
      Boutique.Db.Orders([Orders])\r
      Boutique.Db.Products([Products])\r
      Boutique.Db.Users([Users])\r
    end\r
  end\r
  Boutique.Payments -. "updates order status" .-> Boutique.Db.Orders\r
  Boutique.Catalogue -. "gets products" .-> Boutique.Db.Products\r
  Boutique.Db.Orders -. "many-to-many" .-> Boutique.Db.Products\r
  Boutique.Db.Orders -. "many-to-many" .-> Boutique.Db.Users\r
`;case"catalogue":return`---\r
title: "Product Catalogue Service"\r
---\r
graph TB\r
  subgraph Boutique["Online Boutique System"]\r
    Boutique.Cart[Cart Service]\r
    Boutique.Frontend[Frontend]\r
    Boutique.Catalogue[Product Catalogue Service]\r
    subgraph Boutique.Db["Boutique Database"]\r
      Boutique.Db.Products([Products])\r
    end\r
  end\r
  Boutique.Cart -. "gets product data" .-> Boutique.Catalogue\r
  Boutique.Frontend -. "gets product data" .-> Boutique.Catalogue\r
  Boutique.Catalogue -. "gets products" .-> Boutique.Db.Products\r
`;case"development-env":return`---\r
title: "Deployments / Environment: Development"\r
---\r
graph TB\r
  DevDeveloper[fa:fa-user Developer]\r
  subgraph DevDevmachine["Developer Machine"]\r
    DevDevmachine.Frontend[Frontend]\r
    DevDevmachine.Cart[Cart Service]\r
    DevDevmachine.Catalogue[Product Catalogue Service]\r
  end\r
  subgraph DevContainers["Shared Containers"]\r
    DevContainers.Checkout[Mocked Checkout Service]\r
    DevContainers.Payments[Mocked Payments Service]\r
    DevContainers.Shipping[Mocked Shipping Service]\r
    DevContainers.Db([Development Database])\r
  end\r
  DevDevmachine.Frontend -. "gets product data" .-> DevDevmachine.Catalogue\r
  DevDevmachine.Frontend -. "[...]" .-> DevDevmachine.Cart\r
  DevDevmachine.Cart -. "gets product data" .-> DevDevmachine.Catalogue\r
  DevContainers.Checkout -. "sends payment request" .-> DevContainers.Payments\r
  DevContainers.Checkout -. "sends checkout data" .-> DevContainers.Shipping\r
  DevContainers.Payments -. "updates order status" .-> DevContainers.Db\r
  DevDeveloper -. "[...]" .-> DevDevmachine.Frontend\r
  DevDevmachine.Frontend -. "sends checkout information" .-> DevContainers.Checkout\r
  DevDevmachine.Frontend -. "gets exchange rates" .-> DevContainers.Payments\r
  DevDevmachine.Frontend -. "gets shipping cost" .-> DevContainers.Shipping\r
  DevDevmachine.Catalogue -. "gets products" .-> DevContainers.Db\r
`;case"production-env":return`---\r
title: "Deployments / Environment: Production"\r
---\r
graph TB\r
  subgraph Internet["Internet"]\r
    Internet.Customer[fa:fa-user Customer]\r
  end\r
  subgraph Prod["Production"]\r
    subgraph Prod.Vm1["Web Server 1"]\r
      Prod.Vm1.Frontend[Frontend]\r
      Prod.Vm1.Cart[Cart Service]\r
      Prod.Vm1.Catalogue[Product Catalogue Service]\r
    end\r
    subgraph Prod.Vm2["Web Server 2"]\r
      Prod.Vm2.Frontend[Frontend]\r
      Prod.Vm2.Cart[Cart Service]\r
      Prod.Vm2.Catalogue[Product Catalogue Service]\r
    end\r
    subgraph Prod.Appvms["Application Servers (x2)"]\r
      Prod.Appvms.Checkout[Checkout Service]\r
      Prod.Appvms.Payments[Payment Service]\r
      Prod.Appvms.Shipping[Shipping Service]\r
    end\r
    subgraph Prod.Dbvm1["Database Server 1"]\r
      Prod.Dbvm1.Db([Boutique Database])\r
    end\r
    subgraph Prod.Dbvm2["Database Server 2"]\r
      Prod.Dbvm2.Db([Boutique Database])\r
    end\r
  end\r
  Prod.Vm1.Frontend -. "[...]" .-> Prod.Vm1.Cart\r
  Prod.Vm1.Cart -. "gets product data" .-> Prod.Vm1.Catalogue\r
  Prod.Vm2.Frontend -. "[...]" .-> Prod.Vm2.Cart\r
  Prod.Vm2.Cart -. "gets product data" .-> Prod.Vm2.Catalogue\r
  Prod.Appvms.Checkout -. "sends payment request" .-> Prod.Appvms.Payments\r
  Prod.Appvms.Checkout -. "sends checkout data" .-> Prod.Appvms.Shipping\r
  Prod.Vm1.Frontend -. "sends checkout information" .-> Prod.Appvms.Checkout\r
  Prod.Vm1.Frontend -. "gets shipping cost" .-> Prod.Appvms.Shipping\r
  Prod.Vm1.Catalogue -. "gets products" .-> Prod.Dbvm1.Db\r
  Prod.Vm2.Frontend -. "sends checkout information" .-> Prod.Appvms.Checkout\r
  Prod.Vm2.Catalogue -. "gets products" .-> Prod.Dbvm1.Db\r
  Prod.Appvms.Payments -. "updates order status" .-> Prod.Dbvm1.Db\r
  Prod.Dbvm1.Db -. "replicates" .-> Prod.Dbvm2.Db\r
  Internet.Customer -. "[...]" .-> Prod.Vm1.Frontend\r
  Internet.Customer -. "[...]" .-> Prod.Vm2.Frontend\r
`;case"place-order":return`---\r
title: "Use Cases / Usecase 01: Placing an Order"\r
---\r
graph LR\r
  Customer[fa:fa-user Customer]\r
  subgraph Boutique["Online Boutique System"]\r
    Boutique.Frontend[Frontend]\r
    Boutique.Cart[Cart Service]\r
    Boutique.Checkout[Checkout Service]\r
    Boutique.Db([Boutique Database])\r
    Boutique.Shipping[Shipping Service]\r
    Boutique.Email[Email Service]\r
    Boutique.Payments[Payment Service]\r
  end\r
  Payment-gateway[Payment Gateway]\r
  Customer -. "places products in cart" .-> Boutique.Frontend\r
  Boutique.Frontend -. "creates or updates cart" .-> Boutique.Cart\r
  Customer -. "enters shipping information" .-> Boutique.Frontend\r
  Boutique.Frontend -. "creates or updates cart" .-> Boutique.Cart\r
  Customer -. "enters payment details" .-> Boutique.Frontend\r
  Boutique.Frontend -. "initiates payment" .-> Boutique.Checkout\r
  Boutique.Checkout -. "writes new order" .-> Boutique.Db\r
  Boutique.Checkout -. "reserves inventory" .-> Boutique.Shipping\r
  Boutique.Shipping -. "confirms inventory reservation" .-> Boutique.Checkout\r
  Boutique.Checkout -. "marks cart as purchased" .-> Boutique.Cart\r
  Boutique.Checkout -. "sends order confirmation" .-> Boutique.Email\r
  Boutique.Checkout -. "creates payment" .-> Boutique.Payments\r
  Boutique.Payments -. "processes payment" .-> Payment-gateway\r
  Payment-gateway -. "processes payment with customer" .-> Payment-gateway\r
  Payment-gateway -. "confirms payment with webnook" .-> Boutique.Payments\r
  Boutique.Payments -.-> Boutique.Checkout\r
  Boutique.Checkout -. "requests fulfillment" .-> Boutique.Shipping\r
  Boutique.Checkout -. "sends confirmation" .-> Boutique.Email\r
  Boutique.Checkout -. "updates order status" .-> Boutique.Db\r
`;case"order-fulfillment":return`---\r
title: "Use Cases / Usecase 02: Order Fulfillment"\r
---\r
graph TB\r
  subgraph Boutique["Online Boutique System"]\r
    Boutique.Payments[Payment Service]\r
    Boutique.Checkout[Checkout Service]\r
    Boutique.Shipping[Shipping Service]\r
    Boutique.Email[Email Service]\r
    Boutique.Db([Boutique Database])\r
  end\r
  Customer[fa:fa-user Customer]\r
  Payment-gateway[Payment Gateway]\r
  Customer -. "places order" .-> Boutique\r
  Boutique -. "initiates payment" .-> Payment-gateway\r
  Payment-gateway -. "confirms payment with webnook" .-> Boutique.Payments\r
  Boutique.Payments -. "confirms pending payment" .-> Boutique.Checkout\r
  Boutique.Checkout -. "requests fulfillment" .-> Boutique.Shipping\r
  Boutique.Checkout -. "sends confirmation" .-> Boutique.Email\r
  Boutique.Checkout -. "updates order status" .-> Boutique.Db\r
  Boutique.Shipping -. "updates inventory" .-> Boutique.Db\r
  Boutique.Shipping -. "sends shipping confirmation" .-> Boutique.Email\r
`;default:throw new Error("Unknown viewId: "+e)}}export{t as mmdSource};
