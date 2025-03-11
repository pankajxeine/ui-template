const MESSAGES = {
  invaliduser: "Invalid username or password. please try again later.",
  serviceTimeout:
    "Service timeout error: Service is not responding. Please contact system admin.",
  loginSuccess: "You have been successfully logged in.",
  addedSuccess: "Record has been added.",
  updateSuccess: "Record has been updated.",
  fail: "Record could not be saved.",
  deleteSuccess: "Record has been deleted.",
  deleteFail: "Record could not be deleted.",
  passwordNotMatch: "Password and confirm password do not match.",
  orderSuccess: "Transaction completed",
  trasactionSuccess: "Transaction completed",
  orderSaved: "Transaction has been saved.",
  orderReturnSaved: "Return completed.",
  orderVoidSuccess: "Void completed.",
  orderRefundSuccess: "Refund completed.",
  orderVoidRefundSuccess: "Void and refund completed.",

  orderReturnValidate: "Enter return quantity.",
  orderCustomerEmpty: "Select a customer.",
  orderItemEmpty: "Cart is empty.",
  removeConfirmation: "Are you sure you want to delete this record?",
  deleteConfirmation: "Are you sure you want to delete this ",
  ageValidateSuccess: "Age has been verified successfully.",
  ageValidateFail: "Invalid scan details. Please try again.",
  customerLicenseExpired: "Declined - License expired.",
  customerAgeUnderMinAge: "Declined - Not qualified for the product.",
  customerAgeSuccess: "Customer age has been verified successfully.",
  customerAgeOverride: "Customer age varification has been overridden.",
  customerAgeOverrideConfirm: "Would you like to override?",
  productUnavailable: "Currently unavailable",
  purchaseOrderReceivedSuccess: "Purchase order has been received.",
  purchaseOrderReceivedFail: "Purchase order not received.",
  purchaseOrderOverReceiveMsg:
    "As you are going to receive excess qty than PO ordered qty for this item so original PO will be revised with excess received Qty.",
  purchaseOrderTypeChange:
    "Products are already entered on this Purchase Order. Changing PO Type will clear these products. This operation cannot be undone. If you do not wish to lose the products already on the Purchase Order, complete it, and then start a new PO with new the PO Type you desire.",
  purchaseOrderValidReceiveQty: "Receiving quantity must be greater than 0.",
  selectStore: "Select a store",
  uploadFileToImport: "Select a file for import",
  uploadSizeError: "Image must be smaller than 2MB",
  uploadTypeError: "Image file supported only",
  uploadFaviconTypeError: ".ICO image supported only",
  uploadLoaderTypeError: "Invalid file type",
  uploadFailureError: "File upload failed",
  uploadSuccess: "File uploaded",
  captureSuccess: "Image captured",
  importSuccess: "File imported.",
  productOutofStock: "Total exceeds stock avaliablity",
  copySuccess: "copied successfully.",
  addVariant: "Please add variants.",
  uploadImportFileTypeError: "Supported types .CSV and .ZIP",
  printingErrorMessage: "Receipt printing failed",
  printerAddedSuccess: "Printer has been added",
  printerAddedfail: "Printer could not be saved",
  printerTestCloudSuccess: "Cloud printer test done successfully.",
  printerCloudSuccess: "Cloud print done successfully.",
  printerDeleteSuccess: "Printer has been deleted.",
  printerDeleteSettingSuccess: "Printer setting(s) deleted",
  printerDeletefail: "Printer could not be deleted",
  printerSettingAddedSuccess: "Printer settings added",
  printerSettingAddedfail: "Printer settings could not be added",
  printerSettingUpdatedSuccess: "Printer settings updated",
  printerSettingUpdatedfail: "Printer settings could not be updated",
  syncVendorSuccess: "Vendors synced to Quickbooks",
  syncEODSuccess: "End of Day synced to Quickbooks",
  teminalNotFound: "Terminal serial number not found",
  tsysTerminalTestSuccess: "Test successful",
  tsysPaymentSuccess: "Payment processed",
  tsysDeviceNotFound: "Device not found. Check connection",
  tsysTenderTypeSettingsNotFound:
    "The TSYS tender type settings not found. Please check tsys tender type and set it.",
  expinetPaymentSuccess: "Payment processed",
  cashPaymentSuccess: "Payment processed",
  pricePlanValidationErr: "Price must be greater than zero",
  negProfitValidation:
    "Product cost greater than product sales price will have a negative effect on gross profit percentage",
  invalidAmount: "Payment must be greater than zero",
  inValidOrderQty: "Quantity must be greater than zero",
  orderCancelOrderError:
    "Before leaving the payment screen, complete your transaction or Delete/Void your paid transaction(s)",
  orderCancelOrderConfirmation:
    "Are you sure you want to leave without completing the payment?",
  orderCompleteOrderError: "Pay full amount to complete transaction",
  sendReceipt: "Receipt sent",
  requestCompleted: "Request Completed",
  emailOrPhoneRequired: "Email or phone number required",
  sourceOptionsAlert:
    "Settings for SMS & Email are inactive. Therefore, these are not listed in the source",
  statusUpdated: "Status updated successfully",
  defaultConfigAlert:
    "A Minimum of one config entry is required to keep status active. Otherwise it will revert to inactive status",
  emailSettingFieldAlert: "Email setting invalid",
  smsSettingFieldAlert: "SMS setting invalid",
  rmAndInactiveConfirmation:
    "Minimum 1 record required to keep this setting active. Are you sure want to delete this record?",
  currencyBillRequired: "One currency bill required",
  productLineResetAlert:
    "Sell price for Products will be change as per selected customer's price plan, are you sure to change it?",
  duplicateRecord: "Duplicate record found",
  noDataForUpdation: "No settings have been changed",

  decimalSettingConfirmation:
    "This is irreversible operation. These will do below changes in system which will NOT be undo.  It will make all product qty to lower round . (ex 5.5 qty will change to 5). Transaction & Purchase Orders which are already completed and for those return and receive will allow for decimal qty and price will calculate base on it BUT when product will get effect in QoH etc field those will be added as lower round (ex 5.5 qty will updated in QoH as 5 only. New/Pending Transaction, Purchase order, Store transfer it will NOT allow for decimal qty.",
  qtyCantBeDecimal:
    "Setting not allowed to have product quantity with decimals",
  expinetBatchCloseSuccess:
    "Expinet transaction batch has been closed successfully.",
  tsysBatchCloseSuccess:
    "Expinet transaction batch has been closed successfully.",
  tipValidationMsg: "Tip amount must be less or equal to the receive amount.",
  maxUserLimit: "User has reached the maximum limit for this package",
  customerChangeCofirmMsg:
    "Changing the customer will remove all existing return items from the cart, would you like to proceed?",
  selectDiscount: "Please select discount.",
  price0Discount: "Can't add discount",
  invalidDiscount: "Can't add discount more than total price.",
  noteLengthInvalid: "Only 512 characters are allowed for notes.",
  atLeastOneRole: "Please add at least one role",
  atLeastOneFeature: "Please select at least one feature",
  halfAddonNotAllowed: "You don't have permission to half the addons.",
  halfCartAddonNotAllowed:
    "You don't have permission to half the addons, right side addons would be removed from cart items after continued.",
  maxProductLimit:
    "You have reached the maximum number of Products for your current package, contact your administrator",
  maxVariantLimit:
    "Max number of 100 of Variant options has been reached Please remove variant options or create another Product to define additional variant options",
  loyaltyFreeItemsEmptyMsg: "Please select at least one free item.",
  loyaltyRewardItemsEmptyMsg: "Please select at least one reward item.",
  loyaltyLoyaltyProgramEmptyMsg:
    "Please select loyalty program before proceed to apply.",
  loayltyAlreayApplytoCartMsg:
    "A Loyalty Program Discount can not be applied to an item and the whole order simultaneously.",

  lmsCatCreated: "Category has been created successfully",
  lmsCatUpdated: "Category has been updated successfully",
  lmsCatDeleted: "Category has been deleted successfully",
  emptySystemTag: "Please select system tag.",
  uniqueTagError: " tag is already exists.",
  loyaltyLoyaltyFreeItemNotEligibleMsg:
    "Selected product is not eligible for free item. Please select another loyalty program",
  loayltyApplyPriceError:
    "You can't add loyalty discount more than item price.",
  giftCardNumberValidation: "Gift Card Number Should be of 10 digits",
  giftCardNotReturnable: "Gift Card is not returnable.",
  companySettingsUpdated: "Company settings has been updated successfully",
  loayltyApplyTotalError:
    "You can't add loyalty discount more than item total.",
  loayltyAlreayApplytoItemMsg:
    "A Loyalty Program Discount can not be applied to an item and the whole order simultaneously.",
  loayltyPointsexceededMsg:
    "You have reached the maximum loyalty points limits than customer's accured reward points",
  loyaltyCustomerChangeCofirmMsg:
    "Changing the customer will remove all existing items loyalty discount from the cart, would you like to proceed?",
  TerminateMembership:
    "Are you sure you want to Terminate this Membership? Membership benefits will be available till end of billing cycle.",
  TerminateMembershipImmediately:
    "Are you sure you want to Terminate this Membership Immediately?",
  HoldMembership: "Are you sure you want to place this membership 'On Hold'?",
  membershipTerminated: "Membership has been terminated successfully.",
  membershipCardUpdated: "Card has been updated successfully.",
  canSaveCardDetails:
    "Would you like to save this Credit Card information to Auto Renew your Membership??",
  manageCardCharge:
    "We charge 0.01 to generate Card On File/Vault and refunds the amount immediately.",
  oneMembershipAllowed:
    "Only one membership product is allowed to add to cart.",
  activeMembershipExists: "already has an active membership.",
  onHoldMembership: 'has already assigned "On Hold" status Membership.',
  inActiveMembership: 'has already assigned "Inactive" status Membership.',
  selectPOSContentToShare: "Please select the content to share with users.",
  shareContentSuccess: "Content shared successfully.",
  deliveryHoursError:
    "You have select invalid time for store delivery, please select valid time.",
  confirmRemoveMembership:
    "The Membership feature must be enable to buy the previously selected membership product. Would you like to proceed and remove current membership products?",
  featureAddedSuccess: "A-la-carte feature has been added.",
  RemoveMembershipDiscount:
    "The Membership feature must be enable for the previously applied membership discount. Would you like to proceed and remove current membership discount?",
  markOrderDeliveredError:
    "Order should be in ready state to mark as delivered.",
  markOrderDeliveredPaymentError:
    "Please process payment for order before moving order delivery state to Delivered.",
  stateRequired: "Please select State.",
  streetAddressRequired: "Please enter street address.",
  cityRequired: "Please enter city.",
  postalCode: {
    required: "Please enter postal code.",
    validPostalCode: "Please enter valid postal code.",
    maxLength: "Max 10 characters are allowed in postal code.",
  },
  discountPriceCannotBeHigher:
    "Discount price cannot be higher than actual price.",
  typeServiceNameAndPressEnter: "Type Service Name And Press Enter.",
  membershipBeneficialQtyLimit:
    "has been reached to membership discount beneficial quantity limit.",
  loyaltyPointsConfirmation: (customer_name) => {
    return (
      customer_name +
      " has accrued LP points, which will be deleted becase the default account cannot accrue LP Points, would you like to proceed"
    );
  },
  wizardUsePermission: "You do not have permission to run the setup wizard",
  wizardSaveDataConfirmation:
    "Are you sure you want to leave without saving your changes?",
  atLeastOneOption: "Please select at least one option.",
  wizardOptOutWarningMessage:
    "You will not be able to use the wizard while it is in use by someone else. Continue to Opt Out?",
  downgradeConfirmation: "Are you sure you want to downgrade this ",
  upgradeSuccess: "Additional user tier has been upgraded.",
  downgradeSuccess: "Additional user tier has been downgraded.",
  sessionTimeout: "Session Expired",
  upgradeEmpSuccess: "Additional employee tier has been upgraded.",
  downgradeEmpSuccess: "Additional employee tier has been downgraded.",
  acceptTermsAndCondition:
    "Please accept terms and conditions before you proceed.",
  releaseBlockout: "All blocked employee have been released successfully",
  announcementUpdated: "Announcement message has been updated successfully.",
  acceptMembershipTandC:
    "Please accept terms and conditions first to purchase membership.",
};
export default MESSAGES;
