

/**
 * All Endpoint URL which we are using in the application
 * comes here...
 */

const endpointUrl: {
    dologin_url: string
    doRegistration_url: string
    profileUpdate_url: string
    loginStatus_url: string
    dologout_url: string,
    profileData_url: string,
    getbanner_url: string
    uniqueEmail_url: string,
    uniqueUserName_url: string
    getUserData_url: string,
    getData_url: string,
    getprofilebalance_url: string,
    getBalance_url: string,
    getLoginStatus_url: string,
    getGames_url: string;
    lanuchFreeGames_url: string
    getStaticPage_url: string,
    isCountryBlock_url: string,
    getUserUsedPIQAccounts: string,
    getToken: string,
    getEligibleBonus: string,
    getUserPIQMethods: string,
    makePayment_url: string,
    gettransactionStatus_url: string
    getLobbyGameGroups_url: string,
    getGameGroupGames_url: string
    getFavoriteGame_url: string
    getLastPlayedGames_url: string
    getFreeGame_url: string,
    getRealgame_url: string,
    toggleFavoriteGame_url: string;
    deletePaymentMethod_url: string;
    getPromotions_url: string;
    getTransactionhistory_url: string,
    getCashierTransactionHistory_url:string,
    forgot_password_url: string;
    reset_password_url: string;
    getBetTransactions_url: string;
    getSubscriptionpreferences_url: string;
    updatesubscriptionpreferenes_url: string;
    change_password_url: string;
    getActiveBonus_url: string;
    dropBonus_url: string;
    doprofile_update_url: string;
    getProfileCountryDetails_url: string
    setResponsibleGamingLimits_url: string,
    getLossLimits_url: string,
    getDepositLimit_url: string,
    getWagerLimit_url: string,
    suspendAccount_url: string,
    getSessionLimit_url: string
    uploadnationalId_url: string;
    uploadResidenceId_url: string;
    uploadCAFId_url: string;
    uploadDocuments: string;
    documentSend_url: string;
    accountVerficationstatus_url: string;
    cancelDepositLimits: string
    cancelRgLimits: string;
    getPendingWithdrawal_url: string;
    cancelTransaction_url: string;
    getUserLifeTimeTransactionSummary_url:string;
    getFaqQuestionAndCategories_url:string;
    checkUserPhoneAvailablity_url:string,
    getUserLevelupDetails_url:string,
    claimLevelupBonus_url:string,
    getUnclaimedLevels_url:string,
    zendeskToken:string,
    mgsJackpotFeed:string,
    mgsJackpotsTotal:string,
    getUserKycLevelDetails_url:string;
} = {
    dologin_url: '/ajax/login',
    doRegistration_url: '/ajax/registration',
    profileUpdate_url: 'updateProfile',
    loginStatus_url: '/ajax/login/status',
    dologout_url: '/ajax/login/logout',
    profileData_url: '/ajax/profile/getData',
    getbanner_url: '/ajax/banner/getBanners',
    uniqueEmail_url: '/ajax/registration/isUniqueEmail',
    uniqueUserName_url: '/ajax/registration/isUniqueNickname',
    getUserData_url: '/ajax/profile/getData',
    getData_url: '/ajax/profile/getData',
    getprofilebalance_url: '/ajax/profile/getProfileBalanceCurrency',
    getBalance_url: '/ajax/profile/getBalance',
    getLoginStatus_url: '/ajax/login/status',
    getStaticPage_url: '/ajax/staticPage/getPage',
    isCountryBlock_url: '/ajax/country/countryblock',
    getUserUsedPIQAccounts: '/api/user/account/:merchantId/:userId',
    getToken: '/ajax/token/getToken',
    getEligibleBonus: '/ajax/bonus/getEligibleBonuses',
    getUserPIQMethods: '/api/user/payment/method/:merchantId/:userId',
    makePayment_url: '/api/:provider/:type/:method',
    gettransactionStatus_url: '/api/user/transaction/:merchantId/:userId/:txRefId/status',
    getGames_url: '/ajax/game/getGames',
    lanuchFreeGames_url: '/ajax/launcher/getFreeGames',
    getLobbyGameGroups_url: '/ajax/game/getLobbyListWithGameGroups',
    getGameGroupGames_url: '/ajax/game/getLobbyGameGroupGames',
    getFavoriteGame_url: '/ajax/profile/getFavouriteGames',
    getLastPlayedGames_url: '/ajax/profile/getLastPlayedGames',
    getFreeGame_url: '/ajax/launcher/getFreeGames',
    getRealgame_url: '/ajax/launcher/getRealGames',
    toggleFavoriteGame_url: '/ajax/profile/toggleFavoriteGame',
    deletePaymentMethod_url: '/api/user/account/:merchantId/:userId/:accountId',
    getPromotions_url: '/ajax/promotion/getPromotions',
    getTransactionhistory_url: '/ajax/Report/getTransactionHistory',
    getCashierTransactionHistory_url:'/ajax/CashierTransactionReport/withdrawalDeposit',
    forgot_password_url: '/ajax/resetPassword',
    reset_password_url: '/ajax/resetPassword/doResetPassword',
    getBetTransactions_url: '/ajax/Report/getTransactionHistory',
    getSubscriptionpreferences_url: '/ajax/profile/getSubscriptionPreferenes',
    updatesubscriptionpreferenes_url : '/ajax/profile/updateSubscriptionPreferenes',
    change_password_url: '/ajax/profile/changePassword',
    getActiveBonus_url: '/ajax/Bonus/activeBonusDetails',
    dropBonus_url: '/ajax/bonus/drop',
    doprofile_update_url: '/ajax/profile/update',
    getProfileCountryDetails_url: '/ajax/profile/getcountryDetails',
    setResponsibleGamingLimits_url: '/ajax/ResponsibleGaming/setLimits',
    getLossLimits_url: '/ajax/balance/getLossLimit',
    getDepositLimit_url: '/ajax/balance/getDepositLimit',
    getWagerLimit_url: '/ajax/balance/getWagerLimit',
    suspendAccount_url: '/ajax/ResponsibleGaming/lockAccount',
    getSessionLimit_url: '/ajax/balance/getSessionLimit',
    uploadnationalId_url: '/ajax/account/Documents/upload?file=nationalid&accountId=',
    uploadResidenceId_url: '/ajax/account/Documents/upload?file=utilitybill&accountId=',
    uploadCAFId_url: "/ajax/account/Documents/upload?file=caf&accountId=",
    uploadDocuments:"/ajax/account/Documents/upload",
    documentSend_url: '/ajax/account/Documents/send',
    accountVerficationstatus_url: '/ajax/profile/getAccountVerificationStatus',
    cancelDepositLimits: '/ajax/ResponsibleGaming/confirmDepositLimits',
    cancelRgLimits: '/ajax/ResponsibleGaming/confirmLimits',
    getPendingWithdrawal_url : '/api/user/transaction/:merchantId/:userId',
    cancelTransaction_url: '/api/user/transaction/:merchantId/:userId/:transactionId',
    getUserLifeTimeTransactionSummary_url:'/ajax/cashier/getPlayerLifeTimeSummary',
    checkUserPhoneAvailablity_url:"/ajax/registration/checkUserPhoneAvailablity",
    getUserLevelupDetails_url:'/ajax/loyality/getUserLevelupDetails',
    claimLevelupBonus_url:'/ajax/loyality/claimLevelupBonus',
    getUnclaimedLevels_url:'/ajax/loyality/getUnclaimedLevels',
    getFaqQuestionAndCategories_url: "/ajax/faq/getQuestions",
    zendeskToken:"/ajax/profile/getZendeskToken",
    mgsJackpotFeed:"/counters",
    mgsJackpotsTotal:"/jackpots/total",
    getUserKycLevelDetails_url:'/ajax/profile/getUserKYCDetails'
};



export default endpointUrl;

