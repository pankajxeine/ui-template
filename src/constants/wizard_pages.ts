import PACKAGEFEATUREKEYS from "./packageFeatureKeys";
export const WIZARD_PAGES_KEY = {

  // Sections
  HOME: "home",
  COMPANY_SETUP: "company_setup",
  STORE_SETUP: "store_setup",
  COMPANY_APP_SETTING: "company_app_setting",
  STORE_APP_SETTING: "store_app_setting",
  USER_SETUP: "user_setup",
  CATEGORY_SETUP: "category_setup",
  PRODUCT_SETUP: "product_setup",
  HARDWARE_SETUP: "hardware_setup",

  // Welcome/Introduction Page
  WELCOME_PAGE: "welcome_page",
  TRAINING_PAGE: "training_page",
  SETUP_GUIDE_PAGE: "setup_guide_page",
  TABLE_OF_CONTENTS_PAGE: "table_of_contents_page",

  // Company Setup
  COMPANY_VIEW: "company_view",
  COMPANY_EDIT: "company_edit",

  // Product Setup
  PRODUCT_ADD: "product_add",
  PRODUCT_LIST: "product_list",
  PRODUCT_VIEW: "product_view",
  PRODUCT_IMPORT: "product_import",
  PRODUCT_IMPORT_ADD: "product_import_add",
  PRODUCT_IMPORT_LIST: "product_import_list",
  PRODUCT_IMPORT_VIEW: "product_import_view",

  // Store Setup
  STORE_LIST: "store_list",
  STORE_VIEW: "store_view",
  STORE_EDIT: "store_edit",

  // Category Setup
  CATEGORY_VIEW: "category_view",
  CATEGORY_LIST: "category_list",
  CATEGORY_EDIT: "category_edit",

  // Company App Setting
  PRODUCT_SETTINGS_VIEW: "product_settings_view",
  PRODUCT_SETTINGS_EDIT: "product_settings_edit",
  TEXT_NOTIFICATIONS_VIEW: "text_notifications_view",
  TEXT_NOTIFICATIONS_EDIT: "text_notifications_edit",
  EMAIL_NOTIFICATIONS_VIEW: "email_notifications_view",
  EMAIL_NOTIFICATIONS_EDIT: "email_notifications_edit",

  // Store App Setting
  DISCOUNTS_VIEW: "discounts_view",
  DISCOUNTS_EDIT: "discounts_edit",
  PAYMENT_METHODS_VIEW: "payment_methods_view",
  PAYMENT_METHODS_EDIT: "payment_methods_edit",
  SIGNATURE_VIEW: "signature_view",
  SIGNATURE_EDIT: "signature_edit",
  TIPS_VIEW: "tips_view",
  TIPS_EDIT: "tips_edit",
  LIST_PRICES_VIEW: "list_prices_view",
  LIST_PRICES_EDIT: "list_prices_edit",

  // User Setup
  USER_VIEW: "user_view",
  USER_LIST: "user_list",
  USER_EDIT: "user_edit",

  // Hardware Setup
  HARDWARE_VIEW: "hardware_view",
  HARDWARE_LIST: "hardware_list",
  HARDWARE_EDIT: "hardware_edit",
  HARDWARE_TEST: "hardware_test",
  HARDWARE_DEBUG: "hardware_debug",
  HARDWARE_CASHDRAWER_VIEW: "hardware_cashdrawer_view",
};

