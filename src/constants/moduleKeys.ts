const MODULEKEYS = {
  home: { key: "home", name: "Home" },
  dashboad: { key: "dashboard", name: "Dashboard" },
  sales: { key: "sales", name: "Transactions" },
  product: {
    key: "product",
    name: "Products",
    block_keys: {
      product_information: "product_information",
      product_images: "product_images",
      product_attributes: "product_attributes",
      product_uoms: "product_uoms",
      product_pricing: "product_pricing",
      product_inventory: "product_inventory",
    },
  },
  customer: {
    key: "customers",
    name: "Customers",
    block_keys: {
      customer_addresses: "customer_addresses",
      customer_information: "customer_information",
    },
  },
  purchase: { key: "purchases", name: "Purchase Orders" },
  vendor: {
    key: "vendors",
    name: "Vendors",
    block_keys: {
      vendor_infomation: "vendor_infomation",
      vendor_addresses: "vendor_addresses",
    },
  },
  category: {
    key: "category",
    name: "Categories",
    block_keys: {
      category_information: "category_information",
      category_images: "category_images",
      category_attributes: "category_attributes",
      category_uoms: "category_uoms",
    },
  },
  variants: { key: "variants", name: "Variants" },
  currency: { key: "currencies", name: "Currencies" },
  company: {
    key: "company",
    name: "Company",
    block_keys: {
      company_information: "company_information",
      address_information: "address_information",
      company_images: "company_images",
    },
  },
  stores: {
    key: "stores",
    name: "Stores",
    block_keys: {
      store_information: "store_information",
      store_shipping_address: "store_shipping_address",
      store_invoice_address: "store_invoices_address",
      store_billing_address: "store_billing_address",
    },
  },
  users: {
    key: "users",
    name: "Users",
    block_keys: {
      user_information: "user_information",
      user_photo: "user_photo",
      user_settings: "user_settings",
    },
  },
  role_templates: { key: "role_templates", name: "Roles" },
  roles: { key: "roles", name: "Hierarchy" },
  uoms: { key: "uom", name: "Units" },
  addons: { key: "addons", name: "Addons" },
  addon_groups: { key: "addon_groups", name: "Addon Groups" },
  reports: { key: "reports", name: "Reports" },
  currency_bills: { key: "currency_bills", name: "Currency Bills" },
  quickbook_online: { key: "quickbook_online", name: "QuickBook Online" },
  quickbook_desktop: { key: "quickbook_desktop", name: "QuickBook Desktop" },
  printer: { key: "printer", name: "Receipts" },
  label_setting: { key: "label_setting", name: "Labels" },
  price_fields: { key: "price_fields", name: "Price Fields" },
  expinetPayment: {
    key: "expinet_payment",
    name: "Expinet",
    block_keys: {
      expinet_processor_info_setup: "expinet_processor_info",
      expinet_terminals: "expinet_terminals_info",
    },
  },
  tsysPayment: {
    key: "tsys_payment",
    name: "TSYS",
    block_keys: {
      tsys_processor_info_setup: "tsys_processor_info_setup",
      tsys_terminals_info: "tsys_terminals_info",
    },
  },

  notification: { key: "notifications", name: "Notifications" },
  storeTransfer: { key: "store_transfer", name: "Store Transfers" },
  smsSettings: {
    key: "sms_settings",
    name: "SMS",
  },
  emailSettings: {
    key: "email_settings",
    name: "Email",
  },
  paymentOption: { key: "cash_option", name: "Payment Options" },
  discounts: { key: "discounts", name: "Discounts" },
  serviceTicketsType: {
    key: "serviceTicketsType",
    name: "service Tickets Type",
  },
  serviceTickets: {
    key: "serviceTickets",
    name: "Service Tickets",
  },
  accountStatus: {
    key: "accountStatus",
    name: "Account Status",
  },
  systemSettings: {
    key: "system_settings",
    name: "System Updates",
  },
  emailTemplates: {
    key: "email_settings",
    name: "Email Templates",
  },
  businessHours: {
    key: "business_hours",
    name: "Business Hours",
  },
  branches: {
    key: "branches",
    name: "Branches",
  },
  salesAgent: {
    key: "salesAgent",
    name: "Sales Agents",
  },
  companySettings: { key: "app_settings", name: "Company App Settings" },
  storeSettings: { key: "app_settings", name: "Store App Settings" },
  appSettings: { key: "app_settings", name: "App Settings" },
  reconciliation: { key: "reconciliation", name: "Reconciliations" },
  storeHours: {
    key: "store_hours",
    name: "Store Hours",
  },
  alerts: { key: "alerts", name: "Alerts" },
  calendar: {
    key: "calendar",
    name: "Calendar",
  },
  loyaltyProgram: {
    key: "loyalty_program",
    name: "Loyalty Program",
  },
  verifone_payment: {
    key: "verifone_payment",
    name: "verifone payment",
  },
  packages: { key: "packages", name: "Packages" },
  help_desk: { key: "help_desk", name: "Help Desk" },
  lms: { key: "lms", name: "LMS" },
  crm_reseller: { key: "crm_reseller", name: "CRM Reseller" },
  crm_lms_category: { key: "crm_lms_category", name: "CRM LMS Category" },
  crm_lms_content: { key: "crm_lms_content", name: "CRM LMS Content" },
  settings: { key: "settings", name: "Settings" },
  apps: { key: "apps", name: "Apps" },
  documents_library: { key: "documents_library", name: "Document Library" },
};
export default MODULEKEYS;
