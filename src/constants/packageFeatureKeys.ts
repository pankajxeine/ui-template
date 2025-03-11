const PACKAGEFEATUREKEYS = {
  home: { key: "home", name: "Home" },
  dashboad: { key: "dashboard", name: "Dashboard" },
  sales: {
    key: "sales",
    name: "Transactions",
    block_keys: {
      sales_notes: {
        name: "Notes",
        key: "sales_notes",
      },
    },
  },

  notification_configurations: {
    key: "notification_configurations",
    name: "Notification Configurations",
    block_keys: {
      email_settings: {
        name: "Email Settings",
        key: "email_settings",
      },
      sms_settings: {
        name: "SMS Settings",
        key: "sms_settings",
      },
    },
  },
  category: {
    key: "category",
    name: "Categories",
    block_keys: {
      category_information: {
        key: "category_information",
        field_keys: {
          name: "name",
          status: "status",
          description: "description",
        },
      },
      category_images: {
        key: "category_images",
        field_keys: {
          image: "image",
        },
      },
      category_attributes: {
        key: "category_attributes",
        field_keys: {
          variants: "variants",
        },
      },
      category_uoms: {
        key: "category_uoms",
        field_keys: {
          uoms: "uoms",
        },
      },
      category_addons: {
        key: "category_addons",
        field_keys: {
          addons: "addons",
        },
      },
    },
  },

  product: {
    key: "product",
    name: "Products",
    block_keys: {
      product_information: {
        key: "product_information",
        field_keys: {
          name: "name",
          sku: "sku",
          barcode: "barcode",
          description: "description",
          receipt_description: "receipt_description",
          category: "category",
          tax_status: "tax_status",
          department: "department",
          type: "type",
          product_status: "product_status",
          product_number: "product_number",
          featured: "featured",
        },
      },
      product_images: {
        key: "product_images",
        field_keys: {
          product_images: "product_images",
        },
      },
      product_attributes: {
        key: "product_attributes",
        field_keys: {
          variant_image: "variant_image",
          variant_name: "variant_name",
          variant_status: "variant_status",
          stock_keeping_unit: "stock_keeping_unit",
          variant_barcode: "variant_barcode",
        },
      },
      product_uoms: {
        key: "product_uoms",
        field_keys: {
          product_uoms: "product_uoms",
          uom_cost: "uom_cost",
          qty_conversion: "qty_conversion",
          price: "price",
          list_price: "list_price",
          is_base: "is_base",
        },
      },
      product_pricing: {
        key: "product_pricing",
        field_keys: {
          retail_sell_price: "retail_sell_price",
          pfn: "pfn",
          list_price: "list_price",
          cost_price: "cost_price",
        },
      },
      product_inventory: {
        key: "product_inventory",
        field_keys: {
          duration: "duration",
          qoh: "qoh",
          allocated_qty: "allocated_qty",
          total_available: "total_available",
          qty_on_order: "qty_on_order",
          min_order_point: "min_order_point",
          max_order_point: "max_order_point",
          track_inventory: "track_inventory",
        },
      },
    },
  },
  customers: {
    key: "customers",
    name: "Customers",
    block_keys: {
      customer_information: {
        key: "customer_information",
        field_keys: {
          customer_number: "customer_number",
          status: "status",
          name: "name",
          email: "email",
          phone1: "phone1",
          phone2: "phone2",
          default_price_field: "default_price_field",
          birthday: "birthday",
          tax_status: "tax_status",
          sales_group: "sales_group",
          tax_id_number: "tax_id_number",
          rating: "rating",
          loyalty_points: "loyalty_points",
        },
      },
      customer_image: {
        key: "customer_image",
        field_keys: {
          customer_image: "customer_image",
        },
      },
      customer_addresses: {
        key: "customer_addresses",
        field_keys: {
          type: "type",
          primary_address: "primary_address",
          status: "status",
          address1: "address1",
          address2: "address2",
          country: "country",
          state: "state",
          city: "city",
          postal_code: "postal_code",
          notes: "notes",
        },
      },
      customer_statistics: {
        key: "customer_statistics",
        field_keys: {
          last_sale_date: "last_sale_date",
          average_receipt: "average_receipt",
          total_sales: "total_sales",
          total_returns: "total_returns",
          total_discounts: "total_discounts",
        },
      },
    },
  },

  purchase: { key: "purchases", name: "Purchase Orders" },
  purchases: {
    key: "purchases",
    name: "Purchase Orders",
    block_keys: {
      vendor_details: {
        key: "vendor_details",
        field_keys: {
          vendor: "vendor",
          from_address: "from_address",
        },
      },
      po_details: {
        key: "po_details",
        field_keys: {
          status: "status",
          po_number: "po_number",
          po_date: "po_date",
          purchase_type: "purchase_type",
          reference: "reference",
          type: "type",
        },
      },
      store_details: {
        key: "store_details",
        field_keys: {
          store_name: "store_name",
          store_address: "store_address",
          delivery_date: "delivery_date",
        },
      },
      products: {
        key: "products",
        field_keys: {
          product_name: "product_name",
          variant: "variant",
          notes: "notes",
          quantity: "quantity",
          cost: "cost",
          total: "total",
          receive: "receive",
          cancelled: "cancelled",
          product_image: "product_image",
          back_order: "back_order",
        },
      },
      notes: {
        key: "notes",
        field_keys: {
          internal_notes: "internal_notes",
          external_notes: "external_notes",
        },
      },
      grand_total: {
        key: "grand_total",
        field_keys: {
          total_qty: "total_qty",
          grand_total: "grand_total",
        },
      },
      receiving: {
        key: "receiving",
        field_keys: {
          receiving_no: "receiving_no",
          received_date: "received_date",
          received_total: "received_total",
          product_no: "product_no",
          product_name: "product_name",
          received_qty: "received_qty",
          cost: "cost",
          total: "total",
        },
      },
    },
  },
  vendor: {
    key: "vendors",
    name: "Vendors",
    block_keys: {
      vendor_infomation: {
        key: "vendor_infomation",
      },
      vendor_addresses: {
        key: "vendor_addresses",
      },
    },
  },

  vendors: {
    key: "vendors",
    name: "Vendors",
    block_keys: {
      vendor_information: {
        key: "vendor_information",
        field_keys: {
          name: "name",
          phone: "phone",
          email: "email",
          website: "website",
          status: "status",
        },
      },
      vendor_addresses: {
        key: "vendor_addresses",
        field_keys: {
          address1: "address1",
          address2: "address2",
          country: "country",
          state: "state",
          city: "city",
          postal_code: "postal_code",
          status: "status",
          is_primary_address: "is_primary_address",
        },
      },
    },
  },
  variants: { key: "variants", name: "Variants" },
  void_payment_for_transactions: {
    key: "void_payment_for_transactions",
    name: "Void Payment for Transactions",
  },
  currency: { key: "currencies", name: "Currencies" },
  company: {
    key: "company",
    name: "Company",
    block_keys: {
      company_information: {
        key: "company_information",
        field_keys: {
          time_zone: "time_zone",
          tagline: "tagline",
          date_format: "date_format",
          title_tag: "title_tag",
          website: "website",
          email: "email",
          name: "name",
        },
      },
      address_information: {
        key: "address_information",
        field_keys: {
          city: "city",
          postal_code: "postal_code",
          address_1: "address_1",
          address_2: "address_2",
          country: "country",
          state: "state",
          fax: "fax",
          phone: "phone",
          currency: "currency",
        },
      },
      // company_images: "company_images"
      company_images: {
        key: "company_images",
        field_keys: {
          receipt_logo: "receipt_logo",
        },
      },
    },
  },
  stores: {
    key: "stores",
    name: "Stores",
    block_keys: {
      store_information: {
        key: "store_information",
      },
      store_shipping_address: {
        key: "store_shipping_address",
      },
      store_invoice_address: {
        key: "store_invoices_address",
      },
      store_billing_address: {
        key: "store_billing_address",
      },
    },
  },
  employees: {
    key: "employees",
    name: "Employees",
    block_keys: {
      employee_information: {
        key: "employee_information",
        field_keys: {
          username: "username",
          firstname: "firstname",
          lastname: "lastname",
          email: "email",
          mobile: "mobile",
          status: "status",
          telephone: "telephone",
          password: "password",
        },
      },
      employee_settings: {
        key: "employee_settings",
        field_keys: {
          role: "role",
          employee_type: "employee_type",
          last_visited_store: "last_visited_store",
          language: "language",
          pin: "pin",
          login_clockin: "login_clockin",
          hourly_rate: "hourly_rate",
        },
      },
      employee_availability: {
        key: "employee_availability",
      },
      employee_image: {
        key: "employee_image",
      },
      employee_pays: {
        key: "employee_pays",
      },
    },
  },
  role_templates: { key: "role_templates", name: "Roles" },
  roles: { key: "roles", name: "Hierarchy" },
  uoms: { key: "uoms", name: "UOM" },
  addons: { key: "addons", name: "Addons" },
  addon_groups: { key: "addon_groups", name: "Addon Groups" },
  reports: { key: "reports", name: "Reports" },
  currency_bills: { key: "currency_bills", name: "Currency Bills" },
  quickbook_online: { key: "quickbook_online", name: "QuickBook Online" },
  quickbook_desktop: { key: "quickbook_desktop", name: "QuickBook Desktop" },
  printer: { key: "printer", name: "Printers" },
  label_setting: { key: "label_setting", name: "Labels" },
  price_fields: { key: "price_fields", name: "Price Fields" },
  split_payments: { key: "split_payments", name: "Split Payments" },
  split_payments_by_items: {
    key: "split_payments_by_items",
    name: "Split Payments By Items",
  },
  expinetPayment: {
    key: "expinet_payment",
    name: "Expinet",
  },
  tsysPayment: {
    key: "tsys_payment",
    name: "TSYS",
  },
  virtualTerminal: {
    key: "virtual_terminal",
    name: "Virtual Terminal",
  },

  notification: {
    key: "notifications",
    name: "Notifications",
    block_keys: {
      sales_groups: "sales_groups",
    },
  },
  storeTransfer: { key: "store_transfer", name: "Store Transfers" },
  smsSettings: {
    key: "sms_settings",
    name: "SMS",
  },
  emailSettings: {
    key: "email_settings",
    name: "Email",
  },
  paymentOption: {
    key: "payment_option",
    name: "Payment Options",
    block_keys: {
      cash: {
        key: "cash",
      },
      credit_card: {
        key: "credit_card",
      },
      check: {
        key: "check",
      },
    },
  },
  payment_signature: {
    key: "payment_signature",
    name: "Payment Signature",
  },
  discounts: { key: "discounts", name: "Discounts" },
  misc_entry: { key: "misc_entry", name: "+ Item" },
  tips: { key: "tips", name: "Tips" },
  tipAdjustment: { key: "tip_adjustment", name: "Tip Adjustment" },
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
  billSettings: { key: "billing", name: "Billings" },
  appSettings: { key: "app_settings", name: "App Settings" },
  reconciliation: { key: "reconciliation", name: "Reconciliations" },
  return_payment_for_transactions: {
    key: "return_payment_for_transactions",
    name: "Return Payment for Transactions",
  },
  storeHours: {
    key: "store_hours",
    name: "Store Hours",
  },
  calendar: {
    key: "calendar",
    name: "Calendar",
  },
  users: {
    key: "users",
    name: "Users",
    block_keys: {
      user_information: {
        key: "user_information",
        field_keys: {
          username: "username",
          firstname: "firstname",
          lastname: "lastname",
          email: "email",
          mobile: "mobile",
          status: "status",
          telephone: "telephone",
          password: "password",
          // status: "status",
        },
      },
      user_photo: {
        key: "user_photo",
      },
      user_settings: {
        key: "user_settings",
        field_keys: {
          role: "role",
          last_visited_store: "last_visited_store",
          language: "language",
          pin: "pin",
          login_clockin: "login_clockin",
          hourly_rate: "hourly_rate",
        },
      },
    },
  },
  resources: {
    key: "resources",
    name: "Resources",
  },
  loyaltyProgram: {
    key: "loyalty_program",
    name: "Loyalty Programs",
  },
  table_management: {
    key: "table_management",
    name: "Table Management",
  },
  service_products: {
    key: "service_products",
    name: "Products",
    block_keys: {
      service_product_information: {
        key: "service_product_information",
        field_keys: {
          service_product_name: "service_product_name",
          service_product_sku: "service_product_sku",
          service_product_barcode: "service_product_barcode",
          service_product_description: "service_product_description",
          service_product_receipt_description:
            "service_product_receipt_description",
          service_product_category: "service_product_category",
          service_product_tax_status: "service_product_tax_status",
          service_product_department: "service_product_department",
          service_product_type: "service_product_type",
          service_product_status: "service_product_product_status",
          service_product_number: "service_product_product_number",
          service_product_featured: "service_product_featured",
          service_product_validity_in_days: "service_product_validity_in_days",
          service_product_duration: "service_product_duration",
        },
      },
      service_product_images: {
        key: "service_product_images",
        field_keys: {
          service_product_product_images: "service_product_product_images",
        },
      },
      service_product_uoms: {
        key: "service_product_uoms",
        field_keys: {
          service_product_product_uoms: "service_product_product_uoms",
          service_product_uom_cost: "service_product_uom_cost",
          service_product_uom_qty_conversion:
            "service_product_uom_qty_conversion",
          service_product_uom_price: "service_product_uom_price",
          service_product_uom_list_price: "service_product_uom_list_price",
          service_product_uom_is_base: "service_product_uom_is_base",
        },
      },
      service_product_pricing: {
        key: "service_product_pricing",
        field_keys: {
          service_product_retail_sell_price:
            "service_product_retail_sell_price",
          service_product_pfn: "service_product_pfn",
          service_product_list_price: "service_product_list_price",
          service_product_cost_price: "service_product_cost_price",
        },
      },
      service_product_inventory: {
        key: "service_product_inventory",
        field_keys: {
          service_product_qoh: "service_product_qoh",
          service_product_allocated_qty: "service_product_allocated_qty",
          service_product_total_available: "service_product_total_available",
          service_product_qty_on_order: "service_product_qty_on_order",
          service_product_min_order_point: "service_product_min_order_point",
          service_product_max_order_point: "service_product_max_order_point",
          service_product_track_inventory: "service_product_track_inventory",
        },
      },
    },
  },
  food_products: {
    key: "food_products",
    name: "Products",
    block_keys: {
      food_product_information: {
        key: "food_product_information",
        field_keys: {
          food_product_name: "food_product_name",
          food_product_sku: "food_product_sku",
          food_product_barcode: "food_product_barcode",
          food_product_description: "food_product_description",
          food_product_receipt_description: "food_product_receipt_description",
          food_product_category: "food_product_category",
          food_product_tax_status: "food_product_tax_status",
          food_product_department: "food_product_department",
          food_product_status: "food_product_status",
          food_product_number: "food_product_number",
          food_product_featured: "food_product_featured",
          product_type: "product_type",
        },
      },
      food_product_images: {
        key: "food_product_images",
        field_keys: {
          food_product_images: "food_product_images",
        },
      },
      food_product_attributes: {
        key: "food_product_attributes",
        field_keys: {
          food_product_variant_image: "food_product_variant_image",
          food_product_variant_name: "food_product_variant_name",
          food_product_variant_status: "food_product_variant_status",
          food_product_stock_keeping_unit: "food_product_stock_keeping_unit",
          food_product_variant_barcode: "food_product_variant_barcode",
          food_product_variant_retail_sell_price:
            "food_product_variant_retail_sell_price",
        },
      },
      food_product_uoms: {
        key: "food_product_uoms",
        field_keys: {
          food_product_product_uoms: "food_product_product_uoms",
          food_product_uom_cost: "food_product_uom_cost",
          food_product_uom_qty_conversion: "food_product_uom_qty_conversion",
          food_product_uom_price: "food_product_uom_price",
          food_product_uom_list_price: "food_product_uom_list_price",
          food_product_uom_is_base: "food_product_uom_is_base",
        },
      },
      food_product_pricing: {
        key: "food_product_pricing",
        field_keys: {
          food_product_retail_sell_price: "food_product_retail_sell_price",
          food_product_pfn: "food_product_pfn",
          food_product_list_price: "food_product_list_price",
          food_product_cost_price: "food_product_cost_price",
        },
      },
      food_product_inventory: {
        key: "food_product_inventory",
        field_keys: {
          food_product_qoh: "food_product_qoh",
          food_product_allocated_qty: "food_product_allocated_qty",
          food_product_total_available: "food_product_total_available",
          food_product_qty_on_order: "food_product_qty_on_order",
          food_product_min_order_point: "food_product_min_order_point",
          food_product_max_order_point: "food_product_max_order_point",
          food_product_track_inventory: "food_product_track_inventory",
          food_product_store: "food_product_store",
        },
      },
      food_product_addons: {
        key: "food_product_addons",
        field_keys: {
          standard_extra_items: "standard_extra_items",
          whole_half_orders: "whole_half_orders",
        },
      },
    },
  },
  department: {
    key: "department",
    name: "Department",
  },
  service_addons: {
    key: "service_addons",
    name: "Addons",
    block_keys: {
      standard_optional_items: {
        name: "Standard/Optional Items",
        key: "standard_optional_items",
      },
      whole_half_orders: {
        name: "Whole/Half Orders",
        key: "whole_half_orders",
      },
    },
  },
  food_addons: {
    key: "food_addons",
    name: "Addons",
    block_keys: {
      standard_extra_items: {
        name: "Standard/Optional Items",
        key: "standard_extra_items",
      },
      whole_half_orders: {
        name: "Whole/Half Orders",
        key: "whole_half_orders",
      },
    },
  },
  packages: {
    key: "packages",
    name: "Packages",
  },
  // reconciliation: {
  //   key: "reconciliation",
  //   name: "Reconciliation",
  // },
  time_card: {
    key: "time_card",
    name: "Time Card",
  },
  print_receipt: {
    key: "print_receipt",
    name: "Print Receipt",
  },
  verifone_payment: {
    key: "verifone_payment",
    name: "Verifone Payment",
  },
  sales_groups: {
    key: "salesgroups",
    name: "Sales Groups",
  },
  send_receipt: {
    key: "send_receipt",
    name: "Send Receipt",
    block_keys: {
      email: {
        name: "Email",
        key: "email",
      },
      sms: {
        name: "SMS",
        key: "sms",
      },
    },
  },
  labor_cost: {
    key: "labor_cost",
    name: "Labor Cost",
  },
  lms_manager: {
    key: "lms_manager",
    name: "LMS Manager",
  },
  settings: {
    key: "settings",
    name: "Settings",
  },
  apps: {
    key: "apps",
    name: "Apps",
  },
  open_cash_drawer: {
    key: "open_cash_drawer",
    name: "Open Cash Drawer",
  },
  food_products_combo: {
    key: "food_products_combo",
    name: "Food Products Combo",
  },
  gift_cards: {
    key: "gift_cards",
    name: "Gift Cards",
  },
  cash_register: {
    key: "sales",
    name: "Norwegian Report",
  },
  membership: { key: "membership", name: "membership" },
  store_delivery: { key: "store_delivery", name: "Store Delivery" },
  order_transition: { key: "order_transitions", name: "Order Transition" },
  menu_overlay: { key: "menu_overlay", name: "Menu Overlay" },
  invoice: { key: "e-invoicing", name: "Invoice" },
  kitchen_receipt: { key: "kitchen_receipt", name: "Kitchen Receipt" },
};
export default PACKAGEFEATUREKEYS;