const WIZARD_PAGES = {
  // Welcome/Introduction Page
  [WIZARD_PAGES_KEY.HOME]: {
    [WIZARD_PAGES_KEY.WELCOME_PAGE]: {
      page_no: 1,
      page_key: WIZARD_PAGES_KEY.WELCOME_PAGE,
      settings: {
        next_page: WIZARD_PAGES_KEY.TRAINING_PAGE,
        previous_page: "",
        bread_crumb: [{ title: "Welcome Video", action: null }],
      },
    },
    [WIZARD_PAGES_KEY.TRAINING_PAGE]: {
      page_no: 2,
      page_key: WIZARD_PAGES_KEY.TRAINING_PAGE,
      settings: {
        next_page: WIZARD_PAGES_KEY.SETUP_GUIDE_PAGE,
        previous_page: WIZARD_PAGES_KEY.WELCOME_PAGE,
        bread_crumb: [{ title: "Additional Help walk through", action: null }],
      },
    },
    [WIZARD_PAGES_KEY.SETUP_GUIDE_PAGE]: {
      page_no: 3,
      page_key: WIZARD_PAGES_KEY.SETUP_GUIDE_PAGE,
      settings: {
        next_page: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
        previous_page: WIZARD_PAGES_KEY.TRAINING_PAGE,
        bread_crumb: [{ title: "Setup Guide", action: null }],
      },
    },
    [WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE]: {
      page_no: 4,
      page_key: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
      settings: {
        next_page: "",
        previous_page: WIZARD_PAGES_KEY.SETUP_GUIDE_PAGE,
        bread_crumb: [{ title: "Table of Contents", action: null }],
        setup_modules: [
          {
            id: 1,
            page_key: WIZARD_PAGES_KEY.COMPANY_SETUP,
            module_key: PACKAGEFEATUREKEYS.company.key,
          },
          {
            id: 2,
            page_key: WIZARD_PAGES_KEY.STORE_SETUP,
            module_key: PACKAGEFEATUREKEYS.stores.key,
          },
          {
            id: 3,
            page_key: WIZARD_PAGES_KEY.COMPANY_APP_SETTING,
            module_key: PACKAGEFEATUREKEYS.companySettings.key,
          },
          {
            id: 4,
            page_key: WIZARD_PAGES_KEY.STORE_APP_SETTING,
            module_key: PACKAGEFEATUREKEYS.storeSettings.key,
          },
          {
            id: 5,
            page_key: WIZARD_PAGES_KEY.USER_SETUP,
            module_key: PACKAGEFEATUREKEYS.users.key,
          },
          {
            id: 6,
            page_key: WIZARD_PAGES_KEY.CATEGORY_SETUP,
            module_key: PACKAGEFEATUREKEYS.category.key,
          },
          {
            // NOTE: if you change this product setup array key, also change the index in utils.js > getWizardPermissions method
            id: 7,
            page_key: WIZARD_PAGES_KEY.PRODUCT_SETUP,
            module_key: PACKAGEFEATUREKEYS.product.key,
          },
          {
            id: 8,
            page_key: WIZARD_PAGES_KEY.HARDWARE_SETUP,
            module_key: PACKAGEFEATUREKEYS.tsysPayment.key,
          },
        ],
      },
    },
  },

  // Company Setup
  [WIZARD_PAGES_KEY.COMPANY_SETUP]: {
    [WIZARD_PAGES_KEY.COMPANY_VIEW]: {
      page_no: 1,
      page_key: WIZARD_PAGES_KEY.COMPANY_VIEW,
      settings: {
        next_page: WIZARD_PAGES_KEY.COMPANY_EDIT,
        previous_page: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Company Setup Video", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.COMPANY_EDIT]: {
      page_no: 2,
      page_key: WIZARD_PAGES_KEY.COMPANY_EDIT,
      settings: {
        next_page: "",
        previous_page: WIZARD_PAGES_KEY.COMPANY_VIEW,
        bread_crumb_title: "Company Settings",
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Company Settings", action: null },
        ],
      },
    },
  },

  // Store Setup
  [WIZARD_PAGES_KEY.STORE_SETUP]: {
    [WIZARD_PAGES_KEY.STORE_VIEW]: {
      page_no: 1,
      page_key: WIZARD_PAGES_KEY.STORE_VIEW,
      settings: {
        next_page: WIZARD_PAGES_KEY.STORE_LIST,
        previous_page: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Store Setup Video", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.STORE_LIST]: {
      page_no: 2,
      page_key: WIZARD_PAGES_KEY.STORE_LIST,
      settings: {
        next_page: "",
        previous_page: WIZARD_PAGES_KEY.STORE_VIEW,
        header_text: "Review the information for your store. Click the edit icon to make changes if needed. Click complete when all changes are done.",
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Store Setup List", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.STORE_EDIT]: {
      page_no: 3,
      page_key: WIZARD_PAGES_KEY.STORE_EDIT,
      settings: {
        next_page: "",
        previous_page: WIZARD_PAGES_KEY.STORE_LIST,
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Store Setup", action: WIZARD_PAGES_KEY.STORE_LIST },
          { title: "Edit Store", action: null },
        ],
      },
    },
  },

  // Company App Setting
  [WIZARD_PAGES_KEY.COMPANY_APP_SETTING]: {
    [WIZARD_PAGES_KEY.PRODUCT_SETTINGS_VIEW]: {
      page_no: 1,
      page_key: WIZARD_PAGES_KEY.PRODUCT_SETTINGS_VIEW,
      settings: {
        next_page: WIZARD_PAGES_KEY.PRODUCT_SETTINGS_EDIT,
        previous_page: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Company App Settings",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Product Settings Video", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.PRODUCT_SETTINGS_EDIT]: {
      page_no: 2,
      page_key: WIZARD_PAGES_KEY.PRODUCT_SETTINGS_EDIT,
      settings: {
        next_page: WIZARD_PAGES_KEY.TEXT_NOTIFICATIONS_VIEW,
        previous_page: WIZARD_PAGES_KEY.PRODUCT_SETTINGS_VIEW,
        header_text:
          "To enable decimal increments for products, toggle the Allow Quantity with Decimal Values to ON. Use the +Price Field button to add different price fields for products. When you are ready to move to the next step select Save or Next.",
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Company App Settings",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Product Settings", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.TEXT_NOTIFICATIONS_VIEW]: {
      page_no: 3,
      page_key: WIZARD_PAGES_KEY.TEXT_NOTIFICATIONS_VIEW,
      settings: {
        next_page: WIZARD_PAGES_KEY.TEXT_NOTIFICATIONS_EDIT,
        previous_page: WIZARD_PAGES_KEY.PRODUCT_SETTINGS_EDIT,
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Company App Settings",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Text Notifications Video", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.TEXT_NOTIFICATIONS_EDIT]: {
      page_no: 4,
      page_key: WIZARD_PAGES_KEY.TEXT_NOTIFICATIONS_EDIT,
      settings: {
        next_page: WIZARD_PAGES_KEY.EMAIL_NOTIFICATIONS_VIEW,
        previous_page: WIZARD_PAGES_KEY.TEXT_NOTIFICATIONS_VIEW,
        header_text:
          "To enable SMS notification, Add the information and then toggle the SMS settings to ON. Click Save when complete. If you will not be using text notifications click next to continue in the setup.",
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Company App Settings",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Text Notifications", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.EMAIL_NOTIFICATIONS_VIEW]: {
      page_no: 5,
      page_key: WIZARD_PAGES_KEY.EMAIL_NOTIFICATIONS_VIEW,
      settings: {
        next_page: WIZARD_PAGES_KEY.EMAIL_NOTIFICATIONS_EDIT,
        previous_page: WIZARD_PAGES_KEY.TEXT_NOTIFICATIONS_EDIT,
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Company App Settings",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Email Notifications Video", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.EMAIL_NOTIFICATIONS_EDIT]: {
      page_no: 6,
      page_key: WIZARD_PAGES_KEY.EMAIL_NOTIFICATIONS_EDIT,
      settings: {
        next_page: "",
        previous_page: WIZARD_PAGES_KEY.EMAIL_NOTIFICATIONS_VIEW,
        header_text:
          "To enable Email notification, Add the information and then toggle the Email settings to ON. Click Save when complete. If you will not be using Email notifications then click Save to continue in the setup.",
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Company App Settings",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Email Notifications", action: null },
        ],
      },
    },
  },

  // Store App Setting
  [WIZARD_PAGES_KEY.STORE_APP_SETTING]: {
    [WIZARD_PAGES_KEY.DISCOUNTS_VIEW]: {
      page_no: 1,
      page_key: WIZARD_PAGES_KEY.DISCOUNTS_VIEW,
      settings: {
        next_page: WIZARD_PAGES_KEY.DISCOUNTS_EDIT,
        previous_page: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Store App Settings",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Discount Settings Video", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.DISCOUNTS_EDIT]: {
      page_no: 2,
      page_key: WIZARD_PAGES_KEY.DISCOUNTS_EDIT,
      settings: {
        next_page: WIZARD_PAGES_KEY.PAYMENT_METHODS_VIEW,
        previous_page: WIZARD_PAGES_KEY.DISCOUNTS_VIEW,
        header_text: "To enable discounts, toggle the discount settings to on and fill out the information. Click Save when complete. If you will not be using discounts click next to continue in the setup.",
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Store App Settings",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Discount Settings", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.PAYMENT_METHODS_VIEW]: {
      page_no: 3,
      page_key: WIZARD_PAGES_KEY.PAYMENT_METHODS_VIEW,
      settings: {
        next_page: WIZARD_PAGES_KEY.PAYMENT_METHODS_EDIT,
        previous_page: WIZARD_PAGES_KEY.DISCOUNTS_EDIT,
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Store App Settings",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Payment Methods Video", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.PAYMENT_METHODS_EDIT]: {
      page_no: 4,
      page_key: WIZARD_PAGES_KEY.PAYMENT_METHODS_EDIT,
      settings: {
        next_page: WIZARD_PAGES_KEY.SIGNATURE_VIEW,
        previous_page: WIZARD_PAGES_KEY.PAYMENT_METHODS_VIEW,
        header_text:
          "Toggle on all payment methods that will be used in the point of sale and select Save.",
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Store App Settings",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Payment Methods", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.SIGNATURE_VIEW]: {
      page_no: 5,
      page_key: WIZARD_PAGES_KEY.SIGNATURE_VIEW,
      settings: {
        next_page: WIZARD_PAGES_KEY.SIGNATURE_EDIT,
        previous_page: WIZARD_PAGES_KEY.PAYMENT_METHODS_EDIT,
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Store App Settings",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Signature Settings Video", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.SIGNATURE_EDIT]: {
      page_no: 6,
      page_key: WIZARD_PAGES_KEY.SIGNATURE_EDIT,
      settings: {
        next_page: WIZARD_PAGES_KEY.TIPS_VIEW,
        previous_page: WIZARD_PAGES_KEY.SIGNATURE_VIEW,
        header_text:
          "Toggle on the signature if desired and select the scenario in which signatures are required. Click Save or Next to continue in the setup wizard.",
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Store App Settings",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Signature Settings", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.TIPS_VIEW]: {
      page_no: 7,
      page_key: WIZARD_PAGES_KEY.TIPS_VIEW,
      settings: {
        next_page: WIZARD_PAGES_KEY.TIPS_EDIT,
        previous_page: WIZARD_PAGES_KEY.SIGNATURE_EDIT,
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Store App Settings",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Tip Settings Video", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.TIPS_EDIT]: {
      page_no: 8,
      page_key: WIZARD_PAGES_KEY.TIPS_EDIT,
      settings: {
        next_page: WIZARD_PAGES_KEY.LIST_PRICES_VIEW,
        previous_page: WIZARD_PAGES_KEY.TIPS_VIEW,
        header_text:
          "Toggle on the tip option if desired and enter the default tips that will be available in the point of sale. Click Save or Next to continue in the setup.",
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Store App Settings",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Tip Settings", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.LIST_PRICES_VIEW]: {
      page_no: 9,
      page_key: WIZARD_PAGES_KEY.LIST_PRICES_VIEW,
      settings: {
        next_page: WIZARD_PAGES_KEY.LIST_PRICES_EDIT,
        previous_page: WIZARD_PAGES_KEY.TIPS_EDIT,
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Store App Settings",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "List Price Video", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.LIST_PRICES_EDIT]: {
      page_no: 10,
      page_key: WIZARD_PAGES_KEY.LIST_PRICES_EDIT,
      settings: {
        next_page: "",
        previous_page: WIZARD_PAGES_KEY.LIST_PRICES_VIEW,
        header_text:
          "Toggle on the list prices setting if you would like to track list prices. Click Save to continue in the setup.",
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Store App Settings",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "List Price Settings", action: null },
        ],
      },
    },
  },

  // User Setup
  [WIZARD_PAGES_KEY.USER_SETUP]: {
    [WIZARD_PAGES_KEY.USER_VIEW]: {
      page_no: 1,
      page_key: WIZARD_PAGES_KEY.USER_VIEW,
      settings: {
        next_page: WIZARD_PAGES_KEY.USER_LIST,
        previous_page: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "User Setup Video", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.USER_LIST]: {
      page_no: 2,
      page_key: WIZARD_PAGES_KEY.USER_LIST,
      settings: {
        next_page: WIZARD_PAGES_KEY.USER_EDIT,
        previous_page: WIZARD_PAGES_KEY.USER_VIEW,
        header_text:
          "Click Add User to add new users to the POS. When all users are setup click Complete.",
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "User Setup List", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.USER_EDIT]: {
      page_no: 3,
      page_key: WIZARD_PAGES_KEY.USER_EDIT,
      settings: {
        next_page: "",
        previous_page: WIZARD_PAGES_KEY.USER_LIST,
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "User Setup", action: WIZARD_PAGES_KEY.USER_LIST },
          { title: "Create User", action: null },
        ],
      },
    },
  },

  // Category Setup
  [WIZARD_PAGES_KEY.CATEGORY_SETUP]: {
    [WIZARD_PAGES_KEY.CATEGORY_VIEW]: {
      page_no: 1,
      page_key: WIZARD_PAGES_KEY.CATEGORY_VIEW,
      settings: {
        next_page: WIZARD_PAGES_KEY.CATEGORY_LIST,
        previous_page: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Category Setup Video", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.CATEGORY_LIST]: {
      page_no: 2,
      page_key: WIZARD_PAGES_KEY.CATEGORY_LIST,
      settings: {
        next_page: WIZARD_PAGES_KEY.CATEGORY_EDIT,
        previous_page: WIZARD_PAGES_KEY.CATEGORY_VIEW,
        header_text: "Use the Add Category button below to add new product  categories to the POS. Once all categories have been created click Complete.",
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Category List", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.CATEGORY_EDIT]: {
      page_no: 3,
      page_key: WIZARD_PAGES_KEY.CATEGORY_EDIT,
      settings: {
        next_page: "",
        previous_page: WIZARD_PAGES_KEY.CATEGORY_LIST,
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Category List", action: WIZARD_PAGES_KEY.CATEGORY_LIST },
          { title: "Create Category", action: null },
        ],
      },
    },
  },

  // Hardware Setup
  [WIZARD_PAGES_KEY.HARDWARE_SETUP]: {
    explicit_total_pages: 4,
    [WIZARD_PAGES_KEY.HARDWARE_LIST]: {
      page_no: 1,
      page_key: WIZARD_PAGES_KEY.HARDWARE_LIST,
      settings: {
        next_page: "",
        previous_page: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
        displayPageSteps: false,
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Hardware Setup", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.HARDWARE_VIEW]: {
      page_no: 1,
      page_key: WIZARD_PAGES_KEY.HARDWARE_VIEW,
      settings: {
        next_page: WIZARD_PAGES_KEY.HARDWARE_EDIT,
        previous_page: WIZARD_PAGES_KEY.HARDWARE_LIST,
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Hardware Setup",
            action: WIZARD_PAGES_KEY.HARDWARE_LIST,
          },
          { title: "Setup Video", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.HARDWARE_EDIT]: {
      page_no: 2,
      page_key: WIZARD_PAGES_KEY.HARDWARE_EDIT,
      settings: {
        next_page: WIZARD_PAGES_KEY.HARDWARE_TEST,
        previous_page: WIZARD_PAGES_KEY.HARDWARE_LIST,
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Hardware Setup",
            action: WIZARD_PAGES_KEY.HARDWARE_LIST,
          },
          { title: "Terminal Information", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.HARDWARE_TEST]: {
      page_no: 3,
      page_key: WIZARD_PAGES_KEY.HARDWARE_TEST,
      settings: {
        next_page: WIZARD_PAGES_KEY.HARDWARE_DEBUG,
        previous_page: WIZARD_PAGES_KEY.HARDWARE_EDIT,
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Hardware Setup",
            action: WIZARD_PAGES_KEY.HARDWARE_LIST,
          },
          { title: "Terminal Confirmation", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.HARDWARE_DEBUG]: {
      page_no: 5,
      page_key: WIZARD_PAGES_KEY.HARDWARE_DEBUG,
      settings: {
        next_page: WIZARD_PAGES_KEY.HARDWARE_TEST,
        previous_page: WIZARD_PAGES_KEY.HARDWARE_LIST,
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Hardware Setup",
            action: WIZARD_PAGES_KEY.HARDWARE_LIST,
          },
          { title: "Terminal Debugging", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.HARDWARE_CASHDRAWER_VIEW]: {
      page_no: 1,
      explicit_total_pages: 1,
      page_key: WIZARD_PAGES_KEY.HARDWARE_CASHDRAWER_VIEW,
      settings: {
        next_page: "",
        previous_page: WIZARD_PAGES_KEY.HARDWARE_LIST,
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Hardware Setup",
            action: WIZARD_PAGES_KEY.HARDWARE_LIST,
          },
          { title: "Add Cash Drawer Video", action: null },
        ],
      },
    },
  },

  // Product Setup
  [WIZARD_PAGES_KEY.PRODUCT_SETUP]: {
    explicit_total_pages: 4,
    [WIZARD_PAGES_KEY.PRODUCT_IMPORT]: {
      page_no: 1,
      page_key: WIZARD_PAGES_KEY.PRODUCT_IMPORT,
      settings: {
        next_page: WIZARD_PAGES_KEY.PRODUCT_VIEW,
        previous_page: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
        header_text:
          "This point of sale solution provides import functionality so that you can import products if you have it in a CSV format. \nRespond to the question below so we can best advise you on how to setup your products.",
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          { title: "Product Setup", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.PRODUCT_VIEW]: {
      page_no: 2,
      page_key: WIZARD_PAGES_KEY.PRODUCT_VIEW,
      settings: {
        next_page: WIZARD_PAGES_KEY.PRODUCT_LIST,
        previous_page: WIZARD_PAGES_KEY.PRODUCT_IMPORT,
        bread_crumb_title: "Product Settings",
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Product Setup",
            action: WIZARD_PAGES_KEY.PRODUCT_IMPORT,
          },
          { title: "Create/Edit Video", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.PRODUCT_LIST]: {
      page_no: 3,
      page_key: WIZARD_PAGES_KEY.PRODUCT_LIST,
      settings: {
        next_page: "",
        previous_page: WIZARD_PAGES_KEY.PRODUCT_VIEW,
        bread_crumb_title: "Product Settings",
        header_text:
          "Only basic products may be created from the setup wizard. To create more complex products please go directly to the product app from the home screen.",
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Product Setup",
            action: WIZARD_PAGES_KEY.PRODUCT_IMPORT,
          },
          { title: "Product List View", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.PRODUCT_ADD]: {
      page_no: 4,
      page_key: WIZARD_PAGES_KEY.PRODUCT_ADD,
      settings: {
        next_page: "",
        previous_page: WIZARD_PAGES_KEY.PRODUCT_LIST,
        bread_crumb_title: "Product Settings",
        header_text: "Enter product information and select Save.",
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Product Setup",
            action: WIZARD_PAGES_KEY.PRODUCT_IMPORT,
          },
          { title: "Create Product", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.PRODUCT_IMPORT_VIEW]: {
      page_no: 2,
      page_key: WIZARD_PAGES_KEY.PRODUCT_IMPORT_VIEW,
      settings: {
        next_page: WIZARD_PAGES_KEY.PRODUCT_IMPORT_LIST,
        previous_page: WIZARD_PAGES_KEY.PRODUCT_IMPORT,
        bread_crumb_title: "Product Settings",
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Product Setup",
            action: WIZARD_PAGES_KEY.PRODUCT_IMPORT,
          },
          { title: "Import Products Video", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.PRODUCT_IMPORT_LIST]: {
      page_no: 3,
      page_key: WIZARD_PAGES_KEY.PRODUCT_IMPORT_LIST,
      settings: {
        next_page: "",
        previous_page: WIZARD_PAGES_KEY.PRODUCT_IMPORT_VIEW,
        bread_crumb_title: "Product Settings",
        header_text:
          "Select import to begin importing products, Select Complete to return back to Table of Contents.",
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Product Setup",
            action: WIZARD_PAGES_KEY.PRODUCT_IMPORT,
          },
          { title: "Import Products / List", action: null },
        ],
      },
    },
    [WIZARD_PAGES_KEY.PRODUCT_IMPORT_ADD]: {
      page_no: 4,
      page_key: WIZARD_PAGES_KEY.PRODUCT_IMPORT_ADD,
      settings: {
        next_page: "",
        previous_page: WIZARD_PAGES_KEY.PRODUCT_IMPORT_LIST,
        bread_crumb_title: "Product Settings",
        header_text:
          "Drag and drop file to upload area. Select Save to complete.",
        bread_crumb: [
          {
            title: "Table of Contents",
            action: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
          },
          {
            title: "Product Setup",
            action: WIZARD_PAGES_KEY.PRODUCT_IMPORT,
          },
          { title: "Import Product File", action: null },
        ],
      },
    },
  },
};

export const WIZARD_SAVE_BUTTON_SHOW_KEYS = [
  WIZARD_PAGES_KEY.COMPANY_EDIT,
  WIZARD_PAGES_KEY.STORE_EDIT,
  WIZARD_PAGES_KEY.TEXT_NOTIFICATIONS_EDIT,
  WIZARD_PAGES_KEY.EMAIL_NOTIFICATIONS_EDIT,
  WIZARD_PAGES_KEY.DISCOUNTS_EDIT,
  WIZARD_PAGES_KEY.PAYMENT_METHODS_EDIT,
  WIZARD_PAGES_KEY.SIGNATURE_EDIT,
  WIZARD_PAGES_KEY.TIPS_EDIT,
  WIZARD_PAGES_KEY.LIST_PRICES_EDIT,
  WIZARD_PAGES_KEY.USER_EDIT,
  WIZARD_PAGES_KEY.PRODUCT_SETTINGS_EDIT,
  WIZARD_PAGES_KEY.PRODUCT_IMPORT_ADD,
  WIZARD_PAGES_KEY.PRODUCT_ADD,
  WIZARD_PAGES_KEY.CATEGORY_EDIT,
];

export const WIZARD_COMPLETE_BUTTON_SHOW_KEYS = [
  WIZARD_PAGES_KEY.HARDWARE_LIST,
  WIZARD_PAGES_KEY.STORE_LIST,
  WIZARD_PAGES_KEY.USER_LIST,
  WIZARD_PAGES_KEY.CATEGORY_LIST,
  WIZARD_PAGES_KEY.PRODUCT_LIST,
  WIZARD_PAGES_KEY.PRODUCT_IMPORT_LIST,
];

export const WIZARD_OPTOUT_BUTTON_SHOW_KEYS = [
  WIZARD_PAGES_KEY.WELCOME_PAGE,
  WIZARD_PAGES_KEY.TRAINING_PAGE,
  WIZARD_PAGES_KEY.SETUP_GUIDE_PAGE,
  WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
];

export default WIZARD_PAGES;
