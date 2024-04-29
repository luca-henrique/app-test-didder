/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AccessAdministratorDashboard = {
  __typename?: 'AccessAdministratorDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  password: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  smsCode: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type AccessAdministratorDashboardReturn = {
  __typename?: 'AccessAdministratorDashboardReturn';
  data?: Maybe<AccessAdministratorDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AccessAdministratorDashboardReturnList = {
  __typename?: 'AccessAdministratorDashboardReturnList';
  data?: Maybe<Array<Maybe<AccessAdministratorDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AccessPartnerDashboard = {
  __typename?: 'AccessPartnerDashboard';
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type AccessPartnerDashboardReturn = {
  __typename?: 'AccessPartnerDashboardReturn';
  data?: Maybe<AccessPartnerDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AccessPartnerDashboardReturnList = {
  __typename?: 'AccessPartnerDashboardReturnList';
  data?: Maybe<Array<Maybe<AccessPartnerDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Agency = {
  __typename?: 'Agency';
  active: Scalars['Boolean']['output'];
  agencyCode: Scalars['Int']['output'];
  agencyComission: Scalars['Float']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  document: Scalars['String']['output'];
  documentPhotoBack: Scalars['String']['output'];
  documentPhotoFront: Scalars['String']['output'];
  emailAddress: Scalars['String']['output'];
  facebook?: Maybe<Scalars['String']['output']>;
  homeAddress: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  instagram: Scalars['String']['output'];
  isSubAgency: Scalars['Boolean']['output'];
  levelAgency: Scalars['Int']['output'];
  levelAgencyExperience: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  points: Scalars['Float']['output'];
  pointsAccumulatedCurrentMonth: Scalars['Float']['output'];
  pointsAccumulatedLastMonth: Scalars['Float']['output'];
  typeWithdrawalAgency: TypeWithdrawalAgency;
  updatedAt?: Maybe<Scalars['String']['output']>;
  userOwner?: Maybe<User>;
  userOwnerId: Scalars['Int']['output'];
  utc: Scalars['String']['output'];
  whatsapp: Scalars['String']['output'];
};

export type AgencyBalancePointDashboard = {
  __typename?: 'AgencyBalancePointDashboard';
  agency?: Maybe<AgencyDashboard>;
  agencyId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  dateHourBalance: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  pointsAfter: Scalars['Float']['output'];
  pointsBefore: Scalars['Float']['output'];
  typeAgencyBalancePoints?: Maybe<TypeAgencyBalancePoints>;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type AgencyBalancePointDashboardReturn = {
  __typename?: 'AgencyBalancePointDashboardReturn';
  data?: Maybe<AgencyBalancePointDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencyBalancePointDashboardReturnList = {
  __typename?: 'AgencyBalancePointDashboardReturnList';
  data?: Maybe<Array<Maybe<AgencyBalancePointDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AgencyBalancePoints = {
  __typename?: 'AgencyBalancePoints';
  agency?: Maybe<Agency>;
  agencyId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  dateHourBalance: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  pointsAfter: Scalars['Float']['output'];
  pointsBefore: Scalars['Float']['output'];
  typeAgencyBalancePoints?: Maybe<TypeAgencyBalancePoints>;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type AgencyBalancePointsReturn = {
  __typename?: 'AgencyBalancePointsReturn';
  data?: Maybe<AgencyBalancePoints>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencyBalancePointsReturnList = {
  __typename?: 'AgencyBalancePointsReturnList';
  data?: Maybe<Array<Maybe<AgencyBalancePoints>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencyBanned = {
  __typename?: 'AgencyBanned';
  agency?: Maybe<Agency>;
  agencyId: Scalars['Int']['output'];
  banDate: Scalars['String']['output'];
  banExpiryDate: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  reasonForBan: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type AgencyBannedDashboard = {
  __typename?: 'AgencyBannedDashboard';
  agency?: Maybe<AgencyDashboard>;
  agencyId: Scalars['Int']['output'];
  banDate: Scalars['String']['output'];
  banExpiryDate: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  reasonForBan: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type AgencyBannedDashboardReturn = {
  __typename?: 'AgencyBannedDashboardReturn';
  data?: Maybe<AgencyBannedDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencyBannedDashboardReturnList = {
  __typename?: 'AgencyBannedDashboardReturnList';
  data?: Maybe<Array<Maybe<AgencyBannedDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AgencyBannedDetail = {
  __typename?: 'AgencyBannedDetail';
  agencyBanned?: Maybe<AgencyBanned>;
  agencyBannedId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  proof: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type AgencyBannedDetailDashboard = {
  __typename?: 'AgencyBannedDetailDashboard';
  agencyBanned?: Maybe<AgencyBannedDashboard>;
  agencyBannedId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  proof: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type AgencyBannedDetailDashboardReturn = {
  __typename?: 'AgencyBannedDetailDashboardReturn';
  data?: Maybe<AgencyBannedDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencyBannedDetailDashboardReturnList = {
  __typename?: 'AgencyBannedDetailDashboardReturnList';
  data?: Maybe<Array<Maybe<AgencyBannedDetailDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AgencyBannedDetailReturn = {
  __typename?: 'AgencyBannedDetailReturn';
  data?: Maybe<AgencyBannedDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencyBannedDetailReturnList = {
  __typename?: 'AgencyBannedDetailReturnList';
  data?: Maybe<Array<Maybe<AgencyBannedDetail>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencyBannedReturn = {
  __typename?: 'AgencyBannedReturn';
  data?: Maybe<AgencyBanned>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencyBannedReturnList = {
  __typename?: 'AgencyBannedReturnList';
  data?: Maybe<Array<Maybe<AgencyBanned>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencyDashboard = {
  __typename?: 'AgencyDashboard';
  active: Scalars['Boolean']['output'];
  agencyCode: Scalars['Int']['output'];
  agencyComission: Scalars['Float']['output'];
  coinsForSale: Scalars['Float']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  document: Scalars['String']['output'];
  documentPhotoBack: Scalars['String']['output'];
  documentPhotoFront: Scalars['String']['output'];
  emailAddress: Scalars['String']['output'];
  facebook?: Maybe<Scalars['String']['output']>;
  homeAddress: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  instagram: Scalars['String']['output'];
  isReseller: Scalars['Boolean']['output'];
  isSubAgency: Scalars['Boolean']['output'];
  levelAgency: Scalars['Int']['output'];
  levelAgencyExperience: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  points: Scalars['Float']['output'];
  pointsAccumulatedCurrentMonth: Scalars['Float']['output'];
  pointsAccumulatedLastMonth: Scalars['Float']['output'];
  typeWithdrawalAgency: TypeWithdrawalAgency;
  updatedAt?: Maybe<Scalars['String']['output']>;
  userOwner?: Maybe<UserDashboard>;
  userOwnerApp?: Maybe<UserDashboard>;
  userOwnerAppId: Scalars['String']['output'];
  userOwnerId: Scalars['Int']['output'];
  utc: Scalars['String']['output'];
  whatsapp: Scalars['String']['output'];
};

export type AgencyDashboardReturn = {
  __typename?: 'AgencyDashboardReturn';
  data?: Maybe<AgencyDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencyDashboardReturnList = {
  __typename?: 'AgencyDashboardReturnList';
  data?: Maybe<Array<Maybe<AgencyDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AgencyResellerBalanceCoinDashboard = {
  __typename?: 'AgencyResellerBalanceCoinDashboard';
  agency?: Maybe<AgencyDashboard>;
  agencyId: Scalars['Int']['output'];
  coinsAfter: Scalars['Float']['output'];
  coinsBefore: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  dateHourBalance: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  typeAgencyResellerBalanceCoins?: Maybe<TypeAgencyResellerBalanceCoins>;
  updatedAt: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type AgencyResellerBalanceCoinDashboardReturn = {
  __typename?: 'AgencyResellerBalanceCoinDashboardReturn';
  data?: Maybe<AgencyResellerBalanceCoinDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencyResellerBalanceCoinDashboardReturnList = {
  __typename?: 'AgencyResellerBalanceCoinDashboardReturnList';
  data?: Maybe<Array<Maybe<AgencyResellerBalanceCoinDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AgencyReturn = {
  __typename?: 'AgencyReturn';
  data?: Maybe<Agency>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencyReturnList = {
  __typename?: 'AgencyReturnList';
  data?: Maybe<Array<Maybe<Agency>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencySaleDetail = {
  __typename?: 'AgencySaleDetail';
  agency?: Maybe<Agency>;
  agencyId: Scalars['Int']['output'];
  coins: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type AgencySaleDetailDashboard = {
  __typename?: 'AgencySaleDetailDashboard';
  agency?: Maybe<AgencyDashboard>;
  agencyId: Scalars['Int']['output'];
  coins: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  dateReceivedCoins: Scalars['String']['output'];
  dateSentCoins: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type AgencySaleDetailDashboardReturn = {
  __typename?: 'AgencySaleDetailDashboardReturn';
  data?: Maybe<AgencySaleDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencySaleDetailDashboardReturnList = {
  __typename?: 'AgencySaleDetailDashboardReturnList';
  data?: Maybe<Array<Maybe<AgencySaleDetailDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AgencySaleDetailReturn = {
  __typename?: 'AgencySaleDetailReturn';
  data?: Maybe<AgencySaleDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencySaleDetailReturnList = {
  __typename?: 'AgencySaleDetailReturnList';
  data?: Maybe<Array<Maybe<AgencySaleDetail>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencyUser = {
  __typename?: 'AgencyUser';
  accept: Scalars['Boolean']['output'];
  active: Scalars['Boolean']['output'];
  agency?: Maybe<Agency>;
  agencyId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  dateAccept?: Maybe<Scalars['String']['output']>;
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  dateRejected?: Maybe<Scalars['String']['output']>;
  dateReleased?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  rejected: Scalars['Boolean']['output'];
  released: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type AgencyUserDashboard = {
  __typename?: 'AgencyUserDashboard';
  accept: Scalars['Boolean']['output'];
  active: Scalars['Boolean']['output'];
  agency?: Maybe<AgencyDashboard>;
  agencyId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  dateAccept?: Maybe<Scalars['String']['output']>;
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  dateRejected?: Maybe<Scalars['String']['output']>;
  dateReleased?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  rejected: Scalars['Boolean']['output'];
  released: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type AgencyUserDashboardReturn = {
  __typename?: 'AgencyUserDashboardReturn';
  data?: Maybe<AgencyUserDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencyUserDashboardReturnList = {
  __typename?: 'AgencyUserDashboardReturnList';
  data?: Maybe<Array<Maybe<AgencyUserDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AgencyUserReturn = {
  __typename?: 'AgencyUserReturn';
  data?: Maybe<AgencyUser>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencyUserReturnList = {
  __typename?: 'AgencyUserReturnList';
  data?: Maybe<Array<Maybe<AgencyUser>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencyWarning = {
  __typename?: 'AgencyWarning';
  agency?: Maybe<Agency>;
  agencyId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  warningDate: Scalars['String']['output'];
  warningExpiryDate: Scalars['String']['output'];
};

export type AgencyWarningDashboard = {
  __typename?: 'AgencyWarningDashboard';
  agency?: Maybe<AgencyDashboard>;
  agencyId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  warningDate: Scalars['String']['output'];
  warningExpiryDate: Scalars['String']['output'];
};

export type AgencyWarningDashboardReturn = {
  __typename?: 'AgencyWarningDashboardReturn';
  data?: Maybe<AgencyWarningDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencyWarningDashboardReturnList = {
  __typename?: 'AgencyWarningDashboardReturnList';
  data?: Maybe<Array<Maybe<AgencyWarningDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AgencyWarningDetail = {
  __typename?: 'AgencyWarningDetail';
  agencyWarning?: Maybe<AgencyWarning>;
  agencyWarningId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  proof: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type AgencyWarningDetailDashboard = {
  __typename?: 'AgencyWarningDetailDashboard';
  agencyWarning?: Maybe<AgencyWarningDashboard>;
  agencyWarningId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  proof: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type AgencyWarningDetailDashboardReturn = {
  __typename?: 'AgencyWarningDetailDashboardReturn';
  data?: Maybe<AgencyWarningDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencyWarningDetailDashboardReturnList = {
  __typename?: 'AgencyWarningDetailDashboardReturnList';
  data?: Maybe<Array<Maybe<AgencyWarningDetailDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AgencyWarningDetailReturn = {
  __typename?: 'AgencyWarningDetailReturn';
  data?: Maybe<AgencyWarningDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencyWarningDetailReturnList = {
  __typename?: 'AgencyWarningDetailReturnList';
  data?: Maybe<Array<Maybe<AgencyWarningDetail>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencyWarningReturn = {
  __typename?: 'AgencyWarningReturn';
  data?: Maybe<AgencyWarning>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgencyWarningReturnList = {
  __typename?: 'AgencyWarningReturnList';
  data?: Maybe<Array<Maybe<AgencyWarning>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AppLog = {
  __typename?: 'AppLog';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  newJson?: Maybe<Scalars['String']['output']>;
  oldJson?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
  tableId: Scalars['Int']['output'];
  typeAppLogType: TypeAppLogType;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type AppLogDashboard = {
  __typename?: 'AppLogDashboard';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  newJson?: Maybe<Scalars['String']['output']>;
  oldJson?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
  tableId: Scalars['Int']['output'];
  typeAppLogType: TypeAppLogType;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type AppLogDashboardReturn = {
  __typename?: 'AppLogDashboardReturn';
  data?: Maybe<AppLogDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AppLogDashboardReturnList = {
  __typename?: 'AppLogDashboardReturnList';
  data?: Maybe<Array<Maybe<AppLogDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AppLogReturn = {
  __typename?: 'AppLogReturn';
  data?: Maybe<AppLog>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AppLogReturnList = {
  __typename?: 'AppLogReturnList';
  data?: Maybe<Array<Maybe<AppLog>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AppSetting = {
  __typename?: 'AppSetting';
  acceptSendForMe: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  gameLuckCoinMultipleCalculation: Scalars['Boolean']['output'];
  gameLuckSurpriseBoxDefaultGiftEarning?: Maybe<Gift>;
  gameLuckSurpriseBoxDefaultGiftIdEarning: Scalars['Int']['output'];
  gameLuckSurpriseBoxDefaultValueGiftEarning: Scalars['Int']['output'];
  gameLuckSurpriseBoxValueBet: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  minGiftSentPushAllCountry: Scalars['Int']['output'];
  minGiftSentPushCountry: Scalars['Int']['output'];
  minGiftSentPushLive: Scalars['Int']['output'];
  minReturnTimeGameLuckCoinAllCountry: Scalars['Int']['output'];
  minReturnTimeGameLuckCoinChat: Scalars['Int']['output'];
  minReturnTimeGameLuckCoinCountry: Scalars['Int']['output'];
  minReturnTimeGameLuckCoinMiddle: Scalars['Int']['output'];
  minReturnTimeGameLuckCoinSound: Scalars['Int']['output'];
  minReturnValueGameLuckBox: Scalars['Int']['output'];
  minReturnValueGameLuckCoinAllCountry: Scalars['Int']['output'];
  minReturnValueGameLuckCoinCountry: Scalars['Int']['output'];
  minReturnValueGameLuckCoinMiddle: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  utcDefault: Scalars['String']['output'];
};

export type AppSettingDashboard = {
  __typename?: 'AppSettingDashboard';
  acceptSendForMe: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  gameLuckCoinMultipleCalculation: Scalars['Boolean']['output'];
  gameLuckSurpriseBoxDefaultGiftIdEarning: Scalars['Int']['output'];
  gameLuckSurpriseBoxDefaultValueGiftEarning: Scalars['Int']['output'];
  gameLuckSurpriseBoxValueBet: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  minGiftSentPushCountry: Scalars['Int']['output'];
  minReturnTimeGameLuckCoinChat: Scalars['Int']['output'];
  minReturnTimeGameLuckCoinCountry: Scalars['Int']['output'];
  minReturnTimeGameLuckCoinMiddle: Scalars['Int']['output'];
  minReturnTimeGameLuckCoinSound: Scalars['Int']['output'];
  minReturnValueGameLuckBox: Scalars['Int']['output'];
  minReturnValueGameLuckCoinCountry: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  utcDefault: Scalars['String']['output'];
};

export type AppSettingDashboardReturn = {
  __typename?: 'AppSettingDashboardReturn';
  data?: Maybe<AppSettingDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AppSettingDashboardReturnList = {
  __typename?: 'AppSettingDashboardReturnList';
  data?: Maybe<Array<Maybe<AppSettingDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AppSettingReturn = {
  __typename?: 'AppSettingReturn';
  data?: Maybe<AppSetting>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AppSettingReturnList = {
  __typename?: 'AppSettingReturnList';
  data?: Maybe<Array<Maybe<AppSetting>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Badge = {
  __typename?: 'Badge';
  active: Scalars['Boolean']['output'];
  archive: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  typeBadge: TypeBadge;
  updatedAt: Scalars['String']['output'];
};

export type BadgeDashboard = {
  __typename?: 'BadgeDashboard';
  active: Scalars['Boolean']['output'];
  archive: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  typeBadge: TypeBadge;
  updatedAt: Scalars['String']['output'];
};

export type BadgeDashboardReturn = {
  __typename?: 'BadgeDashboardReturn';
  data?: Maybe<BadgeDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type BadgeDashboardReturnList = {
  __typename?: 'BadgeDashboardReturnList';
  data?: Maybe<Array<Maybe<BadgeDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type BadgeReturn = {
  __typename?: 'BadgeReturn';
  data?: Maybe<Badge>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type BadgeReturnList = {
  __typename?: 'BadgeReturnList';
  data?: Maybe<Array<Maybe<Badge>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type BannerLink = {
  __typename?: 'BannerLink';
  active: Scalars['Boolean']['output'];
  appId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  expiresIn?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  linkWebPage?: Maybe<Scalars['String']['output']>;
  typeBannerLink: TypeBannerLink;
  typeBannerLinkPage: TypeBannerLinkPage;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type BannerLinkDashboard = {
  __typename?: 'BannerLinkDashboard';
  active: Scalars['Boolean']['output'];
  appId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  expiresIn: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  linkWebPage?: Maybe<Scalars['String']['output']>;
  typeBannerLink: TypeBannerLink;
  typeBannerLinkPage: TypeBannerLinkPage;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type BannerLinkDashboardReturn = {
  __typename?: 'BannerLinkDashboardReturn';
  data?: Maybe<BannerLinkDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type BannerLinkDashboardReturnList = {
  __typename?: 'BannerLinkDashboardReturnList';
  data?: Maybe<Array<Maybe<BannerLinkDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type BannerLinkReturn = {
  __typename?: 'BannerLinkReturn';
  data?: Maybe<BannerLink>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type BannerLinkReturnList = {
  __typename?: 'BannerLinkReturnList';
  data?: Maybe<Array<Maybe<BannerLink>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Block = {
  __typename?: 'Block';
  blocked?: Maybe<User>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type BlockReturn = {
  __typename?: 'BlockReturn';
  data?: Maybe<Block>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Chat = {
  __typename?: 'Chat';
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  roomCode: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  userOne?: Maybe<User>;
  userOneId: Scalars['Int']['output'];
  userTwo?: Maybe<User>;
  userTwoId: Scalars['Int']['output'];
};

export type ChatDetail = {
  __typename?: 'ChatDetail';
  audio?: Maybe<Scalars['String']['output']>;
  chat?: Maybe<Chat>;
  chatId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  date: Scalars['String']['output'];
  deleted?: Maybe<Scalars['Boolean']['output']>;
  emoji?: Maybe<Scalars['String']['output']>;
  gif?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  message?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']['output']>;
  video?: Maybe<Scalars['String']['output']>;
};

export type ChatDetailReturn = {
  __typename?: 'ChatDetailReturn';
  data?: Maybe<ChatDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ChatDetailReturnList = {
  __typename?: 'ChatDetailReturnList';
  data?: Maybe<Array<Maybe<ChatDetail>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ChatReturn = {
  __typename?: 'ChatReturn';
  data?: Maybe<Chat>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ChatReturnList = {
  __typename?: 'ChatReturnList';
  data?: Maybe<Array<Maybe<Chat>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Comment = {
  __typename?: 'Comment';
  comment?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type ConfigReturn = {
  __typename?: 'ConfigReturn';
  data?: Maybe<UserConfig>;
  error?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type ConfirmationReturn = {
  __typename?: 'ConfirmationReturn';
  exists: Scalars['Boolean']['output'];
};

export type CountryCode = {
  __typename?: 'CountryCode';
  active: Scalars['Boolean']['output'];
  codeIsoAlpha2: Scalars['String']['output'];
  codeIsoAlpha3: Scalars['String']['output'];
  codeIsoNumeric: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  currency: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  ddi?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  extensionDomain: Scalars['String']['output'];
  iconFlag: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  region: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  usedInSearch: Scalars['Boolean']['output'];
};

export type CountryCodeDashboard = {
  __typename?: 'CountryCodeDashboard';
  active: Scalars['Boolean']['output'];
  codeIsoAlpha2: Scalars['String']['output'];
  codeIsoAlpha3: Scalars['String']['output'];
  codeIsoNumeric: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  currency: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  ddi?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  extensionDomain: Scalars['String']['output'];
  iconFlag: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  region: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  usedInSearch: Scalars['Boolean']['output'];
};

export type CountryCodeDashboardReturn = {
  __typename?: 'CountryCodeDashboardReturn';
  data?: Maybe<CountryCodeDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CountryCodeDashboardReturnList = {
  __typename?: 'CountryCodeDashboardReturnList';
  data?: Maybe<Array<Maybe<CountryCodeDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type CountryCodeReturn = {
  __typename?: 'CountryCodeReturn';
  data?: Maybe<CountryCode>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CountryCodeReturnList = {
  __typename?: 'CountryCodeReturnList';
  data?: Maybe<Array<Maybe<CountryCode>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type CreateAccessAdministratorDashboardReturn = {
  __typename?: 'CreateAccessAdministratorDashboardReturn';
  data?: Maybe<AccessAdministratorDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAccessAdministratorFakeDashboardReturn = {
  __typename?: 'CreateAccessAdministratorFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAccessPartnerDashboardReturn = {
  __typename?: 'CreateAccessPartnerDashboardReturn';
  data?: Maybe<AccessPartnerDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAccessPartnerFakeDashboardReturn = {
  __typename?: 'CreateAccessPartnerFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyBalancePointDashboardReturn = {
  __typename?: 'CreateAgencyBalancePointDashboardReturn';
  data?: Maybe<AgencyBalancePointDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyBalancePointFakeDashboardReturn = {
  __typename?: 'CreateAgencyBalancePointFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyBalancePointsFakeReturn = {
  __typename?: 'CreateAgencyBalancePointsFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyBalancePointsReturn = {
  __typename?: 'CreateAgencyBalancePointsReturn';
  data?: Maybe<AgencyBalancePoints>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyBannedDashboardReturn = {
  __typename?: 'CreateAgencyBannedDashboardReturn';
  data?: Maybe<AgencyBannedDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyBannedDetailDashboardReturn = {
  __typename?: 'CreateAgencyBannedDetailDashboardReturn';
  data?: Maybe<AgencyBannedDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyBannedDetailFakeDashboardReturn = {
  __typename?: 'CreateAgencyBannedDetailFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyBannedDetailFakeReturn = {
  __typename?: 'CreateAgencyBannedDetailFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyBannedDetailReturn = {
  __typename?: 'CreateAgencyBannedDetailReturn';
  data?: Maybe<AgencyBannedDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyBannedFakeDashboardReturn = {
  __typename?: 'CreateAgencyBannedFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyBannedFakeReturn = {
  __typename?: 'CreateAgencyBannedFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyBannedReturn = {
  __typename?: 'CreateAgencyBannedReturn';
  data?: Maybe<AgencyBanned>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyDashboardReturn = {
  __typename?: 'CreateAgencyDashboardReturn';
  data?: Maybe<AgencyDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyFakeDashboardReturn = {
  __typename?: 'CreateAgencyFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyFakeReturn = {
  __typename?: 'CreateAgencyFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyResellerBalanceCoinDashboardReturn = {
  __typename?: 'CreateAgencyResellerBalanceCoinDashboardReturn';
  data?: Maybe<AgencyResellerBalanceCoinDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyResellerBalanceCoinFakeDashboardReturn = {
  __typename?: 'CreateAgencyResellerBalanceCoinFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyReturn = {
  __typename?: 'CreateAgencyReturn';
  data?: Maybe<Agency>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencySaleDetailDashboardReturn = {
  __typename?: 'CreateAgencySaleDetailDashboardReturn';
  data?: Maybe<AgencySaleDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencySaleDetailFakeDashboardReturn = {
  __typename?: 'CreateAgencySaleDetailFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencySaleDetailFakeReturn = {
  __typename?: 'CreateAgencySaleDetailFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencySaleDetailReturn = {
  __typename?: 'CreateAgencySaleDetailReturn';
  data?: Maybe<AgencySaleDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyUserDashboardReturn = {
  __typename?: 'CreateAgencyUserDashboardReturn';
  data?: Maybe<AgencyUserDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyUserFakeDashboardReturn = {
  __typename?: 'CreateAgencyUserFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyUserFakeReturn = {
  __typename?: 'CreateAgencyUserFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyUserReturn = {
  __typename?: 'CreateAgencyUserReturn';
  data?: Maybe<AgencyUser>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyWarningDashboardReturn = {
  __typename?: 'CreateAgencyWarningDashboardReturn';
  data?: Maybe<AgencyWarningDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyWarningDetailDashboardReturn = {
  __typename?: 'CreateAgencyWarningDetailDashboardReturn';
  data?: Maybe<AgencyWarningDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyWarningDetailFakeDashboardReturn = {
  __typename?: 'CreateAgencyWarningDetailFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyWarningDetailFakeReturn = {
  __typename?: 'CreateAgencyWarningDetailFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyWarningDetailReturn = {
  __typename?: 'CreateAgencyWarningDetailReturn';
  data?: Maybe<AgencyWarningDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyWarningFakeDashboardReturn = {
  __typename?: 'CreateAgencyWarningFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyWarningFakeReturn = {
  __typename?: 'CreateAgencyWarningFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAgencyWarningReturn = {
  __typename?: 'CreateAgencyWarningReturn';
  data?: Maybe<AgencyWarning>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAppLogDashboardReturn = {
  __typename?: 'CreateAppLogDashboardReturn';
  data?: Maybe<AppLogDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAppLogFakeDashboardReturn = {
  __typename?: 'CreateAppLogFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAppLogFakeReturn = {
  __typename?: 'CreateAppLogFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAppLogReturn = {
  __typename?: 'CreateAppLogReturn';
  data?: Maybe<AppLog>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAppSettingDashboardReturn = {
  __typename?: 'CreateAppSettingDashboardReturn';
  data?: Maybe<AppSettingDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAppSettingFakeDashboardReturn = {
  __typename?: 'CreateAppSettingFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAppSettingFakeReturn = {
  __typename?: 'CreateAppSettingFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateAppSettingReturn = {
  __typename?: 'CreateAppSettingReturn';
  data?: Maybe<AppSetting>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateBadgeDashboardReturn = {
  __typename?: 'CreateBadgeDashboardReturn';
  data?: Maybe<BadgeDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateBadgeFakeDashboardReturn = {
  __typename?: 'CreateBadgeFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateBadgeFakeReturn = {
  __typename?: 'CreateBadgeFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateBadgeReturn = {
  __typename?: 'CreateBadgeReturn';
  data?: Maybe<Badge>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateBannerLinkDashboardReturn = {
  __typename?: 'CreateBannerLinkDashboardReturn';
  data?: Maybe<BannerLinkDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateBannerLinkFakeDashboardReturn = {
  __typename?: 'CreateBannerLinkFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateBannerLinkFakeReturn = {
  __typename?: 'CreateBannerLinkFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateBannerLinkReturn = {
  __typename?: 'CreateBannerLinkReturn';
  data?: Maybe<BannerLink>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateChatDetailFakeReturn = {
  __typename?: 'CreateChatDetailFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateChatDetailReturn = {
  __typename?: 'CreateChatDetailReturn';
  data?: Maybe<ChatDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateChatFakeReturn = {
  __typename?: 'CreateChatFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateChatReturn = {
  __typename?: 'CreateChatReturn';
  data?: Maybe<Chat>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateCountryCodeDashboardReturn = {
  __typename?: 'CreateCountryCodeDashboardReturn';
  data?: Maybe<CountryCodeDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateCountryCodeFakeDashboardReturn = {
  __typename?: 'CreateCountryCodeFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateCountryCodeFakeReturn = {
  __typename?: 'CreateCountryCodeFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateCountryCodeReturn = {
  __typename?: 'CreateCountryCodeReturn';
  data?: Maybe<CountryCode>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateDomainDashboardReturn = {
  __typename?: 'CreateDomainDashboardReturn';
  data?: Maybe<DomainDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateDomainFakeDashboardReturn = {
  __typename?: 'CreateDomainFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateEventDashboardReturn = {
  __typename?: 'CreateEventDashboardReturn';
  data?: Maybe<EventDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateEventFakeDashboardReturn = {
  __typename?: 'CreateEventFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateEventFakeReturn = {
  __typename?: 'CreateEventFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateEventReturn = {
  __typename?: 'CreateEventReturn';
  data?: Maybe<Event>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateExampleOtherOneDashboardReturn = {
  __typename?: 'CreateExampleOtherOneDashboardReturn';
  data?: Maybe<ExampleOtherOneDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateExampleOtherOneFakeDashboardReturn = {
  __typename?: 'CreateExampleOtherOneFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateExampleOtherTwoDashboardReturn = {
  __typename?: 'CreateExampleOtherTwoDashboardReturn';
  data?: Maybe<ExampleOtherTwoDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateExampleOtherTwoFakeDashboardReturn = {
  __typename?: 'CreateExampleOtherTwoFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateExampleTableDashboardReturn = {
  __typename?: 'CreateExampleTableDashboardReturn';
  data?: Maybe<ExampleTableDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateExampleTableFakeDashboardReturn = {
  __typename?: 'CreateExampleTableFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFakeDataReturn = {
  __typename?: 'CreateFakeDataReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyDashboardReturn = {
  __typename?: 'CreateFamilyDashboardReturn';
  data?: Maybe<FamilyDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyFakeDashboardReturn = {
  __typename?: 'CreateFamilyFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyFakeReturn = {
  __typename?: 'CreateFamilyFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyForceBenefitDashboardReturn = {
  __typename?: 'CreateFamilyForceBenefitDashboardReturn';
  data?: Maybe<FamilyForceBenefitDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyForceBenefitDetailDashboardReturn = {
  __typename?: 'CreateFamilyForceBenefitDetailDashboardReturn';
  data?: Maybe<FamilyForceBenefitDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyForceBenefitDetailFakeDashboardReturn = {
  __typename?: 'CreateFamilyForceBenefitDetailFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyForceBenefitDetailFakeReturn = {
  __typename?: 'CreateFamilyForceBenefitDetailFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyForceBenefitDetailReturn = {
  __typename?: 'CreateFamilyForceBenefitDetailReturn';
  data?: Maybe<FamilyForceBenefitDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyForceBenefitFakeDashboardReturn = {
  __typename?: 'CreateFamilyForceBenefitFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyForceBenefitFakeReturn = {
  __typename?: 'CreateFamilyForceBenefitFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyForceBenefitReturn = {
  __typename?: 'CreateFamilyForceBenefitReturn';
  data?: Maybe<FamilyForceBenefit>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyForceDashboardReturn = {
  __typename?: 'CreateFamilyForceDashboardReturn';
  data?: Maybe<FamilyForceDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyForceFakeDashboardReturn = {
  __typename?: 'CreateFamilyForceFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyForceFakeReturn = {
  __typename?: 'CreateFamilyForceFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyForceReturn = {
  __typename?: 'CreateFamilyForceReturn';
  data?: Maybe<FamilyForce>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyMemberDashboardReturn = {
  __typename?: 'CreateFamilyMemberDashboardReturn';
  data?: Maybe<FamilyMemberDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyMemberFakeDashboardReturn = {
  __typename?: 'CreateFamilyMemberFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyMemberFakeReturn = {
  __typename?: 'CreateFamilyMemberFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyMemberReturn = {
  __typename?: 'CreateFamilyMemberReturn';
  data?: Maybe<FamilyMember>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyReturn = {
  __typename?: 'CreateFamilyReturn';
  data?: Maybe<Family>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskMemberDashboardReturn = {
  __typename?: 'CreateFamilyTaskMemberDashboardReturn';
  data?: Maybe<FamilyTaskMemberDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskMemberFakeDashboardReturn = {
  __typename?: 'CreateFamilyTaskMemberFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskMemberFakeReturn = {
  __typename?: 'CreateFamilyTaskMemberFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskMemberHardDashboardReturn = {
  __typename?: 'CreateFamilyTaskMemberHardDashboardReturn';
  data?: Maybe<FamilyTaskMemberHardDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskMemberHardFakeDashboardReturn = {
  __typename?: 'CreateFamilyTaskMemberHardFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskMemberHardFakeReturn = {
  __typename?: 'CreateFamilyTaskMemberHardFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskMemberHardReturn = {
  __typename?: 'CreateFamilyTaskMemberHardReturn';
  data?: Maybe<FamilyTaskMemberHard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskMemberReturn = {
  __typename?: 'CreateFamilyTaskMemberReturn';
  data?: Maybe<FamilyTaskMember>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskProgressDashboardReturn = {
  __typename?: 'CreateFamilyTaskProgressDashboardReturn';
  data?: Maybe<FamilyTaskProgressDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskProgressFakeDashboardReturn = {
  __typename?: 'CreateFamilyTaskProgressFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskProgressFakeReturn = {
  __typename?: 'CreateFamilyTaskProgressFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskProgressReceivedDashboardReturn = {
  __typename?: 'CreateFamilyTaskProgressReceivedDashboardReturn';
  data?: Maybe<FamilyTaskProgressReceivedDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskProgressReceivedFakeDashboardReturn = {
  __typename?: 'CreateFamilyTaskProgressReceivedFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskProgressReceivedFakeReturn = {
  __typename?: 'CreateFamilyTaskProgressReceivedFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskProgressReceivedReturn = {
  __typename?: 'CreateFamilyTaskProgressReceivedReturn';
  data?: Maybe<FamilyTaskProgressReceived>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskProgressReturn = {
  __typename?: 'CreateFamilyTaskProgressReturn';
  data?: Maybe<FamilyTaskProgress>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskTypeDashboardReturn = {
  __typename?: 'CreateFamilyTaskTypeDashboardReturn';
  data?: Maybe<FamilyTaskTypeDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskTypeFakeDashboardReturn = {
  __typename?: 'CreateFamilyTaskTypeFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskTypeFakeReturn = {
  __typename?: 'CreateFamilyTaskTypeFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskTypeHardDashboardReturn = {
  __typename?: 'CreateFamilyTaskTypeHardDashboardReturn';
  data?: Maybe<FamilyTaskTypeHardDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskTypeHardFakeDashboardReturn = {
  __typename?: 'CreateFamilyTaskTypeHardFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskTypeHardFakeReturn = {
  __typename?: 'CreateFamilyTaskTypeHardFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskTypeHardReturn = {
  __typename?: 'CreateFamilyTaskTypeHardReturn';
  data?: Maybe<FamilyTaskTypeHard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskTypeProgressDashboardReturn = {
  __typename?: 'CreateFamilyTaskTypeProgressDashboardReturn';
  data?: Maybe<FamilyTaskTypeProgressDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskTypeProgressFakeDashboardReturn = {
  __typename?: 'CreateFamilyTaskTypeProgressFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskTypeProgressFakeReturn = {
  __typename?: 'CreateFamilyTaskTypeProgressFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskTypeProgressReturn = {
  __typename?: 'CreateFamilyTaskTypeProgressReturn';
  data?: Maybe<FamilyTaskTypeProgress>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateFamilyTaskTypeReturn = {
  __typename?: 'CreateFamilyTaskTypeReturn';
  data?: Maybe<FamilyTaskType>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGameConfigurationDefaultEarningDashboardReturn = {
  __typename?: 'CreateGameConfigurationDefaultEarningDashboardReturn';
  data?: Maybe<GameConfigurationDefaultEarningDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGameConfigurationDefaultEarningFakeDashboardReturn = {
  __typename?: 'CreateGameConfigurationDefaultEarningFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGameConfigurationDefaultEarningFakeReturn = {
  __typename?: 'CreateGameConfigurationDefaultEarningFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGameConfigurationDefaultEarningReturn = {
  __typename?: 'CreateGameConfigurationDefaultEarningReturn';
  data?: Maybe<GameConfigurationDefaultEarning>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGameConfigurationLuckCoinDashboardReturn = {
  __typename?: 'CreateGameConfigurationLuckCoinDashboardReturn';
  data?: Maybe<GameConfigurationLuckCoinDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGameConfigurationLuckCoinFakeDashboardReturn = {
  __typename?: 'CreateGameConfigurationLuckCoinFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGameConfigurationLuckCoinFakeReturn = {
  __typename?: 'CreateGameConfigurationLuckCoinFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGameConfigurationLuckCoinReturn = {
  __typename?: 'CreateGameConfigurationLuckCoinReturn';
  data?: Maybe<GameConfigurationLuckCoin>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGameConfigurationSurpriseBoxDashboardReturn = {
  __typename?: 'CreateGameConfigurationSurpriseBoxDashboardReturn';
  data?: Maybe<GameConfigurationSurpriseBoxDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGameConfigurationSurpriseBoxFakeDashboardReturn = {
  __typename?: 'CreateGameConfigurationSurpriseBoxFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGameConfigurationSurpriseBoxFakeReturn = {
  __typename?: 'CreateGameConfigurationSurpriseBoxFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGameConfigurationSurpriseBoxReturn = {
  __typename?: 'CreateGameConfigurationSurpriseBoxReturn';
  data?: Maybe<GameConfigurationSurpriseBox>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGameLuckSurpriseBoxDashboardReturn = {
  __typename?: 'CreateGameLuckSurpriseBoxDashboardReturn';
  data?: Maybe<GameLuckSurpriseBoxDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGameLuckSurpriseBoxFakeDashboardReturn = {
  __typename?: 'CreateGameLuckSurpriseBoxFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGameLuckSurpriseBoxFakeReturn = {
  __typename?: 'CreateGameLuckSurpriseBoxFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGameLuckSurpriseBoxReturn = {
  __typename?: 'CreateGameLuckSurpriseBoxReturn';
  data?: Maybe<Array<Maybe<GameLuckSurpriseBoxReturnCustom>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGiftDashboardReturn = {
  __typename?: 'CreateGiftDashboardReturn';
  data?: Maybe<GiftDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGiftDashboardSentReturn = {
  __typename?: 'CreateGiftDashboardSentReturn';
  data?: Maybe<GiftSent>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGiftEventDashboardReturn = {
  __typename?: 'CreateGiftEventDashboardReturn';
  data?: Maybe<GiftEventDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGiftEventFakeDashboardReturn = {
  __typename?: 'CreateGiftEventFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGiftEventReturn = {
  __typename?: 'CreateGiftEventReturn';
  data?: Maybe<GiftEvent>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGiftFakeDashboardReturn = {
  __typename?: 'CreateGiftFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGiftReturn = {
  __typename?: 'CreateGiftReturn';
  data?: Maybe<Gift>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGiftSentDashboardReturn = {
  __typename?: 'CreateGiftSentDashboardReturn';
  data?: Maybe<GiftSentDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGiftSentFakeDashboardReturn = {
  __typename?: 'CreateGiftSentFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGiftSentFakeReturn = {
  __typename?: 'CreateGiftSentFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGiftSentLuckCoinFakeDashboardReturn = {
  __typename?: 'CreateGiftSentLuckCoinFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGiftSentReturn = {
  __typename?: 'CreateGiftSentReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGiftSentReturnCustom = {
  __typename?: 'CreateGiftSentReturnCustom';
  data?: Maybe<Array<Maybe<GiftSentCustomReturn>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGiftTypeDashboardReturn = {
  __typename?: 'CreateGiftTypeDashboardReturn';
  data?: Maybe<GiftTypeDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGiftTypeFakeDashboardReturn = {
  __typename?: 'CreateGiftTypeFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateGiftTypeReturn = {
  __typename?: 'CreateGiftTypeReturn';
  data?: Maybe<GiftType>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateInvitationDashboardReturn = {
  __typename?: 'CreateInvitationDashboardReturn';
  data?: Maybe<InvitationDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateInvitationFakeDashboardReturn = {
  __typename?: 'CreateInvitationFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateInvitationFakeReturn = {
  __typename?: 'CreateInvitationFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateInvitationReturn = {
  __typename?: 'CreateInvitationReturn';
  data?: Maybe<Invitation>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateInvitationRewardDashboardReturn = {
  __typename?: 'CreateInvitationRewardDashboardReturn';
  data?: Maybe<InvitationRewardDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateInvitationRewardFakeDashboardReturn = {
  __typename?: 'CreateInvitationRewardFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateInvitationRewardFakeReturn = {
  __typename?: 'CreateInvitationRewardFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateInvitationRewardReturn = {
  __typename?: 'CreateInvitationRewardReturn';
  data?: Maybe<InvitationReward>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateItemDashboardReturn = {
  __typename?: 'CreateItemDashboardReturn';
  data?: Maybe<ItemDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateItemFakeDashboardReturn = {
  __typename?: 'CreateItemFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateItemFakeReturn = {
  __typename?: 'CreateItemFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateItemPurchasedDashboardReturn = {
  __typename?: 'CreateItemPurchasedDashboardReturn';
  data?: Maybe<ItemPurchasedDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateItemPurchasedFakeDashboardReturn = {
  __typename?: 'CreateItemPurchasedFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateItemPurchasedFakeReturn = {
  __typename?: 'CreateItemPurchasedFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateItemPurchasedReturn = {
  __typename?: 'CreateItemPurchasedReturn';
  data?: Maybe<ItemPurchased>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateItemReturn = {
  __typename?: 'CreateItemReturn';
  data?: Maybe<Item>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLevelHostDashboardReturn = {
  __typename?: 'CreateLevelHostDashboardReturn';
  data?: Maybe<LevelHostDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLevelHostFakeDashboardReturn = {
  __typename?: 'CreateLevelHostFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLevelHostFakeReturn = {
  __typename?: 'CreateLevelHostFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLevelHostReturn = {
  __typename?: 'CreateLevelHostReturn';
  data?: Maybe<LevelHost>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLevelSpectatorDashboardReturn = {
  __typename?: 'CreateLevelSpectatorDashboardReturn';
  data?: Maybe<LevelSpectatorDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLevelSpectatorFakeDashboardReturn = {
  __typename?: 'CreateLevelSpectatorFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLevelSpectatorFakeReturn = {
  __typename?: 'CreateLevelSpectatorFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLevelSpectatorReturn = {
  __typename?: 'CreateLevelSpectatorReturn';
  data?: Maybe<LevelSpectator>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveDashboardReturn = {
  __typename?: 'CreateLiveDashboardReturn';
  data?: Maybe<LiveDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveDetailGuestDashboardReturn = {
  __typename?: 'CreateLiveDetailGuestDashboardReturn';
  data?: Maybe<LiveDetailGuestDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveDetailGuestFakeDashboardReturn = {
  __typename?: 'CreateLiveDetailGuestFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveDetailGuestFakeReturn = {
  __typename?: 'CreateLiveDetailGuestFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveDetailGuestReturn = {
  __typename?: 'CreateLiveDetailGuestReturn';
  data?: Maybe<Array<Maybe<LiveDetailGuest>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveDetailPeopleDashboardReturn = {
  __typename?: 'CreateLiveDetailPeopleDashboardReturn';
  data?: Maybe<LiveDetailPeopleDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveDetailPeopleFakeDashboardReturn = {
  __typename?: 'CreateLiveDetailPeopleFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveDetailPeopleFakeReturn = {
  __typename?: 'CreateLiveDetailPeopleFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveDetailPeopleReturn = {
  __typename?: 'CreateLiveDetailPeopleReturn';
  data?: Maybe<LiveDetailPeople>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveDetailTagDashboardReturn = {
  __typename?: 'CreateLiveDetailTagDashboardReturn';
  data?: Maybe<LiveDetailTagDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveDetailTagFakeDashboardReturn = {
  __typename?: 'CreateLiveDetailTagFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveDetailTagFakeReturn = {
  __typename?: 'CreateLiveDetailTagFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveDetailTagReturn = {
  __typename?: 'CreateLiveDetailTagReturn';
  data?: Maybe<LiveDetailTag>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveFakeDashboardReturn = {
  __typename?: 'CreateLiveFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveFakeReturn = {
  __typename?: 'CreateLiveFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveFilterDashboardReturn = {
  __typename?: 'CreateLiveFilterDashboardReturn';
  data?: Maybe<LiveFilterDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveFilterFakeDashboardReturn = {
  __typename?: 'CreateLiveFilterFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveFilterFakeReturn = {
  __typename?: 'CreateLiveFilterFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveFilterReturn = {
  __typename?: 'CreateLiveFilterReturn';
  data?: Maybe<LiveFilter>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveReportDashboardReturn = {
  __typename?: 'CreateLiveReportDashboardReturn';
  data?: Maybe<LiveReportDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveReportFakeDashboardReturn = {
  __typename?: 'CreateLiveReportFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveReportFakeReturn = {
  __typename?: 'CreateLiveReportFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveReportReturn = {
  __typename?: 'CreateLiveReportReturn';
  data?: Maybe<LiveReport>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveResumeDashboardReturn = {
  __typename?: 'CreateLiveResumeDashboardReturn';
  data?: Maybe<LiveResumeDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveResumeFakeDashboardReturn = {
  __typename?: 'CreateLiveResumeFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveResumeFakeReturn = {
  __typename?: 'CreateLiveResumeFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveResumeReturn = {
  __typename?: 'CreateLiveResumeReturn';
  data?: Maybe<LiveResume>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveReturn = {
  __typename?: 'CreateLiveReturn';
  data?: Maybe<Live>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveSettingDashboardReturn = {
  __typename?: 'CreateLiveSettingDashboardReturn';
  data?: Maybe<LiveSettingDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveSettingFakeDashboardReturn = {
  __typename?: 'CreateLiveSettingFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveSettingFakeReturn = {
  __typename?: 'CreateLiveSettingFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveSettingReturn = {
  __typename?: 'CreateLiveSettingReturn';
  data?: Maybe<LiveSetting>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveStickerDashboardReturn = {
  __typename?: 'CreateLiveStickerDashboardReturn';
  data?: Maybe<LiveStickerDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveStickerFakeDashboardReturn = {
  __typename?: 'CreateLiveStickerFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveStickerFakeReturn = {
  __typename?: 'CreateLiveStickerFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveStickerReturn = {
  __typename?: 'CreateLiveStickerReturn';
  data?: Maybe<LiveSticker>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveTagDashboardReturn = {
  __typename?: 'CreateLiveTagDashboardReturn';
  data?: Maybe<LiveTagDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveTagFakeDashboardReturn = {
  __typename?: 'CreateLiveTagFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveTagFakeReturn = {
  __typename?: 'CreateLiveTagFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveTagReturn = {
  __typename?: 'CreateLiveTagReturn';
  data?: Maybe<LiveTag>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveTypeReportDashboardReturn = {
  __typename?: 'CreateLiveTypeReportDashboardReturn';
  data?: Maybe<LiveTypeReportDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveTypeReportFakeDashboardReturn = {
  __typename?: 'CreateLiveTypeReportFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveTypeReportFakeReturn = {
  __typename?: 'CreateLiveTypeReportFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateLiveTypeReportReturn = {
  __typename?: 'CreateLiveTypeReportReturn';
  data?: Maybe<LiveTypeReport>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateMessageChatReturn = {
  __typename?: 'CreateMessageChatReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePaymentAgentDashboardReturn = {
  __typename?: 'CreatePaymentAgentDashboardReturn';
  data?: Maybe<PaymentAgentDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePaymentAgentFakeDashboardReturn = {
  __typename?: 'CreatePaymentAgentFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePaymentAgentFakeReturn = {
  __typename?: 'CreatePaymentAgentFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePaymentAgentPaidDashboardReturn = {
  __typename?: 'CreatePaymentAgentPaidDashboardReturn';
  data?: Maybe<PaymentAgentPaidDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePaymentAgentPaidFakeDashboardReturn = {
  __typename?: 'CreatePaymentAgentPaidFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePaymentAgentPaidFakeReturn = {
  __typename?: 'CreatePaymentAgentPaidFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePaymentAgentPaidReturn = {
  __typename?: 'CreatePaymentAgentPaidReturn';
  data?: Maybe<PaymentAgentPaid>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePaymentAgentReturn = {
  __typename?: 'CreatePaymentAgentReturn';
  data?: Maybe<PaymentAgent>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePlatformSellerForAgencyDashboardReturn = {
  __typename?: 'CreatePlatformSellerForAgencyDashboardReturn';
  data?: Maybe<PlatformSellerForAgencyDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePlatformSellerForAgencyFakeDashboardReturn = {
  __typename?: 'CreatePlatformSellerForAgencyFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePlatformSellerForAgencyFakeReturn = {
  __typename?: 'CreatePlatformSellerForAgencyFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePlatformSellerForAgencyPriceDashboardReturn = {
  __typename?: 'CreatePlatformSellerForAgencyPriceDashboardReturn';
  data?: Maybe<PlatformSellerForAgencyPriceDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePlatformSellerForAgencyPriceFakeDashboardReturn = {
  __typename?: 'CreatePlatformSellerForAgencyPriceFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePlatformSellerForAgencyPriceFakeReturn = {
  __typename?: 'CreatePlatformSellerForAgencyPriceFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePlatformSellerForAgencyPriceReturn = {
  __typename?: 'CreatePlatformSellerForAgencyPriceReturn';
  data?: Maybe<PlatformSellerForAgencyPrice>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePlatformSellerForAgencyProofDashboardReturn = {
  __typename?: 'CreatePlatformSellerForAgencyProofDashboardReturn';
  data?: Maybe<PlatformSellerForAgencyProofDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePlatformSellerForAgencyProofFakeDashboardReturn = {
  __typename?: 'CreatePlatformSellerForAgencyProofFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePlatformSellerForAgencyProofFakeReturn = {
  __typename?: 'CreatePlatformSellerForAgencyProofFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePlatformSellerForAgencyProofReturn = {
  __typename?: 'CreatePlatformSellerForAgencyProofReturn';
  data?: Maybe<PlatformSellerForAgencyProof>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePlatformSellerForAgencyReturn = {
  __typename?: 'CreatePlatformSellerForAgencyReturn';
  data?: Maybe<PlatformSellerForAgency>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePlatformSellerForUserDashboardReturn = {
  __typename?: 'CreatePlatformSellerForUserDashboardReturn';
  data?: Maybe<PlatformSellerForUserDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePlatformSellerForUserFakeDashboardReturn = {
  __typename?: 'CreatePlatformSellerForUserFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePlatformSellerForUserFakeReturn = {
  __typename?: 'CreatePlatformSellerForUserFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePlatformSellerForUserPriceDashboardReturn = {
  __typename?: 'CreatePlatformSellerForUserPriceDashboardReturn';
  data?: Maybe<PlatformSellerForUserPriceDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePlatformSellerForUserPriceFakeDashboardReturn = {
  __typename?: 'CreatePlatformSellerForUserPriceFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePlatformSellerForUserPriceFakeReturn = {
  __typename?: 'CreatePlatformSellerForUserPriceFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePlatformSellerForUserPriceReturn = {
  __typename?: 'CreatePlatformSellerForUserPriceReturn';
  data?: Maybe<PlatformSellerForUserPrice>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePlatformSellerForUserReturn = {
  __typename?: 'CreatePlatformSellerForUserReturn';
  data?: Maybe<PlatformSellerForUser>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePostCommentDashboardReturn = {
  __typename?: 'CreatePostCommentDashboardReturn';
  data?: Maybe<PostCommentDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePostCommentFakeDashboardReturn = {
  __typename?: 'CreatePostCommentFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePostCommentReturn = {
  __typename?: 'CreatePostCommentReturn';
  data?: Maybe<PostComment>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePostDashboardReturn = {
  __typename?: 'CreatePostDashboardReturn';
  data?: Maybe<PostDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePostFakeDashboardReturn = {
  __typename?: 'CreatePostFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePostLikeDashboardReturn = {
  __typename?: 'CreatePostLikeDashboardReturn';
  data?: Maybe<PostLikeDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePostLikeFakeDashboardReturn = {
  __typename?: 'CreatePostLikeFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePostLikeReturn = {
  __typename?: 'CreatePostLikeReturn';
  data?: Maybe<PostLike>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePostReturn = {
  __typename?: 'CreatePostReturn';
  data?: Maybe<Post>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePostTagDashboardReturn = {
  __typename?: 'CreatePostTagDashboardReturn';
  data?: Maybe<PostTagDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePostTagFakeDashboardReturn = {
  __typename?: 'CreatePostTagFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreatePostTagReturn = {
  __typename?: 'CreatePostTagReturn';
  data?: Maybe<PostTag>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateTagDashboardReturn = {
  __typename?: 'CreateTagDashboardReturn';
  data?: Maybe<TagDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateTagFakeDashboardReturn = {
  __typename?: 'CreateTagFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateTagFakeReturn = {
  __typename?: 'CreateTagFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateTagReturn = {
  __typename?: 'CreateTagReturn';
  data?: Maybe<Tag>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateTaskTypeHostDashboardReturn = {
  __typename?: 'CreateTaskTypeHostDashboardReturn';
  data?: Maybe<TaskTypeHostDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateTaskTypeHostFakeDashboardReturn = {
  __typename?: 'CreateTaskTypeHostFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateTaskTypeHostFakeReturn = {
  __typename?: 'CreateTaskTypeHostFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateTaskTypeHostReturn = {
  __typename?: 'CreateTaskTypeHostReturn';
  data?: Maybe<TaskTypeHost>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateTaskTypeSpectatorDashboardReturn = {
  __typename?: 'CreateTaskTypeSpectatorDashboardReturn';
  data?: Maybe<TaskTypeSpectatorDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateTaskTypeSpectatorFakeDashboardReturn = {
  __typename?: 'CreateTaskTypeSpectatorFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateTaskTypeSpectatorFakeReturn = {
  __typename?: 'CreateTaskTypeSpectatorFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateTaskTypeSpectatorReturn = {
  __typename?: 'CreateTaskTypeSpectatorReturn';
  data?: Maybe<TaskTypeSpectator>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateTaskUserHostDashboardReturn = {
  __typename?: 'CreateTaskUserHostDashboardReturn';
  data?: Maybe<TaskUserHostDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateTaskUserHostFakeDashboardReturn = {
  __typename?: 'CreateTaskUserHostFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateTaskUserHostFakeReturn = {
  __typename?: 'CreateTaskUserHostFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateTaskUserHostReturn = {
  __typename?: 'CreateTaskUserHostReturn';
  data?: Maybe<TaskUserHost>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateTaskUserSpectatorDashboardReturn = {
  __typename?: 'CreateTaskUserSpectatorDashboardReturn';
  data?: Maybe<TaskUserSpectatorDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateTaskUserSpectatorFakeDashboardReturn = {
  __typename?: 'CreateTaskUserSpectatorFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateTaskUserSpectatorFakeReturn = {
  __typename?: 'CreateTaskUserSpectatorFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateTaskUserSpectatorReturn = {
  __typename?: 'CreateTaskUserSpectatorReturn';
  data?: Maybe<TaskUserSpectator>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserAdministratorProfileActivityDashboardReturn = {
  __typename?: 'CreateUserAdministratorProfileActivityDashboardReturn';
  data?: Maybe<UserAdministratorProfileActivityDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserAdministratorProfileActivityFakeDashboardReturn = {
  __typename?: 'CreateUserAdministratorProfileActivityFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserAdministratorProfileActivityFakeReturn = {
  __typename?: 'CreateUserAdministratorProfileActivityFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserAdministratorProfileActivityReturn = {
  __typename?: 'CreateUserAdministratorProfileActivityReturn';
  data?: Maybe<UserAdministratorProfileActivity>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserAdministratorProfileDashboardReturn = {
  __typename?: 'CreateUserAdministratorProfileDashboardReturn';
  data?: Maybe<UserAdministratorProfileDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserAdministratorProfileFakeDashboardReturn = {
  __typename?: 'CreateUserAdministratorProfileFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserAdministratorProfileFakeReturn = {
  __typename?: 'CreateUserAdministratorProfileFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserAdministratorProfileReturn = {
  __typename?: 'CreateUserAdministratorProfileReturn';
  data?: Maybe<UserAdministratorProfile>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserAppUidDashboardReturn = {
  __typename?: 'CreateUserAppUidDashboardReturn';
  data?: Maybe<UserAppUidDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserAppUidFakeDashboardReturn = {
  __typename?: 'CreateUserAppUidFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserAppUidFakeReturn = {
  __typename?: 'CreateUserAppUidFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserAppUidReturn = {
  __typename?: 'CreateUserAppUidReturn';
  data?: Maybe<UserAppUid>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBadgeDashboardReturn = {
  __typename?: 'CreateUserBadgeDashboardReturn';
  data?: Maybe<UserBadgeDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBadgeFakeDashboardReturn = {
  __typename?: 'CreateUserBadgeFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBadgeFakeReturn = {
  __typename?: 'CreateUserBadgeFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBadgeReturn = {
  __typename?: 'CreateUserBadgeReturn';
  data?: Maybe<UserBadge>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBalanceBeanDashboardReturn = {
  __typename?: 'CreateUserBalanceBeanDashboardReturn';
  data?: Maybe<UserBalanceBeanDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBalanceBeanFakeDashboardReturn = {
  __typename?: 'CreateUserBalanceBeanFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBalanceBeansFakeReturn = {
  __typename?: 'CreateUserBalanceBeansFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBalanceBeansReturn = {
  __typename?: 'CreateUserBalanceBeansReturn';
  data?: Maybe<UserBalanceBeans>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBalanceCoinDashboardReturn = {
  __typename?: 'CreateUserBalanceCoinDashboardReturn';
  data?: Maybe<UserBalanceCoinDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBalanceCoinFakeDashboardReturn = {
  __typename?: 'CreateUserBalanceCoinFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBalanceCoinsFakeReturn = {
  __typename?: 'CreateUserBalanceCoinsFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBalanceCoinsReturn = {
  __typename?: 'CreateUserBalanceCoinsReturn';
  data?: Maybe<UserBalanceCoins>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBalancePointDashboardReturn = {
  __typename?: 'CreateUserBalancePointDashboardReturn';
  data?: Maybe<UserBalancePointDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBalancePointFakeDashboardReturn = {
  __typename?: 'CreateUserBalancePointFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBalancePointsFakeReturn = {
  __typename?: 'CreateUserBalancePointsFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBalancePointsReturn = {
  __typename?: 'CreateUserBalancePointsReturn';
  data?: Maybe<UserBalancePoints>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBannedDashboardReturn = {
  __typename?: 'CreateUserBannedDashboardReturn';
  data?: Maybe<UserBannedDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBannedDetailDashboardReturn = {
  __typename?: 'CreateUserBannedDetailDashboardReturn';
  data?: Maybe<UserBannedDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBannedDetailFakeDashboardReturn = {
  __typename?: 'CreateUserBannedDetailFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBannedDetailFakeReturn = {
  __typename?: 'CreateUserBannedDetailFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBannedDetailReturn = {
  __typename?: 'CreateUserBannedDetailReturn';
  data?: Maybe<UserBannedDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBannedFakeDashboardReturn = {
  __typename?: 'CreateUserBannedFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBannedFakeReturn = {
  __typename?: 'CreateUserBannedFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBannedReturn = {
  __typename?: 'CreateUserBannedReturn';
  data?: Maybe<UserBanned>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBlockedDashboardReturn = {
  __typename?: 'CreateUserBlockedDashboardReturn';
  data?: Maybe<UserBlockedDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserBlockedFakeDashboardReturn = {
  __typename?: 'CreateUserBlockedFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserDashboardReturn = {
  __typename?: 'CreateUserDashboardReturn';
  data?: Maybe<UserDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserDetailDashboardReturn = {
  __typename?: 'CreateUserDetailDashboardReturn';
  data?: Maybe<UserDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserDetailFakeDashboardReturn = {
  __typename?: 'CreateUserDetailFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserDetailFakeReturn = {
  __typename?: 'CreateUserDetailFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserDetailReturn = {
  __typename?: 'CreateUserDetailReturn';
  data?: Maybe<UserDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserDeviceInformationDashboardReturn = {
  __typename?: 'CreateUserDeviceInformationDashboardReturn';
  data?: Maybe<UserDeviceInformationDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserDeviceInformationFakeDashboardReturn = {
  __typename?: 'CreateUserDeviceInformationFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserDeviceInformationFakeReturn = {
  __typename?: 'CreateUserDeviceInformationFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserDeviceInformationReturn = {
  __typename?: 'CreateUserDeviceInformationReturn';
  data?: Maybe<UserDeviceInformation>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserFakeDashboardReturn = {
  __typename?: 'CreateUserFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserFollowerDashboardReturn = {
  __typename?: 'CreateUserFollowerDashboardReturn';
  data?: Maybe<UserFollowerDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserFollowerFakeDashboardReturn = {
  __typename?: 'CreateUserFollowerFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserFollowingDashboardReturn = {
  __typename?: 'CreateUserFollowingDashboardReturn';
  data?: Maybe<UserFollowingDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserFollowingFakeDashboardReturn = {
  __typename?: 'CreateUserFollowingFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserGiftPackageDashboardReturn = {
  __typename?: 'CreateUserGiftPackageDashboardReturn';
  data?: Maybe<UserGiftPackageDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserGiftPackageFakeDashboardReturn = {
  __typename?: 'CreateUserGiftPackageFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserGiftPackageFakeReturn = {
  __typename?: 'CreateUserGiftPackageFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserGiftPackageReturn = {
  __typename?: 'CreateUserGiftPackageReturn';
  data?: Maybe<UserGiftPackage>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserLevelDashboardReturn = {
  __typename?: 'CreateUserLevelDashboardReturn';
  data?: Maybe<UserLevelDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserLevelFakeDashboardReturn = {
  __typename?: 'CreateUserLevelFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserLevelFakeReturn = {
  __typename?: 'CreateUserLevelFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserLevelReturn = {
  __typename?: 'CreateUserLevelReturn';
  data?: Maybe<UserLevel>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserLiveSettingDashboardReturn = {
  __typename?: 'CreateUserLiveSettingDashboardReturn';
  data?: Maybe<UserLiveSettingDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserLiveSettingFakeDashboardReturn = {
  __typename?: 'CreateUserLiveSettingFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserLiveSettingFakeReturn = {
  __typename?: 'CreateUserLiveSettingFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserLiveSettingReturn = {
  __typename?: 'CreateUserLiveSettingReturn';
  data?: Maybe<UserLiveSetting>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserNotificationDashboardReturn = {
  __typename?: 'CreateUserNotificationDashboardReturn';
  data?: Maybe<UserNotificationDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserNotificationFakeDashboardReturn = {
  __typename?: 'CreateUserNotificationFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserPhotoDashboardReturn = {
  __typename?: 'CreateUserPhotoDashboardReturn';
  data?: Maybe<UserPhotoDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserPhotoFakeDashboardReturn = {
  __typename?: 'CreateUserPhotoFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserPrivacyDashboardReturn = {
  __typename?: 'CreateUserPrivacyDashboardReturn';
  data?: Maybe<UserPrivacyDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserPrivacyFakeDashboardReturn = {
  __typename?: 'CreateUserPrivacyFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserProcessingQueueDashboardReturn = {
  __typename?: 'CreateUserProcessingQueueDashboardReturn';
  data?: Maybe<UserProcessingQueueDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserProcessingQueueFakeDashboardReturn = {
  __typename?: 'CreateUserProcessingQueueFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserProcessingQueueFakeReturn = {
  __typename?: 'CreateUserProcessingQueueFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserProcessingQueueReturn = {
  __typename?: 'CreateUserProcessingQueueReturn';
  data?: Maybe<UserProcessingQueue>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserSuperFanDashboardReturn = {
  __typename?: 'CreateUserSuperFanDashboardReturn';
  data?: Maybe<UserSuperFanDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserSuperFanFakeDashboardReturn = {
  __typename?: 'CreateUserSuperFanFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserVipDashboardReturn = {
  __typename?: 'CreateUserVipDashboardReturn';
  data?: Maybe<UserVipDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserVipFakeDashboardReturn = {
  __typename?: 'CreateUserVipFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserVipFakeReturn = {
  __typename?: 'CreateUserVipFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserVipReturn = {
  __typename?: 'CreateUserVipReturn';
  data?: Maybe<UserVip>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserVisitProfileDashboardReturn = {
  __typename?: 'CreateUserVisitProfileDashboardReturn';
  data?: Maybe<UserVisitProfileDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserVisitProfileFakeDashboardReturn = {
  __typename?: 'CreateUserVisitProfileFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserWarningDashboardReturn = {
  __typename?: 'CreateUserWarningDashboardReturn';
  data?: Maybe<UserWarningDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserWarningDetailDashboardReturn = {
  __typename?: 'CreateUserWarningDetailDashboardReturn';
  data?: Maybe<UserWarningDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserWarningDetailFakeDashboardReturn = {
  __typename?: 'CreateUserWarningDetailFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserWarningDetailFakeReturn = {
  __typename?: 'CreateUserWarningDetailFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserWarningDetailReturn = {
  __typename?: 'CreateUserWarningDetailReturn';
  data?: Maybe<UserWarningDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserWarningFakeDashboardReturn = {
  __typename?: 'CreateUserWarningFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserWarningFakeReturn = {
  __typename?: 'CreateUserWarningFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUserWarningReturn = {
  __typename?: 'CreateUserWarningReturn';
  data?: Maybe<UserWarning>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateVipBenefitDashboardReturn = {
  __typename?: 'CreateVipBenefitDashboardReturn';
  data?: Maybe<VipBenefitDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateVipBenefitDetailDashboardReturn = {
  __typename?: 'CreateVipBenefitDetailDashboardReturn';
  data?: Maybe<VipBenefitDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateVipBenefitDetailFakeDashboardReturn = {
  __typename?: 'CreateVipBenefitDetailFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateVipBenefitDetailReturn = {
  __typename?: 'CreateVipBenefitDetailReturn';
  data?: Maybe<VipBenefitDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateVipBenefitFakeDashboardReturn = {
  __typename?: 'CreateVipBenefitFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateVipBenefitReturn = {
  __typename?: 'CreateVipBenefitReturn';
  data?: Maybe<VipBenefit>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateVipDashboardReturn = {
  __typename?: 'CreateVipDashboardReturn';
  data?: Maybe<VipDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateVipFakeDashboardReturn = {
  __typename?: 'CreateVipFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateVipReturn = {
  __typename?: 'CreateVipReturn';
  data?: Maybe<Vip>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWalletCoinSaleDashboardReturn = {
  __typename?: 'CreateWalletCoinSaleDashboardReturn';
  data?: Maybe<WalletCoinSaleDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWalletCoinSaleFakeDashboardReturn = {
  __typename?: 'CreateWalletCoinSaleFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWalletCoinSaleFakeReturn = {
  __typename?: 'CreateWalletCoinSaleFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWalletCoinSaleReturn = {
  __typename?: 'CreateWalletCoinSaleReturn';
  data?: Maybe<WalletCoinSale>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWalletConvertDashboardReturn = {
  __typename?: 'CreateWalletConvertDashboardReturn';
  data?: Maybe<WalletConvertDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWalletConvertFakeDashboardReturn = {
  __typename?: 'CreateWalletConvertFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWalletConvertFakeReturn = {
  __typename?: 'CreateWalletConvertFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWalletConvertReturn = {
  __typename?: 'CreateWalletConvertReturn';
  data?: Maybe<WalletConvert>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWalletPriceCoinDashboardReturn = {
  __typename?: 'CreateWalletPriceCoinDashboardReturn';
  data?: Maybe<WalletPriceCoinDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWalletPriceCoinFakeDashboardReturn = {
  __typename?: 'CreateWalletPriceCoinFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWalletPriceCoinFakeReturn = {
  __typename?: 'CreateWalletPriceCoinFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWalletPriceCoinReturn = {
  __typename?: 'CreateWalletPriceCoinReturn';
  data?: Maybe<WalletPriceCoin>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWalletTypeConvertDashboardReturn = {
  __typename?: 'CreateWalletTypeConvertDashboardReturn';
  data?: Maybe<WalletTypeConvertDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWalletTypeConvertFakeDashboardReturn = {
  __typename?: 'CreateWalletTypeConvertFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWalletTypeConvertFakeReturn = {
  __typename?: 'CreateWalletTypeConvertFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWalletTypeConvertReturn = {
  __typename?: 'CreateWalletTypeConvertReturn';
  data?: Maybe<WalletTypeConvert>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWithdrawalDashboardReturn = {
  __typename?: 'CreateWithdrawalDashboardReturn';
  data?: Maybe<WithdrawalDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWithdrawalFakeDashboardReturn = {
  __typename?: 'CreateWithdrawalFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWithdrawalFakeReturn = {
  __typename?: 'CreateWithdrawalFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWithdrawalMethodDashboardReturn = {
  __typename?: 'CreateWithdrawalMethodDashboardReturn';
  data?: Maybe<WithdrawalMethodDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWithdrawalMethodDataUserDashboardReturn = {
  __typename?: 'CreateWithdrawalMethodDataUserDashboardReturn';
  data?: Maybe<WithdrawalMethodDataUserDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWithdrawalMethodDataUserFakeDashboardReturn = {
  __typename?: 'CreateWithdrawalMethodDataUserFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWithdrawalMethodDataUserFakeReturn = {
  __typename?: 'CreateWithdrawalMethodDataUserFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWithdrawalMethodDataUserReturn = {
  __typename?: 'CreateWithdrawalMethodDataUserReturn';
  data?: Maybe<WithdrawalMethodDataUser>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWithdrawalMethodFakeDashboardReturn = {
  __typename?: 'CreateWithdrawalMethodFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWithdrawalMethodFakeReturn = {
  __typename?: 'CreateWithdrawalMethodFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWithdrawalMethodReturn = {
  __typename?: 'CreateWithdrawalMethodReturn';
  data?: Maybe<WithdrawalMethod>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWithdrawalProofDashboardReturn = {
  __typename?: 'CreateWithdrawalProofDashboardReturn';
  data?: Maybe<WithdrawalProofDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWithdrawalProofFakeDashboardReturn = {
  __typename?: 'CreateWithdrawalProofFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWithdrawalProofFakeReturn = {
  __typename?: 'CreateWithdrawalProofFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWithdrawalProofReturn = {
  __typename?: 'CreateWithdrawalProofReturn';
  data?: Maybe<WithdrawalProof>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWithdrawalReturn = {
  __typename?: 'CreateWithdrawalReturn';
  data?: Maybe<Withdrawal>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWithdrawalTypeRefusedDashboardReturn = {
  __typename?: 'CreateWithdrawalTypeRefusedDashboardReturn';
  data?: Maybe<WithdrawalTypeRefusedDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWithdrawalTypeRefusedFakeDashboardReturn = {
  __typename?: 'CreateWithdrawalTypeRefusedFakeDashboardReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWithdrawalTypeRefusedFakeReturn = {
  __typename?: 'CreateWithdrawalTypeRefusedFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateWithdrawalTypeRefusedReturn = {
  __typename?: 'CreateWithdrawalTypeRefusedReturn';
  data?: Maybe<WithdrawalTypeRefused>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Currency = {
  __typename?: 'Currency';
  currency?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type CurrencyInput = {
  currency?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type DefaultReturn = {
  __typename?: 'DefaultReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type DeletePostCommentReturn = {
  __typename?: 'DeletePostCommentReturn';
  data?: Maybe<PostComment>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type DeletePostReturn = {
  __typename?: 'DeletePostReturn';
  data?: Maybe<Post>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type DislikePostReturn = {
  __typename?: 'DislikePostReturn';
  data?: Maybe<PostLike>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Domain = {
  __typename?: 'Domain';
  name?: Maybe<Scalars['String']['output']>;
};

export type DomainDashboard = {
  __typename?: 'DomainDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type DomainDashboardReturn = {
  __typename?: 'DomainDashboardReturn';
  data?: Maybe<DomainDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type DomainDashboardReturnList = {
  __typename?: 'DomainDashboardReturnList';
  data?: Maybe<Array<Maybe<DomainDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type EnterFamilyReturn = {
  __typename?: 'EnterFamilyReturn';
  data?: Maybe<FamilyMember>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Event = {
  __typename?: 'Event';
  createdAt: Scalars['String']['output'];
  date: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  typeEventStatus: TypeEventStatus;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type EventDashboard = {
  __typename?: 'EventDashboard';
  createdAt: Scalars['String']['output'];
  date: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  typeEventStatus: TypeEventStatus;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type EventDashboardReturn = {
  __typename?: 'EventDashboardReturn';
  data?: Maybe<EventDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type EventDashboardReturnList = {
  __typename?: 'EventDashboardReturnList';
  data?: Maybe<Array<Maybe<EventDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type EventReturn = {
  __typename?: 'EventReturn';
  data?: Maybe<Event>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type EventReturnList = {
  __typename?: 'EventReturnList';
  data?: Maybe<Array<Maybe<Event>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ExampleOtherOneDashboard = {
  __typename?: 'ExampleOtherOneDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ExampleOtherOneDashboardReturn = {
  __typename?: 'ExampleOtherOneDashboardReturn';
  data?: Maybe<ExampleOtherOneDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ExampleOtherOneDashboardReturnList = {
  __typename?: 'ExampleOtherOneDashboardReturnList';
  data?: Maybe<Array<Maybe<ExampleOtherOneDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ExampleOtherTwoDashboard = {
  __typename?: 'ExampleOtherTwoDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ExampleOtherTwoDashboardReturn = {
  __typename?: 'ExampleOtherTwoDashboardReturn';
  data?: Maybe<ExampleOtherTwoDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ExampleOtherTwoDashboardReturnList = {
  __typename?: 'ExampleOtherTwoDashboardReturnList';
  data?: Maybe<Array<Maybe<ExampleOtherTwoDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ExampleTableDashboard = {
  __typename?: 'ExampleTableDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  email?: Maybe<Scalars['String']['output']>;
  exampleOtherOne?: Maybe<ExampleOtherOneDashboard>;
  exampleOtherOneId: Scalars['Int']['output'];
  exampleOtherTwo?: Maybe<ExampleOtherTwoDashboard>;
  exampleOtherTwoId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  typeBoolean: Scalars['Boolean']['output'];
  typeCurrency: Scalars['Float']['output'];
  typeDatetime: Scalars['String']['output'];
  typeDecimal: Scalars['Float']['output'];
  typeEnum: TypeEnum;
  typeInt: Scalars['Int']['output'];
  typeText: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ExampleTableDashboardReturn = {
  __typename?: 'ExampleTableDashboardReturn';
  data?: Maybe<ExampleTableDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ExampleTableDashboardReturnList = {
  __typename?: 'ExampleTableDashboardReturnList';
  data?: Maybe<Array<Maybe<ExampleTableDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Family = {
  __typename?: 'Family';
  active: Scalars['Boolean']['output'];
  announcement: Scalars['String']['output'];
  anyCanJoin: Scalars['Boolean']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  familyMember?: Maybe<Array<Maybe<FamilyMember>>>;
  icon: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ownerUser?: Maybe<OwnerUser>;
  ownerUserId?: Maybe<Scalars['Int']['output']>;
  region: Scalars['String']['output'];
  tag: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type FamilyDashboard = {
  __typename?: 'FamilyDashboard';
  active: Scalars['Boolean']['output'];
  announcement: Scalars['String']['output'];
  anyCanJoin: Scalars['Boolean']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ownerUser?: Maybe<UserDashboard>;
  ownerUserId?: Maybe<Scalars['Int']['output']>;
  region: Scalars['String']['output'];
  tag: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type FamilyDashboardReturn = {
  __typename?: 'FamilyDashboardReturn';
  data?: Maybe<FamilyDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyDashboardReturnList = {
  __typename?: 'FamilyDashboardReturnList';
  data?: Maybe<Array<Maybe<FamilyDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyForce = {
  __typename?: 'FamilyForce';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  familyForceLevel: Scalars['Int']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  limitMember: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  points: Scalars['Float']['output'];
  updatedAt: Scalars['String']['output'];
};

export type FamilyForceBenefit = {
  __typename?: 'FamilyForceBenefit';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  typeFamilyForceBenefit?: Maybe<TypeFamilyForceBenefit>;
  updatedAt: Scalars['String']['output'];
};

export type FamilyForceBenefitDashboard = {
  __typename?: 'FamilyForceBenefitDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  typeFamilyForceBenefit?: Maybe<TypeFamilyForceBenefit>;
  updatedAt: Scalars['String']['output'];
};

export type FamilyForceBenefitDashboardReturn = {
  __typename?: 'FamilyForceBenefitDashboardReturn';
  data?: Maybe<FamilyForceBenefitDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyForceBenefitDashboardReturnList = {
  __typename?: 'FamilyForceBenefitDashboardReturnList';
  data?: Maybe<Array<Maybe<FamilyForceBenefitDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyForceBenefitDetail = {
  __typename?: 'FamilyForceBenefitDetail';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  familyForce?: Maybe<FamilyForce>;
  familyForceBenefitId: Scalars['Int']['output'];
  familyForceBenefits?: Maybe<FamilyForceBenefit>;
  familyForceId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type FamilyForceBenefitDetailDashboard = {
  __typename?: 'FamilyForceBenefitDetailDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  familyForce?: Maybe<FamilyForceDashboard>;
  familyForceBenefit?: Maybe<FamilyForceBenefitDashboard>;
  familyForceBenefitId: Scalars['Int']['output'];
  familyForceId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type FamilyForceBenefitDetailDashboardReturn = {
  __typename?: 'FamilyForceBenefitDetailDashboardReturn';
  data?: Maybe<FamilyForceBenefitDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyForceBenefitDetailDashboardReturnList = {
  __typename?: 'FamilyForceBenefitDetailDashboardReturnList';
  data?: Maybe<Array<Maybe<FamilyForceBenefitDetailDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyForceBenefitDetailReturn = {
  __typename?: 'FamilyForceBenefitDetailReturn';
  data?: Maybe<FamilyForceBenefitDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyForceBenefitDetailReturnList = {
  __typename?: 'FamilyForceBenefitDetailReturnList';
  data?: Maybe<Array<Maybe<FamilyForceBenefitDetail>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyForceBenefitReturn = {
  __typename?: 'FamilyForceBenefitReturn';
  data?: Maybe<FamilyForceBenefit>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyForceBenefitReturnList = {
  __typename?: 'FamilyForceBenefitReturnList';
  data?: Maybe<Array<Maybe<FamilyForceBenefit>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyForceDashboard = {
  __typename?: 'FamilyForceDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  familyForceLevel: Scalars['Int']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  limitMember: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  points: Scalars['Float']['output'];
  updatedAt: Scalars['String']['output'];
};

export type FamilyForceDashboardReturn = {
  __typename?: 'FamilyForceDashboardReturn';
  data?: Maybe<FamilyForceDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyForceDashboardReturnList = {
  __typename?: 'FamilyForceDashboardReturnList';
  data?: Maybe<Array<Maybe<FamilyForceDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyForceReturn = {
  __typename?: 'FamilyForceReturn';
  data?: Maybe<FamilyForce>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyForceReturnList = {
  __typename?: 'FamilyForceReturnList';
  data?: Maybe<Array<Maybe<FamilyForce>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyMember = {
  __typename?: 'FamilyMember';
  createdAt: Scalars['String']['output'];
  family?: Maybe<Family>;
  familyId?: Maybe<Scalars['Int']['output']>;
  isAdmin: Scalars['Boolean']['output'];
  isCreator: Scalars['Boolean']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type FamilyMemberDashboard = {
  __typename?: 'FamilyMemberDashboard';
  createdAt: Scalars['String']['output'];
  family?: Maybe<FamilyDashboard>;
  familyId: Scalars['Int']['output'];
  isAdmin: Scalars['Boolean']['output'];
  isCreator: Scalars['Boolean']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type FamilyMemberDashboardReturn = {
  __typename?: 'FamilyMemberDashboardReturn';
  data?: Maybe<FamilyMemberDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyMemberDashboardReturnList = {
  __typename?: 'FamilyMemberDashboardReturnList';
  data?: Maybe<Array<Maybe<FamilyMemberDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyMemberReturn = {
  __typename?: 'FamilyMemberReturn';
  data?: Maybe<FamilyMember>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyMemberReturnList = {
  __typename?: 'FamilyMemberReturnList';
  data?: Maybe<Array<Maybe<FamilyMember>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyReturn = {
  __typename?: 'FamilyReturn';
  data?: Maybe<Family>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyReturnList = {
  __typename?: 'FamilyReturnList';
  data?: Maybe<Array<Maybe<Family>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyTaskMember = {
  __typename?: 'FamilyTaskMember';
  completed: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dateTask: Scalars['String']['output'];
  family?: Maybe<Family>;
  familyId: Scalars['Int']['output'];
  familyTaskType?: Maybe<FamilyTaskType>;
  familyTaskTypeId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  quantityCompleted: Scalars['String']['output'];
  quantityTask: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type FamilyTaskMemberDashboard = {
  __typename?: 'FamilyTaskMemberDashboard';
  completed: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dateTask: Scalars['String']['output'];
  family?: Maybe<FamilyDashboard>;
  familyId: Scalars['Int']['output'];
  familyTaskType?: Maybe<FamilyTaskTypeDashboard>;
  familyTaskTypeId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  quantityCompleted: Scalars['String']['output'];
  quantityTask: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type FamilyTaskMemberDashboardReturn = {
  __typename?: 'FamilyTaskMemberDashboardReturn';
  data?: Maybe<FamilyTaskMemberDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyTaskMemberDashboardReturnList = {
  __typename?: 'FamilyTaskMemberDashboardReturnList';
  data?: Maybe<Array<Maybe<FamilyTaskMemberDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyTaskMemberHard = {
  __typename?: 'FamilyTaskMemberHard';
  completed: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dateTask: Scalars['String']['output'];
  family?: Maybe<Family>;
  familyId: Scalars['Int']['output'];
  familyTaskTypeHard?: Maybe<FamilyTaskTypeHard>;
  familyTaskTypeHardId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  quantityCompleted: Scalars['String']['output'];
  quantityTask: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type FamilyTaskMemberHardDashboard = {
  __typename?: 'FamilyTaskMemberHardDashboard';
  completed: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dateTask: Scalars['String']['output'];
  family?: Maybe<FamilyDashboard>;
  familyId: Scalars['Int']['output'];
  familyTaskTypeHard?: Maybe<FamilyTaskTypeHardDashboard>;
  familyTaskTypeHardId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  quantityCompleted: Scalars['String']['output'];
  quantityTask: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type FamilyTaskMemberHardDashboardReturn = {
  __typename?: 'FamilyTaskMemberHardDashboardReturn';
  data?: Maybe<FamilyTaskMemberHardDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyTaskMemberHardDashboardReturnList = {
  __typename?: 'FamilyTaskMemberHardDashboardReturnList';
  data?: Maybe<Array<Maybe<FamilyTaskMemberHardDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyTaskMemberHardReturn = {
  __typename?: 'FamilyTaskMemberHardReturn';
  data?: Maybe<FamilyTaskMemberHard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyTaskMemberHardReturnList = {
  __typename?: 'FamilyTaskMemberHardReturnList';
  data?: Maybe<Array<Maybe<FamilyTaskMemberHard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyTaskMemberReturn = {
  __typename?: 'FamilyTaskMemberReturn';
  data?: Maybe<FamilyTaskMember>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyTaskMemberReturnList = {
  __typename?: 'FamilyTaskMemberReturnList';
  data?: Maybe<Array<Maybe<FamilyTaskMember>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyTaskProgress = {
  __typename?: 'FamilyTaskProgress';
  completed: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateTask: Scalars['String']['output'];
  family?: Maybe<Family>;
  familyId: Scalars['Int']['output'];
  familyTaskTypeProgress?: Maybe<FamilyTaskTypeProgress>;
  familyTaskTypeProgressId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  quantityCompleted: Scalars['String']['output'];
  quantityTask: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type FamilyTaskProgressDashboard = {
  __typename?: 'FamilyTaskProgressDashboard';
  completed: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateTask: Scalars['String']['output'];
  family?: Maybe<FamilyDashboard>;
  familyId: Scalars['Int']['output'];
  familyTaskTypeProgress?: Maybe<FamilyTaskTypeProgressDashboard>;
  familyTaskTypeProgressId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  quantityCompleted: Scalars['String']['output'];
  quantityTask: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type FamilyTaskProgressDashboardReturn = {
  __typename?: 'FamilyTaskProgressDashboardReturn';
  data?: Maybe<FamilyTaskProgressDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyTaskProgressDashboardReturnList = {
  __typename?: 'FamilyTaskProgressDashboardReturnList';
  data?: Maybe<Array<Maybe<FamilyTaskProgressDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyTaskProgressReceived = {
  __typename?: 'FamilyTaskProgressReceived';
  createdAt: Scalars['String']['output'];
  familyTaskProgress?: Maybe<FamilyTaskProgress>;
  familyTaskProgressId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  received: Scalars['Boolean']['output'];
  updatedAt: Scalars['String']['output'];
};

export type FamilyTaskProgressReceivedDashboard = {
  __typename?: 'FamilyTaskProgressReceivedDashboard';
  createdAt: Scalars['String']['output'];
  familyTaskProgress?: Maybe<FamilyTaskProgressDashboard>;
  familyTaskProgressId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  received: Scalars['Boolean']['output'];
  updatedAt: Scalars['String']['output'];
};

export type FamilyTaskProgressReceivedDashboardReturn = {
  __typename?: 'FamilyTaskProgressReceivedDashboardReturn';
  data?: Maybe<FamilyTaskProgressReceivedDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyTaskProgressReceivedDashboardReturnList = {
  __typename?: 'FamilyTaskProgressReceivedDashboardReturnList';
  data?: Maybe<Array<Maybe<FamilyTaskProgressReceivedDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyTaskProgressReceivedReturn = {
  __typename?: 'FamilyTaskProgressReceivedReturn';
  data?: Maybe<FamilyTaskProgressReceived>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyTaskProgressReceivedReturnList = {
  __typename?: 'FamilyTaskProgressReceivedReturnList';
  data?: Maybe<Array<Maybe<FamilyTaskProgressReceived>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyTaskProgressReturn = {
  __typename?: 'FamilyTaskProgressReturn';
  data?: Maybe<FamilyTaskProgress>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyTaskProgressReturnList = {
  __typename?: 'FamilyTaskProgressReturnList';
  data?: Maybe<Array<Maybe<FamilyTaskProgress>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyTaskType = {
  __typename?: 'FamilyTaskType';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  points: Scalars['Float']['output'];
  quantity: Scalars['Int']['output'];
  typeFamilyTask?: Maybe<TypeFamilyTask>;
  updatedAt: Scalars['String']['output'];
};

export type FamilyTaskTypeDashboard = {
  __typename?: 'FamilyTaskTypeDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  points: Scalars['Float']['output'];
  quantity: Scalars['Int']['output'];
  typeFamilyTask?: Maybe<TypeFamilyTask>;
  updatedAt: Scalars['String']['output'];
};

export type FamilyTaskTypeDashboardReturn = {
  __typename?: 'FamilyTaskTypeDashboardReturn';
  data?: Maybe<FamilyTaskTypeDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyTaskTypeDashboardReturnList = {
  __typename?: 'FamilyTaskTypeDashboardReturnList';
  data?: Maybe<Array<Maybe<FamilyTaskTypeDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyTaskTypeHard = {
  __typename?: 'FamilyTaskTypeHard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  points: Scalars['Float']['output'];
  quantity: Scalars['Int']['output'];
  typeFamilyTask?: Maybe<TypeFamilyTask>;
  updatedAt: Scalars['String']['output'];
};

export type FamilyTaskTypeHardDashboard = {
  __typename?: 'FamilyTaskTypeHardDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  points: Scalars['Float']['output'];
  quantity: Scalars['Int']['output'];
  typeFamilyTask?: Maybe<TypeFamilyTask>;
  updatedAt: Scalars['String']['output'];
};

export type FamilyTaskTypeHardDashboardReturn = {
  __typename?: 'FamilyTaskTypeHardDashboardReturn';
  data?: Maybe<FamilyTaskTypeHardDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyTaskTypeHardDashboardReturnList = {
  __typename?: 'FamilyTaskTypeHardDashboardReturnList';
  data?: Maybe<Array<Maybe<FamilyTaskTypeHardDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyTaskTypeHardReturn = {
  __typename?: 'FamilyTaskTypeHardReturn';
  data?: Maybe<FamilyTaskTypeHard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyTaskTypeHardReturnList = {
  __typename?: 'FamilyTaskTypeHardReturnList';
  data?: Maybe<Array<Maybe<FamilyTaskTypeHard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyTaskTypeProgress = {
  __typename?: 'FamilyTaskTypeProgress';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  minimumPointsUser: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  typeFamilyBonus?: Maybe<TypeFamilyBonus>;
  typeFamilyBox?: Maybe<TypeFamilyBox>;
  updatedAt: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type FamilyTaskTypeProgressDashboard = {
  __typename?: 'FamilyTaskTypeProgressDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  minimumPointsUser: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  typeFamilyBonus?: Maybe<TypeFamilyBonus>;
  typeFamilyBox?: Maybe<TypeFamilyBox>;
  updatedAt: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type FamilyTaskTypeProgressDashboardReturn = {
  __typename?: 'FamilyTaskTypeProgressDashboardReturn';
  data?: Maybe<FamilyTaskTypeProgressDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyTaskTypeProgressDashboardReturnList = {
  __typename?: 'FamilyTaskTypeProgressDashboardReturnList';
  data?: Maybe<Array<Maybe<FamilyTaskTypeProgressDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyTaskTypeProgressReturn = {
  __typename?: 'FamilyTaskTypeProgressReturn';
  data?: Maybe<FamilyTaskTypeProgress>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyTaskTypeProgressReturnList = {
  __typename?: 'FamilyTaskTypeProgressReturnList';
  data?: Maybe<Array<Maybe<FamilyTaskTypeProgress>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FamilyTaskTypeReturn = {
  __typename?: 'FamilyTaskTypeReturn';
  data?: Maybe<FamilyTaskType>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type FamilyTaskTypeReturnList = {
  __typename?: 'FamilyTaskTypeReturnList';
  data?: Maybe<Array<Maybe<FamilyTaskType>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FansGiftList = {
  __typename?: 'FansGiftList';
  giftsReceivedGeneral?: Maybe<Array<Maybe<GiftsReceived>>>;
  giftsReceivedSpecial?: Maybe<Array<Maybe<GiftsReceived>>>;
  giftsSendersDaily?: Maybe<Array<Maybe<GiftSender>>>;
  giftsSendersMonthly?: Maybe<Array<Maybe<GiftSender>>>;
  giftsSendersWeekly?: Maybe<Array<Maybe<GiftSender>>>;
};

export type FansGiftsReturn = {
  __typename?: 'FansGiftsReturn';
  data?: Maybe<FansGiftList>;
  error?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type Follow = {
  __typename?: 'Follow';
  followers?: Maybe<Array<Maybe<Follower>>>;
  following?: Maybe<Array<Maybe<Following>>>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type FollowReturn = {
  __typename?: 'FollowReturn';
  data?: Maybe<Follow>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Follower = {
  __typename?: 'Follower';
  follower?: Maybe<User>;
  user?: Maybe<UserProfile>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type Following = {
  __typename?: 'Following';
  following?: Maybe<User>;
  user?: Maybe<UserProfile>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type GameConfigurationDefaultEarning = {
  __typename?: 'GameConfigurationDefaultEarning';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  typeGame: TypeGame;
  updatedAt: Scalars['String']['output'];
};

export type GameConfigurationDefaultEarningDashboard = {
  __typename?: 'GameConfigurationDefaultEarningDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  typeGame: TypeGame;
  updatedAt: Scalars['String']['output'];
};

export type GameConfigurationDefaultEarningDashboardReturn = {
  __typename?: 'GameConfigurationDefaultEarningDashboardReturn';
  data?: Maybe<GameConfigurationDefaultEarningDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GameConfigurationDefaultEarningDashboardReturnList = {
  __typename?: 'GameConfigurationDefaultEarningDashboardReturnList';
  data?: Maybe<Array<Maybe<GameConfigurationDefaultEarningDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type GameConfigurationDefaultEarningReturn = {
  __typename?: 'GameConfigurationDefaultEarningReturn';
  data?: Maybe<GameConfigurationDefaultEarning>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GameConfigurationDefaultEarningReturnList = {
  __typename?: 'GameConfigurationDefaultEarningReturnList';
  data?: Maybe<Array<Maybe<GameConfigurationDefaultEarning>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type GameConfigurationLuckCoin = {
  __typename?: 'GameConfigurationLuckCoin';
  active: Scalars['Boolean']['output'];
  allowTimes05: Scalars['Boolean']['output'];
  allowTimes10: Scalars['Boolean']['output'];
  allowTimes20: Scalars['Boolean']['output'];
  allowTimes50: Scalars['Boolean']['output'];
  allowTimes100: Scalars['Boolean']['output'];
  allowTimes250: Scalars['Boolean']['output'];
  allowTimes500: Scalars['Boolean']['output'];
  allowTimes1000: Scalars['Boolean']['output'];
  colorTimesBiggerThen05: Scalars['String']['output'];
  colorTimesBiggerThen100: Scalars['String']['output'];
  colorTimesBiggerThen250: Scalars['String']['output'];
  colorTimesBiggerThen500: Scalars['String']['output'];
  colorTimesBiggerThen1000: Scalars['String']['output'];
  colorTimesBiggerThen2000: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  gift?: Maybe<Gift>;
  giftId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  modAllowTimes05: Scalars['Int']['output'];
  modAllowTimes10: Scalars['Int']['output'];
  modAllowTimes20: Scalars['Int']['output'];
  modAllowTimes50: Scalars['Int']['output'];
  modAllowTimes100: Scalars['Int']['output'];
  modAllowTimes250: Scalars['Int']['output'];
  modAllowTimes500: Scalars['Int']['output'];
  modAllowTimes1000: Scalars['Int']['output'];
  quantityCombo: Scalars['Int']['output'];
  returnAllowTimes05: Scalars['Int']['output'];
  returnAllowTimes10: Scalars['Int']['output'];
  returnAllowTimes20: Scalars['Int']['output'];
  returnAllowTimes50: Scalars['Int']['output'];
  returnAllowTimes100: Scalars['Int']['output'];
  returnAllowTimes250: Scalars['Int']['output'];
  returnAllowTimes500: Scalars['Int']['output'];
  returnAllowTimes1000: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type GameConfigurationLuckCoinDashboard = {
  __typename?: 'GameConfigurationLuckCoinDashboard';
  active: Scalars['Boolean']['output'];
  allowTimes05: Scalars['Boolean']['output'];
  allowTimes10: Scalars['Boolean']['output'];
  allowTimes20: Scalars['Boolean']['output'];
  allowTimes50: Scalars['Boolean']['output'];
  allowTimes100: Scalars['Boolean']['output'];
  allowTimes250: Scalars['Boolean']['output'];
  allowTimes500: Scalars['Boolean']['output'];
  allowTimes1000: Scalars['Boolean']['output'];
  colorTimes05: Scalars['String']['output'];
  colorTimes10: Scalars['String']['output'];
  colorTimes20: Scalars['String']['output'];
  colorTimes50: Scalars['String']['output'];
  colorTimes100: Scalars['String']['output'];
  colorTimes250: Scalars['String']['output'];
  colorTimes500: Scalars['String']['output'];
  colorTimes1000: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  gameLuckCoinMultipleCalculation: Scalars['Boolean']['output'];
  gift?: Maybe<GiftDashboard>;
  giftId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  modAllowTimes05: Scalars['Int']['output'];
  modAllowTimes10: Scalars['Int']['output'];
  modAllowTimes20: Scalars['Int']['output'];
  modAllowTimes50: Scalars['Int']['output'];
  modAllowTimes100: Scalars['Int']['output'];
  modAllowTimes250: Scalars['Int']['output'];
  modAllowTimes500: Scalars['Int']['output'];
  modAllowTimes1000: Scalars['Int']['output'];
  quantityCombo: Scalars['Int']['output'];
  returnAllowTimes05: Scalars['Int']['output'];
  returnAllowTimes10: Scalars['Int']['output'];
  returnAllowTimes20: Scalars['Int']['output'];
  returnAllowTimes50: Scalars['Int']['output'];
  returnAllowTimes100: Scalars['Int']['output'];
  returnAllowTimes250: Scalars['Int']['output'];
  returnAllowTimes500: Scalars['Int']['output'];
  returnAllowTimes1000: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type GameConfigurationLuckCoinDashboardReturn = {
  __typename?: 'GameConfigurationLuckCoinDashboardReturn';
  data?: Maybe<GameConfigurationLuckCoinDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GameConfigurationLuckCoinDashboardReturnList = {
  __typename?: 'GameConfigurationLuckCoinDashboardReturnList';
  data?: Maybe<Array<Maybe<GameConfigurationLuckCoinDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type GameConfigurationLuckCoinReturn = {
  __typename?: 'GameConfigurationLuckCoinReturn';
  data?: Maybe<GameConfigurationLuckCoin>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GameConfigurationLuckCoinReturnList = {
  __typename?: 'GameConfigurationLuckCoinReturnList';
  data?: Maybe<Array<Maybe<GameConfigurationLuckCoin>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type GameConfigurationSurpriseBox = {
  __typename?: 'GameConfigurationSurpriseBox';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  defaultTime01: Scalars['Boolean']['output'];
  deleted: Scalars['Boolean']['output'];
  gift?: Maybe<Gift>;
  giftId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  modTimes: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type GameConfigurationSurpriseBoxDashboard = {
  __typename?: 'GameConfigurationSurpriseBoxDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  defaultTime01: Scalars['Boolean']['output'];
  deleted: Scalars['Boolean']['output'];
  gift?: Maybe<GiftDashboard>;
  giftId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  modTimes: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type GameConfigurationSurpriseBoxDashboardReturn = {
  __typename?: 'GameConfigurationSurpriseBoxDashboardReturn';
  data?: Maybe<GameConfigurationSurpriseBoxDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GameConfigurationSurpriseBoxDashboardReturnList = {
  __typename?: 'GameConfigurationSurpriseBoxDashboardReturnList';
  data?: Maybe<Array<Maybe<GameConfigurationSurpriseBoxDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type GameConfigurationSurpriseBoxReturn = {
  __typename?: 'GameConfigurationSurpriseBoxReturn';
  data?: Maybe<GameConfigurationSurpriseBox>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GameConfigurationSurpriseBoxReturnList = {
  __typename?: 'GameConfigurationSurpriseBoxReturnList';
  data?: Maybe<Array<Maybe<GameConfigurationSurpriseBox>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GameLuckSurpriseBox = {
  __typename?: 'GameLuckSurpriseBox';
  createdAt: Scalars['String']['output'];
  giftArchive: Scalars['String']['output'];
  giftEarning?: Maybe<Gift>;
  giftIcon: Scalars['String']['output'];
  giftIdEarning?: Maybe<Scalars['Int']['output']>;
  giftName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
  valueGift?: Maybe<Scalars['Int']['output']>;
};

export type GameLuckSurpriseBoxDashboard = {
  __typename?: 'GameLuckSurpriseBoxDashboard';
  createdAt: Scalars['String']['output'];
  giftEarning?: Maybe<GiftDashboard>;
  giftIdEarning?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
  valueGift?: Maybe<Scalars['Int']['output']>;
};

export type GameLuckSurpriseBoxDashboardReturn = {
  __typename?: 'GameLuckSurpriseBoxDashboardReturn';
  data?: Maybe<GameLuckSurpriseBoxDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GameLuckSurpriseBoxDashboardReturnList = {
  __typename?: 'GameLuckSurpriseBoxDashboardReturnList';
  data?: Maybe<Array<Maybe<GameLuckSurpriseBoxDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type GameLuckSurpriseBoxRetunrn = {
  __typename?: 'GameLuckSurpriseBoxRetunrn';
  giftIdEarning?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  valueGift?: Maybe<Scalars['Int']['output']>;
};

export type GameLuckSurpriseBoxReturn = {
  __typename?: 'GameLuckSurpriseBoxReturn';
  data?: Maybe<GameLuckSurpriseBox>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GameLuckSurpriseBoxReturnCustom = {
  __typename?: 'GameLuckSurpriseBoxReturnCustom';
  giftArchive?: Maybe<Scalars['String']['output']>;
  giftIcon?: Maybe<Scalars['String']['output']>;
  giftIdEarning?: Maybe<Scalars['Int']['output']>;
  giftName?: Maybe<Scalars['String']['output']>;
  newCoins?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  status: Scalars['String']['output'];
  userId?: Maybe<Scalars['Int']['output']>;
  valueGift?: Maybe<Scalars['Int']['output']>;
};

export type GameLuckSurpriseBoxReturnList = {
  __typename?: 'GameLuckSurpriseBoxReturnList';
  data?: Maybe<Array<Maybe<GameLuckSurpriseBox>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GetFamiliesByUsername = {
  __typename?: 'GetFamiliesByUsername';
  data?: Maybe<Array<Maybe<Family>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GetLastMessageFromRoomReturn = {
  __typename?: 'GetLastMessageFromRoomReturn';
  data?: Maybe<ChatDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GetMessagesNotViewedReturn = {
  __typename?: 'GetMessagesNotViewedReturn';
  data?: Maybe<Array<Maybe<ChatDetail>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GetPostLikesByPostId = {
  postId: Scalars['Int']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type GetUserBlockedsReturn = {
  __typename?: 'GetUserBlockedsReturn';
  data?: Maybe<BlockReturn>;
};

export type GetUserByUsernameReturn = {
  __typename?: 'GetUserByUsernameReturn';
  data?: Maybe<Array<Maybe<UserProfile>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Gift = {
  __typename?: 'Gift';
  active?: Maybe<Scalars['Boolean']['output']>;
  allowedCombos?: Maybe<Scalars['String']['output']>;
  animationSpeedCenter: Scalars['Int']['output'];
  animationSpeedSeat: Scalars['Int']['output'];
  archive?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  description: Scalars['String']['output'];
  giftEvent?: Maybe<GiftEvent>;
  giftEventId?: Maybe<Scalars['Int']['output']>;
  giftType?: Maybe<GiftType>;
  giftTypeId: Scalars['Int']['output'];
  heightAnimation?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isAnimated: Scalars['Boolean']['output'];
  isCelebrity?: Maybe<Scalars['Boolean']['output']>;
  isLuck: Scalars['Boolean']['output'];
  isPackage?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  value: Scalars['Int']['output'];
  widthAnimation?: Maybe<Scalars['Int']['output']>;
};

export type GiftDashboard = {
  __typename?: 'GiftDashboard';
  active: Scalars['Boolean']['output'];
  allowedCombos: Scalars['String']['output'];
  animationSpeedCenter: Scalars['Int']['output'];
  animationSpeedSeat: Scalars['Int']['output'];
  archive: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  giftEvent?: Maybe<GiftEventDashboard>;
  giftEventId?: Maybe<Scalars['Int']['output']>;
  giftType?: Maybe<GiftTypeDashboard>;
  giftTypeId: Scalars['Int']['output'];
  heightAnimation?: Maybe<Scalars['Int']['output']>;
  icon: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isAnimated: Scalars['Boolean']['output'];
  isCelebrity: Scalars['Boolean']['output'];
  isLuck: Scalars['Boolean']['output'];
  isPackage: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  value: Scalars['Int']['output'];
  widthAnimation?: Maybe<Scalars['Int']['output']>;
};

export type GiftDashboardReturn = {
  __typename?: 'GiftDashboardReturn';
  data?: Maybe<GiftDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GiftDashboardReturnList = {
  __typename?: 'GiftDashboardReturnList';
  data?: Maybe<Array<Maybe<GiftDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type GiftEvent = {
  __typename?: 'GiftEvent';
  active?: Maybe<Scalars['Boolean']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type GiftEventDashboard = {
  __typename?: 'GiftEventDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type GiftEventDashboardReturn = {
  __typename?: 'GiftEventDashboardReturn';
  data?: Maybe<GiftEventDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GiftEventDashboardReturnList = {
  __typename?: 'GiftEventDashboardReturnList';
  data?: Maybe<Array<Maybe<GiftEventDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type GiftEventReturn = {
  __typename?: 'GiftEventReturn';
  data?: Maybe<GiftEvent>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GiftEventReturnList = {
  __typename?: 'GiftEventReturnList';
  data?: Maybe<Array<Maybe<GiftEvent>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type GiftReceived = {
  __typename?: 'GiftReceived';
  giftArchive?: Maybe<Scalars['String']['output']>;
  giftIcon?: Maybe<Scalars['String']['output']>;
  giftId?: Maybe<Scalars['Int']['output']>;
  giftName?: Maybe<Scalars['String']['output']>;
  giftSentQuantityCombo?: Maybe<Scalars['Int']['output']>;
  userAppId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userPhoto?: Maybe<Scalars['String']['output']>;
  userUsername?: Maybe<Scalars['String']['output']>;
};

export type GiftReceivedReturnList = {
  __typename?: 'GiftReceivedReturnList';
  data?: Maybe<Array<Maybe<GiftReceived>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type GiftReturn = {
  __typename?: 'GiftReturn';
  data?: Maybe<Gift>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GiftReturnList = {
  __typename?: 'GiftReturnList';
  data?: Maybe<Array<Maybe<Gift>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type GiftSender = {
  __typename?: 'GiftSender';
  senderIcon: Scalars['String']['output'];
  senderId: Scalars['String']['output'];
  senderTotal: Scalars['Float']['output'];
};

export type GiftSent = {
  __typename?: 'GiftSent';
  agencyFinishedProcessing: Scalars['Boolean']['output'];
  agencyStartedProcessing: Scalars['Boolean']['output'];
  dateSent: Scalars['String']['output'];
  eventFinishedProcessing: Scalars['Boolean']['output'];
  eventStartedProcessing: Scalars['Boolean']['output'];
  familyReceived?: Maybe<Family>;
  familyReceivedId?: Maybe<Scalars['Int']['output']>;
  familySent?: Maybe<Family>;
  familySentId?: Maybe<Scalars['Int']['output']>;
  gift?: Maybe<Gift>;
  giftId: Scalars['Int']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  indexLuckCoin?: Maybe<Scalars['Int']['output']>;
  invitationFinishedProcessing: Scalars['Boolean']['output'];
  invitationStartedProcessing: Scalars['Boolean']['output'];
  isLuck: Scalars['Boolean']['output'];
  live?: Maybe<Live>;
  liveId?: Maybe<Scalars['Int']['output']>;
  quantityCombo: Scalars['Int']['output'];
  totalGift: Scalars['Float']['output'];
  userReceived?: Maybe<User>;
  userReceivedId: Scalars['Int']['output'];
  userSent?: Maybe<User>;
  userSentId: Scalars['Int']['output'];
  valueGift: Scalars['Int']['output'];
};

export type GiftSentCustomReturn = {
  __typename?: 'GiftSentCustomReturn';
  giftId: Scalars['Int']['output'];
  invisibleGiftGiver: Scalars['Boolean']['output'];
  newCoins: Scalars['Float']['output'];
  returnForUser: Array<Maybe<ReturnForUser>>;
  returnTimes: Scalars['Int']['output'];
  returnValues: Scalars['Float']['output'];
  status: Scalars['String']['output'];
};

export type GiftSentDashboard = {
  __typename?: 'GiftSentDashboard';
  agencyFinishedProcessing: Scalars['Boolean']['output'];
  agencyStartedProcessing: Scalars['Boolean']['output'];
  balanceFinishedProcessing: Scalars['Boolean']['output'];
  balanceStartedProcessing: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateReceived: Scalars['String']['output'];
  dateSent: Scalars['String']['output'];
  dateSentReceivedLive?: Maybe<Scalars['String']['output']>;
  eventFinishedProcessing: Scalars['Boolean']['output'];
  eventStartedProcessing: Scalars['Boolean']['output'];
  familyReceived?: Maybe<FamilyDashboard>;
  familyReceivedId?: Maybe<Scalars['Int']['output']>;
  familySent?: Maybe<FamilyDashboard>;
  familySentId?: Maybe<Scalars['Int']['output']>;
  gift?: Maybe<GiftDashboard>;
  giftId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  indexLuckCoin: Scalars['Int']['output'];
  invisibleGiftGiver: Scalars['Boolean']['output'];
  invitationFinishedProcessing: Scalars['Boolean']['output'];
  invitationStartedProcessing: Scalars['Boolean']['output'];
  isLuck: Scalars['Boolean']['output'];
  live?: Maybe<LiveDashboard>;
  liveId?: Maybe<Scalars['Int']['output']>;
  pointsFinishedProcessing: Scalars['Boolean']['output'];
  pointsStartedProcessing: Scalars['Boolean']['output'];
  processingQueueId: Scalars['Int']['output'];
  quantityCombo: Scalars['Int']['output'];
  returnTimes: Scalars['Int']['output'];
  totalGift: Scalars['Int']['output'];
  totalGiftSentReceived?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['String']['output'];
  userReceived?: Maybe<UserDashboard>;
  userReceivedId: Scalars['Int']['output'];
  userSent?: Maybe<UserDashboard>;
  userSentId: Scalars['Int']['output'];
  valueEarning: Scalars['Int']['output'];
  valueGift: Scalars['Int']['output'];
  valueGiftSentReceived?: Maybe<Scalars['Float']['output']>;
};

export type GiftSentDashboardReturn = {
  __typename?: 'GiftSentDashboardReturn';
  data?: Maybe<GiftSentDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GiftSentDashboardReturnList = {
  __typename?: 'GiftSentDashboardReturnList';
  data?: Maybe<Array<Maybe<GiftSentDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type GiftSentLuckCoinDashboard = {
  __typename?: 'GiftSentLuckCoinDashboard';
  createdAt: Scalars['String']['output'];
  gift?: Maybe<GiftDashboard>;
  giftId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  indexId: Scalars['Int']['output'];
  quantityCombo: Scalars['Int']['output'];
  returnTimes: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  userSent?: Maybe<UserDashboard>;
  userSentId: Scalars['Int']['output'];
  valueEarning: Scalars['Int']['output'];
  valueGift: Scalars['Int']['output'];
};

export type GiftSentLuckCoinDashboardReturn = {
  __typename?: 'GiftSentLuckCoinDashboardReturn';
  data?: Maybe<GiftSentLuckCoinDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GiftSentLuckCoinDashboardReturnList = {
  __typename?: 'GiftSentLuckCoinDashboardReturnList';
  data?: Maybe<Array<Maybe<GiftSentLuckCoinDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type GiftSentRankingHost = {
  __typename?: 'GiftSentRankingHost';
  invisibleGiftGiver?: Maybe<Scalars['Boolean']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  userAppId?: Maybe<Scalars['String']['output']>;
  userOnlineLive?: Maybe<Scalars['Boolean']['output']>;
  userPhoto?: Maybe<Scalars['String']['output']>;
  userReceivedId?: Maybe<Scalars['Int']['output']>;
  userUsername?: Maybe<Scalars['String']['output']>;
};

export type GiftSentRankingHostFamily = {
  __typename?: 'GiftSentRankingHostFamily';
  familyCountry?: Maybe<Scalars['String']['output']>;
  familyImage?: Maybe<Scalars['String']['output']>;
  familyName?: Maybe<Scalars['String']['output']>;
  familyReceivedId?: Maybe<Scalars['Int']['output']>;
  familyRegion?: Maybe<Scalars['String']['output']>;
  invisibleGiftGiver?: Maybe<Scalars['Boolean']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

export type GiftSentRankingHostFamilyReturnList = {
  __typename?: 'GiftSentRankingHostFamilyReturnList';
  data?: Maybe<Array<Maybe<GiftSentRankingHostFamily>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GiftSentRankingHostLive = {
  __typename?: 'GiftSentRankingHostLive';
  invisibleGiftGiver?: Maybe<Scalars['Boolean']['output']>;
  liveId?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  userAppId?: Maybe<Scalars['String']['output']>;
  userPhoto?: Maybe<Scalars['String']['output']>;
  userReceivedId?: Maybe<Scalars['Int']['output']>;
  userUsername?: Maybe<Scalars['String']['output']>;
};

export type GiftSentRankingHostLiveReturnList = {
  __typename?: 'GiftSentRankingHostLiveReturnList';
  data?: Maybe<Array<Maybe<GiftSentRankingHostLive>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GiftSentRankingHostReturnList = {
  __typename?: 'GiftSentRankingHostReturnList';
  data?: Maybe<Array<Maybe<GiftSentRankingHost>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GiftSentRankingLive = {
  __typename?: 'GiftSentRankingLive';
  liveId?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  userAppId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userPhoto?: Maybe<Scalars['String']['output']>;
  userUsername?: Maybe<Scalars['String']['output']>;
};

export type GiftSentRankingLiveReturnList = {
  __typename?: 'GiftSentRankingLiveReturnList';
  data?: Maybe<Array<Maybe<GiftSentRankingLive>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GiftSentRankingSpectator = {
  __typename?: 'GiftSentRankingSpectator';
  invisibleGiftGiver?: Maybe<Scalars['Boolean']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  userAppId?: Maybe<Scalars['String']['output']>;
  userOnlineLive?: Maybe<Scalars['Boolean']['output']>;
  userPhoto?: Maybe<Scalars['String']['output']>;
  userSentId?: Maybe<Scalars['Int']['output']>;
  userUsername?: Maybe<Scalars['String']['output']>;
};

export type GiftSentRankingSpectatorByProfileReturnList = {
  __typename?: 'GiftSentRankingSpectatorByProfileReturnList';
  data?: Maybe<Array<Maybe<GiftSentRankingSpectatorProfile>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GiftSentRankingSpectatorFamily = {
  __typename?: 'GiftSentRankingSpectatorFamily';
  familyCountry?: Maybe<Scalars['String']['output']>;
  familyImage?: Maybe<Scalars['String']['output']>;
  familyName?: Maybe<Scalars['String']['output']>;
  familyRegion?: Maybe<Scalars['String']['output']>;
  familySentId?: Maybe<Scalars['Int']['output']>;
  invisibleGiftGiver?: Maybe<Scalars['Boolean']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

export type GiftSentRankingSpectatorFamilyReturnList = {
  __typename?: 'GiftSentRankingSpectatorFamilyReturnList';
  data?: Maybe<Array<Maybe<GiftSentRankingSpectatorFamily>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GiftSentRankingSpectatorLive = {
  __typename?: 'GiftSentRankingSpectatorLive';
  invisibleGiftGiver?: Maybe<Scalars['Boolean']['output']>;
  liveId?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  userAppId?: Maybe<Scalars['String']['output']>;
  userPhoto?: Maybe<Scalars['String']['output']>;
  userSentId?: Maybe<Scalars['Int']['output']>;
  userUsername?: Maybe<Scalars['String']['output']>;
};

export type GiftSentRankingSpectatorLiveReturnList = {
  __typename?: 'GiftSentRankingSpectatorLiveReturnList';
  data?: Maybe<Array<Maybe<GiftSentRankingSpectatorLive>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GiftSentRankingSpectatorProfile = {
  __typename?: 'GiftSentRankingSpectatorProfile';
  invisibleGiftGiver?: Maybe<Scalars['Boolean']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  userAppId?: Maybe<Scalars['String']['output']>;
  userOnlineLive?: Maybe<Scalars['Boolean']['output']>;
  userPhoto?: Maybe<Scalars['String']['output']>;
  userSentId?: Maybe<Scalars['Int']['output']>;
  userUsername?: Maybe<Scalars['String']['output']>;
};

export type GiftSentRankingSpectatorReturnList = {
  __typename?: 'GiftSentRankingSpectatorReturnList';
  data?: Maybe<Array<Maybe<GiftSentRankingSpectator>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GiftSentResumeBetweenDateReturn = {
  __typename?: 'GiftSentResumeBetweenDateReturn';
  data?: Maybe<GiftSentResumeByDate>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GiftSentResumeByDate = {
  __typename?: 'GiftSentResumeByDate';
  livestream?: Maybe<Scalars['Float']['output']>;
  party?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  userReceivedId?: Maybe<Scalars['Int']['output']>;
};

export type GiftSentReturn = {
  __typename?: 'GiftSentReturn';
  data?: Maybe<GiftSent>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GiftSentReturnList = {
  __typename?: 'GiftSentReturnList';
  data?: Maybe<Array<Maybe<GiftSent>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type GiftType = {
  __typename?: 'GiftType';
  active?: Maybe<Scalars['Boolean']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  gift?: Maybe<Array<Maybe<Gift>>>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type GiftTypeDashboard = {
  __typename?: 'GiftTypeDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type GiftTypeDashboardReturn = {
  __typename?: 'GiftTypeDashboardReturn';
  data?: Maybe<GiftTypeDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GiftTypeDashboardReturnList = {
  __typename?: 'GiftTypeDashboardReturnList';
  data?: Maybe<Array<Maybe<GiftTypeDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type GiftTypeReturn = {
  __typename?: 'GiftTypeReturn';
  data?: Maybe<GiftType>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GiftTypeReturnList = {
  __typename?: 'GiftTypeReturnList';
  data?: Maybe<Array<Maybe<GiftType>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type GiftsReceived = {
  __typename?: 'GiftsReceived';
  giftCount: Scalars['Float']['output'];
  giftIcon: Scalars['String']['output'];
  giftId: Scalars['String']['output'];
  giftName: Scalars['String']['output'];
};

export type Invitation = {
  __typename?: 'Invitation';
  createdAt: Scalars['String']['output'];
  dateInvite: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  userInvited?: Maybe<User>;
  userInvitedId: Scalars['Int']['output'];
  userWhoInvited?: Maybe<User>;
  userWhoInvitedId: Scalars['Int']['output'];
};

export type InvitationDashboard = {
  __typename?: 'InvitationDashboard';
  createdAt: Scalars['String']['output'];
  dateInvite: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  userInvited?: Maybe<UserDashboard>;
  userInvitedId: Scalars['Int']['output'];
  userWhoInvited?: Maybe<UserDashboard>;
  userWhoInvitedId: Scalars['Int']['output'];
};

export type InvitationDashboardReturn = {
  __typename?: 'InvitationDashboardReturn';
  data?: Maybe<InvitationDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type InvitationDashboardReturnList = {
  __typename?: 'InvitationDashboardReturnList';
  data?: Maybe<Array<Maybe<InvitationDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type InvitationReturn = {
  __typename?: 'InvitationReturn';
  data?: Maybe<Invitation>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type InvitationReturnList = {
  __typename?: 'InvitationReturnList';
  data?: Maybe<Array<Maybe<Invitation>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type InvitationReward = {
  __typename?: 'InvitationReward';
  createdAt: Scalars['String']['output'];
  dateReward: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  invitation?: Maybe<Invitation>;
  invitationId: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  valueReward: Scalars['Int']['output'];
};

export type InvitationRewardDashboard = {
  __typename?: 'InvitationRewardDashboard';
  createdAt: Scalars['String']['output'];
  dateReward: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  invitation?: Maybe<InvitationDashboard>;
  invitationId: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  valueReward: Scalars['Int']['output'];
};

export type InvitationRewardDashboardReturn = {
  __typename?: 'InvitationRewardDashboardReturn';
  data?: Maybe<InvitationRewardDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type InvitationRewardDashboardReturnList = {
  __typename?: 'InvitationRewardDashboardReturnList';
  data?: Maybe<Array<Maybe<InvitationRewardDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type InvitationRewardReturn = {
  __typename?: 'InvitationRewardReturn';
  data?: Maybe<InvitationReward>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type InvitationRewardReturnList = {
  __typename?: 'InvitationRewardReturnList';
  data?: Maybe<Array<Maybe<InvitationReward>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Item = {
  __typename?: 'Item';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  duration: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  typeItem: TypeItem;
  updatedAt: Scalars['String']['output'];
  valueBeans: Scalars['Int']['output'];
};

export type ItemDashboard = {
  __typename?: 'ItemDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  duration: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  typeItem: TypeItem;
  updatedAt: Scalars['String']['output'];
  valueBeans: Scalars['Int']['output'];
};

export type ItemDashboardReturn = {
  __typename?: 'ItemDashboardReturn';
  data?: Maybe<ItemDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ItemDashboardReturnList = {
  __typename?: 'ItemDashboardReturnList';
  data?: Maybe<Array<Maybe<ItemDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ItemPurchased = {
  __typename?: 'ItemPurchased';
  createdAt: Scalars['String']['output'];
  datePurchased: Scalars['String']['output'];
  expiresIn: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  item?: Maybe<Item>;
  itemId: Scalars['Int']['output'];
  typeItem: TypeItem;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
  userSent?: Maybe<User>;
  userSentId: Scalars['Int']['output'];
};

export type ItemPurchasedDashboard = {
  __typename?: 'ItemPurchasedDashboard';
  createdAt: Scalars['String']['output'];
  datePurchased: Scalars['String']['output'];
  expiresIn: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  item?: Maybe<ItemDashboard>;
  itemId: Scalars['Int']['output'];
  typeItem: TypeItem;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
  userSent?: Maybe<UserDashboard>;
  userSentId: Scalars['Int']['output'];
};

export type ItemPurchasedDashboardReturn = {
  __typename?: 'ItemPurchasedDashboardReturn';
  data?: Maybe<ItemPurchasedDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ItemPurchasedDashboardReturnList = {
  __typename?: 'ItemPurchasedDashboardReturnList';
  data?: Maybe<Array<Maybe<ItemPurchasedDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ItemPurchasedReturn = {
  __typename?: 'ItemPurchasedReturn';
  data?: Maybe<ItemPurchased>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ItemPurchasedReturnList = {
  __typename?: 'ItemPurchasedReturnList';
  data?: Maybe<Array<Maybe<ItemPurchased>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ItemReturn = {
  __typename?: 'ItemReturn';
  data?: Maybe<Item>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ItemReturnList = {
  __typename?: 'ItemReturnList';
  data?: Maybe<Array<Maybe<Item>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LeaveFamilyReturn = {
  __typename?: 'LeaveFamilyReturn';
  data?: Maybe<FamilyMember>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LevelHost = {
  __typename?: 'LevelHost';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  emblem: Scalars['String']['output'];
  gradientColor: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  requiredExp: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type LevelHostDashboard = {
  __typename?: 'LevelHostDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  emblem: Scalars['String']['output'];
  gradientColor: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  requiredExp: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type LevelHostDashboardReturn = {
  __typename?: 'LevelHostDashboardReturn';
  data?: Maybe<LevelHostDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LevelHostDashboardReturnList = {
  __typename?: 'LevelHostDashboardReturnList';
  data?: Maybe<Array<Maybe<LevelHostDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LevelHostReturn = {
  __typename?: 'LevelHostReturn';
  data?: Maybe<LevelHost>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LevelHostReturnList = {
  __typename?: 'LevelHostReturnList';
  data?: Maybe<Array<Maybe<LevelHost>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LevelSpectator = {
  __typename?: 'LevelSpectator';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  emblem: Scalars['String']['output'];
  gradientColor: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  requiredExp: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type LevelSpectatorDashboard = {
  __typename?: 'LevelSpectatorDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  emblem: Scalars['String']['output'];
  gradientColor: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  requiredExp: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type LevelSpectatorDashboardReturn = {
  __typename?: 'LevelSpectatorDashboardReturn';
  data?: Maybe<LevelSpectatorDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LevelSpectatorDashboardReturnList = {
  __typename?: 'LevelSpectatorDashboardReturnList';
  data?: Maybe<Array<Maybe<LevelSpectatorDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LevelSpectatorReturn = {
  __typename?: 'LevelSpectatorReturn';
  data?: Maybe<LevelSpectator>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LevelSpectatorReturnList = {
  __typename?: 'LevelSpectatorReturnList';
  data?: Maybe<Array<Maybe<LevelSpectator>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Like = {
  __typename?: 'Like';
  date?: Maybe<Scalars['String']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type LikePostReturn = {
  __typename?: 'LikePostReturn';
  data?: Maybe<PostLike>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Live = {
  __typename?: 'Live';
  announcement: Scalars['String']['output'];
  channel: Scalars['String']['output'];
  channelClose?: Maybe<Scalars['Boolean']['output']>;
  channelQuality: Scalars['String']['output'];
  copyLivesDetailsTags?: Maybe<Scalars['String']['output']>;
  copyUsersAppId: Scalars['String']['output'];
  copyUsersUsername: Scalars['String']['output'];
  country: Scalars['String']['output'];
  countryShow: Scalars['String']['output'];
  dateClose?: Maybe<Scalars['String']['output']>;
  dateOpen: Scalars['String']['output'];
  giftsSents?: Maybe<Array<Maybe<GiftSent>>>;
  id: Scalars['Int']['output'];
  imageAvatar: Scalars['String']['output'];
  linkShare: Scalars['String']['output'];
  liveDetailPeople?: Maybe<Array<Maybe<LiveDetailPeople>>>;
  liveDetailTag?: Maybe<Array<Maybe<Tag>>>;
  liveSetting?: Maybe<LiveSettings>;
  newFollowers?: Maybe<Scalars['Int']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  totalTimeLive?: Maybe<Scalars['String']['output']>;
  typeLive: TypeLive;
  user?: Maybe<UserProfile>;
  userId: Scalars['Int']['output'];
  utc?: Maybe<Scalars['String']['output']>;
  viewers?: Maybe<Scalars['Int']['output']>;
};

export type LiveChatMessage = {
  __typename?: 'LiveChatMessage';
  message?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserMessage>;
};

export type LiveDashboard = {
  __typename?: 'LiveDashboard';
  announcement: Scalars['String']['output'];
  channel: Scalars['String']['output'];
  channelClose: Scalars['Boolean']['output'];
  channelQuality: Scalars['String']['output'];
  copyLivesDetailsTags?: Maybe<Scalars['String']['output']>;
  copyUsersAppId?: Maybe<Scalars['String']['output']>;
  copyUsersUsername?: Maybe<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  countryShow: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dateClose?: Maybe<Scalars['String']['output']>;
  dateOpen: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imageAvatar: Scalars['String']['output'];
  linkShare: Scalars['String']['output'];
  newFollowers: Scalars['Int']['output'];
  points: Scalars['Float']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  totalTimeLive?: Maybe<Scalars['String']['output']>;
  typeLive: TypeLive;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
  utc: Scalars['String']['output'];
  viewers: Scalars['Int']['output'];
};

export type LiveDashboardReturn = {
  __typename?: 'LiveDashboardReturn';
  data?: Maybe<LiveDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveDashboardReturnList = {
  __typename?: 'LiveDashboardReturnList';
  data?: Maybe<Array<Maybe<LiveDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LiveDetailGuest = {
  __typename?: 'LiveDetailGuest';
  accepted?: Maybe<Scalars['Boolean']['output']>;
  audioMuted?: Maybe<Scalars['Boolean']['output']>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  live?: Maybe<Live>;
  liveId?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  rejected?: Maybe<Scalars['Boolean']['output']>;
  requesting?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type LiveDetailGuestDashboard = {
  __typename?: 'LiveDetailGuestDashboard';
  accepted: Scalars['Boolean']['output'];
  audioMuted: Scalars['Boolean']['output'];
  audioOpen: Scalars['Boolean']['output'];
  blocked: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateJoined?: Maybe<Scalars['String']['output']>;
  dateLeaved?: Maybe<Scalars['String']['output']>;
  live?: Maybe<LiveDashboard>;
  liveId: Scalars['Int']['output'];
  position: Scalars['Int']['output'];
  rejected: Scalars['Boolean']['output'];
  requesting: Scalars['Boolean']['output'];
  totalTime?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId?: Maybe<Scalars['Int']['output']>;
  videoOpen: Scalars['Boolean']['output'];
};

export type LiveDetailGuestDashboardReturn = {
  __typename?: 'LiveDetailGuestDashboardReturn';
  data?: Maybe<LiveDetailGuestDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveDetailGuestDashboardReturnList = {
  __typename?: 'LiveDetailGuestDashboardReturnList';
  data?: Maybe<Array<Maybe<LiveDetailGuestDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LiveDetailGuestReturn = {
  __typename?: 'LiveDetailGuestReturn';
  data?: Maybe<LiveDetailGuest>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveDetailGuestReturnList = {
  __typename?: 'LiveDetailGuestReturnList';
  data?: Maybe<Array<Maybe<LiveDetailGuest>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveDetailPeople = {
  __typename?: 'LiveDetailPeople';
  canJoinSeat?: Maybe<Scalars['Boolean']['output']>;
  chatMuted?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['String']['output'];
  inLive?: Maybe<Scalars['Boolean']['output']>;
  kicked?: Maybe<Scalars['Boolean']['output']>;
  live?: Maybe<Live>;
  liveId: Scalars['Int']['output'];
  points?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type LiveDetailPeopleDashboard = {
  __typename?: 'LiveDetailPeopleDashboard';
  canJoinSeat: Scalars['Boolean']['output'];
  chatMuted: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  inLive: Scalars['Boolean']['output'];
  kicked: Scalars['Boolean']['output'];
  live?: Maybe<LiveDashboard>;
  liveId: Scalars['Int']['output'];
  points: Scalars['Float']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type LiveDetailPeopleDashboardReturn = {
  __typename?: 'LiveDetailPeopleDashboardReturn';
  data?: Maybe<LiveDetailPeopleDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveDetailPeopleDashboardReturnList = {
  __typename?: 'LiveDetailPeopleDashboardReturnList';
  data?: Maybe<Array<Maybe<LiveDetailPeopleDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LiveDetailPeopleReturn = {
  __typename?: 'LiveDetailPeopleReturn';
  data?: Maybe<LiveDetailPeople>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveDetailPeopleReturnList = {
  __typename?: 'LiveDetailPeopleReturnList';
  data?: Maybe<Array<Maybe<LiveDetailPeople>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveDetailTag = {
  __typename?: 'LiveDetailTag';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  live?: Maybe<Live>;
  liveId: Scalars['Int']['output'];
  liveTag?: Maybe<LiveTag>;
  liveTagId: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type LiveDetailTagDashboard = {
  __typename?: 'LiveDetailTagDashboard';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  live?: Maybe<LiveDashboard>;
  liveId: Scalars['Int']['output'];
  liveTag?: Maybe<LiveTagDashboard>;
  liveTagId: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type LiveDetailTagDashboardReturn = {
  __typename?: 'LiveDetailTagDashboardReturn';
  data?: Maybe<LiveDetailTagDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveDetailTagDashboardReturnList = {
  __typename?: 'LiveDetailTagDashboardReturnList';
  data?: Maybe<Array<Maybe<LiveDetailTagDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LiveDetailTagReturn = {
  __typename?: 'LiveDetailTagReturn';
  data?: Maybe<LiveDetailTag>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveDetailTagReturnList = {
  __typename?: 'LiveDetailTagReturnList';
  data?: Maybe<Array<Maybe<LiveDetailTag>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveFilter = {
  __typename?: 'LiveFilter';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  resource: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type LiveFilterDashboard = {
  __typename?: 'LiveFilterDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  resource: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type LiveFilterDashboardReturn = {
  __typename?: 'LiveFilterDashboardReturn';
  data?: Maybe<LiveFilterDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveFilterDashboardReturnList = {
  __typename?: 'LiveFilterDashboardReturnList';
  data?: Maybe<Array<Maybe<LiveFilterDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LiveFilterReturn = {
  __typename?: 'LiveFilterReturn';
  data?: Maybe<LiveFilter>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveFilterReturnList = {
  __typename?: 'LiveFilterReturnList';
  data?: Maybe<Array<Maybe<LiveFilter>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LiveGiftsAnimations = {
  __typename?: 'LiveGiftsAnimations';
  animationSpeedCenter?: Maybe<Scalars['Int']['output']>;
  animationSpeedSeat?: Maybe<Scalars['Int']['output']>;
  archive?: Maybe<Scalars['String']['output']>;
  elementsToGo?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  message?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type LiveReport = {
  __typename?: 'LiveReport';
  createdAt: Scalars['String']['output'];
  dateReport: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  live?: Maybe<Live>;
  liveId: Scalars['Int']['output'];
  liveTypeReport?: Maybe<LiveTypeReport>;
  liveTypeReportId: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type LiveReportDashboard = {
  __typename?: 'LiveReportDashboard';
  createdAt: Scalars['String']['output'];
  dateReport: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  live?: Maybe<LiveDashboard>;
  liveId: Scalars['Int']['output'];
  liveTypeReport?: Maybe<LiveTypeReportDashboard>;
  liveTypeReportId: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type LiveReportDashboardReturn = {
  __typename?: 'LiveReportDashboardReturn';
  data?: Maybe<LiveReportDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveReportDashboardReturnList = {
  __typename?: 'LiveReportDashboardReturnList';
  data?: Maybe<Array<Maybe<LiveReportDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LiveReportReturn = {
  __typename?: 'LiveReportReturn';
  data?: Maybe<LiveReport>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveReportReturnList = {
  __typename?: 'LiveReportReturnList';
  data?: Maybe<Array<Maybe<LiveReport>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveResume = {
  __typename?: 'LiveResume';
  createdAt: Scalars['String']['output'];
  dateLive: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  live?: Maybe<Live>;
  liveId: Scalars['Int']['output'];
  newFollowers: Scalars['Int']['output'];
  points: Scalars['Float']['output'];
  totalTimeLive?: Maybe<Scalars['String']['output']>;
  typeLive: TypeLive;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
  viewers: Scalars['Int']['output'];
};

export type LiveResumeDashboard = {
  __typename?: 'LiveResumeDashboard';
  createdAt: Scalars['String']['output'];
  dateLive: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  live?: Maybe<LiveDashboard>;
  liveId: Scalars['Int']['output'];
  newFollowers: Scalars['Int']['output'];
  points: Scalars['Float']['output'];
  totalTimeLive?: Maybe<Scalars['String']['output']>;
  typeLive: TypeLive;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
  viewers: Scalars['Int']['output'];
};

export type LiveResumeDashboardReturn = {
  __typename?: 'LiveResumeDashboardReturn';
  data?: Maybe<LiveResumeDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveResumeDashboardReturnList = {
  __typename?: 'LiveResumeDashboardReturnList';
  data?: Maybe<Array<Maybe<LiveResumeDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LiveResumeReturn = {
  __typename?: 'LiveResumeReturn';
  data?: Maybe<LiveResume>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveResumeReturnList = {
  __typename?: 'LiveResumeReturnList';
  data?: Maybe<Array<Maybe<LiveResume>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveReturn = {
  __typename?: 'LiveReturn';
  data?: Maybe<Live>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveReturnList = {
  __typename?: 'LiveReturnList';
  data?: Maybe<Array<Maybe<Live>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveSetting = {
  __typename?: 'LiveSetting';
  allowMessagesChat?: Maybe<Scalars['Boolean']['output']>;
  allowStrangersInSeat?: Maybe<Scalars['Boolean']['output']>;
  liveId?: Maybe<Scalars['Int']['output']>;
  messagePinnedChat?: Maybe<Scalars['String']['output']>;
  numberSeats?: Maybe<Scalars['Int']['output']>;
  roomPassword?: Maybe<Scalars['String']['output']>;
  themeBackground?: Maybe<Scalars['String']['output']>;
};

export type LiveSettingDashboard = {
  __typename?: 'LiveSettingDashboard';
  allowMessagesChat: Scalars['Boolean']['output'];
  allowStrangersInSeat: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  live?: Maybe<LiveDashboard>;
  liveId: Scalars['Int']['output'];
  messagePinnedChat?: Maybe<Scalars['String']['output']>;
  numberSeats: Scalars['Int']['output'];
  roomPassword?: Maybe<Scalars['String']['output']>;
  themeBackground?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type LiveSettingDashboardReturn = {
  __typename?: 'LiveSettingDashboardReturn';
  data?: Maybe<LiveSettingDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveSettingDashboardReturnList = {
  __typename?: 'LiveSettingDashboardReturnList';
  data?: Maybe<Array<Maybe<LiveSettingDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LiveSettingReturn = {
  __typename?: 'LiveSettingReturn';
  data?: Maybe<LiveSetting>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveSettingReturnList = {
  __typename?: 'LiveSettingReturnList';
  data?: Maybe<Array<Maybe<LiveSetting>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LiveSettings = {
  __typename?: 'LiveSettings';
  roomPassword?: Maybe<Scalars['String']['output']>;
};

export type LiveSticker = {
  __typename?: 'LiveSticker';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  resource: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type LiveStickerDashboard = {
  __typename?: 'LiveStickerDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  resource: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type LiveStickerDashboardReturn = {
  __typename?: 'LiveStickerDashboardReturn';
  data?: Maybe<LiveStickerDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveStickerDashboardReturnList = {
  __typename?: 'LiveStickerDashboardReturnList';
  data?: Maybe<Array<Maybe<LiveStickerDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LiveStickerReturn = {
  __typename?: 'LiveStickerReturn';
  data?: Maybe<LiveSticker>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveStickerReturnList = {
  __typename?: 'LiveStickerReturnList';
  data?: Maybe<Array<Maybe<LiveSticker>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LiveTag = {
  __typename?: 'LiveTag';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type LiveTagDashboard = {
  __typename?: 'LiveTagDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type LiveTagDashboardReturn = {
  __typename?: 'LiveTagDashboardReturn';
  data?: Maybe<LiveTagDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveTagDashboardReturnList = {
  __typename?: 'LiveTagDashboardReturnList';
  data?: Maybe<Array<Maybe<LiveTagDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LiveTagReturn = {
  __typename?: 'LiveTagReturn';
  data?: Maybe<LiveTag>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveTagReturnList = {
  __typename?: 'LiveTagReturnList';
  data?: Maybe<Array<Maybe<LiveTag>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LiveTypeReport = {
  __typename?: 'LiveTypeReport';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type LiveTypeReportDashboard = {
  __typename?: 'LiveTypeReportDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type LiveTypeReportDashboardReturn = {
  __typename?: 'LiveTypeReportDashboardReturn';
  data?: Maybe<LiveTypeReportDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveTypeReportDashboardReturnList = {
  __typename?: 'LiveTypeReportDashboardReturnList';
  data?: Maybe<Array<Maybe<LiveTypeReportDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LiveTypeReportReturn = {
  __typename?: 'LiveTypeReportReturn';
  data?: Maybe<LiveTypeReport>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LiveTypeReportReturnList = {
  __typename?: 'LiveTypeReportReturnList';
  data?: Maybe<Array<Maybe<LiveTypeReport>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LoginPartnerDashboardReturn = {
  __typename?: 'LoginPartnerDashboardReturn';
  data?: Maybe<AccessPartnerDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LoginReturn = {
  __typename?: 'LoginReturn';
  data?: Maybe<User>;
  error?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  activeAccessAdministratorDashboard?: Maybe<UpdateAccessAdministratorDashboardReturn>;
  activeAccessPartnerDashboard?: Maybe<UpdateAccessPartnerDashboardReturn>;
  activeAgency?: Maybe<UpdateAgencyReturn>;
  activeAgencyDashboard?: Maybe<UpdateAgencyDashboardReturn>;
  activeAgencyUser?: Maybe<UpdateAgencyUserReturn>;
  activeAgencyUserDashboard?: Maybe<UpdateAgencyUserDashboardReturn>;
  activeBadge?: Maybe<UpdateBadgeReturn>;
  activeBadgeDashboard?: Maybe<UpdateBadgeDashboardReturn>;
  activeBannerLink?: Maybe<UpdateBannerLinkReturn>;
  activeBannerLinkDashboard?: Maybe<UpdateBannerLinkDashboardReturn>;
  activeCountryCode?: Maybe<UpdateCountryCodeReturn>;
  activeCountryCodeDashboard?: Maybe<UpdateCountryCodeDashboardReturn>;
  activeDomainDashboard?: Maybe<UpdateDomainDashboardReturn>;
  activeExampleOtherOneDashboard?: Maybe<UpdateExampleOtherOneDashboardReturn>;
  activeExampleOtherTwoDashboard?: Maybe<UpdateExampleOtherTwoDashboardReturn>;
  activeExampleTableDashboard?: Maybe<UpdateExampleTableDashboardReturn>;
  activeFamily?: Maybe<UpdateFamilyReturn>;
  activeFamilyDashboard?: Maybe<UpdateFamilyDashboardReturn>;
  activeFamilyForce?: Maybe<UpdateFamilyForceReturn>;
  activeFamilyForceBenefit?: Maybe<UpdateFamilyForceBenefitReturn>;
  activeFamilyForceBenefitDashboard?: Maybe<UpdateFamilyForceBenefitDashboardReturn>;
  activeFamilyForceBenefitDetail?: Maybe<UpdateFamilyForceBenefitDetailReturn>;
  activeFamilyForceBenefitDetailDashboard?: Maybe<UpdateFamilyForceBenefitDetailDashboardReturn>;
  activeFamilyForceDashboard?: Maybe<UpdateFamilyForceDashboardReturn>;
  activeFamilyTaskType?: Maybe<UpdateFamilyTaskTypeReturn>;
  activeFamilyTaskTypeDashboard?: Maybe<UpdateFamilyTaskTypeDashboardReturn>;
  activeFamilyTaskTypeHard?: Maybe<UpdateFamilyTaskTypeHardReturn>;
  activeFamilyTaskTypeHardDashboard?: Maybe<UpdateFamilyTaskTypeHardDashboardReturn>;
  activeFamilyTaskTypeProgress?: Maybe<UpdateFamilyTaskTypeProgressReturn>;
  activeFamilyTaskTypeProgressDashboard?: Maybe<UpdateFamilyTaskTypeProgressDashboardReturn>;
  activeGameConfigurationDefaultEarning?: Maybe<UpdateGameConfigurationDefaultEarningReturn>;
  activeGameConfigurationDefaultEarningDashboard?: Maybe<UpdateGameConfigurationDefaultEarningDashboardReturn>;
  activeGameConfigurationLuckCoin?: Maybe<UpdateGameConfigurationLuckCoinReturn>;
  activeGameConfigurationLuckCoinDashboard?: Maybe<UpdateGameConfigurationLuckCoinDashboardReturn>;
  activeGameConfigurationSurpriseBox?: Maybe<UpdateGameConfigurationSurpriseBoxReturn>;
  activeGameConfigurationSurpriseBoxDashboard?: Maybe<UpdateGameConfigurationSurpriseBoxDashboardReturn>;
  activeGift?: Maybe<UpdateGiftReturn>;
  activeGiftDashboard?: Maybe<UpdateGiftDashboardReturn>;
  activeGiftEvent?: Maybe<UpdateGiftEventReturn>;
  activeGiftEventDashboard?: Maybe<UpdateGiftEventDashboardReturn>;
  activeGiftType?: Maybe<UpdateGiftTypeReturn>;
  activeGiftTypeDashboard?: Maybe<UpdateGiftTypeDashboardReturn>;
  activeItem?: Maybe<UpdateItemReturn>;
  activeItemDashboard?: Maybe<UpdateItemDashboardReturn>;
  activeLevelHost?: Maybe<UpdateLevelHostReturn>;
  activeLevelHostDashboard?: Maybe<UpdateLevelHostDashboardReturn>;
  activeLevelSpectator?: Maybe<UpdateLevelSpectatorReturn>;
  activeLevelSpectatorDashboard?: Maybe<UpdateLevelSpectatorDashboardReturn>;
  activeLiveFilter?: Maybe<UpdateLiveFilterReturn>;
  activeLiveFilterDashboard?: Maybe<UpdateLiveFilterDashboardReturn>;
  activeLiveSticker?: Maybe<UpdateLiveStickerReturn>;
  activeLiveStickerDashboard?: Maybe<UpdateLiveStickerDashboardReturn>;
  activeLiveTag?: Maybe<UpdateLiveTagReturn>;
  activeLiveTagDashboard?: Maybe<UpdateLiveTagDashboardReturn>;
  activeLiveTypeReport?: Maybe<UpdateLiveTypeReportReturn>;
  activeLiveTypeReportDashboard?: Maybe<UpdateLiveTypeReportDashboardReturn>;
  activePostDashboard?: Maybe<UpdatePostDashboardReturn>;
  activeTag?: Maybe<UpdateTagReturn>;
  activeTagDashboard?: Maybe<UpdateTagDashboardReturn>;
  activeTaskTypeHost?: Maybe<UpdateTaskTypeHostReturn>;
  activeTaskTypeHostDashboard?: Maybe<UpdateTaskTypeHostDashboardReturn>;
  activeTaskTypeSpectator?: Maybe<UpdateTaskTypeSpectatorReturn>;
  activeTaskTypeSpectatorDashboard?: Maybe<UpdateTaskTypeSpectatorDashboardReturn>;
  activeVip?: Maybe<UpdateVipReturn>;
  activeVipBenefitDashboard?: Maybe<UpdateVipBenefitDashboardReturn>;
  activeVipBenefitDetailDashboard?: Maybe<UpdateVipBenefitDetailDashboardReturn>;
  activeVipDashboard?: Maybe<UpdateVipDashboardReturn>;
  activeWalletPriceCoin?: Maybe<UpdateWalletPriceCoinReturn>;
  activeWalletPriceCoinDashboard?: Maybe<UpdateWalletPriceCoinDashboardReturn>;
  activeWalletTypeConvert?: Maybe<UpdateWalletTypeConvertReturn>;
  activeWalletTypeConvertDashboard?: Maybe<UpdateWalletTypeConvertDashboardReturn>;
  activeWithdrawalMethod?: Maybe<UpdateWithdrawalMethodReturn>;
  activeWithdrawalMethodDashboard?: Maybe<UpdateWithdrawalMethodDashboardReturn>;
  activeWithdrawalTypeRefused?: Maybe<UpdateWithdrawalTypeRefusedReturn>;
  activeWithdrawalTypeRefusedDashboard?: Maybe<UpdateWithdrawalTypeRefusedDashboardReturn>;
  block?: Maybe<BlockReturn>;
  blockSeat?: Maybe<Scalars['String']['output']>;
  changeLanguage?: Maybe<StringReturn>;
  closeLive?: Maybe<CreateLiveReturn>;
  convertPoints?: Maybe<UpdateWalletConvertReturn>;
  createAccessAdministratorDashboard?: Maybe<CreateAccessAdministratorDashboardReturn>;
  createAccessAdministratorFakeDashboard?: Maybe<CreateAccessAdministratorFakeDashboardReturn>;
  createAccessPartnerDashboard?: Maybe<CreateAccessPartnerDashboardReturn>;
  createAccessPartnerFakeDashboard?: Maybe<CreateAccessPartnerFakeDashboardReturn>;
  createAgency?: Maybe<CreateAgencyReturn>;
  createAgencyBalancePointDashboard?: Maybe<CreateAgencyBalancePointDashboardReturn>;
  createAgencyBalancePointFakeDashboard?: Maybe<CreateAgencyBalancePointFakeDashboardReturn>;
  createAgencyBalancePoints?: Maybe<CreateAgencyBalancePointsReturn>;
  createAgencyBalancePointsFake?: Maybe<CreateAgencyBalancePointsFakeReturn>;
  createAgencyBanned?: Maybe<CreateAgencyBannedReturn>;
  createAgencyBannedDashboard?: Maybe<CreateAgencyBannedDashboardReturn>;
  createAgencyBannedDetail?: Maybe<CreateAgencyBannedDetailReturn>;
  createAgencyBannedDetailDashboard?: Maybe<CreateAgencyBannedDetailDashboardReturn>;
  createAgencyBannedDetailFake?: Maybe<CreateAgencyBannedDetailFakeReturn>;
  createAgencyBannedDetailFakeDashboard?: Maybe<CreateAgencyBannedDetailFakeDashboardReturn>;
  createAgencyBannedFake?: Maybe<CreateAgencyBannedFakeReturn>;
  createAgencyBannedFakeDashboard?: Maybe<CreateAgencyBannedFakeDashboardReturn>;
  createAgencyDashboard?: Maybe<CreateAgencyDashboardReturn>;
  createAgencyFake?: Maybe<CreateAgencyFakeReturn>;
  createAgencyFakeDashboard?: Maybe<CreateAgencyFakeDashboardReturn>;
  createAgencyResellerBalanceCoinDashboard?: Maybe<CreateAgencyResellerBalanceCoinDashboardReturn>;
  createAgencyResellerBalanceCoinFakeDashboard?: Maybe<CreateAgencyResellerBalanceCoinFakeDashboardReturn>;
  createAgencySaleDetail?: Maybe<CreateAgencySaleDetailReturn>;
  createAgencySaleDetailDashboard?: Maybe<CreateAgencySaleDetailDashboardReturn>;
  createAgencySaleDetailFake?: Maybe<CreateAgencySaleDetailFakeReturn>;
  createAgencySaleDetailFakeDashboard?: Maybe<CreateAgencySaleDetailFakeDashboardReturn>;
  createAgencyUser?: Maybe<CreateAgencyUserReturn>;
  createAgencyUserDashboard?: Maybe<CreateAgencyUserDashboardReturn>;
  createAgencyUserFake?: Maybe<CreateAgencyUserFakeReturn>;
  createAgencyUserFakeDashboard?: Maybe<CreateAgencyUserFakeDashboardReturn>;
  createAgencyWarning?: Maybe<CreateAgencyWarningReturn>;
  createAgencyWarningDashboard?: Maybe<CreateAgencyWarningDashboardReturn>;
  createAgencyWarningDetail?: Maybe<CreateAgencyWarningDetailReturn>;
  createAgencyWarningDetailDashboard?: Maybe<CreateAgencyWarningDetailDashboardReturn>;
  createAgencyWarningDetailFake?: Maybe<CreateAgencyWarningDetailFakeReturn>;
  createAgencyWarningDetailFakeDashboard?: Maybe<CreateAgencyWarningDetailFakeDashboardReturn>;
  createAgencyWarningFake?: Maybe<CreateAgencyWarningFakeReturn>;
  createAgencyWarningFakeDashboard?: Maybe<CreateAgencyWarningFakeDashboardReturn>;
  createAppLog?: Maybe<CreateAppLogReturn>;
  createAppLogDashboard?: Maybe<CreateAppLogDashboardReturn>;
  createAppLogFake?: Maybe<CreateAppLogFakeReturn>;
  createAppLogFakeDashboard?: Maybe<CreateAppLogFakeDashboardReturn>;
  createAppSetting?: Maybe<CreateAppSettingReturn>;
  createAppSettingDashboard?: Maybe<CreateAppSettingDashboardReturn>;
  createAppSettingFake?: Maybe<CreateAppSettingFakeReturn>;
  createAppSettingFakeDashboard?: Maybe<CreateAppSettingFakeDashboardReturn>;
  createBadge?: Maybe<CreateBadgeReturn>;
  createBadgeDashboard?: Maybe<CreateBadgeDashboardReturn>;
  createBadgeFake?: Maybe<CreateBadgeFakeReturn>;
  createBadgeFakeDashboard?: Maybe<CreateBadgeFakeDashboardReturn>;
  createBannerLink?: Maybe<CreateBannerLinkReturn>;
  createBannerLinkDashboard?: Maybe<CreateBannerLinkDashboardReturn>;
  createBannerLinkFake?: Maybe<CreateBannerLinkFakeReturn>;
  createBannerLinkFakeDashboard?: Maybe<CreateBannerLinkFakeDashboardReturn>;
  createChat?: Maybe<CreateChatReturn>;
  createChatDetail?: Maybe<CreateChatDetailReturn>;
  createChatDetailFake?: Maybe<CreateChatDetailFakeReturn>;
  createChatFake?: Maybe<CreateChatFakeReturn>;
  createCountryCode?: Maybe<CreateCountryCodeReturn>;
  createCountryCodeDashboard?: Maybe<CreateCountryCodeDashboardReturn>;
  createCountryCodeFake?: Maybe<CreateCountryCodeFakeReturn>;
  createCountryCodeFakeDashboard?: Maybe<CreateCountryCodeFakeDashboardReturn>;
  createDomainDashboard?: Maybe<CreateDomainDashboardReturn>;
  createDomainFakeDashboard?: Maybe<CreateDomainFakeDashboardReturn>;
  createEvent?: Maybe<CreateEventReturn>;
  createEventDashboard?: Maybe<CreateEventDashboardReturn>;
  createEventFake?: Maybe<CreateEventFakeReturn>;
  createEventFakeDashboard?: Maybe<CreateEventFakeDashboardReturn>;
  createExampleOtherOneDashboard?: Maybe<CreateExampleOtherOneDashboardReturn>;
  createExampleOtherOneFakeDashboard?: Maybe<CreateExampleOtherOneFakeDashboardReturn>;
  createExampleOtherTwoDashboard?: Maybe<CreateExampleOtherTwoDashboardReturn>;
  createExampleOtherTwoFakeDashboard?: Maybe<CreateExampleOtherTwoFakeDashboardReturn>;
  createExampleTableDashboard?: Maybe<CreateExampleTableDashboardReturn>;
  createExampleTableFakeDashboard?: Maybe<CreateExampleTableFakeDashboardReturn>;
  createFakeData?: Maybe<CreateFamilyFakeReturn>;
  createFamily?: Maybe<CreateFamilyReturn>;
  createFamilyDashboard?: Maybe<CreateFamilyDashboardReturn>;
  createFamilyFake?: Maybe<CreateFamilyFakeReturn>;
  createFamilyFakeDashboard?: Maybe<CreateFamilyFakeDashboardReturn>;
  createFamilyForce?: Maybe<CreateFamilyForceReturn>;
  createFamilyForceBenefit?: Maybe<CreateFamilyForceBenefitReturn>;
  createFamilyForceBenefitDashboard?: Maybe<CreateFamilyForceBenefitDashboardReturn>;
  createFamilyForceBenefitDetail?: Maybe<CreateFamilyForceBenefitDetailReturn>;
  createFamilyForceBenefitDetailDashboard?: Maybe<CreateFamilyForceBenefitDetailDashboardReturn>;
  createFamilyForceBenefitDetailFake?: Maybe<CreateFamilyForceBenefitDetailFakeReturn>;
  createFamilyForceBenefitDetailFakeDashboard?: Maybe<CreateFamilyForceBenefitDetailFakeDashboardReturn>;
  createFamilyForceBenefitFake?: Maybe<CreateFamilyForceBenefitFakeReturn>;
  createFamilyForceBenefitFakeDashboard?: Maybe<CreateFamilyForceBenefitFakeDashboardReturn>;
  createFamilyForceDashboard?: Maybe<CreateFamilyForceDashboardReturn>;
  createFamilyForceFake?: Maybe<CreateFamilyForceFakeReturn>;
  createFamilyForceFakeDashboard?: Maybe<CreateFamilyForceFakeDashboardReturn>;
  createFamilyMember?: Maybe<CreateFamilyMemberReturn>;
  createFamilyMemberDashboard?: Maybe<CreateFamilyMemberDashboardReturn>;
  createFamilyMemberFake?: Maybe<CreateFamilyMemberFakeReturn>;
  createFamilyMemberFakeDashboard?: Maybe<CreateFamilyMemberFakeDashboardReturn>;
  createFamilyTaskMember?: Maybe<CreateFamilyTaskMemberReturn>;
  createFamilyTaskMemberDashboard?: Maybe<CreateFamilyTaskMemberDashboardReturn>;
  createFamilyTaskMemberFake?: Maybe<CreateFamilyTaskMemberFakeReturn>;
  createFamilyTaskMemberFakeDashboard?: Maybe<CreateFamilyTaskMemberFakeDashboardReturn>;
  createFamilyTaskMemberHard?: Maybe<CreateFamilyTaskMemberHardReturn>;
  createFamilyTaskMemberHardDashboard?: Maybe<CreateFamilyTaskMemberHardDashboardReturn>;
  createFamilyTaskMemberHardFake?: Maybe<CreateFamilyTaskMemberHardFakeReturn>;
  createFamilyTaskMemberHardFakeDashboard?: Maybe<CreateFamilyTaskMemberHardFakeDashboardReturn>;
  createFamilyTaskProgress?: Maybe<CreateFamilyTaskProgressReturn>;
  createFamilyTaskProgressDashboard?: Maybe<CreateFamilyTaskProgressDashboardReturn>;
  createFamilyTaskProgressFake?: Maybe<CreateFamilyTaskProgressFakeReturn>;
  createFamilyTaskProgressFakeDashboard?: Maybe<CreateFamilyTaskProgressFakeDashboardReturn>;
  createFamilyTaskProgressReceived?: Maybe<CreateFamilyTaskProgressReceivedReturn>;
  createFamilyTaskProgressReceivedDashboard?: Maybe<CreateFamilyTaskProgressReceivedDashboardReturn>;
  createFamilyTaskProgressReceivedFake?: Maybe<CreateFamilyTaskProgressReceivedFakeReturn>;
  createFamilyTaskProgressReceivedFakeDashboard?: Maybe<CreateFamilyTaskProgressReceivedFakeDashboardReturn>;
  createFamilyTaskType?: Maybe<CreateFamilyTaskTypeReturn>;
  createFamilyTaskTypeDashboard?: Maybe<CreateFamilyTaskTypeDashboardReturn>;
  createFamilyTaskTypeFake?: Maybe<CreateFamilyTaskTypeFakeReturn>;
  createFamilyTaskTypeFakeDashboard?: Maybe<CreateFamilyTaskTypeFakeDashboardReturn>;
  createFamilyTaskTypeHard?: Maybe<CreateFamilyTaskTypeHardReturn>;
  createFamilyTaskTypeHardDashboard?: Maybe<CreateFamilyTaskTypeHardDashboardReturn>;
  createFamilyTaskTypeHardFake?: Maybe<CreateFamilyTaskTypeHardFakeReturn>;
  createFamilyTaskTypeHardFakeDashboard?: Maybe<CreateFamilyTaskTypeHardFakeDashboardReturn>;
  createFamilyTaskTypeProgress?: Maybe<CreateFamilyTaskTypeProgressReturn>;
  createFamilyTaskTypeProgressDashboard?: Maybe<CreateFamilyTaskTypeProgressDashboardReturn>;
  createFamilyTaskTypeProgressFake?: Maybe<CreateFamilyTaskTypeProgressFakeReturn>;
  createFamilyTaskTypeProgressFakeDashboard?: Maybe<CreateFamilyTaskTypeProgressFakeDashboardReturn>;
  createGameConfigurationDefaultEarning?: Maybe<CreateGameConfigurationDefaultEarningReturn>;
  createGameConfigurationDefaultEarningDashboard?: Maybe<CreateGameConfigurationDefaultEarningDashboardReturn>;
  createGameConfigurationDefaultEarningFake?: Maybe<CreateGameConfigurationDefaultEarningFakeReturn>;
  createGameConfigurationDefaultEarningFakeDashboard?: Maybe<CreateGameConfigurationDefaultEarningFakeDashboardReturn>;
  createGameConfigurationLuckCoin?: Maybe<CreateGameConfigurationLuckCoinReturn>;
  createGameConfigurationLuckCoinDashboard?: Maybe<CreateGameConfigurationLuckCoinDashboardReturn>;
  createGameConfigurationLuckCoinFake?: Maybe<CreateGameConfigurationLuckCoinFakeReturn>;
  createGameConfigurationLuckCoinFakeDashboard?: Maybe<CreateGameConfigurationLuckCoinFakeDashboardReturn>;
  createGameConfigurationSurpriseBox?: Maybe<CreateGameConfigurationSurpriseBoxReturn>;
  createGameConfigurationSurpriseBoxDashboard?: Maybe<CreateGameConfigurationSurpriseBoxDashboardReturn>;
  createGameConfigurationSurpriseBoxFake?: Maybe<CreateGameConfigurationSurpriseBoxFakeReturn>;
  createGameConfigurationSurpriseBoxFakeDashboard?: Maybe<CreateGameConfigurationSurpriseBoxFakeDashboardReturn>;
  createGameLuckSurpriseBox?: Maybe<CreateGameLuckSurpriseBoxReturn>;
  createGameLuckSurpriseBoxDashboard?: Maybe<CreateGameLuckSurpriseBoxDashboardReturn>;
  createGameLuckSurpriseBoxFake?: Maybe<CreateGameLuckSurpriseBoxFakeReturn>;
  createGameLuckSurpriseBoxFakeDashboard?: Maybe<CreateGameLuckSurpriseBoxFakeDashboardReturn>;
  createGift?: Maybe<CreateGiftReturn>;
  createGiftDashboard?: Maybe<CreateGiftDashboardReturn>;
  createGiftEvent?: Maybe<CreateGiftEventReturn>;
  createGiftEventDashboard?: Maybe<CreateGiftEventDashboardReturn>;
  createGiftEventFakeDashboard?: Maybe<CreateGiftEventFakeDashboardReturn>;
  createGiftFakeDashboard?: Maybe<CreateGiftFakeDashboardReturn>;
  createGiftSent?: Maybe<CreateGiftSentReturnCustom>;
  createGiftSentDashboard?: Maybe<CreateGiftSentDashboardReturn>;
  createGiftSentFake?: Maybe<CreateGiftSentFakeReturn>;
  createGiftSentFakeDashboard?: Maybe<CreateGiftSentFakeDashboardReturn>;
  createGiftSentLuckCoin?: Maybe<CreateGiftSentReturnCustom>;
  createGiftSentLuckCoinFakeDashboard?: Maybe<CreateGiftSentLuckCoinFakeDashboardReturn>;
  createGiftSentPackage?: Maybe<CreateGiftSentReturnCustom>;
  createGiftType?: Maybe<CreateGiftTypeReturn>;
  createGiftTypeDashboard?: Maybe<CreateGiftTypeDashboardReturn>;
  createGiftTypeFakeDashboard?: Maybe<CreateGiftTypeFakeDashboardReturn>;
  createInvitation?: Maybe<CreateInvitationReturn>;
  createInvitationDashboard?: Maybe<CreateInvitationDashboardReturn>;
  createInvitationFake?: Maybe<CreateInvitationFakeReturn>;
  createInvitationFakeDashboard?: Maybe<CreateInvitationFakeDashboardReturn>;
  createInvitationReward?: Maybe<CreateInvitationRewardReturn>;
  createInvitationRewardDashboard?: Maybe<CreateInvitationRewardDashboardReturn>;
  createInvitationRewardFake?: Maybe<CreateInvitationRewardFakeReturn>;
  createInvitationRewardFakeDashboard?: Maybe<CreateInvitationRewardFakeDashboardReturn>;
  createItem?: Maybe<CreateItemReturn>;
  createItemDashboard?: Maybe<CreateItemDashboardReturn>;
  createItemFake?: Maybe<CreateItemFakeReturn>;
  createItemFakeDashboard?: Maybe<CreateItemFakeDashboardReturn>;
  createItemPurchased?: Maybe<CreateItemPurchasedReturn>;
  createItemPurchasedDashboard?: Maybe<CreateItemPurchasedDashboardReturn>;
  createItemPurchasedFake?: Maybe<CreateItemPurchasedFakeReturn>;
  createItemPurchasedFakeDashboard?: Maybe<CreateItemPurchasedFakeDashboardReturn>;
  createLevelHost?: Maybe<CreateLevelHostReturn>;
  createLevelHostDashboard?: Maybe<CreateLevelHostDashboardReturn>;
  createLevelHostFake?: Maybe<CreateLevelHostFakeReturn>;
  createLevelHostFakeDashboard?: Maybe<CreateLevelHostFakeDashboardReturn>;
  createLevelSpectator?: Maybe<CreateLevelSpectatorReturn>;
  createLevelSpectatorDashboard?: Maybe<CreateLevelSpectatorDashboardReturn>;
  createLevelSpectatorFake?: Maybe<CreateLevelSpectatorFakeReturn>;
  createLevelSpectatorFakeDashboard?: Maybe<CreateLevelSpectatorFakeDashboardReturn>;
  createLive?: Maybe<CreateLiveReturn>;
  createLiveDashboard?: Maybe<CreateLiveDashboardReturn>;
  createLiveDetailGuestDashboard?: Maybe<CreateLiveDetailGuestDashboardReturn>;
  createLiveDetailGuestFake?: Maybe<CreateLiveDetailGuestFakeReturn>;
  createLiveDetailGuestFakeDashboard?: Maybe<CreateLiveDetailGuestFakeDashboardReturn>;
  createLiveDetailPeople?: Maybe<CreateLiveDetailPeopleReturn>;
  createLiveDetailPeopleDashboard?: Maybe<CreateLiveDetailPeopleDashboardReturn>;
  createLiveDetailPeopleFake?: Maybe<CreateLiveDetailPeopleFakeReturn>;
  createLiveDetailPeopleFakeDashboard?: Maybe<CreateLiveDetailPeopleFakeDashboardReturn>;
  createLiveDetailTag?: Maybe<CreateLiveDetailTagReturn>;
  createLiveDetailTagDashboard?: Maybe<CreateLiveDetailTagDashboardReturn>;
  createLiveDetailTagFake?: Maybe<CreateLiveDetailTagFakeReturn>;
  createLiveDetailTagFakeDashboard?: Maybe<CreateLiveDetailTagFakeDashboardReturn>;
  createLiveFake?: Maybe<CreateLiveFakeReturn>;
  createLiveFakeDashboard?: Maybe<CreateLiveFakeDashboardReturn>;
  createLiveFilter?: Maybe<CreateLiveFilterReturn>;
  createLiveFilterDashboard?: Maybe<CreateLiveFilterDashboardReturn>;
  createLiveFilterFake?: Maybe<CreateLiveFilterFakeReturn>;
  createLiveFilterFakeDashboard?: Maybe<CreateLiveFilterFakeDashboardReturn>;
  createLiveReport?: Maybe<CreateLiveReportReturn>;
  createLiveReportDashboard?: Maybe<CreateLiveReportDashboardReturn>;
  createLiveReportFake?: Maybe<CreateLiveReportFakeReturn>;
  createLiveReportFakeDashboard?: Maybe<CreateLiveReportFakeDashboardReturn>;
  createLiveResume?: Maybe<CreateLiveResumeReturn>;
  createLiveResumeDashboard?: Maybe<CreateLiveResumeDashboardReturn>;
  createLiveResumeFake?: Maybe<CreateLiveResumeFakeReturn>;
  createLiveResumeFakeDashboard?: Maybe<CreateLiveResumeFakeDashboardReturn>;
  createLiveSetting?: Maybe<CreateLiveSettingReturn>;
  createLiveSettingDashboard?: Maybe<CreateLiveSettingDashboardReturn>;
  createLiveSettingFakeDashboard?: Maybe<CreateLiveSettingFakeDashboardReturn>;
  createLiveSticker?: Maybe<CreateLiveStickerReturn>;
  createLiveStickerDashboard?: Maybe<CreateLiveStickerDashboardReturn>;
  createLiveStickerFake?: Maybe<CreateLiveStickerFakeReturn>;
  createLiveStickerFakeDashboard?: Maybe<CreateLiveStickerFakeDashboardReturn>;
  createLiveTag?: Maybe<CreateLiveTagReturn>;
  createLiveTagDashboard?: Maybe<CreateLiveTagDashboardReturn>;
  createLiveTagFake?: Maybe<CreateLiveTagFakeReturn>;
  createLiveTagFakeDashboard?: Maybe<CreateLiveTagFakeDashboardReturn>;
  createLiveTypeReport?: Maybe<CreateLiveTypeReportReturn>;
  createLiveTypeReportDashboard?: Maybe<CreateLiveTypeReportDashboardReturn>;
  createLiveTypeReportFake?: Maybe<CreateLiveTypeReportFakeReturn>;
  createLiveTypeReportFakeDashboard?: Maybe<CreateLiveTypeReportFakeDashboardReturn>;
  createPaymentAgent?: Maybe<CreatePaymentAgentReturn>;
  createPaymentAgentDashboard?: Maybe<CreatePaymentAgentDashboardReturn>;
  createPaymentAgentFake?: Maybe<CreatePaymentAgentFakeReturn>;
  createPaymentAgentFakeDashboard?: Maybe<CreatePaymentAgentFakeDashboardReturn>;
  createPaymentAgentPaid?: Maybe<CreatePaymentAgentPaidReturn>;
  createPaymentAgentPaidDashboard?: Maybe<CreatePaymentAgentPaidDashboardReturn>;
  createPaymentAgentPaidFake?: Maybe<CreatePaymentAgentPaidFakeReturn>;
  createPaymentAgentPaidFakeDashboard?: Maybe<CreatePaymentAgentPaidFakeDashboardReturn>;
  createPlatformSellerForAgency?: Maybe<CreatePlatformSellerForAgencyReturn>;
  createPlatformSellerForAgencyDashboard?: Maybe<CreatePlatformSellerForAgencyDashboardReturn>;
  createPlatformSellerForAgencyFake?: Maybe<CreatePlatformSellerForAgencyFakeReturn>;
  createPlatformSellerForAgencyFakeDashboard?: Maybe<CreatePlatformSellerForAgencyFakeDashboardReturn>;
  createPlatformSellerForAgencyPrice?: Maybe<CreatePlatformSellerForAgencyPriceReturn>;
  createPlatformSellerForAgencyPriceDashboard?: Maybe<CreatePlatformSellerForAgencyPriceDashboardReturn>;
  createPlatformSellerForAgencyPriceFake?: Maybe<CreatePlatformSellerForAgencyPriceFakeReturn>;
  createPlatformSellerForAgencyPriceFakeDashboard?: Maybe<CreatePlatformSellerForAgencyPriceFakeDashboardReturn>;
  createPlatformSellerForAgencyProof?: Maybe<CreatePlatformSellerForAgencyProofReturn>;
  createPlatformSellerForAgencyProofDashboard?: Maybe<CreatePlatformSellerForAgencyProofDashboardReturn>;
  createPlatformSellerForAgencyProofFake?: Maybe<CreatePlatformSellerForAgencyProofFakeReturn>;
  createPlatformSellerForAgencyProofFakeDashboard?: Maybe<CreatePlatformSellerForAgencyProofFakeDashboardReturn>;
  createPlatformSellerForUser?: Maybe<CreatePlatformSellerForUserReturn>;
  createPlatformSellerForUserDashboard?: Maybe<CreatePlatformSellerForUserDashboardReturn>;
  createPlatformSellerForUserFake?: Maybe<CreatePlatformSellerForUserFakeReturn>;
  createPlatformSellerForUserFakeDashboard?: Maybe<CreatePlatformSellerForUserFakeDashboardReturn>;
  createPlatformSellerForUserPrice?: Maybe<CreatePlatformSellerForUserPriceReturn>;
  createPlatformSellerForUserPriceDashboard?: Maybe<CreatePlatformSellerForUserPriceDashboardReturn>;
  createPlatformSellerForUserPriceFake?: Maybe<CreatePlatformSellerForUserPriceFakeReturn>;
  createPlatformSellerForUserPriceFakeDashboard?: Maybe<CreatePlatformSellerForUserPriceFakeDashboardReturn>;
  createPost?: Maybe<CreatePostReturn>;
  createPostComment?: Maybe<CreatePostCommentReturn>;
  createPostCommentDashboard?: Maybe<CreatePostCommentDashboardReturn>;
  createPostCommentFakeDashboard?: Maybe<CreatePostCommentFakeDashboardReturn>;
  createPostDashboard?: Maybe<CreatePostDashboardReturn>;
  createPostFakeDashboard?: Maybe<CreatePostFakeDashboardReturn>;
  createPostLikeDashboard?: Maybe<CreatePostLikeDashboardReturn>;
  createPostLikeFakeDashboard?: Maybe<CreatePostLikeFakeDashboardReturn>;
  createPostTagDashboard?: Maybe<CreatePostTagDashboardReturn>;
  createPostTagFakeDashboard?: Maybe<CreatePostTagFakeDashboardReturn>;
  createTag?: Maybe<CreateTagReturn>;
  createTagDashboard?: Maybe<CreateTagDashboardReturn>;
  createTagFake?: Maybe<CreateTagFakeReturn>;
  createTagFakeDashboard?: Maybe<CreateTagFakeDashboardReturn>;
  createTaskTypeHost?: Maybe<CreateTaskTypeHostReturn>;
  createTaskTypeHostDashboard?: Maybe<CreateTaskTypeHostDashboardReturn>;
  createTaskTypeHostFake?: Maybe<CreateTaskTypeHostFakeReturn>;
  createTaskTypeHostFakeDashboard?: Maybe<CreateTaskTypeHostFakeDashboardReturn>;
  createTaskTypeSpectator?: Maybe<CreateTaskTypeSpectatorReturn>;
  createTaskTypeSpectatorDashboard?: Maybe<CreateTaskTypeSpectatorDashboardReturn>;
  createTaskTypeSpectatorFake?: Maybe<CreateTaskTypeSpectatorFakeReturn>;
  createTaskTypeSpectatorFakeDashboard?: Maybe<CreateTaskTypeSpectatorFakeDashboardReturn>;
  createTaskUserHost?: Maybe<CreateTaskUserHostReturn>;
  createTaskUserHostDashboard?: Maybe<CreateTaskUserHostDashboardReturn>;
  createTaskUserHostFake?: Maybe<CreateTaskUserHostFakeReturn>;
  createTaskUserHostFakeDashboard?: Maybe<CreateTaskUserHostFakeDashboardReturn>;
  createTaskUserSpectator?: Maybe<CreateTaskUserSpectatorReturn>;
  createTaskUserSpectatorDashboard?: Maybe<CreateTaskUserSpectatorDashboardReturn>;
  createTaskUserSpectatorFake?: Maybe<CreateTaskUserSpectatorFakeReturn>;
  createTaskUserSpectatorFakeDashboard?: Maybe<CreateTaskUserSpectatorFakeDashboardReturn>;
  createUserAdministratorProfile?: Maybe<CreateUserAdministratorProfileReturn>;
  createUserAdministratorProfileActivity?: Maybe<CreateUserAdministratorProfileActivityReturn>;
  createUserAdministratorProfileActivityDashboard?: Maybe<CreateUserAdministratorProfileActivityDashboardReturn>;
  createUserAdministratorProfileActivityFake?: Maybe<CreateUserAdministratorProfileActivityFakeReturn>;
  createUserAdministratorProfileActivityFakeDashboard?: Maybe<CreateUserAdministratorProfileActivityFakeDashboardReturn>;
  createUserAdministratorProfileDashboard?: Maybe<CreateUserAdministratorProfileDashboardReturn>;
  createUserAdministratorProfileFake?: Maybe<CreateUserAdministratorProfileFakeReturn>;
  createUserAdministratorProfileFakeDashboard?: Maybe<CreateUserAdministratorProfileFakeDashboardReturn>;
  createUserAppUid?: Maybe<CreateUserAppUidReturn>;
  createUserAppUidDashboard?: Maybe<CreateUserAppUidDashboardReturn>;
  createUserAppUidFake?: Maybe<CreateUserAppUidFakeReturn>;
  createUserAppUidFakeDashboard?: Maybe<CreateUserAppUidFakeDashboardReturn>;
  createUserBadge?: Maybe<CreateUserBadgeReturn>;
  createUserBadgeDashboard?: Maybe<CreateUserBadgeDashboardReturn>;
  createUserBadgeFake?: Maybe<CreateUserBadgeFakeReturn>;
  createUserBadgeFakeDashboard?: Maybe<CreateUserBadgeFakeDashboardReturn>;
  createUserBalanceBeanDashboard?: Maybe<CreateUserBalanceBeanDashboardReturn>;
  createUserBalanceBeanFakeDashboard?: Maybe<CreateUserBalanceBeanFakeDashboardReturn>;
  createUserBalanceBeans?: Maybe<CreateUserBalanceBeansReturn>;
  createUserBalanceBeansFake?: Maybe<CreateUserBalanceBeansFakeReturn>;
  createUserBalanceCoinDashboard?: Maybe<CreateUserBalanceCoinDashboardReturn>;
  createUserBalanceCoinFakeDashboard?: Maybe<CreateUserBalanceCoinFakeDashboardReturn>;
  createUserBalanceCoins?: Maybe<CreateUserBalanceCoinsReturn>;
  createUserBalanceCoinsFake?: Maybe<CreateUserBalanceCoinsFakeReturn>;
  createUserBalancePointDashboard?: Maybe<CreateUserBalancePointDashboardReturn>;
  createUserBalancePointFakeDashboard?: Maybe<CreateUserBalancePointFakeDashboardReturn>;
  createUserBalancePoints?: Maybe<CreateUserBalancePointsReturn>;
  createUserBalancePointsFake?: Maybe<CreateUserBalancePointsFakeReturn>;
  createUserBanned?: Maybe<CreateUserBannedReturn>;
  createUserBannedDashboard?: Maybe<CreateUserBannedDashboardReturn>;
  createUserBannedDetail?: Maybe<CreateUserBannedDetailReturn>;
  createUserBannedDetailDashboard?: Maybe<CreateUserBannedDetailDashboardReturn>;
  createUserBannedDetailFake?: Maybe<CreateUserBannedDetailFakeReturn>;
  createUserBannedDetailFakeDashboard?: Maybe<CreateUserBannedDetailFakeDashboardReturn>;
  createUserBannedFake?: Maybe<CreateUserBannedFakeReturn>;
  createUserBannedFakeDashboard?: Maybe<CreateUserBannedFakeDashboardReturn>;
  createUserBlockedDashboard?: Maybe<CreateUserBlockedDashboardReturn>;
  createUserBlockedFakeDashboard?: Maybe<CreateUserBlockedFakeDashboardReturn>;
  createUserDashboard?: Maybe<CreateUserDashboardReturn>;
  createUserDetail?: Maybe<CreateUserDetailReturn>;
  createUserDetailDashboard?: Maybe<CreateUserDetailDashboardReturn>;
  createUserDetailFake?: Maybe<CreateUserDetailFakeReturn>;
  createUserDetailFakeDashboard?: Maybe<CreateUserDetailFakeDashboardReturn>;
  createUserDeviceInformation?: Maybe<CreateUserDeviceInformationReturn>;
  createUserDeviceInformationDashboard?: Maybe<CreateUserDeviceInformationDashboardReturn>;
  createUserDeviceInformationFake?: Maybe<CreateUserDeviceInformationFakeReturn>;
  createUserDeviceInformationFakeDashboard?: Maybe<CreateUserDeviceInformationFakeDashboardReturn>;
  createUserFakeDashboard?: Maybe<CreateUserFakeDashboardReturn>;
  createUserFollowerDashboard?: Maybe<CreateUserFollowerDashboardReturn>;
  createUserFollowerFakeDashboard?: Maybe<CreateUserFollowerFakeDashboardReturn>;
  createUserFollowingDashboard?: Maybe<CreateUserFollowingDashboardReturn>;
  createUserFollowingFakeDashboard?: Maybe<CreateUserFollowingFakeDashboardReturn>;
  createUserGiftPackage?: Maybe<CreateUserGiftPackageReturn>;
  createUserGiftPackageDashboard?: Maybe<CreateUserGiftPackageDashboardReturn>;
  createUserGiftPackageFake?: Maybe<CreateUserGiftPackageFakeReturn>;
  createUserGiftPackageFakeDashboard?: Maybe<CreateUserGiftPackageFakeDashboardReturn>;
  createUserLevel?: Maybe<CreateUserLevelReturn>;
  createUserLevelDashboard?: Maybe<CreateUserLevelDashboardReturn>;
  createUserLevelFake?: Maybe<CreateUserLevelFakeReturn>;
  createUserLevelFakeDashboard?: Maybe<CreateUserLevelFakeDashboardReturn>;
  createUserLiveSetting?: Maybe<CreateUserLiveSettingReturn>;
  createUserLiveSettingDashboard?: Maybe<CreateUserLiveSettingDashboardReturn>;
  createUserLiveSettingFake?: Maybe<CreateUserLiveSettingFakeReturn>;
  createUserLiveSettingFakeDashboard?: Maybe<CreateUserLiveSettingFakeDashboardReturn>;
  createUserNotificationDashboard?: Maybe<CreateUserNotificationDashboardReturn>;
  createUserNotificationFakeDashboard?: Maybe<CreateUserNotificationFakeDashboardReturn>;
  createUserPhotoDashboard?: Maybe<CreateUserPhotoDashboardReturn>;
  createUserPhotoFakeDashboard?: Maybe<CreateUserPhotoFakeDashboardReturn>;
  createUserPrivacyDashboard?: Maybe<CreateUserPrivacyDashboardReturn>;
  createUserPrivacyFakeDashboard?: Maybe<CreateUserPrivacyFakeDashboardReturn>;
  createUserProcessingQueue?: Maybe<CreateUserProcessingQueueReturn>;
  createUserProcessingQueueDashboard?: Maybe<CreateUserProcessingQueueDashboardReturn>;
  createUserProcessingQueueFake?: Maybe<CreateUserProcessingQueueFakeReturn>;
  createUserProcessingQueueFakeDashboard?: Maybe<CreateUserProcessingQueueFakeDashboardReturn>;
  createUserSuperFanDashboard?: Maybe<CreateUserSuperFanDashboardReturn>;
  createUserSuperFanFakeDashboard?: Maybe<CreateUserSuperFanFakeDashboardReturn>;
  createUserVip?: Maybe<CreateUserVipReturn>;
  createUserVipDashboard?: Maybe<CreateUserVipDashboardReturn>;
  createUserVipFake?: Maybe<CreateUserVipFakeReturn>;
  createUserVipFakeDashboard?: Maybe<CreateUserVipFakeDashboardReturn>;
  createUserVisitProfileDashboard?: Maybe<CreateUserVisitProfileDashboardReturn>;
  createUserVisitProfileFakeDashboard?: Maybe<CreateUserVisitProfileFakeDashboardReturn>;
  createUserWarning?: Maybe<CreateUserWarningReturn>;
  createUserWarningDashboard?: Maybe<CreateUserWarningDashboardReturn>;
  createUserWarningDetail?: Maybe<CreateUserWarningDetailReturn>;
  createUserWarningDetailDashboard?: Maybe<CreateUserWarningDetailDashboardReturn>;
  createUserWarningDetailFake?: Maybe<CreateUserWarningDetailFakeReturn>;
  createUserWarningDetailFakeDashboard?: Maybe<CreateUserWarningDetailFakeDashboardReturn>;
  createUserWarningFake?: Maybe<CreateUserWarningFakeReturn>;
  createUserWarningFakeDashboard?: Maybe<CreateUserWarningFakeDashboardReturn>;
  createVip?: Maybe<CreateVipReturn>;
  createVipBenefit?: Maybe<CreateVipBenefitReturn>;
  createVipBenefitDashboard?: Maybe<CreateVipBenefitDashboardReturn>;
  createVipBenefitDetail?: Maybe<CreateVipBenefitDetailReturn>;
  createVipBenefitDetailDashboard?: Maybe<CreateVipBenefitDetailDashboardReturn>;
  createVipBenefitDetailFakeDashboard?: Maybe<CreateVipBenefitDetailFakeDashboardReturn>;
  createVipBenefitFakeDashboard?: Maybe<CreateVipBenefitFakeDashboardReturn>;
  createVipDashboard?: Maybe<CreateVipDashboardReturn>;
  createVipFakeDashboard?: Maybe<CreateVipFakeDashboardReturn>;
  createWalletCoinSale?: Maybe<CreateWalletCoinSaleReturn>;
  createWalletCoinSaleDashboard?: Maybe<CreateWalletCoinSaleDashboardReturn>;
  createWalletCoinSaleFake?: Maybe<CreateWalletCoinSaleFakeReturn>;
  createWalletCoinSaleFakeDashboard?: Maybe<CreateWalletCoinSaleFakeDashboardReturn>;
  createWalletConvert?: Maybe<CreateWalletConvertReturn>;
  createWalletConvertDashboard?: Maybe<CreateWalletConvertDashboardReturn>;
  createWalletConvertFake?: Maybe<CreateWalletConvertFakeReturn>;
  createWalletConvertFakeDashboard?: Maybe<CreateWalletConvertFakeDashboardReturn>;
  createWalletPriceCoin?: Maybe<CreateWalletPriceCoinReturn>;
  createWalletPriceCoinDashboard?: Maybe<CreateWalletPriceCoinDashboardReturn>;
  createWalletPriceCoinFake?: Maybe<CreateWalletPriceCoinFakeReturn>;
  createWalletPriceCoinFakeDashboard?: Maybe<CreateWalletPriceCoinFakeDashboardReturn>;
  createWalletTypeConvert?: Maybe<CreateWalletTypeConvertReturn>;
  createWalletTypeConvertDashboard?: Maybe<CreateWalletTypeConvertDashboardReturn>;
  createWalletTypeConvertFake?: Maybe<CreateWalletTypeConvertFakeReturn>;
  createWalletTypeConvertFakeDashboard?: Maybe<CreateWalletTypeConvertFakeDashboardReturn>;
  createWithdrawal?: Maybe<CreateWithdrawalReturn>;
  createWithdrawalDashboard?: Maybe<CreateWithdrawalDashboardReturn>;
  createWithdrawalFake?: Maybe<CreateWithdrawalFakeReturn>;
  createWithdrawalFakeDashboard?: Maybe<CreateWithdrawalFakeDashboardReturn>;
  createWithdrawalMethod?: Maybe<CreateWithdrawalMethodReturn>;
  createWithdrawalMethodDashboard?: Maybe<CreateWithdrawalMethodDashboardReturn>;
  createWithdrawalMethodDataUser?: Maybe<CreateWithdrawalMethodDataUserReturn>;
  createWithdrawalMethodDataUserDashboard?: Maybe<CreateWithdrawalMethodDataUserDashboardReturn>;
  createWithdrawalMethodDataUserFake?: Maybe<CreateWithdrawalMethodDataUserFakeReturn>;
  createWithdrawalMethodDataUserFakeDashboard?: Maybe<CreateWithdrawalMethodDataUserFakeDashboardReturn>;
  createWithdrawalMethodFake?: Maybe<CreateWithdrawalMethodFakeReturn>;
  createWithdrawalMethodFakeDashboard?: Maybe<CreateWithdrawalMethodFakeDashboardReturn>;
  createWithdrawalProof?: Maybe<CreateWithdrawalProofReturn>;
  createWithdrawalProofDashboard?: Maybe<CreateWithdrawalProofDashboardReturn>;
  createWithdrawalProofFake?: Maybe<CreateWithdrawalProofFakeReturn>;
  createWithdrawalProofFakeDashboard?: Maybe<CreateWithdrawalProofFakeDashboardReturn>;
  createWithdrawalTypeRefused?: Maybe<CreateWithdrawalTypeRefusedReturn>;
  createWithdrawalTypeRefusedDashboard?: Maybe<CreateWithdrawalTypeRefusedDashboardReturn>;
  createWithdrawalTypeRefusedFake?: Maybe<CreateWithdrawalTypeRefusedFakeReturn>;
  createWithdrawalTypeRefusedFakeDashboard?: Maybe<CreateWithdrawalTypeRefusedFakeDashboardReturn>;
  deleteAccessAdministratorDashboard?: Maybe<UpdateAccessAdministratorDashboardReturn>;
  deleteAccessPartnerDashboard?: Maybe<UpdateAccessPartnerDashboardReturn>;
  deleteAgency?: Maybe<UpdateAgencyReturn>;
  deleteAgencyDashboard?: Maybe<UpdateAgencyDashboardReturn>;
  deleteAgencyUser?: Maybe<UpdateAgencyUserReturn>;
  deleteAgencyUserDashboard?: Maybe<UpdateAgencyUserDashboardReturn>;
  deleteBadge?: Maybe<UpdateBadgeReturn>;
  deleteBadgeDashboard?: Maybe<UpdateBadgeDashboardReturn>;
  deleteBannerLink?: Maybe<UpdateBannerLinkReturn>;
  deleteBannerLinkDashboard?: Maybe<UpdateBannerLinkDashboardReturn>;
  deleteChat?: Maybe<UpdateChatReturn>;
  deleteChatDetail?: Maybe<UpdateChatDetailReturn>;
  deleteCountryCode?: Maybe<UpdateCountryCodeReturn>;
  deleteCountryCodeDashboard?: Maybe<UpdateCountryCodeDashboardReturn>;
  deleteDomainDashboard?: Maybe<UpdateDomainDashboardReturn>;
  deleteExampleOtherOneDashboard?: Maybe<UpdateExampleOtherOneDashboardReturn>;
  deleteExampleOtherTwoDashboard?: Maybe<UpdateExampleOtherTwoDashboardReturn>;
  deleteExampleTableDashboard?: Maybe<UpdateExampleTableDashboardReturn>;
  deleteFamily?: Maybe<UpdateFamilyReturn>;
  deleteFamilyDashboard?: Maybe<UpdateFamilyDashboardReturn>;
  deleteFamilyForce?: Maybe<UpdateFamilyForceReturn>;
  deleteFamilyForceBenefit?: Maybe<UpdateFamilyForceBenefitReturn>;
  deleteFamilyForceBenefitDashboard?: Maybe<UpdateFamilyForceBenefitDashboardReturn>;
  deleteFamilyForceBenefitDetail?: Maybe<UpdateFamilyForceBenefitDetailReturn>;
  deleteFamilyForceBenefitDetailDashboard?: Maybe<UpdateFamilyForceBenefitDetailDashboardReturn>;
  deleteFamilyForceDashboard?: Maybe<UpdateFamilyForceDashboardReturn>;
  deleteFamilyTaskType?: Maybe<UpdateFamilyTaskTypeReturn>;
  deleteFamilyTaskTypeDashboard?: Maybe<UpdateFamilyTaskTypeDashboardReturn>;
  deleteFamilyTaskTypeHard?: Maybe<UpdateFamilyTaskTypeHardReturn>;
  deleteFamilyTaskTypeHardDashboard?: Maybe<UpdateFamilyTaskTypeHardDashboardReturn>;
  deleteFamilyTaskTypeProgress?: Maybe<UpdateFamilyTaskTypeProgressReturn>;
  deleteFamilyTaskTypeProgressDashboard?: Maybe<UpdateFamilyTaskTypeProgressDashboardReturn>;
  deleteForeverAccessAdministratorDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverAccessPartnerDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverAgency?: Maybe<UpdateAgencyReturn>;
  deleteForeverAgencyBalancePointDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverAgencyBanned?: Maybe<UpdateAgencyBannedReturn>;
  deleteForeverAgencyBannedDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverAgencyBannedDetail?: Maybe<UpdateAgencyBannedDetailReturn>;
  deleteForeverAgencyBannedDetailDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverAgencyDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverAgencyResellerBalanceCoinDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverAgencySaleDetail?: Maybe<UpdateAgencySaleDetailReturn>;
  deleteForeverAgencySaleDetailDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverAgencyUser?: Maybe<UpdateAgencyUserReturn>;
  deleteForeverAgencyUserDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverAgencyWarning?: Maybe<UpdateAgencyWarningReturn>;
  deleteForeverAgencyWarningDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverAgencyWarningDetail?: Maybe<UpdateAgencyWarningDetailReturn>;
  deleteForeverAgencyWarningDetailDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverAppLog?: Maybe<UpdateAppLogReturn>;
  deleteForeverAppLogDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverAppSetting?: Maybe<UpdateAppSettingReturn>;
  deleteForeverAppSettingDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverBadge?: Maybe<UpdateBadgeReturn>;
  deleteForeverBadgeDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverBannerLink?: Maybe<UpdateBannerLinkReturn>;
  deleteForeverBannerLinkDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverChat?: Maybe<UpdateChatReturn>;
  deleteForeverChatDetail?: Maybe<UpdateChatDetailReturn>;
  deleteForeverCountryCode?: Maybe<UpdateCountryCodeReturn>;
  deleteForeverCountryCodeDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverDomainDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverEvent?: Maybe<Scalars['String']['output']>;
  deleteForeverEventDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverExampleOtherOneDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverExampleOtherTwoDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverExampleTableDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverFamily?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyForce?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyForceBenefit?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyForceBenefitDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyForceBenefitDetail?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyForceBenefitDetailDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyForceDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyMember?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyMemberDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyTaskMember?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyTaskMemberDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyTaskMemberHard?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyTaskMemberHardDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyTaskProgress?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyTaskProgressDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyTaskProgressReceived?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyTaskProgressReceivedDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyTaskType?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyTaskTypeDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyTaskTypeHard?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyTaskTypeHardDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyTaskTypeProgress?: Maybe<Scalars['String']['output']>;
  deleteForeverFamilyTaskTypeProgressDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverGameConfigurationDefaultEarning?: Maybe<Scalars['String']['output']>;
  deleteForeverGameConfigurationDefaultEarningDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverGameConfigurationLuckCoin?: Maybe<Scalars['String']['output']>;
  deleteForeverGameConfigurationLuckCoinDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverGameConfigurationSurpriseBox?: Maybe<UpdateGameConfigurationSurpriseBoxReturn>;
  deleteForeverGameConfigurationSurpriseBoxDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverGameLuckSurpriseBox?: Maybe<UpdateGameLuckSurpriseBoxReturn>;
  deleteForeverGameLuckSurpriseBoxDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverGift?: Maybe<Scalars['String']['output']>;
  deleteForeverGiftDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverGiftEvent?: Maybe<Scalars['String']['output']>;
  deleteForeverGiftEventDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverGiftSent?: Maybe<Scalars['String']['output']>;
  deleteForeverGiftSentDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverGiftType?: Maybe<Scalars['String']['output']>;
  deleteForeverGiftTypeDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverInvitation?: Maybe<UpdateInvitationReturn>;
  deleteForeverInvitationDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverInvitationReward?: Maybe<UpdateInvitationRewardReturn>;
  deleteForeverInvitationRewardDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverItem?: Maybe<Scalars['String']['output']>;
  deleteForeverItemDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverItemPurchased?: Maybe<UpdateItemPurchasedReturn>;
  deleteForeverItemPurchasedDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverLevelHost?: Maybe<Scalars['String']['output']>;
  deleteForeverLevelHostDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverLevelSpectator?: Maybe<Scalars['String']['output']>;
  deleteForeverLevelSpectatorDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverLive?: Maybe<UpdateLiveReturn>;
  deleteForeverLiveDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverLiveDetailGuestDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverLiveDetailPeople?: Maybe<UpdateLiveDetailPeopleReturn>;
  deleteForeverLiveDetailPeopleDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverLiveDetailTag?: Maybe<UpdateLiveDetailTagReturn>;
  deleteForeverLiveDetailTagDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverLiveFilter?: Maybe<Scalars['String']['output']>;
  deleteForeverLiveFilterDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverLiveReport?: Maybe<UpdateLiveReportReturn>;
  deleteForeverLiveReportDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverLiveResume?: Maybe<UpdateLiveResumeReturn>;
  deleteForeverLiveResumeDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverLiveSettingDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverLiveSticker?: Maybe<Scalars['String']['output']>;
  deleteForeverLiveStickerDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverLiveTag?: Maybe<Scalars['String']['output']>;
  deleteForeverLiveTagDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverLiveTypeReport?: Maybe<Scalars['String']['output']>;
  deleteForeverLiveTypeReportDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverPaymentAgent?: Maybe<UpdatePaymentAgentReturn>;
  deleteForeverPaymentAgentDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverPaymentAgentPaid?: Maybe<UpdatePaymentAgentPaidReturn>;
  deleteForeverPaymentAgentPaidDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverPlatformSellerForAgency?: Maybe<UpdatePlatformSellerForAgencyReturn>;
  deleteForeverPlatformSellerForAgencyDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverPlatformSellerForAgencyPrice?: Maybe<UpdatePlatformSellerForAgencyPriceReturn>;
  deleteForeverPlatformSellerForAgencyPriceDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverPlatformSellerForAgencyProof?: Maybe<UpdatePlatformSellerForAgencyProofReturn>;
  deleteForeverPlatformSellerForAgencyProofDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverPlatformSellerForUser?: Maybe<UpdatePlatformSellerForUserReturn>;
  deleteForeverPlatformSellerForUserDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverPlatformSellerForUserPrice?: Maybe<UpdatePlatformSellerForUserPriceReturn>;
  deleteForeverPlatformSellerForUserPriceDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverPostCommentDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverPostDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverPostLikeDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverPostTagDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverTag?: Maybe<Scalars['String']['output']>;
  deleteForeverTagDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverTaskTypeHost?: Maybe<UpdateTaskTypeHostReturn>;
  deleteForeverTaskTypeHostDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverTaskTypeSpectator?: Maybe<UpdateTaskTypeSpectatorReturn>;
  deleteForeverTaskTypeSpectatorDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverTaskUserHost?: Maybe<UpdateTaskUserHostReturn>;
  deleteForeverTaskUserHostDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverTaskUserSpectator?: Maybe<UpdateTaskUserSpectatorReturn>;
  deleteForeverTaskUserSpectatorDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserAdministratorProfile?: Maybe<Scalars['String']['output']>;
  deleteForeverUserAdministratorProfileActivity?: Maybe<UpdateUserAdministratorProfileActivityReturn>;
  deleteForeverUserAdministratorProfileActivityDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserAdministratorProfileDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserAppUid?: Maybe<UpdateUserAppUidReturn>;
  deleteForeverUserAppUidDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserBadge?: Maybe<UpdateUserBadgeReturn>;
  deleteForeverUserBadgeDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserBalanceBeanDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserBalanceBeans?: Maybe<UpdateUserBalanceBeansReturn>;
  deleteForeverUserBalanceCoinDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserBalanceCoins?: Maybe<UpdateUserBalanceCoinsReturn>;
  deleteForeverUserBalancePointDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserBalancePoints?: Maybe<UpdateUserBalancePointsReturn>;
  deleteForeverUserBanned?: Maybe<UpdateUserBannedReturn>;
  deleteForeverUserBannedDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserBannedDetail?: Maybe<UpdateUserBannedDetailReturn>;
  deleteForeverUserBannedDetailDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserBlockedDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserDetail?: Maybe<UpdateUserDetailReturn>;
  deleteForeverUserDetailDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserDeviceInformation?: Maybe<UpdateUserDeviceInformationReturn>;
  deleteForeverUserDeviceInformationDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserFollowerDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserFollowingDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserGiftPackage?: Maybe<UpdateUserGiftPackageReturn>;
  deleteForeverUserGiftPackageDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserLevel?: Maybe<UpdateUserLevelReturn>;
  deleteForeverUserLevelDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserLiveSettingDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserNotificationDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserPhotoDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserPrivacyDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserProcessingQueue?: Maybe<UpdateUserProcessingQueueReturn>;
  deleteForeverUserProcessingQueueDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserSuperFanDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserVip?: Maybe<UpdateUserVipReturn>;
  deleteForeverUserVipDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserVisitProfileDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserWarning?: Maybe<UpdateUserWarningReturn>;
  deleteForeverUserWarningDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverUserWarningDetail?: Maybe<UpdateUserWarningDetailReturn>;
  deleteForeverUserWarningDetailDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverVip?: Maybe<UpdateVipReturn>;
  deleteForeverVipBenefitDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverVipBenefitDetailDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverVipDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverWalletCoinSale?: Maybe<UpdateWalletCoinSaleReturn>;
  deleteForeverWalletCoinSaleDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverWalletConvert?: Maybe<UpdateWalletConvertReturn>;
  deleteForeverWalletConvertDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverWalletPriceCoin?: Maybe<UpdateWalletPriceCoinReturn>;
  deleteForeverWalletPriceCoinDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverWalletTypeConvert?: Maybe<UpdateWalletTypeConvertReturn>;
  deleteForeverWalletTypeConvertDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverWithdrawal?: Maybe<Scalars['String']['output']>;
  deleteForeverWithdrawalDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverWithdrawalMethod?: Maybe<UpdateWithdrawalMethodReturn>;
  deleteForeverWithdrawalMethodDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverWithdrawalMethodDataUser?: Maybe<UpdateWithdrawalMethodDataUserReturn>;
  deleteForeverWithdrawalMethodDataUserDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverWithdrawalProof?: Maybe<UpdateWithdrawalProofReturn>;
  deleteForeverWithdrawalProofDashboard?: Maybe<Scalars['String']['output']>;
  deleteForeverWithdrawalTypeRefused?: Maybe<UpdateWithdrawalTypeRefusedReturn>;
  deleteForeverWithdrawalTypeRefusedDashboard?: Maybe<Scalars['String']['output']>;
  deleteGameConfigurationDefaultEarning?: Maybe<UpdateGameConfigurationDefaultEarningReturn>;
  deleteGameConfigurationDefaultEarningDashboard?: Maybe<UpdateGameConfigurationDefaultEarningDashboardReturn>;
  deleteGameConfigurationLuckCoin?: Maybe<UpdateGameConfigurationLuckCoinReturn>;
  deleteGameConfigurationLuckCoinDashboard?: Maybe<UpdateGameConfigurationLuckCoinDashboardReturn>;
  deleteGameConfigurationSurpriseBox?: Maybe<UpdateGameConfigurationSurpriseBoxReturn>;
  deleteGameConfigurationSurpriseBoxDashboard?: Maybe<UpdateGameConfigurationSurpriseBoxDashboardReturn>;
  deleteGift?: Maybe<UpdateGiftReturn>;
  deleteGiftDashboard?: Maybe<UpdateGiftDashboardReturn>;
  deleteGiftEvent?: Maybe<UpdateGiftEventReturn>;
  deleteGiftEventDashboard?: Maybe<UpdateGiftEventDashboardReturn>;
  deleteGiftType?: Maybe<UpdateGiftTypeReturn>;
  deleteGiftTypeDashboard?: Maybe<UpdateGiftTypeDashboardReturn>;
  deleteItem?: Maybe<UpdateItemReturn>;
  deleteItemDashboard?: Maybe<UpdateItemDashboardReturn>;
  deleteLevelHost?: Maybe<UpdateLevelHostReturn>;
  deleteLevelHostDashboard?: Maybe<UpdateLevelHostDashboardReturn>;
  deleteLevelSpectator?: Maybe<UpdateLevelSpectatorReturn>;
  deleteLevelSpectatorDashboard?: Maybe<UpdateLevelSpectatorDashboardReturn>;
  deleteLiveDetailPeoplePoints?: Maybe<UpdateLiveDetailPeopleReturn>;
  deleteLiveFilter?: Maybe<UpdateLiveFilterReturn>;
  deleteLiveFilterDashboard?: Maybe<UpdateLiveFilterDashboardReturn>;
  deleteLiveSticker?: Maybe<UpdateLiveStickerReturn>;
  deleteLiveStickerDashboard?: Maybe<UpdateLiveStickerDashboardReturn>;
  deleteLiveTag?: Maybe<UpdateLiveTagReturn>;
  deleteLiveTagDashboard?: Maybe<UpdateLiveTagDashboardReturn>;
  deleteLiveTypeReport?: Maybe<UpdateLiveTypeReportReturn>;
  deleteLiveTypeReportDashboard?: Maybe<UpdateLiveTypeReportDashboardReturn>;
  deleteMessage?: Maybe<Scalars['String']['output']>;
  deletePost?: Maybe<DeletePostReturn>;
  deletePostComment?: Maybe<DeletePostCommentReturn>;
  deletePostDashboard?: Maybe<UpdatePostDashboardReturn>;
  deleteTag?: Maybe<UpdateTagReturn>;
  deleteTagDashboard?: Maybe<UpdateTagDashboardReturn>;
  deleteTaskTypeHost?: Maybe<UpdateTaskTypeHostReturn>;
  deleteTaskTypeHostDashboard?: Maybe<UpdateTaskTypeHostDashboardReturn>;
  deleteTaskTypeSpectator?: Maybe<UpdateTaskTypeSpectatorReturn>;
  deleteTaskTypeSpectatorDashboard?: Maybe<UpdateTaskTypeSpectatorDashboardReturn>;
  deleteVip?: Maybe<UpdateVipReturn>;
  deleteVipBenefitDashboard?: Maybe<UpdateVipBenefitDashboardReturn>;
  deleteVipBenefitDetailDashboard?: Maybe<UpdateVipBenefitDetailDashboardReturn>;
  deleteVipDashboard?: Maybe<UpdateVipDashboardReturn>;
  deleteWalletPriceCoin?: Maybe<UpdateWalletPriceCoinReturn>;
  deleteWalletPriceCoinDashboard?: Maybe<UpdateWalletPriceCoinDashboardReturn>;
  deleteWalletTypeConvert?: Maybe<UpdateWalletTypeConvertReturn>;
  deleteWalletTypeConvertDashboard?: Maybe<UpdateWalletTypeConvertDashboardReturn>;
  deleteWithdrawalMethod?: Maybe<UpdateWithdrawalMethodReturn>;
  deleteWithdrawalMethodDashboard?: Maybe<UpdateWithdrawalMethodDashboardReturn>;
  deleteWithdrawalTypeRefused?: Maybe<UpdateWithdrawalTypeRefusedReturn>;
  deleteWithdrawalTypeRefusedDashboard?: Maybe<UpdateWithdrawalTypeRefusedDashboardReturn>;
  dislikePost?: Maybe<DislikePostReturn>;
  enterFamily?: Maybe<EnterFamilyReturn>;
  exitSeat?: Maybe<Scalars['String']['output']>;
  follow?: Maybe<FollowReturn>;
  incrementNewFollowersLive?: Maybe<UpdateLiveReturn>;
  joinLiveSeat?: Maybe<CreateLiveDetailGuestReturn>;
  leaveFamily?: Maybe<LeaveFamilyReturn>;
  likePost?: Maybe<LikePostReturn>;
  login?: Maybe<LoginReturn>;
  loginApple?: Maybe<LoginReturn>;
  loginGoogle?: Maybe<LoginReturn>;
  loginPartnerDashboard?: Maybe<LoginPartnerDashboardReturn>;
  loginPhone?: Maybe<LoginReturn>;
  muteUserAudio?: Maybe<Scalars['String']['output']>;
  notifyGiftSentInfo?: Maybe<NotifyGiftSentReturn>;
  notifyGiftSentQuantityInfo?: Maybe<NotifyGiftSentQuantityReturn>;
  notifyLiveGiftAnimation?: Maybe<NotifyLiveGiftAnimation>;
  removeUserFromSeat?: Maybe<Scalars['String']['output']>;
  resetPassword?: Maybe<StringReturn>;
  sendMessageChatLive?: Maybe<CreateMessageChatReturn>;
  sendSMS?: Maybe<StringReturn>;
  sendValidationCode?: Maybe<StringReturn>;
  setUserOffline?: Maybe<Scalars['String']['output']>;
  setUserOnline?: Maybe<Scalars['String']['output']>;
  signup?: Maybe<SignupReturn>;
  signupFake?: Maybe<SignupFakeReturn>;
  toggleTwoFactor?: Maybe<StringReturn>;
  transferFamily?: Maybe<TransferFamilyReturn>;
  unblock?: Maybe<UnblockReturn>;
  unblockSeat?: Maybe<Scalars['String']['output']>;
  unfollow?: Maybe<UnfollowReturn>;
  updateAccessAdministratorDashboard?: Maybe<UpdateAccessAdministratorDashboardReturn>;
  updateAccessPartnerDashboard?: Maybe<UpdateAccessPartnerDashboardReturn>;
  updateAgency?: Maybe<UpdateAgencyReturn>;
  updateAgencyBalancePointDashboard?: Maybe<UpdateAgencyBalancePointDashboardReturn>;
  updateAgencyBanned?: Maybe<UpdateAgencyBannedReturn>;
  updateAgencyBannedDashboard?: Maybe<UpdateAgencyBannedDashboardReturn>;
  updateAgencyBannedDetail?: Maybe<UpdateAgencyBannedDetailReturn>;
  updateAgencyBannedDetailDashboard?: Maybe<UpdateAgencyBannedDetailDashboardReturn>;
  updateAgencyDashboard?: Maybe<UpdateAgencyDashboardReturn>;
  updateAgencyResellerBalanceCoinDashboard?: Maybe<UpdateAgencyResellerBalanceCoinDashboardReturn>;
  updateAgencySaleDetail?: Maybe<UpdateAgencySaleDetailReturn>;
  updateAgencySaleDetailDashboard?: Maybe<UpdateAgencySaleDetailDashboardReturn>;
  updateAgencyUser?: Maybe<UpdateAgencyUserReturn>;
  updateAgencyUserDashboard?: Maybe<UpdateAgencyUserDashboardReturn>;
  updateAgencyWarning?: Maybe<UpdateAgencyWarningReturn>;
  updateAgencyWarningDashboard?: Maybe<UpdateAgencyWarningDashboardReturn>;
  updateAgencyWarningDetail?: Maybe<UpdateAgencyWarningDetailReturn>;
  updateAgencyWarningDetailDashboard?: Maybe<UpdateAgencyWarningDetailDashboardReturn>;
  updateAppLog?: Maybe<UpdateAppLogReturn>;
  updateAppLogDashboard?: Maybe<UpdateAppLogDashboardReturn>;
  updateAppSetting?: Maybe<UpdateAppSettingReturn>;
  updateAppSettingDashboard?: Maybe<UpdateAppSettingDashboardReturn>;
  updateBadge?: Maybe<UpdateBadgeReturn>;
  updateBadgeDashboard?: Maybe<UpdateBadgeDashboardReturn>;
  updateBannerLink?: Maybe<UpdateBannerLinkReturn>;
  updateBannerLinkDashboard?: Maybe<UpdateBannerLinkDashboardReturn>;
  updateChat?: Maybe<UpdateChatReturn>;
  updateChatDetail?: Maybe<UpdateChatDetailReturn>;
  updateConfig?: Maybe<StringReturn>;
  updateCountryCode?: Maybe<UpdateCountryCodeReturn>;
  updateCountryCodeDashboard?: Maybe<UpdateCountryCodeDashboardReturn>;
  updateDomainDashboard?: Maybe<UpdateDomainDashboardReturn>;
  updateEvent?: Maybe<UpdateEventReturn>;
  updateEventDashboard?: Maybe<UpdateEventDashboardReturn>;
  updateExampleOtherOneDashboard?: Maybe<UpdateExampleOtherOneDashboardReturn>;
  updateExampleOtherTwoDashboard?: Maybe<UpdateExampleOtherTwoDashboardReturn>;
  updateExampleTableDashboard?: Maybe<UpdateExampleTableDashboardReturn>;
  updateFamily?: Maybe<UpdateFamilyReturn>;
  updateFamilyDashboard?: Maybe<UpdateFamilyDashboardReturn>;
  updateFamilyForce?: Maybe<UpdateFamilyForceReturn>;
  updateFamilyForceBenefit?: Maybe<UpdateFamilyForceBenefitReturn>;
  updateFamilyForceBenefitDashboard?: Maybe<UpdateFamilyForceBenefitDashboardReturn>;
  updateFamilyForceBenefitDetail?: Maybe<UpdateFamilyForceBenefitDetailReturn>;
  updateFamilyForceBenefitDetailDashboard?: Maybe<UpdateFamilyForceBenefitDetailDashboardReturn>;
  updateFamilyForceDashboard?: Maybe<UpdateFamilyForceDashboardReturn>;
  updateFamilyMember?: Maybe<UpdateFamilyMemberReturn>;
  updateFamilyMemberDashboard?: Maybe<UpdateFamilyMemberDashboardReturn>;
  updateFamilyTaskMember?: Maybe<UpdateFamilyTaskMemberReturn>;
  updateFamilyTaskMemberDashboard?: Maybe<UpdateFamilyTaskMemberDashboardReturn>;
  updateFamilyTaskMemberHard?: Maybe<UpdateFamilyTaskMemberHardReturn>;
  updateFamilyTaskMemberHardDashboard?: Maybe<UpdateFamilyTaskMemberHardDashboardReturn>;
  updateFamilyTaskProgress?: Maybe<UpdateFamilyTaskProgressReturn>;
  updateFamilyTaskProgressDashboard?: Maybe<UpdateFamilyTaskProgressDashboardReturn>;
  updateFamilyTaskProgressReceived?: Maybe<UpdateFamilyTaskProgressReceivedReturn>;
  updateFamilyTaskProgressReceivedDashboard?: Maybe<UpdateFamilyTaskProgressReceivedDashboardReturn>;
  updateFamilyTaskType?: Maybe<UpdateFamilyTaskTypeReturn>;
  updateFamilyTaskTypeDashboard?: Maybe<UpdateFamilyTaskTypeDashboardReturn>;
  updateFamilyTaskTypeHard?: Maybe<UpdateFamilyTaskTypeHardReturn>;
  updateFamilyTaskTypeHardDashboard?: Maybe<UpdateFamilyTaskTypeHardDashboardReturn>;
  updateFamilyTaskTypeProgress?: Maybe<UpdateFamilyTaskTypeProgressReturn>;
  updateFamilyTaskTypeProgressDashboard?: Maybe<UpdateFamilyTaskTypeProgressDashboardReturn>;
  updateGameConfigurationDefaultEarning?: Maybe<UpdateGameConfigurationDefaultEarningReturn>;
  updateGameConfigurationDefaultEarningDashboard?: Maybe<UpdateGameConfigurationDefaultEarningDashboardReturn>;
  updateGameConfigurationLuckCoin?: Maybe<UpdateGameConfigurationLuckCoinReturn>;
  updateGameConfigurationLuckCoinDashboard?: Maybe<UpdateGameConfigurationLuckCoinDashboardReturn>;
  updateGameConfigurationSurpriseBox?: Maybe<UpdateGameConfigurationSurpriseBoxReturn>;
  updateGameConfigurationSurpriseBoxDashboard?: Maybe<UpdateGameConfigurationSurpriseBoxDashboardReturn>;
  updateGameLuckSurpriseBox?: Maybe<UpdateGameLuckSurpriseBoxReturn>;
  updateGameLuckSurpriseBoxDashboard?: Maybe<UpdateGameLuckSurpriseBoxDashboardReturn>;
  updateGift?: Maybe<UpdateGiftReturn>;
  updateGiftDashboard?: Maybe<UpdateGiftDashboardReturn>;
  updateGiftEvent?: Maybe<UpdateGiftEventReturn>;
  updateGiftEventDashboard?: Maybe<UpdateGiftEventDashboardReturn>;
  updateGiftSent?: Maybe<UpdateGiftSentReturn>;
  updateGiftSentDashboard?: Maybe<UpdateGiftSentDashboardReturn>;
  updateGiftType?: Maybe<UpdateGiftTypeReturn>;
  updateGiftTypeDashboard?: Maybe<UpdateGiftTypeDashboardReturn>;
  updateInvitation?: Maybe<UpdateInvitationReturn>;
  updateInvitationDashboard?: Maybe<UpdateInvitationDashboardReturn>;
  updateInvitationReward?: Maybe<UpdateInvitationRewardReturn>;
  updateInvitationRewardDashboard?: Maybe<UpdateInvitationRewardDashboardReturn>;
  updateItem?: Maybe<UpdateItemReturn>;
  updateItemDashboard?: Maybe<UpdateItemDashboardReturn>;
  updateItemPurchased?: Maybe<UpdateItemPurchasedReturn>;
  updateItemPurchasedDashboard?: Maybe<UpdateItemPurchasedDashboardReturn>;
  updateLevelHost?: Maybe<UpdateLevelHostReturn>;
  updateLevelHostDashboard?: Maybe<UpdateLevelHostDashboardReturn>;
  updateLevelSpectator?: Maybe<UpdateLevelSpectatorReturn>;
  updateLevelSpectatorDashboard?: Maybe<UpdateLevelSpectatorDashboardReturn>;
  updateLive?: Maybe<UpdateLiveReturn>;
  updateLiveDashboard?: Maybe<UpdateLiveDashboardReturn>;
  updateLiveDetailGuest?: Maybe<UpdateLiveDetailGuestReturn>;
  updateLiveDetailGuestDashboard?: Maybe<UpdateLiveDetailGuestDashboardReturn>;
  updateLiveDetailPeople?: Maybe<UpdateLiveDetailPeopleReturn>;
  updateLiveDetailPeopleDashboard?: Maybe<UpdateLiveDetailPeopleDashboardReturn>;
  updateLiveDetailTag?: Maybe<UpdateLiveDetailTagReturn>;
  updateLiveDetailTagDashboard?: Maybe<UpdateLiveDetailTagDashboardReturn>;
  updateLiveFilter?: Maybe<UpdateLiveFilterReturn>;
  updateLiveFilterDashboard?: Maybe<UpdateLiveFilterDashboardReturn>;
  updateLiveReport?: Maybe<UpdateLiveReportReturn>;
  updateLiveReportDashboard?: Maybe<UpdateLiveReportDashboardReturn>;
  updateLiveResume?: Maybe<UpdateLiveResumeReturn>;
  updateLiveResumeDashboard?: Maybe<UpdateLiveResumeDashboardReturn>;
  updateLiveSetting?: Maybe<UpdateLiveSettingReturn>;
  updateLiveSettingDashboard?: Maybe<UpdateLiveSettingDashboardReturn>;
  updateLiveSticker?: Maybe<UpdateLiveStickerReturn>;
  updateLiveStickerDashboard?: Maybe<UpdateLiveStickerDashboardReturn>;
  updateLiveTag?: Maybe<UpdateLiveTagReturn>;
  updateLiveTagDashboard?: Maybe<UpdateLiveTagDashboardReturn>;
  updateLiveTypeReport?: Maybe<UpdateLiveTypeReportReturn>;
  updateLiveTypeReportDashboard?: Maybe<UpdateLiveTypeReportDashboardReturn>;
  updateMultipleLiveDetailPeoplePoints?: Maybe<UpdateMultiplePointsLiveDetailPeopleReturn>;
  updateNotifications?: Maybe<NotificationsReturn>;
  updatePaymentAgent?: Maybe<UpdatePaymentAgentReturn>;
  updatePaymentAgentDashboard?: Maybe<UpdatePaymentAgentDashboardReturn>;
  updatePaymentAgentPaid?: Maybe<UpdatePaymentAgentPaidReturn>;
  updatePaymentAgentPaidDashboard?: Maybe<UpdatePaymentAgentPaidDashboardReturn>;
  updatePlatformSellerForAgency?: Maybe<UpdatePlatformSellerForAgencyReturn>;
  updatePlatformSellerForAgencyDashboard?: Maybe<UpdatePlatformSellerForAgencyDashboardReturn>;
  updatePlatformSellerForAgencyPrice?: Maybe<UpdatePlatformSellerForAgencyPriceReturn>;
  updatePlatformSellerForAgencyPriceDashboard?: Maybe<UpdatePlatformSellerForAgencyPriceDashboardReturn>;
  updatePlatformSellerForAgencyProof?: Maybe<UpdatePlatformSellerForAgencyProofReturn>;
  updatePlatformSellerForAgencyProofDashboard?: Maybe<UpdatePlatformSellerForAgencyProofDashboardReturn>;
  updatePlatformSellerForUser?: Maybe<UpdatePlatformSellerForUserReturn>;
  updatePlatformSellerForUserDashboard?: Maybe<UpdatePlatformSellerForUserDashboardReturn>;
  updatePlatformSellerForUserPrice?: Maybe<UpdatePlatformSellerForUserPriceReturn>;
  updatePlatformSellerForUserPriceDashboard?: Maybe<UpdatePlatformSellerForUserPriceDashboardReturn>;
  updatePost?: Maybe<UpdatePostReturn>;
  updatePostComment?: Maybe<UpdatePostCommentReturn>;
  updatePostCommentDashboard?: Maybe<UpdatePostCommentDashboardReturn>;
  updatePostDashboard?: Maybe<UpdatePostDashboardReturn>;
  updatePostLikeDashboard?: Maybe<UpdatePostLikeDashboardReturn>;
  updatePostTagDashboard?: Maybe<UpdatePostTagDashboardReturn>;
  updatePrivacy?: Maybe<PrivacyReturn>;
  updateProfile?: Maybe<StringReturn>;
  updateTag?: Maybe<UpdateTagReturn>;
  updateTagDashboard?: Maybe<UpdateTagDashboardReturn>;
  updateTaskTypeHost?: Maybe<UpdateTaskTypeHostReturn>;
  updateTaskTypeHostDashboard?: Maybe<UpdateTaskTypeHostDashboardReturn>;
  updateTaskTypeSpectator?: Maybe<UpdateTaskTypeSpectatorReturn>;
  updateTaskTypeSpectatorDashboard?: Maybe<UpdateTaskTypeSpectatorDashboardReturn>;
  updateTaskUserHost?: Maybe<UpdateTaskUserHostReturn>;
  updateTaskUserHostDashboard?: Maybe<UpdateTaskUserHostDashboardReturn>;
  updateTaskUserSpectator?: Maybe<UpdateTaskUserSpectatorReturn>;
  updateTaskUserSpectatorDashboard?: Maybe<UpdateTaskUserSpectatorDashboardReturn>;
  updateUserAdministratorProfile?: Maybe<UpdateUserAdministratorProfileReturn>;
  updateUserAdministratorProfileActivity?: Maybe<UpdateUserAdministratorProfileActivityReturn>;
  updateUserAdministratorProfileActivityDashboard?: Maybe<UpdateUserAdministratorProfileActivityDashboardReturn>;
  updateUserAdministratorProfileDashboard?: Maybe<UpdateUserAdministratorProfileDashboardReturn>;
  updateUserAppUid?: Maybe<UpdateUserAppUidReturn>;
  updateUserAppUidDashboard?: Maybe<UpdateUserAppUidDashboardReturn>;
  updateUserBadge?: Maybe<UpdateUserBadgeReturn>;
  updateUserBadgeDashboard?: Maybe<UpdateUserBadgeDashboardReturn>;
  updateUserBalanceBeanDashboard?: Maybe<UpdateUserBalanceBeanDashboardReturn>;
  updateUserBalanceBeans?: Maybe<UpdateUserBalanceBeansReturn>;
  updateUserBalanceCoinDashboard?: Maybe<UpdateUserBalanceCoinDashboardReturn>;
  updateUserBalanceCoins?: Maybe<UpdateUserBalanceCoinsReturn>;
  updateUserBalancePointDashboard?: Maybe<UpdateUserBalancePointDashboardReturn>;
  updateUserBalancePoints?: Maybe<UpdateUserBalancePointsReturn>;
  updateUserBanned?: Maybe<UpdateUserBannedReturn>;
  updateUserBannedDashboard?: Maybe<UpdateUserBannedDashboardReturn>;
  updateUserBannedDetail?: Maybe<UpdateUserBannedDetailReturn>;
  updateUserBannedDetailDashboard?: Maybe<UpdateUserBannedDetailDashboardReturn>;
  updateUserBlockedDashboard?: Maybe<UpdateUserBlockedDashboardReturn>;
  updateUserDashboard?: Maybe<UpdateUserDashboardReturn>;
  updateUserDetail?: Maybe<UpdateUserDetailReturn>;
  updateUserDetailDashboard?: Maybe<UpdateUserDetailDashboardReturn>;
  updateUserDeviceInformation?: Maybe<UpdateUserDeviceInformationReturn>;
  updateUserDeviceInformationDashboard?: Maybe<UpdateUserDeviceInformationDashboardReturn>;
  updateUserFollowerDashboard?: Maybe<UpdateUserFollowerDashboardReturn>;
  updateUserFollowingDashboard?: Maybe<UpdateUserFollowingDashboardReturn>;
  updateUserGiftPackage?: Maybe<UpdateUserGiftPackageReturn>;
  updateUserGiftPackageDashboard?: Maybe<UpdateUserGiftPackageDashboardReturn>;
  updateUserLevel?: Maybe<UpdateUserLevelReturn>;
  updateUserLevelDashboard?: Maybe<UpdateUserLevelDashboardReturn>;
  updateUserLiveSetting?: Maybe<UpdateUserLiveSettingReturn>;
  updateUserLiveSettingDashboard?: Maybe<UpdateUserLiveSettingDashboardReturn>;
  updateUserNotificationDashboard?: Maybe<UpdateUserNotificationDashboardReturn>;
  updateUserPhotoDashboard?: Maybe<UpdateUserPhotoDashboardReturn>;
  updateUserPrivacyDashboard?: Maybe<UpdateUserPrivacyDashboardReturn>;
  updateUserProcessingQueue?: Maybe<UpdateUserProcessingQueueReturn>;
  updateUserProcessingQueueDashboard?: Maybe<UpdateUserProcessingQueueDashboardReturn>;
  updateUserSuperFanDashboard?: Maybe<UpdateUserSuperFanDashboardReturn>;
  updateUserVip?: Maybe<UpdateUserVipReturn>;
  updateUserVipDashboard?: Maybe<UpdateUserVipDashboardReturn>;
  updateUserVisitProfileDashboard?: Maybe<UpdateUserVisitProfileDashboardReturn>;
  updateUserWarning?: Maybe<UpdateUserWarningReturn>;
  updateUserWarningDashboard?: Maybe<UpdateUserWarningDashboardReturn>;
  updateUserWarningDetail?: Maybe<UpdateUserWarningDetailReturn>;
  updateUserWarningDetailDashboard?: Maybe<UpdateUserWarningDetailDashboardReturn>;
  updateVip?: Maybe<UpdateVipReturn>;
  updateVipBenefit?: Maybe<UpdateVipBenefitReturn>;
  updateVipBenefitDashboard?: Maybe<UpdateVipBenefitDashboardReturn>;
  updateVipBenefitDetail?: Maybe<UpdateVipBenefitDetailReturn>;
  updateVipBenefitDetailDashboard?: Maybe<UpdateVipBenefitDetailDashboardReturn>;
  updateVipDashboard?: Maybe<UpdateVipDashboardReturn>;
  updateWalletCoinSale?: Maybe<UpdateWalletCoinSaleReturn>;
  updateWalletCoinSaleDashboard?: Maybe<UpdateWalletCoinSaleDashboardReturn>;
  updateWalletConvert?: Maybe<UpdateWalletConvertReturn>;
  updateWalletConvertDashboard?: Maybe<UpdateWalletConvertDashboardReturn>;
  updateWalletPriceCoin?: Maybe<UpdateWalletPriceCoinReturn>;
  updateWalletPriceCoinDashboard?: Maybe<UpdateWalletPriceCoinDashboardReturn>;
  updateWalletTypeConvert?: Maybe<UpdateWalletTypeConvertReturn>;
  updateWalletTypeConvertDashboard?: Maybe<UpdateWalletTypeConvertDashboardReturn>;
  updateWithdrawal?: Maybe<UpdateWithdrawalReturn>;
  updateWithdrawalDashboard?: Maybe<UpdateWithdrawalDashboardReturn>;
  updateWithdrawalMethod?: Maybe<UpdateWithdrawalMethodReturn>;
  updateWithdrawalMethodDashboard?: Maybe<UpdateWithdrawalMethodDashboardReturn>;
  updateWithdrawalMethodDataUser?: Maybe<UpdateWithdrawalMethodDataUserReturn>;
  updateWithdrawalMethodDataUserDashboard?: Maybe<UpdateWithdrawalMethodDataUserDashboardReturn>;
  updateWithdrawalProof?: Maybe<UpdateWithdrawalProofReturn>;
  updateWithdrawalProofDashboard?: Maybe<UpdateWithdrawalProofDashboardReturn>;
  updateWithdrawalTypeRefused?: Maybe<UpdateWithdrawalTypeRefusedReturn>;
  updateWithdrawalTypeRefusedDashboard?: Maybe<UpdateWithdrawalTypeRefusedDashboardReturn>;
  validateCode?: Maybe<StringReturn>;
  validateEmailCode?: Maybe<StringReturn>;
  validateSMSCode?: Maybe<StringReturn>;
  visitProfile?: Maybe<VisitProfileReturn>;
};


export type MutationActiveAccessAdministratorDashboardArgs = {
  accessAdministratorId: Scalars['Int']['input'];
  active: Scalars['Boolean']['input'];
};


export type MutationActiveAccessPartnerDashboardArgs = {
  accessPartnerId: Scalars['Int']['input'];
  active: Scalars['Boolean']['input'];
};


export type MutationActiveAgencyArgs = {
  active: Scalars['Boolean']['input'];
  agencyId: Scalars['Int']['input'];
  userOwnerId: Scalars['Int']['input'];
};


export type MutationActiveAgencyDashboardArgs = {
  active: Scalars['Boolean']['input'];
  agencyId: Scalars['Int']['input'];
  userOwnerAppId: Scalars['Int']['input'];
};


export type MutationActiveAgencyUserArgs = {
  active: Scalars['Boolean']['input'];
  agencyUserId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationActiveAgencyUserDashboardArgs = {
  active: Scalars['Boolean']['input'];
  agencyUserId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationActiveBadgeArgs = {
  active: Scalars['Boolean']['input'];
  badgeId: Scalars['Int']['input'];
};


export type MutationActiveBadgeDashboardArgs = {
  active: Scalars['Boolean']['input'];
  badgeId: Scalars['Int']['input'];
};


export type MutationActiveBannerLinkArgs = {
  active: Scalars['Boolean']['input'];
  bannerLinkId: Scalars['Int']['input'];
};


export type MutationActiveBannerLinkDashboardArgs = {
  active: Scalars['Boolean']['input'];
  bannerLinkId: Scalars['Int']['input'];
};


export type MutationActiveCountryCodeArgs = {
  active: Scalars['Boolean']['input'];
  countryCodeId: Scalars['Int']['input'];
};


export type MutationActiveCountryCodeDashboardArgs = {
  active: Scalars['Boolean']['input'];
  countryCodeId: Scalars['Int']['input'];
};


export type MutationActiveDomainDashboardArgs = {
  active: Scalars['Boolean']['input'];
  domainId: Scalars['Int']['input'];
};


export type MutationActiveExampleOtherOneDashboardArgs = {
  active: Scalars['Boolean']['input'];
  exampleOtherOneId: Scalars['Int']['input'];
};


export type MutationActiveExampleOtherTwoDashboardArgs = {
  active: Scalars['Boolean']['input'];
  exampleOtherTwoId: Scalars['Int']['input'];
};


export type MutationActiveExampleTableDashboardArgs = {
  active: Scalars['Boolean']['input'];
  exampleTableId: Scalars['Int']['input'];
};


export type MutationActiveFamilyArgs = {
  active: Scalars['Boolean']['input'];
  familyId: Scalars['Int']['input'];
};


export type MutationActiveFamilyDashboardArgs = {
  active: Scalars['Boolean']['input'];
  familyId: Scalars['Int']['input'];
  ownerUserId: Scalars['Int']['input'];
};


export type MutationActiveFamilyForceArgs = {
  active: Scalars['Boolean']['input'];
  familyForceId: Scalars['Int']['input'];
};


export type MutationActiveFamilyForceBenefitArgs = {
  active: Scalars['Boolean']['input'];
  familyForceBenefitId: Scalars['Int']['input'];
};


export type MutationActiveFamilyForceBenefitDashboardArgs = {
  active: Scalars['Boolean']['input'];
  familyForceBenefitId: Scalars['Int']['input'];
};


export type MutationActiveFamilyForceBenefitDetailArgs = {
  active: Scalars['Boolean']['input'];
  familyForceBenefitDetailId: Scalars['Int']['input'];
};


export type MutationActiveFamilyForceBenefitDetailDashboardArgs = {
  active: Scalars['Boolean']['input'];
  familyForceBenefitDetailId: Scalars['Int']['input'];
};


export type MutationActiveFamilyForceDashboardArgs = {
  active: Scalars['Boolean']['input'];
  familyForceId: Scalars['Int']['input'];
};


export type MutationActiveFamilyTaskTypeArgs = {
  active: Scalars['Boolean']['input'];
  familyTaskTypeId: Scalars['Int']['input'];
};


export type MutationActiveFamilyTaskTypeDashboardArgs = {
  active: Scalars['Boolean']['input'];
  familyTaskTypeId: Scalars['Int']['input'];
};


export type MutationActiveFamilyTaskTypeHardArgs = {
  active: Scalars['Boolean']['input'];
  familyTaskTypeHardId: Scalars['Int']['input'];
};


export type MutationActiveFamilyTaskTypeHardDashboardArgs = {
  active: Scalars['Boolean']['input'];
  familyTaskTypeHardId: Scalars['Int']['input'];
};


export type MutationActiveFamilyTaskTypeProgressArgs = {
  active: Scalars['Boolean']['input'];
  familyTaskTypeProgressId: Scalars['Int']['input'];
};


export type MutationActiveFamilyTaskTypeProgressDashboardArgs = {
  active: Scalars['Boolean']['input'];
  familyTaskTypeProgressId: Scalars['Int']['input'];
};


export type MutationActiveGameConfigurationDefaultEarningArgs = {
  active: Scalars['Boolean']['input'];
  gameConfigurationDefaultEarningId: Scalars['Int']['input'];
};


export type MutationActiveGameConfigurationDefaultEarningDashboardArgs = {
  active: Scalars['Boolean']['input'];
  gameConfigurationDefaultEarningId: Scalars['Int']['input'];
};


export type MutationActiveGameConfigurationLuckCoinArgs = {
  active: Scalars['Boolean']['input'];
  gameConfigurationLuckCoinId: Scalars['Int']['input'];
};


export type MutationActiveGameConfigurationLuckCoinDashboardArgs = {
  active: Scalars['Boolean']['input'];
  gameConfigurationLuckCoinId: Scalars['Int']['input'];
};


export type MutationActiveGameConfigurationSurpriseBoxArgs = {
  active: Scalars['Boolean']['input'];
  gameConfigurationSurpriseBoxId: Scalars['Int']['input'];
};


export type MutationActiveGameConfigurationSurpriseBoxDashboardArgs = {
  active: Scalars['Boolean']['input'];
  gameConfigurationSurpriseBoxId: Scalars['Int']['input'];
};


export type MutationActiveGiftArgs = {
  active: Scalars['Boolean']['input'];
  giftId: Scalars['Int']['input'];
};


export type MutationActiveGiftDashboardArgs = {
  active: Scalars['Boolean']['input'];
  giftId: Scalars['Int']['input'];
};


export type MutationActiveGiftEventArgs = {
  active: Scalars['Boolean']['input'];
  giftEventId: Scalars['Int']['input'];
};


export type MutationActiveGiftEventDashboardArgs = {
  active: Scalars['Boolean']['input'];
  giftEventId: Scalars['Int']['input'];
};


export type MutationActiveGiftTypeArgs = {
  active: Scalars['Boolean']['input'];
  giftTypeId: Scalars['Int']['input'];
};


export type MutationActiveGiftTypeDashboardArgs = {
  active: Scalars['Boolean']['input'];
  giftTypeId: Scalars['Int']['input'];
};


export type MutationActiveItemArgs = {
  active: Scalars['Boolean']['input'];
  itemId: Scalars['Int']['input'];
};


export type MutationActiveItemDashboardArgs = {
  active: Scalars['Boolean']['input'];
  itemId: Scalars['Int']['input'];
};


export type MutationActiveLevelHostArgs = {
  active: Scalars['Boolean']['input'];
  levelHostId: Scalars['Int']['input'];
};


export type MutationActiveLevelHostDashboardArgs = {
  active: Scalars['Boolean']['input'];
  levelHostId: Scalars['Int']['input'];
};


export type MutationActiveLevelSpectatorArgs = {
  active: Scalars['Boolean']['input'];
  levelSpectatorId: Scalars['Int']['input'];
};


export type MutationActiveLevelSpectatorDashboardArgs = {
  active: Scalars['Boolean']['input'];
  levelSpectatorId: Scalars['Int']['input'];
};


export type MutationActiveLiveFilterArgs = {
  active: Scalars['Boolean']['input'];
  liveFilterId: Scalars['Int']['input'];
};


export type MutationActiveLiveFilterDashboardArgs = {
  active: Scalars['Boolean']['input'];
  liveFilterId: Scalars['Int']['input'];
};


export type MutationActiveLiveStickerArgs = {
  active: Scalars['Boolean']['input'];
  liveStickerId: Scalars['Int']['input'];
};


export type MutationActiveLiveStickerDashboardArgs = {
  active: Scalars['Boolean']['input'];
  liveStickerId: Scalars['Int']['input'];
};


export type MutationActiveLiveTagArgs = {
  active: Scalars['Boolean']['input'];
  liveTagId: Scalars['Int']['input'];
};


export type MutationActiveLiveTagDashboardArgs = {
  active: Scalars['Boolean']['input'];
  liveTagId: Scalars['Int']['input'];
};


export type MutationActiveLiveTypeReportArgs = {
  active: Scalars['Boolean']['input'];
  liveTypeReportId: Scalars['Int']['input'];
};


export type MutationActiveLiveTypeReportDashboardArgs = {
  active: Scalars['Boolean']['input'];
  liveTypeReportId: Scalars['Int']['input'];
};


export type MutationActivePostDashboardArgs = {
  active: Scalars['Boolean']['input'];
  postId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationActiveTagArgs = {
  active: Scalars['Boolean']['input'];
  tagId: Scalars['Int']['input'];
};


export type MutationActiveTagDashboardArgs = {
  active: Scalars['Boolean']['input'];
  tagId: Scalars['Int']['input'];
};


export type MutationActiveTaskTypeHostArgs = {
  active: Scalars['Boolean']['input'];
  taskTypeHostId: Scalars['Int']['input'];
};


export type MutationActiveTaskTypeHostDashboardArgs = {
  active: Scalars['Boolean']['input'];
  taskTypeHostId: Scalars['Int']['input'];
};


export type MutationActiveTaskTypeSpectatorArgs = {
  active: Scalars['Boolean']['input'];
  taskTypeSpectatorId: Scalars['Int']['input'];
};


export type MutationActiveTaskTypeSpectatorDashboardArgs = {
  active: Scalars['Boolean']['input'];
  taskTypeSpectatorId: Scalars['Int']['input'];
};


export type MutationActiveVipArgs = {
  active: Scalars['Boolean']['input'];
  vipId: Scalars['Int']['input'];
};


export type MutationActiveVipBenefitDashboardArgs = {
  active: Scalars['Boolean']['input'];
  vipBenefitId: Scalars['Int']['input'];
};


export type MutationActiveVipBenefitDetailDashboardArgs = {
  active: Scalars['Boolean']['input'];
  vipBenefitDetailId: Scalars['Int']['input'];
};


export type MutationActiveVipDashboardArgs = {
  active: Scalars['Boolean']['input'];
  vipId: Scalars['Int']['input'];
};


export type MutationActiveWalletPriceCoinArgs = {
  active: Scalars['Boolean']['input'];
  walletPriceCoinId: Scalars['Int']['input'];
};


export type MutationActiveWalletPriceCoinDashboardArgs = {
  active: Scalars['Boolean']['input'];
  walletPriceCoinId: Scalars['Int']['input'];
};


export type MutationActiveWalletTypeConvertArgs = {
  active: Scalars['Boolean']['input'];
  walletTypeConvertId: Scalars['Int']['input'];
};


export type MutationActiveWalletTypeConvertDashboardArgs = {
  active: Scalars['Boolean']['input'];
  walletTypeConvertId: Scalars['Int']['input'];
};


export type MutationActiveWithdrawalMethodArgs = {
  active: Scalars['Boolean']['input'];
  withdrawalMethodId: Scalars['Int']['input'];
};


export type MutationActiveWithdrawalMethodDashboardArgs = {
  active: Scalars['Boolean']['input'];
  withdrawalMethodId: Scalars['Int']['input'];
};


export type MutationActiveWithdrawalTypeRefusedArgs = {
  active: Scalars['Boolean']['input'];
  withdrawalTypeRefusedId: Scalars['Int']['input'];
};


export type MutationActiveWithdrawalTypeRefusedDashboardArgs = {
  active: Scalars['Boolean']['input'];
  withdrawalTypeRefusedId: Scalars['Int']['input'];
};


export type MutationBlockArgs = {
  targetId: Scalars['Int']['input'];
};


export type MutationBlockSeatArgs = {
  liveId: Scalars['Int']['input'];
  position: Scalars['Int']['input'];
};


export type MutationChangeLanguageArgs = {
  language: Scalars['String']['input'];
};


export type MutationCloseLiveArgs = {
  liveId: Scalars['Int']['input'];
};


export type MutationConvertPointsArgs = {
  walletTypeConvertId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateAccessAdministratorDashboardArgs = {
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  smsCode: Scalars['String']['input'];
};


export type MutationCreateAccessAdministratorFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAccessPartnerDashboardArgs = {
  country: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationCreateAccessPartnerFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAgencyArgs = {
  agencyCode: Scalars['Int']['input'];
  agencyComission: Scalars['Float']['input'];
  country: Scalars['String']['input'];
  document: Scalars['String']['input'];
  documentPhotoBack: Scalars['String']['input'];
  documentPhotoFront: Scalars['String']['input'];
  emailAddress: Scalars['String']['input'];
  facebook?: InputMaybe<Scalars['String']['input']>;
  homeAddress: Scalars['String']['input'];
  instagram: Scalars['String']['input'];
  isSubAgency: Scalars['Boolean']['input'];
  levelAgency: Scalars['Int']['input'];
  levelAgencyExperience: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  points: Scalars['Float']['input'];
  pointsAccumulatedCurrentMonth: Scalars['Float']['input'];
  pointsAccumulatedLastMonth: Scalars['Float']['input'];
  typeWithdrawalAgency: TypeWithdrawalAgency;
  userOwnerId: Scalars['Int']['input'];
  utc: Scalars['String']['input'];
  whatsapp: Scalars['String']['input'];
};


export type MutationCreateAgencyBalancePointDashboardArgs = {
  agencyId: Scalars['Int']['input'];
  dateHourBalance: Scalars['String']['input'];
  description: Scalars['String']['input'];
  pointsAfter: Scalars['Float']['input'];
  pointsBefore: Scalars['Float']['input'];
  typeAgencyBalancePoints?: InputMaybe<TypeAgencyBalancePoints>;
  userId: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
};


export type MutationCreateAgencyBalancePointFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAgencyBalancePointsArgs = {
  agencyId: Scalars['Int']['input'];
  dateHourBalance: Scalars['String']['input'];
  description: Scalars['String']['input'];
  pointsAfter: Scalars['Float']['input'];
  pointsBefore: Scalars['Float']['input'];
  typeAgencyBalancePoints?: InputMaybe<TypeAgencyBalancePoints>;
  userId: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
};


export type MutationCreateAgencyBalancePointsFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAgencyBannedArgs = {
  agencyId: Scalars['Int']['input'];
  banDate: Scalars['String']['input'];
  banExpiryDate: Scalars['String']['input'];
  reasonForBan: Scalars['String']['input'];
};


export type MutationCreateAgencyBannedDashboardArgs = {
  agencyId: Scalars['Int']['input'];
  banDate: Scalars['String']['input'];
  banExpiryDate: Scalars['String']['input'];
  reasonForBan: Scalars['String']['input'];
};


export type MutationCreateAgencyBannedDetailArgs = {
  agencyBannedId: Scalars['Int']['input'];
  proof: Scalars['String']['input'];
};


export type MutationCreateAgencyBannedDetailDashboardArgs = {
  agencyBannedId: Scalars['Int']['input'];
  proof: Scalars['String']['input'];
};


export type MutationCreateAgencyBannedDetailFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAgencyBannedDetailFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAgencyBannedFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAgencyBannedFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAgencyDashboardArgs = {
  agencyCode: Scalars['Int']['input'];
  agencyComission: Scalars['Float']['input'];
  coinsForSale: Scalars['Float']['input'];
  country: Scalars['String']['input'];
  document: Scalars['String']['input'];
  documentPhotoBack: Scalars['String']['input'];
  documentPhotoFront: Scalars['String']['input'];
  emailAddress: Scalars['String']['input'];
  facebook?: InputMaybe<Scalars['String']['input']>;
  homeAddress: Scalars['String']['input'];
  instagram: Scalars['String']['input'];
  isReseller: Scalars['Boolean']['input'];
  isSubAgency: Scalars['Boolean']['input'];
  levelAgency: Scalars['Int']['input'];
  levelAgencyExperience: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  points: Scalars['Float']['input'];
  pointsAccumulatedCurrentMonth: Scalars['Float']['input'];
  pointsAccumulatedLastMonth: Scalars['Float']['input'];
  typeWithdrawalAgency: TypeWithdrawalAgency;
  userOwnerAppId: Scalars['String']['input'];
  userOwnerId: Scalars['Int']['input'];
  utc: Scalars['String']['input'];
  whatsapp: Scalars['String']['input'];
};


export type MutationCreateAgencyFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAgencyFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAgencyResellerBalanceCoinDashboardArgs = {
  agencyId: Scalars['Int']['input'];
  coinsAfter: Scalars['Float']['input'];
  coinsBefore: Scalars['Float']['input'];
  dateHourBalance: Scalars['String']['input'];
  description: Scalars['String']['input'];
  typeAgencyResellerBalanceCoins?: InputMaybe<TypeAgencyResellerBalanceCoins>;
  value: Scalars['Int']['input'];
};


export type MutationCreateAgencyResellerBalanceCoinFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAgencySaleDetailArgs = {
  agencyId: Scalars['Int']['input'];
  coins: Scalars['Float']['input'];
  photo: Scalars['String']['input'];
  userAppId: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
  userUtc: Scalars['String']['input'];
};


export type MutationCreateAgencySaleDetailDashboardArgs = {
  agencyId: Scalars['Int']['input'];
  coins: Scalars['Float']['input'];
  dateReceivedCoins: Scalars['String']['input'];
  dateSentCoins: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateAgencySaleDetailFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAgencySaleDetailFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAgencyUserArgs = {
  accept: Scalars['Boolean']['input'];
  agencyId: Scalars['Int']['input'];
  dateAccept?: InputMaybe<Scalars['String']['input']>;
  dateRejected?: InputMaybe<Scalars['String']['input']>;
  dateReleased?: InputMaybe<Scalars['String']['input']>;
  rejected: Scalars['Boolean']['input'];
  released: Scalars['Boolean']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateAgencyUserDashboardArgs = {
  accept: Scalars['Boolean']['input'];
  agencyId: Scalars['Int']['input'];
  dateAccept?: InputMaybe<Scalars['String']['input']>;
  dateRejected?: InputMaybe<Scalars['String']['input']>;
  dateReleased?: InputMaybe<Scalars['String']['input']>;
  rejected: Scalars['Boolean']['input'];
  released: Scalars['Boolean']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateAgencyUserFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAgencyUserFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAgencyWarningArgs = {
  agencyId: Scalars['Int']['input'];
  warningDate: Scalars['String']['input'];
  warningExpiryDate: Scalars['String']['input'];
};


export type MutationCreateAgencyWarningDashboardArgs = {
  agencyId: Scalars['Int']['input'];
  warningDate: Scalars['String']['input'];
  warningExpiryDate: Scalars['String']['input'];
};


export type MutationCreateAgencyWarningDetailArgs = {
  agencyWarningId: Scalars['Int']['input'];
  proof: Scalars['String']['input'];
};


export type MutationCreateAgencyWarningDetailDashboardArgs = {
  agencyWarningId: Scalars['Int']['input'];
  proof: Scalars['String']['input'];
};


export type MutationCreateAgencyWarningDetailFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAgencyWarningDetailFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAgencyWarningFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAgencyWarningFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAppLogArgs = {
  newJson?: InputMaybe<Scalars['String']['input']>;
  oldJson?: InputMaybe<Scalars['String']['input']>;
  table: Scalars['String']['input'];
  tableId: Scalars['Int']['input'];
  typeAppLogType: TypeAppLogType;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateAppLogDashboardArgs = {
  newJson?: InputMaybe<Scalars['String']['input']>;
  oldJson?: InputMaybe<Scalars['String']['input']>;
  table: Scalars['String']['input'];
  tableId: Scalars['Int']['input'];
  typeAppLogType: TypeAppLogType;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateAppLogFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAppLogFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAppSettingArgs = {
  acceptSendForMe: Scalars['Boolean']['input'];
  minGiftSentPushCountry: Scalars['Int']['input'];
  minReturnTimeGameLuckCoinChat: Scalars['Int']['input'];
  minReturnTimeGameLuckCoinCountry: Scalars['Int']['input'];
  minReturnTimeGameLuckCoinMiddle: Scalars['Int']['input'];
  minReturnTimeGameLuckCoinSound: Scalars['Int']['input'];
  minReturnValueGameLuckBox: Scalars['Int']['input'];
  minReturnValueGameLuckCoinCountry: Scalars['Int']['input'];
  utcDefault: Scalars['String']['input'];
};


export type MutationCreateAppSettingDashboardArgs = {
  acceptSendForMe: Scalars['Boolean']['input'];
  gameLuckCoinMultipleCalculation: Scalars['Boolean']['input'];
  gameLuckSurpriseBoxDefaultGiftIdEarning: Scalars['Int']['input'];
  gameLuckSurpriseBoxDefaultValueGiftEarning: Scalars['Int']['input'];
  gameLuckSurpriseBoxValueBet: Scalars['Int']['input'];
  minGiftSentPushCountry: Scalars['Int']['input'];
  minReturnTimeGameLuckCoinChat: Scalars['Int']['input'];
  minReturnTimeGameLuckCoinCountry: Scalars['Int']['input'];
  minReturnTimeGameLuckCoinMiddle: Scalars['Int']['input'];
  minReturnTimeGameLuckCoinSound: Scalars['Int']['input'];
  minReturnValueGameLuckBox: Scalars['Int']['input'];
  minReturnValueGameLuckCoinCountry: Scalars['Int']['input'];
  utcDefault: Scalars['String']['input'];
};


export type MutationCreateAppSettingFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateAppSettingFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateBadgeArgs = {
  archive: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  typeBadge: TypeBadge;
};


export type MutationCreateBadgeDashboardArgs = {
  archive: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  typeBadge: TypeBadge;
};


export type MutationCreateBadgeFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateBadgeFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateBannerLinkArgs = {
  appId?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  expiresIn: Scalars['String']['input'];
  image: Scalars['String']['input'];
  linkWebPage?: InputMaybe<Scalars['String']['input']>;
  typeBannerLink: TypeBannerLink;
  typeBannerLinkPage: TypeBannerLinkPage;
};


export type MutationCreateBannerLinkDashboardArgs = {
  appId?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  expiresIn: Scalars['String']['input'];
  image: Scalars['String']['input'];
  linkWebPage?: InputMaybe<Scalars['String']['input']>;
  typeBannerLink: TypeBannerLink;
  typeBannerLinkPage: TypeBannerLinkPage;
};


export type MutationCreateBannerLinkFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateBannerLinkFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateChatArgs = {
  userTwoId: Scalars['Int']['input'];
};


export type MutationCreateChatDetailArgs = {
  audio?: InputMaybe<Scalars['String']['input']>;
  chatId: Scalars['Int']['input'];
  emoji?: InputMaybe<Scalars['String']['input']>;
  gif?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateChatDetailFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateChatFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateCountryCodeArgs = {
  codeIsoAlpha2: Scalars['String']['input'];
  codeIsoAlpha3: Scalars['String']['input'];
  codeIsoNumeric: Scalars['String']['input'];
  currency: Scalars['String']['input'];
  ddi?: InputMaybe<Scalars['String']['input']>;
  extensionDomain: Scalars['String']['input'];
  iconFlag: Scalars['String']['input'];
  name: Scalars['String']['input'];
  region: Scalars['String']['input'];
  usedInSearch: Scalars['Boolean']['input'];
};


export type MutationCreateCountryCodeDashboardArgs = {
  codeIsoAlpha2: Scalars['String']['input'];
  codeIsoAlpha3: Scalars['String']['input'];
  codeIsoNumeric: Scalars['String']['input'];
  currency: Scalars['String']['input'];
  ddi?: InputMaybe<Scalars['String']['input']>;
  extensionDomain: Scalars['String']['input'];
  iconFlag: Scalars['String']['input'];
  name: Scalars['String']['input'];
  region: Scalars['String']['input'];
  usedInSearch: Scalars['Boolean']['input'];
};


export type MutationCreateCountryCodeFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateCountryCodeFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateDomainDashboardArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateDomainFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateEventArgs = {
  date: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateEventDashboardArgs = {
  date: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  typeEventStatus: TypeEventStatus;
  userId: Scalars['Int']['input'];
};


export type MutationCreateEventFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateEventFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateExampleOtherOneDashboardArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateExampleOtherOneFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateExampleOtherTwoDashboardArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateExampleOtherTwoFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateExampleTableDashboardArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  exampleOtherOneId: Scalars['Int']['input'];
  exampleOtherTwoId: Scalars['Int']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  typeBoolean: Scalars['Boolean']['input'];
  typeCurrency: Scalars['Float']['input'];
  typeDatetime: Scalars['String']['input'];
  typeDecimal: Scalars['Float']['input'];
  typeEnum: TypeEnum;
  typeInt: Scalars['Int']['input'];
  typeText: Scalars['String']['input'];
};


export type MutationCreateExampleTableFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFakeDataArgs = {
  quantityFamily: Scalars['Int']['input'];
  quantityLive: Scalars['Int']['input'];
  quantityUser: Scalars['Int']['input'];
  totalGiftsPerUser: Scalars['Int']['input'];
};


export type MutationCreateFamilyArgs = {
  announcement: Scalars['String']['input'];
  anyCanJoin: Scalars['Boolean']['input'];
  icon: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  tag: Scalars['String']['input'];
};


export type MutationCreateFamilyDashboardArgs = {
  announcement: Scalars['String']['input'];
  anyCanJoin: Scalars['Boolean']['input'];
  country: Scalars['String']['input'];
  icon: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  ownerUserId?: InputMaybe<Scalars['Int']['input']>;
  region: Scalars['String']['input'];
  tag: Scalars['String']['input'];
};


export type MutationCreateFamilyFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyForceArgs = {
  familyForceLevel: Scalars['Int']['input'];
  icon: Scalars['String']['input'];
  limitMember: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  points: Scalars['Float']['input'];
};


export type MutationCreateFamilyForceBenefitArgs = {
  description: Scalars['String']['input'];
  icon: Scalars['String']['input'];
  name: Scalars['String']['input'];
  typeFamilyForceBenefit?: InputMaybe<TypeFamilyForceBenefit>;
};


export type MutationCreateFamilyForceBenefitDashboardArgs = {
  description: Scalars['String']['input'];
  icon: Scalars['String']['input'];
  name: Scalars['String']['input'];
  typeFamilyForceBenefit?: InputMaybe<TypeFamilyForceBenefit>;
};


export type MutationCreateFamilyForceBenefitDetailArgs = {
  familyForceBenefitId: Scalars['Int']['input'];
  familyForceId: Scalars['Int']['input'];
};


export type MutationCreateFamilyForceBenefitDetailDashboardArgs = {
  familyForceBenefitId: Scalars['Int']['input'];
  familyForceId: Scalars['Int']['input'];
};


export type MutationCreateFamilyForceBenefitDetailFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyForceBenefitDetailFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyForceBenefitFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyForceBenefitFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyForceDashboardArgs = {
  familyForceLevel: Scalars['Int']['input'];
  icon: Scalars['String']['input'];
  limitMember: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  points: Scalars['Float']['input'];
};


export type MutationCreateFamilyForceFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyForceFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyMemberArgs = {
  familyId: Scalars['Int']['input'];
  isAdmin: Scalars['Boolean']['input'];
  isCreator: Scalars['Boolean']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateFamilyMemberDashboardArgs = {
  familyId: Scalars['Int']['input'];
  isAdmin: Scalars['Boolean']['input'];
  isCreator: Scalars['Boolean']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateFamilyMemberFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyMemberFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyTaskMemberArgs = {
  completed: Scalars['String']['input'];
  dateTask: Scalars['String']['input'];
  familyId: Scalars['Int']['input'];
  familyTaskTypeId: Scalars['Int']['input'];
  quantityCompleted: Scalars['String']['input'];
  quantityTask: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateFamilyTaskMemberDashboardArgs = {
  completed: Scalars['String']['input'];
  dateTask: Scalars['String']['input'];
  familyId: Scalars['Int']['input'];
  familyTaskTypeId: Scalars['Int']['input'];
  quantityCompleted: Scalars['String']['input'];
  quantityTask: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateFamilyTaskMemberFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyTaskMemberFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyTaskMemberHardArgs = {
  completed: Scalars['String']['input'];
  dateTask: Scalars['String']['input'];
  familyId: Scalars['Int']['input'];
  familyTaskTypeHardId: Scalars['Int']['input'];
  quantityCompleted: Scalars['String']['input'];
  quantityTask: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateFamilyTaskMemberHardDashboardArgs = {
  completed: Scalars['String']['input'];
  dateTask: Scalars['String']['input'];
  familyId: Scalars['Int']['input'];
  familyTaskTypeHardId: Scalars['Int']['input'];
  quantityCompleted: Scalars['String']['input'];
  quantityTask: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateFamilyTaskMemberHardFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyTaskMemberHardFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyTaskProgressArgs = {
  completed: Scalars['Boolean']['input'];
  dateTask: Scalars['String']['input'];
  familyId: Scalars['Int']['input'];
  familyTaskTypeProgressId: Scalars['Int']['input'];
  quantityCompleted: Scalars['String']['input'];
  quantityTask: Scalars['String']['input'];
};


export type MutationCreateFamilyTaskProgressDashboardArgs = {
  completed: Scalars['Boolean']['input'];
  dateTask: Scalars['String']['input'];
  familyId: Scalars['Int']['input'];
  familyTaskTypeProgressId: Scalars['Int']['input'];
  quantityCompleted: Scalars['String']['input'];
  quantityTask: Scalars['String']['input'];
};


export type MutationCreateFamilyTaskProgressFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyTaskProgressFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyTaskProgressReceivedArgs = {
  familyTaskProgressId: Scalars['Int']['input'];
  received: Scalars['Boolean']['input'];
};


export type MutationCreateFamilyTaskProgressReceivedDashboardArgs = {
  familyTaskProgressId: Scalars['Int']['input'];
  received: Scalars['Boolean']['input'];
};


export type MutationCreateFamilyTaskProgressReceivedFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyTaskProgressReceivedFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyTaskTypeArgs = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  points: Scalars['Float']['input'];
  quantity: Scalars['Int']['input'];
  typeFamilyTask?: InputMaybe<TypeFamilyTask>;
};


export type MutationCreateFamilyTaskTypeDashboardArgs = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  points: Scalars['Float']['input'];
  quantity: Scalars['Int']['input'];
  typeFamilyTask?: InputMaybe<TypeFamilyTask>;
};


export type MutationCreateFamilyTaskTypeFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyTaskTypeFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyTaskTypeHardArgs = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  points: Scalars['Float']['input'];
  quantity: Scalars['Int']['input'];
  typeFamilyTask?: InputMaybe<TypeFamilyTask>;
};


export type MutationCreateFamilyTaskTypeHardDashboardArgs = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  points: Scalars['Float']['input'];
  quantity: Scalars['Int']['input'];
  typeFamilyTask?: InputMaybe<TypeFamilyTask>;
};


export type MutationCreateFamilyTaskTypeHardFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyTaskTypeHardFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyTaskTypeProgressArgs = {
  description: Scalars['String']['input'];
  minimumPointsUser: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  typeFamilyBonus?: InputMaybe<TypeFamilyBonus>;
  typeFamilyBox?: InputMaybe<TypeFamilyBox>;
  value: Scalars['Int']['input'];
};


export type MutationCreateFamilyTaskTypeProgressDashboardArgs = {
  description: Scalars['String']['input'];
  minimumPointsUser: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  typeFamilyBonus?: InputMaybe<TypeFamilyBonus>;
  typeFamilyBox?: InputMaybe<TypeFamilyBox>;
  value: Scalars['Int']['input'];
};


export type MutationCreateFamilyTaskTypeProgressFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateFamilyTaskTypeProgressFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateGameConfigurationDefaultEarningArgs = {
  description: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  typeGame: TypeGame;
};


export type MutationCreateGameConfigurationDefaultEarningDashboardArgs = {
  description: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  typeGame: TypeGame;
};


export type MutationCreateGameConfigurationDefaultEarningFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateGameConfigurationDefaultEarningFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateGameConfigurationLuckCoinArgs = {
  allowTimes05: Scalars['Boolean']['input'];
  allowTimes10: Scalars['Boolean']['input'];
  allowTimes20: Scalars['Boolean']['input'];
  allowTimes50: Scalars['Boolean']['input'];
  allowTimes100: Scalars['Boolean']['input'];
  allowTimes250: Scalars['Boolean']['input'];
  allowTimes500: Scalars['Boolean']['input'];
  allowTimes1000: Scalars['Boolean']['input'];
  colorTimesBiggerThen05: Scalars['String']['input'];
  colorTimesBiggerThen100: Scalars['String']['input'];
  colorTimesBiggerThen250: Scalars['String']['input'];
  colorTimesBiggerThen500: Scalars['String']['input'];
  colorTimesBiggerThen1000: Scalars['String']['input'];
  colorTimesBiggerThen2000: Scalars['String']['input'];
  giftId: Scalars['Int']['input'];
  modAllowTimes05: Scalars['Int']['input'];
  modAllowTimes10: Scalars['Int']['input'];
  modAllowTimes20: Scalars['Int']['input'];
  modAllowTimes50: Scalars['Int']['input'];
  modAllowTimes100: Scalars['Int']['input'];
  modAllowTimes250: Scalars['Int']['input'];
  modAllowTimes500: Scalars['Int']['input'];
  modAllowTimes1000: Scalars['Int']['input'];
  quantityCombo: Scalars['Int']['input'];
  returnAllowTimes05: Scalars['Int']['input'];
  returnAllowTimes10: Scalars['Int']['input'];
  returnAllowTimes20: Scalars['Int']['input'];
  returnAllowTimes50: Scalars['Int']['input'];
  returnAllowTimes100: Scalars['Int']['input'];
  returnAllowTimes250: Scalars['Int']['input'];
  returnAllowTimes500: Scalars['Int']['input'];
  returnAllowTimes1000: Scalars['Int']['input'];
};


export type MutationCreateGameConfigurationLuckCoinDashboardArgs = {
  allowTimes05: Scalars['Boolean']['input'];
  allowTimes10: Scalars['Boolean']['input'];
  allowTimes20: Scalars['Boolean']['input'];
  allowTimes50: Scalars['Boolean']['input'];
  allowTimes100: Scalars['Boolean']['input'];
  allowTimes250: Scalars['Boolean']['input'];
  allowTimes500: Scalars['Boolean']['input'];
  allowTimes1000: Scalars['Boolean']['input'];
  colorTimes05: Scalars['String']['input'];
  colorTimes10: Scalars['String']['input'];
  colorTimes20: Scalars['String']['input'];
  colorTimes50: Scalars['String']['input'];
  colorTimes100: Scalars['String']['input'];
  colorTimes250: Scalars['String']['input'];
  colorTimes500: Scalars['String']['input'];
  colorTimes1000: Scalars['String']['input'];
  gameLuckCoinMultipleCalculation: Scalars['Boolean']['input'];
  giftId: Scalars['Int']['input'];
  modAllowTimes05: Scalars['Int']['input'];
  modAllowTimes10: Scalars['Int']['input'];
  modAllowTimes20: Scalars['Int']['input'];
  modAllowTimes50: Scalars['Int']['input'];
  modAllowTimes100: Scalars['Int']['input'];
  modAllowTimes250: Scalars['Int']['input'];
  modAllowTimes500: Scalars['Int']['input'];
  modAllowTimes1000: Scalars['Int']['input'];
  quantityCombo: Scalars['Int']['input'];
  returnAllowTimes05: Scalars['Int']['input'];
  returnAllowTimes10: Scalars['Int']['input'];
  returnAllowTimes20: Scalars['Int']['input'];
  returnAllowTimes50: Scalars['Int']['input'];
  returnAllowTimes100: Scalars['Int']['input'];
  returnAllowTimes250: Scalars['Int']['input'];
  returnAllowTimes500: Scalars['Int']['input'];
  returnAllowTimes1000: Scalars['Int']['input'];
};


export type MutationCreateGameConfigurationLuckCoinFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateGameConfigurationLuckCoinFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateGameConfigurationSurpriseBoxArgs = {
  giftId: Scalars['Int']['input'];
  modTimes: Scalars['Int']['input'];
};


export type MutationCreateGameConfigurationSurpriseBoxDashboardArgs = {
  defaultTime01: Scalars['Boolean']['input'];
  giftId: Scalars['Int']['input'];
  modTimes: Scalars['Int']['input'];
};


export type MutationCreateGameConfigurationSurpriseBoxFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateGameConfigurationSurpriseBoxFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateGameLuckSurpriseBoxArgs = {
  timesBet: Scalars['Int']['input'];
};


export type MutationCreateGameLuckSurpriseBoxDashboardArgs = {
  giftIdEarning?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
  valueGift?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateGameLuckSurpriseBoxFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateGameLuckSurpriseBoxFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateGiftArgs = {
  allowedCombos: Array<Scalars['Int']['input']>;
  animationSpeedCenter: Scalars['Int']['input'];
  animationSpeedSeat: Scalars['Int']['input'];
  archive: Scalars['String']['input'];
  country?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  giftEventId?: InputMaybe<Scalars['Int']['input']>;
  giftTypeId: Scalars['Int']['input'];
  heightAnimation?: InputMaybe<Scalars['Int']['input']>;
  icon: Scalars['String']['input'];
  isAnimated: Scalars['Boolean']['input'];
  isCelebrity: Scalars['Boolean']['input'];
  isLuck: Scalars['Boolean']['input'];
  isPackage: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  value: Scalars['Int']['input'];
  widthAnimation?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateGiftDashboardArgs = {
  allowedCombos: Scalars['String']['input'];
  animationSpeedCenter: Scalars['Int']['input'];
  animationSpeedSeat: Scalars['Int']['input'];
  archive: Scalars['String']['input'];
  country: Scalars['String']['input'];
  description: Scalars['String']['input'];
  giftEventId?: InputMaybe<Scalars['Int']['input']>;
  giftTypeId: Scalars['Int']['input'];
  heightAnimation?: InputMaybe<Scalars['Int']['input']>;
  icon: Scalars['String']['input'];
  isAnimated: Scalars['Boolean']['input'];
  isCelebrity: Scalars['Boolean']['input'];
  isLuck: Scalars['Boolean']['input'];
  isPackage: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  value: Scalars['Int']['input'];
  widthAnimation?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateGiftEventArgs = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateGiftEventDashboardArgs = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateGiftEventFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateGiftFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateGiftSentArgs = {
  familyReceivedId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  familySentId?: InputMaybe<Scalars['Int']['input']>;
  giftId: Scalars['Int']['input'];
  invisibleGiftGiver: Scalars['Boolean']['input'];
  liveId?: InputMaybe<Scalars['Int']['input']>;
  quantityCombo: Scalars['Int']['input'];
  userReceivedId?: InputMaybe<Array<Scalars['Int']['input']>>;
  utcLive?: InputMaybe<Scalars['String']['input']>;
  utcReceived?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationCreateGiftSentDashboardArgs = {
  agencyFinishedProcessing: Scalars['Boolean']['input'];
  agencyStartedProcessing: Scalars['Boolean']['input'];
  balanceFinishedProcessing: Scalars['Boolean']['input'];
  balanceStartedProcessing: Scalars['Boolean']['input'];
  dateReceived: Scalars['String']['input'];
  dateSent: Scalars['String']['input'];
  dateSentReceivedLive?: InputMaybe<Scalars['String']['input']>;
  eventFinishedProcessing: Scalars['Boolean']['input'];
  eventStartedProcessing: Scalars['Boolean']['input'];
  familyReceivedId?: InputMaybe<Scalars['Int']['input']>;
  familySentId?: InputMaybe<Scalars['Int']['input']>;
  giftId: Scalars['Int']['input'];
  indexLuckCoin: Scalars['Int']['input'];
  invisibleGiftGiver: Scalars['Boolean']['input'];
  invitationFinishedProcessing: Scalars['Boolean']['input'];
  invitationStartedProcessing: Scalars['Boolean']['input'];
  isLuck: Scalars['Boolean']['input'];
  liveId?: InputMaybe<Scalars['Int']['input']>;
  pointsFinishedProcessing: Scalars['Boolean']['input'];
  pointsStartedProcessing: Scalars['Boolean']['input'];
  processingQueueId: Scalars['Int']['input'];
  quantityCombo: Scalars['Int']['input'];
  returnTimes: Scalars['Int']['input'];
  totalGift: Scalars['Int']['input'];
  totalGiftSentReceived?: InputMaybe<Scalars['Float']['input']>;
  userReceivedId: Scalars['Int']['input'];
  userSentId: Scalars['Int']['input'];
  valueEarning: Scalars['Int']['input'];
  valueGift: Scalars['Int']['input'];
  valueGiftSentReceived?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationCreateGiftSentFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateGiftSentFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateGiftSentLuckCoinArgs = {
  familyReceivedId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  familySentId?: InputMaybe<Scalars['Int']['input']>;
  giftId: Scalars['Int']['input'];
  invisibleGiftGiver: Scalars['Boolean']['input'];
  liveId?: InputMaybe<Scalars['Int']['input']>;
  quantityCombo: Scalars['Int']['input'];
  userReceivedId?: InputMaybe<Array<Scalars['Int']['input']>>;
  utcLive?: InputMaybe<Scalars['String']['input']>;
  utcReceived?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationCreateGiftSentLuckCoinFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateGiftSentPackageArgs = {
  familyReceivedId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  familySentId?: InputMaybe<Scalars['Int']['input']>;
  giftId: Scalars['Int']['input'];
  invisibleGiftGiver: Scalars['Boolean']['input'];
  liveId?: InputMaybe<Scalars['Int']['input']>;
  quantityCombo: Scalars['Int']['input'];
  userReceivedId?: InputMaybe<Array<Scalars['Int']['input']>>;
  utcLive?: InputMaybe<Scalars['String']['input']>;
  utcReceived?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationCreateGiftTypeArgs = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateGiftTypeDashboardArgs = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateGiftTypeFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateInvitationArgs = {
  dateInvite: Scalars['String']['input'];
  userInvitedId: Scalars['Int']['input'];
  userWhoInvitedId: Scalars['Int']['input'];
};


export type MutationCreateInvitationDashboardArgs = {
  dateInvite: Scalars['String']['input'];
  userInvitedId: Scalars['Int']['input'];
  userWhoInvitedId: Scalars['Int']['input'];
};


export type MutationCreateInvitationFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateInvitationFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateInvitationRewardArgs = {
  dateReward: Scalars['String']['input'];
  invitationId: Scalars['Int']['input'];
  valueReward: Scalars['Int']['input'];
};


export type MutationCreateInvitationRewardDashboardArgs = {
  dateReward: Scalars['String']['input'];
  invitationId: Scalars['Int']['input'];
  valueReward: Scalars['Int']['input'];
};


export type MutationCreateInvitationRewardFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateInvitationRewardFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateItemArgs = {
  duration: Scalars['String']['input'];
  icon: Scalars['String']['input'];
  name: Scalars['String']['input'];
  typeItem: TypeItem;
  valueBeans: Scalars['Int']['input'];
};


export type MutationCreateItemDashboardArgs = {
  duration: Scalars['String']['input'];
  icon: Scalars['String']['input'];
  name: Scalars['String']['input'];
  typeItem: TypeItem;
  valueBeans: Scalars['Int']['input'];
};


export type MutationCreateItemFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateItemFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateItemPurchasedArgs = {
  datePurchased: Scalars['String']['input'];
  expiresIn: Scalars['String']['input'];
  itemId: Scalars['Int']['input'];
  typeItem: TypeItem;
  userId: Scalars['Int']['input'];
  userSentId: Scalars['Int']['input'];
};


export type MutationCreateItemPurchasedDashboardArgs = {
  datePurchased: Scalars['String']['input'];
  expiresIn: Scalars['String']['input'];
  itemId: Scalars['Int']['input'];
  typeItem: TypeItem;
  userId: Scalars['Int']['input'];
  userSentId: Scalars['Int']['input'];
};


export type MutationCreateItemPurchasedFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateItemPurchasedFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLevelHostArgs = {
  emblem: Scalars['String']['input'];
  gradientColor: Scalars['String']['input'];
  level: Scalars['Int']['input'];
  requiredExp: Scalars['Int']['input'];
};


export type MutationCreateLevelHostDashboardArgs = {
  emblem: Scalars['String']['input'];
  gradientColor: Scalars['String']['input'];
  level: Scalars['Int']['input'];
  requiredExp: Scalars['Int']['input'];
};


export type MutationCreateLevelHostFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLevelHostFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLevelSpectatorArgs = {
  emblem: Scalars['String']['input'];
  gradientColor: Scalars['String']['input'];
  level: Scalars['Int']['input'];
  requiredExp: Scalars['Int']['input'];
};


export type MutationCreateLevelSpectatorDashboardArgs = {
  emblem: Scalars['String']['input'];
  gradientColor: Scalars['String']['input'];
  level: Scalars['Int']['input'];
  requiredExp: Scalars['Int']['input'];
};


export type MutationCreateLevelSpectatorFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLevelSpectatorFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLiveArgs = {
  announcement: Scalars['String']['input'];
  channelQuality: Scalars['String']['input'];
  country: Scalars['String']['input'];
  imageAvatar: Scalars['String']['input'];
  numberOfSeats?: InputMaybe<Scalars['Int']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  typeLive: TypeLive;
};


export type MutationCreateLiveDashboardArgs = {
  announcement: Scalars['String']['input'];
  channel: Scalars['String']['input'];
  channelClose: Scalars['Boolean']['input'];
  channelQuality: Scalars['String']['input'];
  copyLivesDetailsTags?: InputMaybe<Scalars['String']['input']>;
  copyUsersAppId?: InputMaybe<Scalars['String']['input']>;
  copyUsersUsername?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['String']['input'];
  countryShow: Scalars['String']['input'];
  dateClose?: InputMaybe<Scalars['String']['input']>;
  dateOpen: Scalars['String']['input'];
  imageAvatar: Scalars['String']['input'];
  linkShare: Scalars['String']['input'];
  newFollowers: Scalars['Int']['input'];
  points: Scalars['Float']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  totalTimeLive?: InputMaybe<Scalars['String']['input']>;
  typeLive: TypeLive;
  userId: Scalars['Int']['input'];
  utc: Scalars['String']['input'];
  viewers: Scalars['Int']['input'];
};


export type MutationCreateLiveDetailGuestDashboardArgs = {
  accepted: Scalars['Boolean']['input'];
  audioMuted: Scalars['Boolean']['input'];
  audioOpen: Scalars['Boolean']['input'];
  blocked: Scalars['Boolean']['input'];
  dateJoined?: InputMaybe<Scalars['String']['input']>;
  dateLeaved?: InputMaybe<Scalars['String']['input']>;
  liveId: Scalars['Int']['input'];
  position: Scalars['Int']['input'];
  rejected: Scalars['Boolean']['input'];
  requesting: Scalars['Boolean']['input'];
  totalTime?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  videoOpen: Scalars['Boolean']['input'];
};


export type MutationCreateLiveDetailGuestFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLiveDetailGuestFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLiveDetailPeopleArgs = {
  liveId: Scalars['Int']['input'];
};


export type MutationCreateLiveDetailPeopleDashboardArgs = {
  canJoinSeat: Scalars['Boolean']['input'];
  chatMuted: Scalars['Boolean']['input'];
  inLive: Scalars['Boolean']['input'];
  kicked: Scalars['Boolean']['input'];
  liveId: Scalars['Int']['input'];
  points: Scalars['Float']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateLiveDetailPeopleFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLiveDetailPeopleFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLiveDetailTagArgs = {
  liveId: Scalars['Int']['input'];
  liveTagId: Scalars['Int']['input'];
};


export type MutationCreateLiveDetailTagDashboardArgs = {
  liveId: Scalars['Int']['input'];
  liveTagId: Scalars['Int']['input'];
};


export type MutationCreateLiveDetailTagFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLiveDetailTagFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLiveFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLiveFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLiveFilterArgs = {
  name: Scalars['String']['input'];
  resource: Scalars['String']['input'];
};


export type MutationCreateLiveFilterDashboardArgs = {
  name: Scalars['String']['input'];
  resource: Scalars['String']['input'];
};


export type MutationCreateLiveFilterFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLiveFilterFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLiveReportArgs = {
  dateReport: Scalars['String']['input'];
  image: Scalars['String']['input'];
  liveId: Scalars['Int']['input'];
  liveTypeReportId: Scalars['Int']['input'];
  message: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateLiveReportDashboardArgs = {
  dateReport: Scalars['String']['input'];
  image: Scalars['String']['input'];
  liveId: Scalars['Int']['input'];
  liveTypeReportId: Scalars['Int']['input'];
  message: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateLiveReportFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLiveReportFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLiveResumeArgs = {
  dateLive: Scalars['String']['input'];
  liveId: Scalars['Int']['input'];
  newFollowers: Scalars['Int']['input'];
  points: Scalars['Float']['input'];
  totalTimeLive?: InputMaybe<Scalars['String']['input']>;
  typeLive: TypeLive;
  userId: Scalars['Int']['input'];
  viewers: Scalars['Int']['input'];
};


export type MutationCreateLiveResumeDashboardArgs = {
  dateLive: Scalars['String']['input'];
  liveId: Scalars['Int']['input'];
  newFollowers: Scalars['Int']['input'];
  points: Scalars['Float']['input'];
  totalTimeLive?: InputMaybe<Scalars['String']['input']>;
  typeLive: TypeLive;
  userId: Scalars['Int']['input'];
  viewers: Scalars['Int']['input'];
};


export type MutationCreateLiveResumeFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLiveResumeFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLiveSettingArgs = {
  allowMessagesChat?: InputMaybe<Scalars['Boolean']['input']>;
  allowStrangersInSeat?: InputMaybe<Scalars['Boolean']['input']>;
  liveId?: InputMaybe<Scalars['Int']['input']>;
  messagePinnedChat?: InputMaybe<Scalars['String']['input']>;
  numberSeats?: InputMaybe<Scalars['Int']['input']>;
  roomPassword?: InputMaybe<Scalars['String']['input']>;
  themeBackground?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateLiveSettingDashboardArgs = {
  allowMessagesChat: Scalars['Boolean']['input'];
  allowStrangersInSeat: Scalars['Boolean']['input'];
  liveId: Scalars['Int']['input'];
  messagePinnedChat?: InputMaybe<Scalars['String']['input']>;
  numberSeats: Scalars['Int']['input'];
  roomPassword?: InputMaybe<Scalars['String']['input']>;
  themeBackground?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateLiveSettingFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLiveStickerArgs = {
  name: Scalars['String']['input'];
  resource: Scalars['String']['input'];
};


export type MutationCreateLiveStickerDashboardArgs = {
  name: Scalars['String']['input'];
  resource: Scalars['String']['input'];
};


export type MutationCreateLiveStickerFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLiveStickerFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLiveTagArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateLiveTagDashboardArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateLiveTagFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLiveTagFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLiveTypeReportArgs = {
  level: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateLiveTypeReportDashboardArgs = {
  level: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateLiveTypeReportFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateLiveTypeReportFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreatePaymentAgentArgs = {
  online: Scalars['Boolean']['input'];
  scorePayment: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreatePaymentAgentDashboardArgs = {
  online: Scalars['Boolean']['input'];
  scorePayment: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreatePaymentAgentFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreatePaymentAgentFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreatePaymentAgentPaidArgs = {
  codeWithdrawal: Scalars['String']['input'];
  dateStatus: Scalars['String']['input'];
  dateWithdrawal: Scalars['String']['input'];
  paymentAgentId: Scalars['Int']['input'];
  timeLeft: Scalars['String']['input'];
  typeWithdrawalStatus: TypeWithdrawalStatus;
  valueCurrency: Scalars['Float']['input'];
  valuePointsEarnings: Scalars['Float']['input'];
  valuePointsToPay: Scalars['Float']['input'];
  valuePointsTotal: Scalars['Float']['input'];
  valueUsd: Scalars['Int']['input'];
  withdrawalId: Scalars['Int']['input'];
};


export type MutationCreatePaymentAgentPaidDashboardArgs = {
  codeWithdrawal: Scalars['String']['input'];
  dateStatus: Scalars['String']['input'];
  dateWithdrawal: Scalars['String']['input'];
  paymentAgentId: Scalars['Int']['input'];
  timeLeft: Scalars['String']['input'];
  typeWithdrawalStatus: TypeWithdrawalStatus;
  valueCurrency: Scalars['Float']['input'];
  valuePointsEarnings: Scalars['Float']['input'];
  valuePointsToPay: Scalars['Float']['input'];
  valuePointsTotal: Scalars['Float']['input'];
  valueUsd: Scalars['Int']['input'];
  withdrawalId: Scalars['Int']['input'];
};


export type MutationCreatePaymentAgentPaidFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreatePaymentAgentPaidFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreatePlatformSellerForAgencyArgs = {
  agencyId: Scalars['Int']['input'];
  coins: Scalars['Float']['input'];
};


export type MutationCreatePlatformSellerForAgencyDashboardArgs = {
  agencyId: Scalars['Int']['input'];
  coins: Scalars['Float']['input'];
};


export type MutationCreatePlatformSellerForAgencyFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreatePlatformSellerForAgencyFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreatePlatformSellerForAgencyPriceArgs = {
  coinsPerUsd: Scalars['Float']['input'];
  usdFinal: Scalars['Float']['input'];
  usdInitial: Scalars['Float']['input'];
};


export type MutationCreatePlatformSellerForAgencyPriceDashboardArgs = {
  coinsPerUsd: Scalars['Float']['input'];
  usdFinal: Scalars['Float']['input'];
  usdInitial: Scalars['Float']['input'];
};


export type MutationCreatePlatformSellerForAgencyPriceFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreatePlatformSellerForAgencyPriceFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreatePlatformSellerForAgencyProofArgs = {
  platformSellerForAgencyId: Scalars['Int']['input'];
  proof: Scalars['String']['input'];
};


export type MutationCreatePlatformSellerForAgencyProofDashboardArgs = {
  platformSellerForAgencyId: Scalars['Int']['input'];
  proof: Scalars['String']['input'];
};


export type MutationCreatePlatformSellerForAgencyProofFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreatePlatformSellerForAgencyProofFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreatePlatformSellerForUserArgs = {
  coins: Scalars['Float']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreatePlatformSellerForUserDashboardArgs = {
  coins: Scalars['Float']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreatePlatformSellerForUserFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreatePlatformSellerForUserFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreatePlatformSellerForUserPriceArgs = {
  coinsPerUsd: Scalars['Float']['input'];
  usdFinal: Scalars['Float']['input'];
  usdInitial: Scalars['Float']['input'];
};


export type MutationCreatePlatformSellerForUserPriceDashboardArgs = {
  coinsPerUsd: Scalars['Float']['input'];
  usdFinal: Scalars['Float']['input'];
  usdInitial: Scalars['Float']['input'];
};


export type MutationCreatePlatformSellerForUserPriceFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreatePlatformSellerForUserPriceFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreatePostArgs = {
  content: Scalars['String']['input'];
  photo: Scalars['String']['input'];
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


export type MutationCreatePostCommentArgs = {
  comment: Scalars['String']['input'];
  postId: Scalars['Int']['input'];
};


export type MutationCreatePostCommentDashboardArgs = {
  comment: Scalars['String']['input'];
  date: Scalars['String']['input'];
  postId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreatePostCommentFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreatePostDashboardArgs = {
  content: Scalars['String']['input'];
  date: Scalars['String']['input'];
  photo: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreatePostFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreatePostLikeDashboardArgs = {
  date: Scalars['String']['input'];
  postId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreatePostLikeFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreatePostTagDashboardArgs = {
  postId: Scalars['Int']['input'];
  tagId: Scalars['Int']['input'];
};


export type MutationCreatePostTagFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateTagArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateTagDashboardArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateTagFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateTagFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateTaskTypeHostArgs = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  typeTaskBonus?: InputMaybe<TypeTaskBonus>;
  typeTaskTypeHost?: InputMaybe<TypeTaskTypeHost>;
  value: Scalars['Int']['input'];
};


export type MutationCreateTaskTypeHostDashboardArgs = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  typeTaskBonus?: InputMaybe<TypeTaskBonus>;
  typeTaskTypeHost?: InputMaybe<TypeTaskTypeHost>;
  value: Scalars['Int']['input'];
};


export type MutationCreateTaskTypeHostFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateTaskTypeHostFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateTaskTypeSpectatorArgs = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  typeTaskBonus?: InputMaybe<TypeTaskBonus>;
  typeTaskTypeSpectator?: InputMaybe<TypeTaskTypeSpectator>;
  value: Scalars['Int']['input'];
};


export type MutationCreateTaskTypeSpectatorDashboardArgs = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  typeTaskBonus?: InputMaybe<TypeTaskBonus>;
  typeTaskTypeSpectator?: InputMaybe<TypeTaskTypeSpectator>;
  value: Scalars['Int']['input'];
};


export type MutationCreateTaskTypeSpectatorFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateTaskTypeSpectatorFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateTaskUserHostArgs = {
  completed: Scalars['Boolean']['input'];
  dateTask: Scalars['String']['input'];
  quantityCompleted: Scalars['Int']['input'];
  quantityTask: Scalars['Int']['input'];
  rescued: Scalars['Boolean']['input'];
  taskTypeHostId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateTaskUserHostDashboardArgs = {
  completed: Scalars['Boolean']['input'];
  dateTask: Scalars['String']['input'];
  quantityCompleted: Scalars['Int']['input'];
  quantityTask: Scalars['Int']['input'];
  rescued: Scalars['Boolean']['input'];
  taskTypeHostId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateTaskUserHostFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateTaskUserHostFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateTaskUserSpectatorArgs = {
  completed: Scalars['Boolean']['input'];
  dateTask: Scalars['String']['input'];
  quantityCompleted: Scalars['Int']['input'];
  quantityTask: Scalars['Int']['input'];
  rescued: Scalars['Boolean']['input'];
  taskTypeSpectatorId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateTaskUserSpectatorDashboardArgs = {
  completed: Scalars['Boolean']['input'];
  dateTask: Scalars['String']['input'];
  quantityCompleted: Scalars['Int']['input'];
  quantityTask: Scalars['Int']['input'];
  rescued: Scalars['Boolean']['input'];
  taskTypeSpectatorId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateTaskUserSpectatorFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateTaskUserSpectatorFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserAdministratorProfileArgs = {
  canAcceptOnSeat?: InputMaybe<Scalars['Boolean']['input']>;
  canChangeRoomTheme?: InputMaybe<Scalars['Boolean']['input']>;
  canCloseAllAudio?: InputMaybe<Scalars['Boolean']['input']>;
  canCloseAudio?: InputMaybe<Scalars['Boolean']['input']>;
  canCloseHostAudio?: InputMaybe<Scalars['Boolean']['input']>;
  canCloseVideo?: InputMaybe<Scalars['Boolean']['input']>;
  canMute?: InputMaybe<Scalars['Boolean']['input']>;
  canPlaySongs?: InputMaybe<Scalars['Boolean']['input']>;
  canPreventSeatLive?: InputMaybe<Scalars['Boolean']['input']>;
  canRemoveAllFromSeat?: InputMaybe<Scalars['Boolean']['input']>;
  canRemoveFromLive?: InputMaybe<Scalars['Boolean']['input']>;
  canRemoveFromSeat?: InputMaybe<Scalars['Boolean']['input']>;
  userAdministratorId: Scalars['Int']['input'];
};


export type MutationCreateUserAdministratorProfileActivityArgs = {
  typeActivity: TypeActivity;
  userAdministratorProfileId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserAdministratorProfileActivityDashboardArgs = {
  typeActivity: TypeActivity;
  userAdministratorProfileId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserAdministratorProfileActivityFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserAdministratorProfileActivityFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserAdministratorProfileDashboardArgs = {
  canAcceptOnSeat: Scalars['Boolean']['input'];
  canChangeRoomTheme: Scalars['Boolean']['input'];
  canCloseAllAudio: Scalars['Boolean']['input'];
  canCloseAudio: Scalars['Boolean']['input'];
  canCloseHostAudio: Scalars['Boolean']['input'];
  canCloseVideo: Scalars['Boolean']['input'];
  canMute: Scalars['Boolean']['input'];
  canPlaySongs: Scalars['Boolean']['input'];
  canPreventSeatLive: Scalars['Boolean']['input'];
  canRemoveAllFromSeat: Scalars['Boolean']['input'];
  canRemoveFromLive: Scalars['Boolean']['input'];
  canRemoveFromSeat: Scalars['Boolean']['input'];
  userAdministratorId: Scalars['Int']['input'];
  userHostId: Scalars['Int']['input'];
};


export type MutationCreateUserAdministratorProfileFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserAdministratorProfileFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserAppUidArgs = {
  country: Scalars['String']['input'];
  lastAppUid: Scalars['Int']['input'];
};


export type MutationCreateUserAppUidDashboardArgs = {
  country: Scalars['String']['input'];
  lastAppUid: Scalars['Int']['input'];
};


export type MutationCreateUserAppUidFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserAppUidFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserBadgeArgs = {
  badgeId: Scalars['Int']['input'];
  expiresIn: Scalars['String']['input'];
  inUse: Scalars['Boolean']['input'];
  typeLocaleBadge: TypeLocaleBadge;
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserBadgeDashboardArgs = {
  badgeId: Scalars['Int']['input'];
  expiresIn: Scalars['String']['input'];
  inUse: Scalars['Boolean']['input'];
  typeLocaleBadge: TypeLocaleBadge;
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserBadgeFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserBadgeFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserBalanceBeanDashboardArgs = {
  beansAfter: Scalars['Float']['input'];
  beansBefore: Scalars['Float']['input'];
  dateHourBalance: Scalars['String']['input'];
  description: Scalars['String']['input'];
  typeUserBalanceBeans?: InputMaybe<TypeUserBalanceBeans>;
  userId: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
};


export type MutationCreateUserBalanceBeanFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserBalanceBeansArgs = {
  beansAfter: Scalars['Float']['input'];
  beansBefore: Scalars['Float']['input'];
  dateHourBalance: Scalars['String']['input'];
  description: Scalars['String']['input'];
  typeUserBalanceBeans?: InputMaybe<TypeUserBalanceBeans>;
  userId: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
};


export type MutationCreateUserBalanceBeansFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserBalanceCoinDashboardArgs = {
  coinsAfter: Scalars['Float']['input'];
  coinsBefore: Scalars['Float']['input'];
  dateHourBalance: Scalars['String']['input'];
  description: Scalars['String']['input'];
  typeUserBalanceCoins?: InputMaybe<TypeUserBalanceCoins>;
  userId: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
};


export type MutationCreateUserBalanceCoinFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserBalanceCoinsArgs = {
  coinsAfter: Scalars['Float']['input'];
  coinsBefore: Scalars['Float']['input'];
  dateHourBalance: Scalars['String']['input'];
  description: Scalars['String']['input'];
  typeUserBalanceCoins?: InputMaybe<TypeUserBalanceCoins>;
  userId: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
};


export type MutationCreateUserBalanceCoinsFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserBalancePointDashboardArgs = {
  dateHourBalance: Scalars['String']['input'];
  description: Scalars['String']['input'];
  pointsAfter: Scalars['Float']['input'];
  pointsBefore: Scalars['Float']['input'];
  typeUserBalancePoints?: InputMaybe<TypeUserBalancePoints>;
  userId: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
};


export type MutationCreateUserBalancePointFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserBalancePointsArgs = {
  dateHourBalance: Scalars['String']['input'];
  description: Scalars['String']['input'];
  pointsAfter: Scalars['Float']['input'];
  pointsBefore: Scalars['Float']['input'];
  typeUserBalancePoints?: InputMaybe<TypeUserBalancePoints>;
  userId: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
};


export type MutationCreateUserBalancePointsFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserBannedArgs = {
  banDate: Scalars['String']['input'];
  banExpiryDate: Scalars['String']['input'];
  reasonForBan: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserBannedDashboardArgs = {
  banDate: Scalars['String']['input'];
  banExpiryDate: Scalars['String']['input'];
  reasonForBan: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserBannedDetailArgs = {
  proof: Scalars['String']['input'];
  userBannedId: Scalars['Int']['input'];
};


export type MutationCreateUserBannedDetailDashboardArgs = {
  proof: Scalars['String']['input'];
  userBannedId: Scalars['Int']['input'];
};


export type MutationCreateUserBannedDetailFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserBannedDetailFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserBannedFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserBannedFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserBlockedDashboardArgs = {
  blockedId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserBlockedFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserDashboardArgs = {
  appId: Scalars['String']['input'];
  appleId?: InputMaybe<Scalars['String']['input']>;
  appleToken?: InputMaybe<Scalars['String']['input']>;
  beans: Scalars['Float']['input'];
  biography?: InputMaybe<Scalars['String']['input']>;
  birthday: Scalars['String']['input'];
  coins: Scalars['Float']['input'];
  country: Scalars['String']['input'];
  countryShow: Scalars['String']['input'];
  email: Scalars['String']['input'];
  emailCode: Scalars['String']['input'];
  emailVerified: Scalars['Boolean']['input'];
  fakeUser: Scalars['Boolean']['input'];
  fullname?: InputMaybe<Scalars['String']['input']>;
  gender: Scalars['String']['input'];
  googleId?: InputMaybe<Scalars['String']['input']>;
  invitationCode: Scalars['String']['input'];
  language: Scalars['String']['input'];
  online: Scalars['Boolean']['input'];
  onlineLive: Scalars['Boolean']['input'];
  onlineOtherLive: Scalars['Boolean']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  phoneVerified: Scalars['Boolean']['input'];
  photo: Scalars['String']['input'];
  points: Scalars['Float']['input'];
  processingQueueId: Scalars['Int']['input'];
  region: Scalars['String']['input'];
  smsCode?: InputMaybe<Scalars['String']['input']>;
  twoFactorEnabled: Scalars['Boolean']['input'];
  userNotReturnModTimesLuckSurpriseBox?: InputMaybe<Scalars['String']['input']>;
  userSentReturnTimeLuckCoin: Scalars['String']['input'];
  username: Scalars['String']['input'];
  utc?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateUserDetailArgs = {
  alreadyChangedBirthday: Scalars['Boolean']['input'];
  alreadyChangedCountry: Scalars['Boolean']['input'];
  alreadyChangedSex: Scalars['Boolean']['input'];
  familyId?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserDetailDashboardArgs = {
  alreadyChangedBirthday: Scalars['Boolean']['input'];
  alreadyChangedCountry: Scalars['Boolean']['input'];
  alreadyChangedSex: Scalars['Boolean']['input'];
  familyId?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserDetailFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserDetailFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserDeviceInformationArgs = {
  baseOs?: InputMaybe<Scalars['String']['input']>;
  bootLoader?: InputMaybe<Scalars['String']['input']>;
  brand: Scalars['String']['input'];
  buildNumber: Scalars['String']['input'];
  deviceId: Scalars['String']['input'];
  deviceName: Scalars['String']['input'];
  installationDevice: Scalars['Boolean']['input'];
  ipAddress: Scalars['String']['input'];
  isCameraPresent?: InputMaybe<Scalars['String']['input']>;
  mac: Scalars['String']['input'];
  manufacturer: Scalars['String']['input'];
  networkOperator: Scalars['String']['input'];
  systemVersion: Scalars['String']['input'];
  uniqueId: Scalars['String']['input'];
  userAgent: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserDeviceInformationDashboardArgs = {
  baseOs?: InputMaybe<Scalars['String']['input']>;
  bootLoader?: InputMaybe<Scalars['String']['input']>;
  brand: Scalars['String']['input'];
  buildNumber: Scalars['String']['input'];
  deviceId: Scalars['String']['input'];
  deviceName: Scalars['String']['input'];
  installationDevice: Scalars['Boolean']['input'];
  ipAddress: Scalars['String']['input'];
  isCameraPresent?: InputMaybe<Scalars['String']['input']>;
  mac: Scalars['String']['input'];
  manufacturer: Scalars['String']['input'];
  networkOperator: Scalars['String']['input'];
  systemVersion: Scalars['String']['input'];
  uniqueId: Scalars['String']['input'];
  userAgent: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserDeviceInformationFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserDeviceInformationFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserFollowerDashboardArgs = {
  followerId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserFollowerFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserFollowingDashboardArgs = {
  followingId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserFollowingFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserGiftPackageArgs = {
  giftId: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserGiftPackageDashboardArgs = {
  giftId: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserGiftPackageFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserGiftPackageFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserLevelArgs = {
  levelHostExperience: Scalars['Int']['input'];
  levelHostId: Scalars['Int']['input'];
  levelSpectatorExperience: Scalars['Int']['input'];
  levelSpectatorId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserLevelDashboardArgs = {
  levelHostExperience: Scalars['Int']['input'];
  levelHostId: Scalars['Int']['input'];
  levelSpectatorExperience: Scalars['Int']['input'];
  levelSpectatorId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserLevelFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserLevelFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserLiveSettingArgs = {
  liveId?: InputMaybe<Scalars['Int']['input']>;
  playAllSpecialEffectEntrance?: InputMaybe<Scalars['Boolean']['input']>;
  playAllSpecialEffectGift?: InputMaybe<Scalars['Boolean']['input']>;
  playAllSpecialEffectLuckGift?: InputMaybe<Scalars['Boolean']['input']>;
  playModeRecordGift?: InputMaybe<Scalars['Boolean']['input']>;
  playNotificationGiftSentPushCountry?: InputMaybe<Scalars['Boolean']['input']>;
  playNotificationGiftSentPushLive?: InputMaybe<Scalars['Boolean']['input']>;
  playSoundEffects?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateUserLiveSettingDashboardArgs = {
  liveId: Scalars['Int']['input'];
  playSoundEffects: Scalars['Boolean']['input'];
  playSpecialEffects: Scalars['Boolean']['input'];
  playSpecialEffectsEntrance: Scalars['Boolean']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserLiveSettingFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserLiveSettingFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserNotificationDashboardArgs = {
  receiveEmailNotifications: Scalars['Boolean']['input'];
  receiveEventsNotifications: Scalars['Boolean']['input'];
  receiveGeneralNotifications: Scalars['Boolean']['input'];
  receiveGiftNotifications: Scalars['Boolean']['input'];
  receivePushNotifications: Scalars['Boolean']['input'];
  receiveSmsNotifications: Scalars['Boolean']['input'];
  receiveUsersNotifications: Scalars['Boolean']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserNotificationFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserPhotoDashboardArgs = {
  photo: Scalars['String']['input'];
  position: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserPhotoFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserPrivacyDashboardArgs = {
  invisibleGiftGiver: Scalars['Boolean']['input'];
  invisibleVisitor: Scalars['Boolean']['input'];
  showFollowers: Scalars['Boolean']['input'];
  showFollowing: Scalars['Boolean']['input'];
  showMyGiftGivers: Scalars['Boolean']['input'];
  showRechargeRanking: Scalars['Boolean']['input'];
  showSpectatorRanking: Scalars['Boolean']['input'];
  showStreamerRanking: Scalars['Boolean']['input'];
  showSuperFans: Scalars['Boolean']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserPrivacyFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserProcessingQueueArgs = {
  country: Scalars['String']['input'];
  processingQueueId: Scalars['Int']['input'];
};


export type MutationCreateUserProcessingQueueDashboardArgs = {
  country: Scalars['String']['input'];
  processingQueueId: Scalars['Int']['input'];
};


export type MutationCreateUserProcessingQueueFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserProcessingQueueFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserSuperFanDashboardArgs = {
  superFanId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateUserSuperFanFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserVipArgs = {
  datePurchased: Scalars['String']['input'];
  expiresIn: Scalars['String']['input'];
  platformVipBonus: Scalars['Boolean']['input'];
  points: Scalars['Float']['input'];
  pointsLeft: Scalars['Float']['input'];
  userId: Scalars['Int']['input'];
  vipId: Scalars['Int']['input'];
};


export type MutationCreateUserVipDashboardArgs = {
  datePurchased: Scalars['String']['input'];
  expiresIn: Scalars['String']['input'];
  platformVipBonus: Scalars['Boolean']['input'];
  points: Scalars['Float']['input'];
  pointsLeft: Scalars['Float']['input'];
  userId: Scalars['Int']['input'];
  vipId: Scalars['Int']['input'];
};


export type MutationCreateUserVipFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserVipFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserVisitProfileDashboardArgs = {
  date: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
  visitId: Scalars['Int']['input'];
};


export type MutationCreateUserVisitProfileFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserWarningArgs = {
  userId: Scalars['Int']['input'];
  warningDate: Scalars['String']['input'];
  warningExpiryDate: Scalars['String']['input'];
};


export type MutationCreateUserWarningDashboardArgs = {
  userId: Scalars['Int']['input'];
  warningDate: Scalars['String']['input'];
  warningExpiryDate: Scalars['String']['input'];
};


export type MutationCreateUserWarningDetailArgs = {
  proof: Scalars['String']['input'];
  userWarningId: Scalars['Int']['input'];
};


export type MutationCreateUserWarningDetailDashboardArgs = {
  proof: Scalars['String']['input'];
  userWarningId: Scalars['Int']['input'];
};


export type MutationCreateUserWarningDetailFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserWarningDetailFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserWarningFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateUserWarningFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateVipArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  dateLastActive?: InputMaybe<Scalars['String']['input']>;
  dateLastDelete?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  icon: Scalars['String']['input'];
  name: Scalars['String']['input'];
  points: Scalars['Float']['input'];
  vipLevel: Scalars['Int']['input'];
};


export type MutationCreateVipBenefitArgs = {
  description: Scalars['String']['input'];
  icon: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateVipBenefitDashboardArgs = {
  description: Scalars['String']['input'];
  icon: Scalars['String']['input'];
  name: Scalars['String']['input'];
  typeVipBenefit?: InputMaybe<TypeVipBenefit>;
};


export type MutationCreateVipBenefitDetailArgs = {
  vipBenefitId: Scalars['Int']['input'];
  vipId: Scalars['Int']['input'];
};


export type MutationCreateVipBenefitDetailDashboardArgs = {
  vipBenefitId: Scalars['Int']['input'];
  vipId: Scalars['Int']['input'];
};


export type MutationCreateVipBenefitDetailFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateVipBenefitFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateVipDashboardArgs = {
  icon: Scalars['String']['input'];
  name: Scalars['String']['input'];
  points: Scalars['Float']['input'];
  vipLevel: Scalars['Int']['input'];
};


export type MutationCreateVipFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateWalletCoinSaleArgs = {
  country: Scalars['String']['input'];
  quantityCoins: Scalars['Float']['input'];
  userId: Scalars['Int']['input'];
  valueCurrency: Scalars['Float']['input'];
  valueUsd: Scalars['Int']['input'];
  walletPriceCoinId: Scalars['Int']['input'];
};


export type MutationCreateWalletCoinSaleDashboardArgs = {
  country: Scalars['String']['input'];
  quantityCoins: Scalars['Float']['input'];
  userId: Scalars['Int']['input'];
  valueCurrency: Scalars['Float']['input'];
  valueUsd: Scalars['Int']['input'];
  walletPriceCoinId: Scalars['Int']['input'];
};


export type MutationCreateWalletCoinSaleFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateWalletCoinSaleFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateWalletConvertArgs = {
  quantityCoins: Scalars['Float']['input'];
  quantityPoints: Scalars['Float']['input'];
  userId: Scalars['Int']['input'];
  walletTypeConvertId: Scalars['Int']['input'];
};


export type MutationCreateWalletConvertDashboardArgs = {
  quantityCoins: Scalars['Float']['input'];
  quantityPoints: Scalars['Float']['input'];
  userId: Scalars['Int']['input'];
  walletTypeConvertId: Scalars['Int']['input'];
};


export type MutationCreateWalletConvertFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateWalletConvertFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateWalletPriceCoinArgs = {
  country: Scalars['String']['input'];
  quantityCoins: Scalars['Float']['input'];
  valueCurrency: Scalars['Float']['input'];
  valueUsd: Scalars['Int']['input'];
};


export type MutationCreateWalletPriceCoinDashboardArgs = {
  country: Scalars['String']['input'];
  quantityCoins: Scalars['Float']['input'];
  valueCurrency: Scalars['Float']['input'];
  valueUsd: Scalars['Int']['input'];
};


export type MutationCreateWalletPriceCoinFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateWalletPriceCoinFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateWalletTypeConvertArgs = {
  quantityCoins: Scalars['Float']['input'];
  quantityPoints: Scalars['Float']['input'];
};


export type MutationCreateWalletTypeConvertDashboardArgs = {
  quantityCoins: Scalars['Float']['input'];
  quantityPoints: Scalars['Float']['input'];
};


export type MutationCreateWalletTypeConvertFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateWalletTypeConvertFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateWithdrawalArgs = {
  codeWithdrawal: Scalars['String']['input'];
  dateWithdrawal: Scalars['String']['input'];
  paymentAgentId: Scalars['Int']['input'];
  typeWithdrawalStatus: TypeWithdrawalStatus;
  userId: Scalars['Int']['input'];
  valueCurrency: Scalars['Float']['input'];
  valuePoints: Scalars['Float']['input'];
  valueUsd: Scalars['Float']['input'];
  withdrawalMethodDataUserId: Scalars['Int']['input'];
};


export type MutationCreateWithdrawalDashboardArgs = {
  codeWithdrawal: Scalars['String']['input'];
  dateWithdrawal: Scalars['String']['input'];
  paymentAgentId: Scalars['Int']['input'];
  typeWithdrawalStatus: TypeWithdrawalStatus;
  userId: Scalars['Int']['input'];
  valueCurrency: Scalars['Float']['input'];
  valuePoints: Scalars['Float']['input'];
  valueUsd: Scalars['Float']['input'];
  withdrawalMethodDataUserId: Scalars['Int']['input'];
};


export type MutationCreateWithdrawalFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateWithdrawalFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateWithdrawalMethodArgs = {
  country: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  taxPercentPayment: Scalars['Int']['input'];
  timePayment: Scalars['String']['input'];
  typeWithdrawalMethodTypePayment?: InputMaybe<TypeWithdrawalMethodTypePayment>;
};


export type MutationCreateWithdrawalMethodDashboardArgs = {
  country: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  taxPercentPayment: Scalars['Int']['input'];
  timePayment: Scalars['String']['input'];
  typeWithdrawalMethodTypePayment?: InputMaybe<TypeWithdrawalMethodTypePayment>;
};


export type MutationCreateWithdrawalMethodDataUserArgs = {
  bankAccountNumber: Scalars['String']['input'];
  bankAgencyNumber: Scalars['String']['input'];
  bankDocument: Scalars['String']['input'];
  bankName: Scalars['String']['input'];
  bankNumber: Scalars['String']['input'];
  binanceKey: Scalars['String']['input'];
  binding: Scalars['Boolean']['input'];
  bindingDate: Scalars['String']['input'];
  paypalEmail: Scalars['String']['input'];
  pixKey: Scalars['String']['input'];
  pixName: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCreateWithdrawalMethodDataUserDashboardArgs = {
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankAgencyNumber?: InputMaybe<Scalars['String']['input']>;
  bankDocument?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  bankNumber?: InputMaybe<Scalars['String']['input']>;
  binanceKey?: InputMaybe<Scalars['String']['input']>;
  binding: Scalars['Boolean']['input'];
  bindingDate: Scalars['String']['input'];
  paypalEmail?: InputMaybe<Scalars['String']['input']>;
  pixKey?: InputMaybe<Scalars['String']['input']>;
  pixName?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['Int']['input'];
  withdrawalMethodId: Scalars['Int']['input'];
};


export type MutationCreateWithdrawalMethodDataUserFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateWithdrawalMethodDataUserFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateWithdrawalMethodFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateWithdrawalMethodFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateWithdrawalProofArgs = {
  image: Scalars['String']['input'];
  withdrawalId: Scalars['Int']['input'];
};


export type MutationCreateWithdrawalProofDashboardArgs = {
  image: Scalars['String']['input'];
  withdrawalId: Scalars['Int']['input'];
};


export type MutationCreateWithdrawalProofFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateWithdrawalProofFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateWithdrawalTypeRefusedArgs = {
  description: Scalars['String']['input'];
};


export type MutationCreateWithdrawalTypeRefusedDashboardArgs = {
  description: Scalars['String']['input'];
  withdrawalMethodId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateWithdrawalTypeRefusedFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationCreateWithdrawalTypeRefusedFakeDashboardArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationDeleteAccessAdministratorDashboardArgs = {
  accessAdministratorId: Scalars['Int']['input'];
  deleted: Scalars['Boolean']['input'];
};


export type MutationDeleteAccessPartnerDashboardArgs = {
  accessPartnerId: Scalars['Int']['input'];
  deleted: Scalars['Boolean']['input'];
};


export type MutationDeleteAgencyArgs = {
  agencyId: Scalars['Int']['input'];
  deleted: Scalars['Boolean']['input'];
  userOwnerId: Scalars['Int']['input'];
};


export type MutationDeleteAgencyDashboardArgs = {
  agencyId: Scalars['Int']['input'];
  deleted: Scalars['Boolean']['input'];
  userOwnerAppId: Scalars['Int']['input'];
};


export type MutationDeleteAgencyUserArgs = {
  agencyUserId: Scalars['Int']['input'];
  deleted: Scalars['Boolean']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationDeleteAgencyUserDashboardArgs = {
  agencyUserId: Scalars['Int']['input'];
  deleted: Scalars['Boolean']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationDeleteBadgeArgs = {
  badgeId: Scalars['Int']['input'];
  deleted: Scalars['Boolean']['input'];
};


export type MutationDeleteBadgeDashboardArgs = {
  badgeId: Scalars['Int']['input'];
  deleted: Scalars['Boolean']['input'];
};


export type MutationDeleteBannerLinkArgs = {
  bannerLinkId: Scalars['Int']['input'];
  deleted: Scalars['Boolean']['input'];
};


export type MutationDeleteBannerLinkDashboardArgs = {
  bannerLinkId: Scalars['Int']['input'];
  deleted: Scalars['Boolean']['input'];
};


export type MutationDeleteChatArgs = {
  chatId: Scalars['Int']['input'];
  deleted: Scalars['Boolean']['input'];
  userTwoId: Scalars['Int']['input'];
};


export type MutationDeleteChatDetailArgs = {
  chatDetailId: Scalars['Int']['input'];
  deleted: Scalars['Boolean']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationDeleteCountryCodeArgs = {
  countryCodeId: Scalars['Int']['input'];
  deleted: Scalars['Boolean']['input'];
};


export type MutationDeleteCountryCodeDashboardArgs = {
  countryCodeId: Scalars['Int']['input'];
  deleted: Scalars['Boolean']['input'];
};


export type MutationDeleteDomainDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  domainId: Scalars['Int']['input'];
};


export type MutationDeleteExampleOtherOneDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  exampleOtherOneId: Scalars['Int']['input'];
};


export type MutationDeleteExampleOtherTwoDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  exampleOtherTwoId: Scalars['Int']['input'];
};


export type MutationDeleteExampleTableDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  exampleTableId: Scalars['Int']['input'];
};


export type MutationDeleteFamilyArgs = {
  deleted: Scalars['Boolean']['input'];
  familyId: Scalars['Int']['input'];
};


export type MutationDeleteFamilyDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  familyId: Scalars['Int']['input'];
  ownerUserId: Scalars['Int']['input'];
};


export type MutationDeleteFamilyForceArgs = {
  deleted: Scalars['Boolean']['input'];
  familyForceId: Scalars['Int']['input'];
};


export type MutationDeleteFamilyForceBenefitArgs = {
  deleted: Scalars['Boolean']['input'];
  familyForceBenefitId: Scalars['Int']['input'];
};


export type MutationDeleteFamilyForceBenefitDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  familyForceBenefitId: Scalars['Int']['input'];
};


export type MutationDeleteFamilyForceBenefitDetailArgs = {
  deleted: Scalars['Boolean']['input'];
  familyForceBenefitDetailId: Scalars['Int']['input'];
};


export type MutationDeleteFamilyForceBenefitDetailDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  familyForceBenefitDetailId: Scalars['Int']['input'];
};


export type MutationDeleteFamilyForceDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  familyForceId: Scalars['Int']['input'];
};


export type MutationDeleteFamilyTaskTypeArgs = {
  deleted: Scalars['Boolean']['input'];
  familyTaskTypeId: Scalars['Int']['input'];
};


export type MutationDeleteFamilyTaskTypeDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  familyTaskTypeId: Scalars['Int']['input'];
};


export type MutationDeleteFamilyTaskTypeHardArgs = {
  deleted: Scalars['Boolean']['input'];
  familyTaskTypeHardId: Scalars['Int']['input'];
};


export type MutationDeleteFamilyTaskTypeHardDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  familyTaskTypeHardId: Scalars['Int']['input'];
};


export type MutationDeleteFamilyTaskTypeProgressArgs = {
  deleted: Scalars['Boolean']['input'];
  familyTaskTypeProgressId: Scalars['Int']['input'];
};


export type MutationDeleteFamilyTaskTypeProgressDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  familyTaskTypeProgressId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAccessAdministratorDashboardArgs = {
  accessAdministratorId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAccessPartnerDashboardArgs = {
  accessPartnerId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAgencyArgs = {
  agencyId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAgencyBalancePointDashboardArgs = {
  agencyBalancePointId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAgencyBannedArgs = {
  agencyBannedId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAgencyBannedDashboardArgs = {
  agencyBannedId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAgencyBannedDetailArgs = {
  agencyBannedDetailId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAgencyBannedDetailDashboardArgs = {
  agencyBannedDetailId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAgencyDashboardArgs = {
  agencyId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAgencyResellerBalanceCoinDashboardArgs = {
  agencyResellerBalanceCoinId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAgencySaleDetailArgs = {
  agencySaleDetailId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAgencySaleDetailDashboardArgs = {
  agencySaleDetailId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAgencyUserArgs = {
  agencyUserId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAgencyUserDashboardArgs = {
  agencyUserId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAgencyWarningArgs = {
  agencyWarningId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAgencyWarningDashboardArgs = {
  agencyWarningId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAgencyWarningDetailArgs = {
  agencyWarningDetailId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAgencyWarningDetailDashboardArgs = {
  agencyWarningDetailId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAppLogArgs = {
  appLogId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAppLogDashboardArgs = {
  appLogId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAppSettingArgs = {
  appSettingId: Scalars['Int']['input'];
};


export type MutationDeleteForeverAppSettingDashboardArgs = {
  appSettingId: Scalars['Int']['input'];
};


export type MutationDeleteForeverBadgeArgs = {
  badgeId: Scalars['Int']['input'];
};


export type MutationDeleteForeverBadgeDashboardArgs = {
  badgeId: Scalars['Int']['input'];
};


export type MutationDeleteForeverBannerLinkArgs = {
  bannerLinkId: Scalars['Int']['input'];
};


export type MutationDeleteForeverBannerLinkDashboardArgs = {
  bannerLinkId: Scalars['Int']['input'];
};


export type MutationDeleteForeverChatArgs = {
  chatId: Scalars['Int']['input'];
};


export type MutationDeleteForeverChatDetailArgs = {
  chatDetailId: Scalars['Int']['input'];
};


export type MutationDeleteForeverCountryCodeArgs = {
  countryCodeId: Scalars['Int']['input'];
};


export type MutationDeleteForeverCountryCodeDashboardArgs = {
  countryCodeId: Scalars['Int']['input'];
};


export type MutationDeleteForeverDomainDashboardArgs = {
  domainId: Scalars['Int']['input'];
};


export type MutationDeleteForeverEventArgs = {
  eventId: Scalars['Int']['input'];
};


export type MutationDeleteForeverEventDashboardArgs = {
  eventId: Scalars['Int']['input'];
};


export type MutationDeleteForeverExampleOtherOneDashboardArgs = {
  exampleOtherOneId: Scalars['Int']['input'];
};


export type MutationDeleteForeverExampleOtherTwoDashboardArgs = {
  exampleOtherTwoId: Scalars['Int']['input'];
};


export type MutationDeleteForeverExampleTableDashboardArgs = {
  exampleTableId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyArgs = {
  familyId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyDashboardArgs = {
  familyId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyForceArgs = {
  familyForceId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyForceBenefitArgs = {
  familyForceBenefitId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyForceBenefitDashboardArgs = {
  familyForceBenefitId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyForceBenefitDetailArgs = {
  familyForceBenefitDetailId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyForceBenefitDetailDashboardArgs = {
  familyForceBenefitDetailId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyForceDashboardArgs = {
  familyForceId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyMemberArgs = {
  familyMemberId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyMemberDashboardArgs = {
  familyMemberId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyTaskMemberArgs = {
  familyTaskMemberId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyTaskMemberDashboardArgs = {
  familyTaskMemberId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyTaskMemberHardArgs = {
  familyTaskMemberHardId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyTaskMemberHardDashboardArgs = {
  familyTaskMemberHardId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyTaskProgressArgs = {
  familyTaskProgressId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyTaskProgressDashboardArgs = {
  familyTaskProgressId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyTaskProgressReceivedArgs = {
  familyTaskProgressReceivedId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyTaskProgressReceivedDashboardArgs = {
  familyTaskProgressReceivedId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyTaskTypeArgs = {
  familyTaskTypeId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyTaskTypeDashboardArgs = {
  familyTaskTypeId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyTaskTypeHardArgs = {
  familyTaskTypeHardId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyTaskTypeHardDashboardArgs = {
  familyTaskTypeHardId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyTaskTypeProgressArgs = {
  familyTaskTypeProgressId: Scalars['Int']['input'];
};


export type MutationDeleteForeverFamilyTaskTypeProgressDashboardArgs = {
  familyTaskTypeProgressId: Scalars['Int']['input'];
};


export type MutationDeleteForeverGameConfigurationDefaultEarningArgs = {
  gameConfigurationDefaultEarningId: Scalars['Int']['input'];
};


export type MutationDeleteForeverGameConfigurationDefaultEarningDashboardArgs = {
  gameConfigurationDefaultEarningId: Scalars['Int']['input'];
};


export type MutationDeleteForeverGameConfigurationLuckCoinArgs = {
  gameConfigurationLuckCoinId: Scalars['Int']['input'];
};


export type MutationDeleteForeverGameConfigurationLuckCoinDashboardArgs = {
  gameConfigurationLuckCoinId: Scalars['Int']['input'];
};


export type MutationDeleteForeverGameConfigurationSurpriseBoxArgs = {
  gameConfigurationSurpriseBoxId: Scalars['Int']['input'];
};


export type MutationDeleteForeverGameConfigurationSurpriseBoxDashboardArgs = {
  gameConfigurationSurpriseBoxId: Scalars['Int']['input'];
};


export type MutationDeleteForeverGameLuckSurpriseBoxArgs = {
  gameLuckSurpriseBoxId: Scalars['Int']['input'];
};


export type MutationDeleteForeverGameLuckSurpriseBoxDashboardArgs = {
  gameLuckSurpriseBoxId: Scalars['Int']['input'];
};


export type MutationDeleteForeverGiftArgs = {
  giftId: Scalars['Int']['input'];
};


export type MutationDeleteForeverGiftDashboardArgs = {
  giftId: Scalars['Int']['input'];
};


export type MutationDeleteForeverGiftEventArgs = {
  giftEventId: Scalars['Int']['input'];
};


export type MutationDeleteForeverGiftEventDashboardArgs = {
  giftEventId: Scalars['Int']['input'];
};


export type MutationDeleteForeverGiftSentArgs = {
  giftSentId: Scalars['Int']['input'];
};


export type MutationDeleteForeverGiftSentDashboardArgs = {
  giftSentId: Scalars['Int']['input'];
};


export type MutationDeleteForeverGiftTypeArgs = {
  giftTypeId: Scalars['Int']['input'];
};


export type MutationDeleteForeverGiftTypeDashboardArgs = {
  giftTypeId: Scalars['Int']['input'];
};


export type MutationDeleteForeverInvitationArgs = {
  invitationId: Scalars['Int']['input'];
};


export type MutationDeleteForeverInvitationDashboardArgs = {
  invitationId: Scalars['Int']['input'];
};


export type MutationDeleteForeverInvitationRewardArgs = {
  invitationRewardId: Scalars['Int']['input'];
};


export type MutationDeleteForeverInvitationRewardDashboardArgs = {
  invitationRewardId: Scalars['Int']['input'];
};


export type MutationDeleteForeverItemArgs = {
  itemId: Scalars['Int']['input'];
};


export type MutationDeleteForeverItemDashboardArgs = {
  itemId: Scalars['Int']['input'];
};


export type MutationDeleteForeverItemPurchasedArgs = {
  itemPurchasedId: Scalars['Int']['input'];
};


export type MutationDeleteForeverItemPurchasedDashboardArgs = {
  itemPurchasedId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLevelHostArgs = {
  levelHostId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLevelHostDashboardArgs = {
  levelHostId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLevelSpectatorArgs = {
  levelSpectatorId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLevelSpectatorDashboardArgs = {
  levelSpectatorId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLiveArgs = {
  liveId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLiveDashboardArgs = {
  liveId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLiveDetailGuestDashboardArgs = {
  liveDetailGuestId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLiveDetailPeopleArgs = {
  liveDetailPeopleId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLiveDetailPeopleDashboardArgs = {
  liveDetailPeopleId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLiveDetailTagArgs = {
  liveDetailTagId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLiveDetailTagDashboardArgs = {
  liveDetailTagId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLiveFilterArgs = {
  liveFilterId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLiveFilterDashboardArgs = {
  liveFilterId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLiveReportArgs = {
  liveReportId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLiveReportDashboardArgs = {
  liveReportId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLiveResumeArgs = {
  liveResumeId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLiveResumeDashboardArgs = {
  liveResumeId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLiveSettingDashboardArgs = {
  liveSettingId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLiveStickerArgs = {
  liveStickerId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLiveStickerDashboardArgs = {
  liveStickerId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLiveTagArgs = {
  liveTagId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLiveTagDashboardArgs = {
  liveTagId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLiveTypeReportArgs = {
  liveTypeReportId: Scalars['Int']['input'];
};


export type MutationDeleteForeverLiveTypeReportDashboardArgs = {
  liveTypeReportId: Scalars['Int']['input'];
};


export type MutationDeleteForeverPaymentAgentArgs = {
  paymentAgentId: Scalars['Int']['input'];
};


export type MutationDeleteForeverPaymentAgentDashboardArgs = {
  paymentAgentId: Scalars['Int']['input'];
};


export type MutationDeleteForeverPaymentAgentPaidArgs = {
  paymentAgentPaidId: Scalars['Int']['input'];
};


export type MutationDeleteForeverPaymentAgentPaidDashboardArgs = {
  paymentAgentPaidId: Scalars['Int']['input'];
};


export type MutationDeleteForeverPlatformSellerForAgencyArgs = {
  platformSellerForAgencyId: Scalars['Int']['input'];
};


export type MutationDeleteForeverPlatformSellerForAgencyDashboardArgs = {
  platformSellerForAgencyId: Scalars['Int']['input'];
};


export type MutationDeleteForeverPlatformSellerForAgencyPriceArgs = {
  platformSellerForAgencyPriceId: Scalars['Int']['input'];
};


export type MutationDeleteForeverPlatformSellerForAgencyPriceDashboardArgs = {
  platformSellerForAgencyPriceId: Scalars['Int']['input'];
};


export type MutationDeleteForeverPlatformSellerForAgencyProofArgs = {
  platformSellerForAgencyProofId: Scalars['Int']['input'];
};


export type MutationDeleteForeverPlatformSellerForAgencyProofDashboardArgs = {
  platformSellerForAgencyProofId: Scalars['Int']['input'];
};


export type MutationDeleteForeverPlatformSellerForUserArgs = {
  platformSellerForUserId: Scalars['Int']['input'];
};


export type MutationDeleteForeverPlatformSellerForUserDashboardArgs = {
  platformSellerForUserId: Scalars['Int']['input'];
};


export type MutationDeleteForeverPlatformSellerForUserPriceArgs = {
  platformSellerForUserPriceId: Scalars['Int']['input'];
};


export type MutationDeleteForeverPlatformSellerForUserPriceDashboardArgs = {
  platformSellerForUserPriceId: Scalars['Int']['input'];
};


export type MutationDeleteForeverPostCommentDashboardArgs = {
  postCommentId: Scalars['Int']['input'];
};


export type MutationDeleteForeverPostDashboardArgs = {
  postId: Scalars['Int']['input'];
};


export type MutationDeleteForeverPostLikeDashboardArgs = {
  postLikeId: Scalars['Int']['input'];
};


export type MutationDeleteForeverPostTagDashboardArgs = {
  postTagId: Scalars['Int']['input'];
};


export type MutationDeleteForeverTagArgs = {
  tagId: Scalars['Int']['input'];
};


export type MutationDeleteForeverTagDashboardArgs = {
  tagId: Scalars['Int']['input'];
};


export type MutationDeleteForeverTaskTypeHostArgs = {
  taskTypeHostId: Scalars['Int']['input'];
};


export type MutationDeleteForeverTaskTypeHostDashboardArgs = {
  taskTypeHostId: Scalars['Int']['input'];
};


export type MutationDeleteForeverTaskTypeSpectatorArgs = {
  taskTypeSpectatorId: Scalars['Int']['input'];
};


export type MutationDeleteForeverTaskTypeSpectatorDashboardArgs = {
  taskTypeSpectatorId: Scalars['Int']['input'];
};


export type MutationDeleteForeverTaskUserHostArgs = {
  taskUserHostId: Scalars['Int']['input'];
};


export type MutationDeleteForeverTaskUserHostDashboardArgs = {
  taskUserHostId: Scalars['Int']['input'];
};


export type MutationDeleteForeverTaskUserSpectatorArgs = {
  taskUserSpectatorId: Scalars['Int']['input'];
};


export type MutationDeleteForeverTaskUserSpectatorDashboardArgs = {
  taskUserSpectatorId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserAdministratorProfileArgs = {
  userAdministratorProfileId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserAdministratorProfileActivityArgs = {
  userAdministratorProfileActivityId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserAdministratorProfileActivityDashboardArgs = {
  userAdministratorProfileActivityId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserAdministratorProfileDashboardArgs = {
  userAdministratorProfileId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserAppUidArgs = {
  userAppUidId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserAppUidDashboardArgs = {
  userAppUidId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserBadgeArgs = {
  userBadgeId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserBadgeDashboardArgs = {
  userBadgeId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserBalanceBeanDashboardArgs = {
  userBalanceBeanId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserBalanceBeansArgs = {
  userBalanceBeansId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserBalanceCoinDashboardArgs = {
  userBalanceCoinId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserBalanceCoinsArgs = {
  userBalanceCoinsId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserBalancePointDashboardArgs = {
  userBalancePointId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserBalancePointsArgs = {
  userBalancePointsId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserBannedArgs = {
  userBannedId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserBannedDashboardArgs = {
  userBannedId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserBannedDetailArgs = {
  userBannedDetailId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserBannedDetailDashboardArgs = {
  userBannedDetailId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserBlockedDashboardArgs = {
  userBlockedId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserDashboardArgs = {
  userId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserDetailArgs = {
  userDetailId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserDetailDashboardArgs = {
  userDetailId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserDeviceInformationArgs = {
  userDeviceInformationId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserDeviceInformationDashboardArgs = {
  userDeviceInformationId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserFollowerDashboardArgs = {
  userFollowerId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserFollowingDashboardArgs = {
  userFollowingId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserGiftPackageArgs = {
  userGiftPackageId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserGiftPackageDashboardArgs = {
  userGiftPackageId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserLevelArgs = {
  userLevelId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserLevelDashboardArgs = {
  userLevelId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserLiveSettingDashboardArgs = {
  userLiveSettingId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserNotificationDashboardArgs = {
  userNotificationId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserPhotoDashboardArgs = {
  userPhotoId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserPrivacyDashboardArgs = {
  userPrivacyId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserProcessingQueueArgs = {
  userProcessingQueueId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserProcessingQueueDashboardArgs = {
  userProcessingQueueId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserSuperFanDashboardArgs = {
  userSuperFanId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserVipArgs = {
  userVipId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserVipDashboardArgs = {
  userVipId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserVisitProfileDashboardArgs = {
  userVisitProfileId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserWarningArgs = {
  userWarningId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserWarningDashboardArgs = {
  userWarningId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserWarningDetailArgs = {
  userWarningDetailId: Scalars['Int']['input'];
};


export type MutationDeleteForeverUserWarningDetailDashboardArgs = {
  userWarningDetailId: Scalars['Int']['input'];
};


export type MutationDeleteForeverVipArgs = {
  vipId: Scalars['Int']['input'];
};


export type MutationDeleteForeverVipBenefitDashboardArgs = {
  vipBenefitId: Scalars['Int']['input'];
};


export type MutationDeleteForeverVipBenefitDetailDashboardArgs = {
  vipBenefitDetailId: Scalars['Int']['input'];
};


export type MutationDeleteForeverVipDashboardArgs = {
  vipId: Scalars['Int']['input'];
};


export type MutationDeleteForeverWalletCoinSaleArgs = {
  walletCoinSaleId: Scalars['Int']['input'];
};


export type MutationDeleteForeverWalletCoinSaleDashboardArgs = {
  walletCoinSaleId: Scalars['Int']['input'];
};


export type MutationDeleteForeverWalletConvertArgs = {
  walletConvertId: Scalars['Int']['input'];
};


export type MutationDeleteForeverWalletConvertDashboardArgs = {
  walletConvertId: Scalars['Int']['input'];
};


export type MutationDeleteForeverWalletPriceCoinArgs = {
  walletPriceCoinId: Scalars['Int']['input'];
};


export type MutationDeleteForeverWalletPriceCoinDashboardArgs = {
  walletPriceCoinId: Scalars['Int']['input'];
};


export type MutationDeleteForeverWalletTypeConvertArgs = {
  walletTypeConvertId: Scalars['Int']['input'];
};


export type MutationDeleteForeverWalletTypeConvertDashboardArgs = {
  walletTypeConvertId: Scalars['Int']['input'];
};


export type MutationDeleteForeverWithdrawalArgs = {
  withdrawalId: Scalars['Int']['input'];
};


export type MutationDeleteForeverWithdrawalDashboardArgs = {
  withdrawalId: Scalars['Int']['input'];
};


export type MutationDeleteForeverWithdrawalMethodArgs = {
  withdrawalMethodId: Scalars['Int']['input'];
};


export type MutationDeleteForeverWithdrawalMethodDashboardArgs = {
  withdrawalMethodId: Scalars['Int']['input'];
};


export type MutationDeleteForeverWithdrawalMethodDataUserArgs = {
  withdrawalMethodDataUserId: Scalars['Int']['input'];
};


export type MutationDeleteForeverWithdrawalMethodDataUserDashboardArgs = {
  withdrawalMethodDataUserId: Scalars['Int']['input'];
};


export type MutationDeleteForeverWithdrawalProofArgs = {
  withdrawalProofId: Scalars['Int']['input'];
};


export type MutationDeleteForeverWithdrawalProofDashboardArgs = {
  withdrawalProofId: Scalars['Int']['input'];
};


export type MutationDeleteForeverWithdrawalTypeRefusedArgs = {
  withdrawalTypeRefusedId: Scalars['Int']['input'];
};


export type MutationDeleteForeverWithdrawalTypeRefusedDashboardArgs = {
  withdrawalTypeRefusedId: Scalars['Int']['input'];
};


export type MutationDeleteGameConfigurationDefaultEarningArgs = {
  deleted: Scalars['Boolean']['input'];
  gameConfigurationDefaultEarningId: Scalars['Int']['input'];
};


export type MutationDeleteGameConfigurationDefaultEarningDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  gameConfigurationDefaultEarningId: Scalars['Int']['input'];
};


export type MutationDeleteGameConfigurationLuckCoinArgs = {
  deleted: Scalars['Boolean']['input'];
  gameConfigurationLuckCoinId: Scalars['Int']['input'];
};


export type MutationDeleteGameConfigurationLuckCoinDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  gameConfigurationLuckCoinId: Scalars['Int']['input'];
};


export type MutationDeleteGameConfigurationSurpriseBoxArgs = {
  deleted: Scalars['Boolean']['input'];
  gameConfigurationSurpriseBoxId: Scalars['Int']['input'];
};


export type MutationDeleteGameConfigurationSurpriseBoxDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  gameConfigurationSurpriseBoxId: Scalars['Int']['input'];
};


export type MutationDeleteGiftArgs = {
  deleted: Scalars['Boolean']['input'];
  giftId: Scalars['Int']['input'];
};


export type MutationDeleteGiftDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  giftId: Scalars['Int']['input'];
};


export type MutationDeleteGiftEventArgs = {
  deleted: Scalars['Boolean']['input'];
  giftEventId: Scalars['Int']['input'];
};


export type MutationDeleteGiftEventDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  giftEventId: Scalars['Int']['input'];
};


export type MutationDeleteGiftTypeArgs = {
  deleted: Scalars['Boolean']['input'];
  giftTypeId: Scalars['Int']['input'];
};


export type MutationDeleteGiftTypeDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  giftTypeId: Scalars['Int']['input'];
};


export type MutationDeleteItemArgs = {
  deleted: Scalars['Boolean']['input'];
  itemId: Scalars['Int']['input'];
};


export type MutationDeleteItemDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  itemId: Scalars['Int']['input'];
};


export type MutationDeleteLevelHostArgs = {
  deleted: Scalars['Boolean']['input'];
  levelHostId: Scalars['Int']['input'];
};


export type MutationDeleteLevelHostDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  levelHostId: Scalars['Int']['input'];
};


export type MutationDeleteLevelSpectatorArgs = {
  deleted: Scalars['Boolean']['input'];
  levelSpectatorId: Scalars['Int']['input'];
};


export type MutationDeleteLevelSpectatorDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  levelSpectatorId: Scalars['Int']['input'];
};


export type MutationDeleteLiveDetailPeoplePointsArgs = {
  liveId: Scalars['Int']['input'];
};


export type MutationDeleteLiveFilterArgs = {
  deleted: Scalars['Boolean']['input'];
  liveFilterId: Scalars['Int']['input'];
};


export type MutationDeleteLiveFilterDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  liveFilterId: Scalars['Int']['input'];
};


export type MutationDeleteLiveStickerArgs = {
  deleted: Scalars['Boolean']['input'];
  liveStickerId: Scalars['Int']['input'];
};


export type MutationDeleteLiveStickerDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  liveStickerId: Scalars['Int']['input'];
};


export type MutationDeleteLiveTagArgs = {
  deleted: Scalars['Boolean']['input'];
  liveTagId: Scalars['Int']['input'];
};


export type MutationDeleteLiveTagDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  liveTagId: Scalars['Int']['input'];
};


export type MutationDeleteLiveTypeReportArgs = {
  deleted: Scalars['Boolean']['input'];
  liveTypeReportId: Scalars['Int']['input'];
};


export type MutationDeleteLiveTypeReportDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  liveTypeReportId: Scalars['Int']['input'];
};


export type MutationDeleteMessageArgs = {
  chatId: Scalars['Int']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  userId: Scalars['Int']['input'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['Int']['input'];
};


export type MutationDeletePostCommentArgs = {
  postCommentId: Scalars['Int']['input'];
  postId: Scalars['Int']['input'];
};


export type MutationDeletePostDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  postId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationDeleteTagArgs = {
  deleted: Scalars['Boolean']['input'];
  tagId: Scalars['Int']['input'];
};


export type MutationDeleteTagDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  tagId: Scalars['Int']['input'];
};


export type MutationDeleteTaskTypeHostArgs = {
  deleted: Scalars['Boolean']['input'];
  taskTypeHostId: Scalars['Int']['input'];
};


export type MutationDeleteTaskTypeHostDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  taskTypeHostId: Scalars['Int']['input'];
};


export type MutationDeleteTaskTypeSpectatorArgs = {
  deleted: Scalars['Boolean']['input'];
  taskTypeSpectatorId: Scalars['Int']['input'];
};


export type MutationDeleteTaskTypeSpectatorDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  taskTypeSpectatorId: Scalars['Int']['input'];
};


export type MutationDeleteVipArgs = {
  deleted: Scalars['Boolean']['input'];
  vipId: Scalars['Int']['input'];
};


export type MutationDeleteVipBenefitDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  vipBenefitId: Scalars['Int']['input'];
};


export type MutationDeleteVipBenefitDetailDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  vipBenefitDetailId: Scalars['Int']['input'];
};


export type MutationDeleteVipDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  vipId: Scalars['Int']['input'];
};


export type MutationDeleteWalletPriceCoinArgs = {
  deleted: Scalars['Boolean']['input'];
  walletPriceCoinId: Scalars['Int']['input'];
};


export type MutationDeleteWalletPriceCoinDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  walletPriceCoinId: Scalars['Int']['input'];
};


export type MutationDeleteWalletTypeConvertArgs = {
  deleted: Scalars['Boolean']['input'];
  walletTypeConvertId: Scalars['Int']['input'];
};


export type MutationDeleteWalletTypeConvertDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  walletTypeConvertId: Scalars['Int']['input'];
};


export type MutationDeleteWithdrawalMethodArgs = {
  deleted: Scalars['Boolean']['input'];
  withdrawalMethodId: Scalars['Int']['input'];
};


export type MutationDeleteWithdrawalMethodDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  withdrawalMethodId: Scalars['Int']['input'];
};


export type MutationDeleteWithdrawalTypeRefusedArgs = {
  deleted: Scalars['Boolean']['input'];
  withdrawalTypeRefusedId: Scalars['Int']['input'];
};


export type MutationDeleteWithdrawalTypeRefusedDashboardArgs = {
  deleted: Scalars['Boolean']['input'];
  withdrawalTypeRefusedId: Scalars['Int']['input'];
};


export type MutationDislikePostArgs = {
  postId: Scalars['Int']['input'];
};


export type MutationEnterFamilyArgs = {
  familyId: Scalars['Int']['input'];
};


export type MutationExitSeatArgs = {
  liveId: Scalars['Int']['input'];
};


export type MutationFollowArgs = {
  targetId: Scalars['Int']['input'];
};


export type MutationIncrementNewFollowersLiveArgs = {
  liveId: Scalars['Int']['input'];
};


export type MutationJoinLiveSeatArgs = {
  liveId: Scalars['Int']['input'];
  position: Scalars['Int']['input'];
};


export type MutationLeaveFamilyArgs = {
  familyId: Scalars['Int']['input'];
};


export type MutationLikePostArgs = {
  postId: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationLoginAppleArgs = {
  appleId: Scalars['String']['input'];
  appleToken: Scalars['String']['input'];
  email: Scalars['String']['input'];
};


export type MutationLoginGoogleArgs = {
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  googleId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLoginPartnerDashboardArgs = {
  country: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationLoginPhoneArgs = {
  country: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationMuteUserAudioArgs = {
  audioMuted: Scalars['Boolean']['input'];
  liveId: Scalars['Int']['input'];
  position: Scalars['Int']['input'];
};


export type MutationNotifyGiftSentInfoArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<OptionsInput>;
};


export type MutationNotifyGiftSentQuantityInfoArgs = {
  liveId?: InputMaybe<Scalars['Int']['input']>;
  totalGiftSent?: InputMaybe<Scalars['Float']['input']>;
  userPhoto?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type MutationNotifyLiveGiftAnimationArgs = {
  animationSpeedCenter?: InputMaybe<Scalars['Int']['input']>;
  animationSpeedSeat?: InputMaybe<Scalars['Int']['input']>;
  archive?: InputMaybe<Scalars['String']['input']>;
  elementsToGo?: InputMaybe<Array<Scalars['String']['input']>>;
  liveId: Scalars['Int']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRemoveUserFromSeatArgs = {
  liveId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationResetPasswordArgs = {
  country: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationSendMessageChatLiveArgs = {
  liveId: Scalars['Int']['input'];
  message: Scalars['String']['input'];
};


export type MutationSendSmsArgs = {
  country: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationSendValidationCodeArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSignupArgs = {
  birthday: Scalars['String']['input'];
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationSignupFakeArgs = {
  quantity: Scalars['Int']['input'];
};


export type MutationToggleTwoFactorArgs = {
  twoFactor: Scalars['Boolean']['input'];
};


export type MutationTransferFamilyArgs = {
  familyId: Scalars['Int']['input'];
  targetId: Scalars['Int']['input'];
};


export type MutationUnblockArgs = {
  targetId: Scalars['Int']['input'];
};


export type MutationUnblockSeatArgs = {
  liveId: Scalars['Int']['input'];
  position: Scalars['Int']['input'];
};


export type MutationUnfollowArgs = {
  targetId: Scalars['Int']['input'];
};


export type MutationUpdateAccessAdministratorDashboardArgs = {
  accessAdministratorId: Scalars['Int']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  smsCode?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateAccessPartnerDashboardArgs = {
  accessPartnerId: Scalars['Int']['input'];
  country?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateAgencyArgs = {
  agencyCode?: InputMaybe<Scalars['Int']['input']>;
  agencyComission?: InputMaybe<Scalars['Float']['input']>;
  agencyId: Scalars['Int']['input'];
  country?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<Scalars['String']['input']>;
  documentPhotoBack?: InputMaybe<Scalars['String']['input']>;
  documentPhotoFront?: InputMaybe<Scalars['String']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  facebook?: InputMaybe<Scalars['String']['input']>;
  homeAddress?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  isSubAgency?: InputMaybe<Scalars['Boolean']['input']>;
  levelAgency?: InputMaybe<Scalars['Int']['input']>;
  levelAgencyExperience?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  pointsAccumulatedCurrentMonth?: InputMaybe<Scalars['Float']['input']>;
  pointsAccumulatedLastMonth?: InputMaybe<Scalars['Float']['input']>;
  typeWithdrawalAgency?: InputMaybe<TypeWithdrawalAgency>;
  userOwnerId?: InputMaybe<Scalars['Int']['input']>;
  utc?: InputMaybe<Scalars['String']['input']>;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateAgencyBalancePointDashboardArgs = {
  agencyBalancePointId: Scalars['Int']['input'];
  agencyId?: InputMaybe<Scalars['Int']['input']>;
  dateHourBalance?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  pointsAfter?: InputMaybe<Scalars['Float']['input']>;
  pointsBefore?: InputMaybe<Scalars['Float']['input']>;
  typeAgencyBalancePoints?: InputMaybe<TypeAgencyBalancePoints>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateAgencyBannedArgs = {
  agencyBannedId: Scalars['Int']['input'];
  agencyId?: InputMaybe<Scalars['Int']['input']>;
  banDate?: InputMaybe<Scalars['String']['input']>;
  banExpiryDate?: InputMaybe<Scalars['String']['input']>;
  reasonForBan?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateAgencyBannedDashboardArgs = {
  agencyBannedId: Scalars['Int']['input'];
  agencyId?: InputMaybe<Scalars['Int']['input']>;
  banDate?: InputMaybe<Scalars['String']['input']>;
  banExpiryDate?: InputMaybe<Scalars['String']['input']>;
  reasonForBan?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateAgencyBannedDetailArgs = {
  agencyBannedDetailId: Scalars['Int']['input'];
  agencyBannedId?: InputMaybe<Scalars['Int']['input']>;
  proof?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateAgencyBannedDetailDashboardArgs = {
  agencyBannedDetailId: Scalars['Int']['input'];
  agencyBannedId?: InputMaybe<Scalars['Int']['input']>;
  proof?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateAgencyDashboardArgs = {
  agencyCode?: InputMaybe<Scalars['Int']['input']>;
  agencyComission?: InputMaybe<Scalars['Float']['input']>;
  agencyId: Scalars['Int']['input'];
  coinsForSale?: InputMaybe<Scalars['Float']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<Scalars['String']['input']>;
  documentPhotoBack?: InputMaybe<Scalars['String']['input']>;
  documentPhotoFront?: InputMaybe<Scalars['String']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  facebook?: InputMaybe<Scalars['String']['input']>;
  homeAddress?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  isReseller?: InputMaybe<Scalars['Boolean']['input']>;
  isSubAgency?: InputMaybe<Scalars['Boolean']['input']>;
  levelAgency?: InputMaybe<Scalars['Int']['input']>;
  levelAgencyExperience?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  pointsAccumulatedCurrentMonth?: InputMaybe<Scalars['Float']['input']>;
  pointsAccumulatedLastMonth?: InputMaybe<Scalars['Float']['input']>;
  typeWithdrawalAgency?: InputMaybe<TypeWithdrawalAgency>;
  userOwnerAppId?: InputMaybe<Scalars['String']['input']>;
  userOwnerId?: InputMaybe<Scalars['Int']['input']>;
  utc?: InputMaybe<Scalars['String']['input']>;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateAgencyResellerBalanceCoinDashboardArgs = {
  agencyId?: InputMaybe<Scalars['Int']['input']>;
  agencyResellerBalanceCoinId: Scalars['Int']['input'];
  coinsAfter?: InputMaybe<Scalars['Float']['input']>;
  coinsBefore?: InputMaybe<Scalars['Float']['input']>;
  dateHourBalance?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  typeAgencyResellerBalanceCoins?: InputMaybe<TypeAgencyResellerBalanceCoins>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateAgencySaleDetailArgs = {
  agencyId?: InputMaybe<Scalars['Int']['input']>;
  agencySaleDetailId: Scalars['Int']['input'];
  coins?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateAgencySaleDetailDashboardArgs = {
  agencyId?: InputMaybe<Scalars['Int']['input']>;
  agencySaleDetailId: Scalars['Int']['input'];
  coins?: InputMaybe<Scalars['Float']['input']>;
  dateReceivedCoins?: InputMaybe<Scalars['String']['input']>;
  dateSentCoins?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateAgencyUserArgs = {
  accept?: InputMaybe<Scalars['Boolean']['input']>;
  agencyId?: InputMaybe<Scalars['Int']['input']>;
  agencyUserId: Scalars['Int']['input'];
  dateAccept?: InputMaybe<Scalars['String']['input']>;
  dateRejected?: InputMaybe<Scalars['String']['input']>;
  dateReleased?: InputMaybe<Scalars['String']['input']>;
  rejected?: InputMaybe<Scalars['Boolean']['input']>;
  released?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateAgencyUserDashboardArgs = {
  accept?: InputMaybe<Scalars['Boolean']['input']>;
  agencyId?: InputMaybe<Scalars['Int']['input']>;
  agencyUserId: Scalars['Int']['input'];
  dateAccept?: InputMaybe<Scalars['String']['input']>;
  dateRejected?: InputMaybe<Scalars['String']['input']>;
  dateReleased?: InputMaybe<Scalars['String']['input']>;
  rejected?: InputMaybe<Scalars['Boolean']['input']>;
  released?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateAgencyWarningArgs = {
  agencyId?: InputMaybe<Scalars['Int']['input']>;
  agencyWarningId: Scalars['Int']['input'];
  warningDate?: InputMaybe<Scalars['String']['input']>;
  warningExpiryDate?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateAgencyWarningDashboardArgs = {
  agencyId?: InputMaybe<Scalars['Int']['input']>;
  agencyWarningId: Scalars['Int']['input'];
  warningDate?: InputMaybe<Scalars['String']['input']>;
  warningExpiryDate?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateAgencyWarningDetailArgs = {
  agencyWarningDetailId: Scalars['Int']['input'];
  agencyWarningId?: InputMaybe<Scalars['Int']['input']>;
  proof?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateAgencyWarningDetailDashboardArgs = {
  agencyWarningDetailId: Scalars['Int']['input'];
  agencyWarningId?: InputMaybe<Scalars['Int']['input']>;
  proof?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateAppLogArgs = {
  appLogId: Scalars['Int']['input'];
  newJson?: InputMaybe<Scalars['String']['input']>;
  oldJson?: InputMaybe<Scalars['String']['input']>;
  table?: InputMaybe<Scalars['String']['input']>;
  tableId?: InputMaybe<Scalars['Int']['input']>;
  typeAppLogType?: InputMaybe<TypeAppLogType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateAppLogDashboardArgs = {
  appLogId: Scalars['Int']['input'];
  newJson?: InputMaybe<Scalars['String']['input']>;
  oldJson?: InputMaybe<Scalars['String']['input']>;
  table?: InputMaybe<Scalars['String']['input']>;
  tableId?: InputMaybe<Scalars['Int']['input']>;
  typeAppLogType?: InputMaybe<TypeAppLogType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateAppSettingArgs = {
  acceptSendForMe?: InputMaybe<Scalars['Boolean']['input']>;
  appSettingId: Scalars['Int']['input'];
  minGiftSentPushCountry?: InputMaybe<Scalars['Int']['input']>;
  minReturnTimeGameLuckCoinChat?: InputMaybe<Scalars['Int']['input']>;
  minReturnTimeGameLuckCoinCountry?: InputMaybe<Scalars['Int']['input']>;
  minReturnTimeGameLuckCoinMiddle?: InputMaybe<Scalars['Int']['input']>;
  minReturnTimeGameLuckCoinSound?: InputMaybe<Scalars['Int']['input']>;
  minReturnValueGameLuckBox?: InputMaybe<Scalars['Int']['input']>;
  minReturnValueGameLuckCoinCountry?: InputMaybe<Scalars['Int']['input']>;
  utcDefault?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateAppSettingDashboardArgs = {
  acceptSendForMe?: InputMaybe<Scalars['Boolean']['input']>;
  appSettingId: Scalars['Int']['input'];
  gameLuckCoinMultipleCalculation?: InputMaybe<Scalars['Boolean']['input']>;
  gameLuckSurpriseBoxDefaultGiftIdEarning?: InputMaybe<Scalars['Int']['input']>;
  gameLuckSurpriseBoxDefaultValueGiftEarning?: InputMaybe<Scalars['Int']['input']>;
  gameLuckSurpriseBoxValueBet?: InputMaybe<Scalars['Int']['input']>;
  minGiftSentPushCountry?: InputMaybe<Scalars['Int']['input']>;
  minReturnTimeGameLuckCoinChat?: InputMaybe<Scalars['Int']['input']>;
  minReturnTimeGameLuckCoinCountry?: InputMaybe<Scalars['Int']['input']>;
  minReturnTimeGameLuckCoinMiddle?: InputMaybe<Scalars['Int']['input']>;
  minReturnTimeGameLuckCoinSound?: InputMaybe<Scalars['Int']['input']>;
  minReturnValueGameLuckBox?: InputMaybe<Scalars['Int']['input']>;
  minReturnValueGameLuckCoinCountry?: InputMaybe<Scalars['Int']['input']>;
  utcDefault?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateBadgeArgs = {
  archive?: InputMaybe<Scalars['String']['input']>;
  badgeId: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  typeBadge?: InputMaybe<TypeBadge>;
};


export type MutationUpdateBadgeDashboardArgs = {
  archive?: InputMaybe<Scalars['String']['input']>;
  badgeId: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  typeBadge?: InputMaybe<TypeBadge>;
};


export type MutationUpdateBannerLinkArgs = {
  appId?: InputMaybe<Scalars['String']['input']>;
  bannerLinkId: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  expiresIn?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  linkWebPage?: InputMaybe<Scalars['String']['input']>;
  typeBannerLink?: InputMaybe<TypeBannerLink>;
  typeBannerLinkPage?: InputMaybe<TypeBannerLinkPage>;
};


export type MutationUpdateBannerLinkDashboardArgs = {
  appId?: InputMaybe<Scalars['String']['input']>;
  bannerLinkId: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  expiresIn?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  linkWebPage?: InputMaybe<Scalars['String']['input']>;
  typeBannerLink?: InputMaybe<TypeBannerLink>;
  typeBannerLinkPage?: InputMaybe<TypeBannerLinkPage>;
};


export type MutationUpdateChatArgs = {
  chatId: Scalars['Int']['input'];
  roomCode?: InputMaybe<Scalars['String']['input']>;
  userOneId?: InputMaybe<Scalars['Int']['input']>;
  userTwoId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateChatDetailArgs = {
  audio?: InputMaybe<Scalars['String']['input']>;
  chatDetailId: Scalars['Int']['input'];
  chatId?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  gif?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateConfigArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateCountryCodeArgs = {
  codeIsoAlpha2?: InputMaybe<Scalars['String']['input']>;
  codeIsoAlpha3?: InputMaybe<Scalars['String']['input']>;
  codeIsoNumeric?: InputMaybe<Scalars['String']['input']>;
  countryCodeId: Scalars['Int']['input'];
  currency?: InputMaybe<Scalars['String']['input']>;
  ddi?: InputMaybe<Scalars['String']['input']>;
  extensionDomain?: InputMaybe<Scalars['String']['input']>;
  iconFlag?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  usedInSearch?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateCountryCodeDashboardArgs = {
  codeIsoAlpha2?: InputMaybe<Scalars['String']['input']>;
  codeIsoAlpha3?: InputMaybe<Scalars['String']['input']>;
  codeIsoNumeric?: InputMaybe<Scalars['String']['input']>;
  countryCodeId: Scalars['Int']['input'];
  currency?: InputMaybe<Scalars['String']['input']>;
  ddi?: InputMaybe<Scalars['String']['input']>;
  extensionDomain?: InputMaybe<Scalars['String']['input']>;
  iconFlag?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  usedInSearch?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateDomainDashboardArgs = {
  domainId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateEventArgs = {
  date?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  typeEventStatus?: InputMaybe<TypeEventStatus>;
};


export type MutationUpdateEventDashboardArgs = {
  date?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  typeEventStatus?: InputMaybe<TypeEventStatus>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateExampleOtherOneDashboardArgs = {
  exampleOtherOneId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateExampleOtherTwoDashboardArgs = {
  exampleOtherTwoId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateExampleTableDashboardArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  exampleOtherOneId?: InputMaybe<Scalars['Int']['input']>;
  exampleOtherTwoId?: InputMaybe<Scalars['Int']['input']>;
  exampleTableId: Scalars['Int']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  typeBoolean?: InputMaybe<Scalars['Boolean']['input']>;
  typeCurrency?: InputMaybe<Scalars['Float']['input']>;
  typeDatetime?: InputMaybe<Scalars['String']['input']>;
  typeDecimal?: InputMaybe<Scalars['Float']['input']>;
  typeEnum?: InputMaybe<TypeEnum>;
  typeInt?: InputMaybe<Scalars['Int']['input']>;
  typeText?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateFamilyArgs = {
  announcement?: InputMaybe<Scalars['String']['input']>;
  anyCanJoin?: InputMaybe<Scalars['Boolean']['input']>;
  familyId: Scalars['Int']['input'];
  icon?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateFamilyDashboardArgs = {
  announcement?: InputMaybe<Scalars['String']['input']>;
  anyCanJoin?: InputMaybe<Scalars['Boolean']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  familyId: Scalars['Int']['input'];
  icon?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerUserId?: InputMaybe<Scalars['Int']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateFamilyForceArgs = {
  familyForceId: Scalars['Int']['input'];
  familyForceLevel?: InputMaybe<Scalars['Int']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  limitMember?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdateFamilyForceBenefitArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  familyForceBenefitId: Scalars['Int']['input'];
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  typeFamilyForceBenefit?: InputMaybe<TypeFamilyForceBenefit>;
};


export type MutationUpdateFamilyForceBenefitDashboardArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  familyForceBenefitId: Scalars['Int']['input'];
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  typeFamilyForceBenefit?: InputMaybe<TypeFamilyForceBenefit>;
};


export type MutationUpdateFamilyForceBenefitDetailArgs = {
  familyForceBenefitDetailId: Scalars['Int']['input'];
  familyForceBenefitId?: InputMaybe<Scalars['Int']['input']>;
  familyForceId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateFamilyForceBenefitDetailDashboardArgs = {
  familyForceBenefitDetailId: Scalars['Int']['input'];
  familyForceBenefitId?: InputMaybe<Scalars['Int']['input']>;
  familyForceId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateFamilyForceDashboardArgs = {
  familyForceId: Scalars['Int']['input'];
  familyForceLevel?: InputMaybe<Scalars['Int']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  limitMember?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdateFamilyMemberArgs = {
  familyId?: InputMaybe<Scalars['Int']['input']>;
  familyMemberId: Scalars['Int']['input'];
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isCreator?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateFamilyMemberDashboardArgs = {
  familyId?: InputMaybe<Scalars['Int']['input']>;
  familyMemberId: Scalars['Int']['input'];
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isCreator?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateFamilyTaskMemberArgs = {
  completed?: InputMaybe<Scalars['String']['input']>;
  dateTask?: InputMaybe<Scalars['String']['input']>;
  familyId?: InputMaybe<Scalars['Int']['input']>;
  familyTaskMemberId: Scalars['Int']['input'];
  familyTaskTypeId?: InputMaybe<Scalars['Int']['input']>;
  quantityCompleted?: InputMaybe<Scalars['String']['input']>;
  quantityTask?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateFamilyTaskMemberDashboardArgs = {
  completed?: InputMaybe<Scalars['String']['input']>;
  dateTask?: InputMaybe<Scalars['String']['input']>;
  familyId?: InputMaybe<Scalars['Int']['input']>;
  familyTaskMemberId: Scalars['Int']['input'];
  familyTaskTypeId?: InputMaybe<Scalars['Int']['input']>;
  quantityCompleted?: InputMaybe<Scalars['String']['input']>;
  quantityTask?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateFamilyTaskMemberHardArgs = {
  completed?: InputMaybe<Scalars['String']['input']>;
  dateTask?: InputMaybe<Scalars['String']['input']>;
  familyId?: InputMaybe<Scalars['Int']['input']>;
  familyTaskMemberHardId: Scalars['Int']['input'];
  familyTaskTypeHardId?: InputMaybe<Scalars['Int']['input']>;
  quantityCompleted?: InputMaybe<Scalars['String']['input']>;
  quantityTask?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateFamilyTaskMemberHardDashboardArgs = {
  completed?: InputMaybe<Scalars['String']['input']>;
  dateTask?: InputMaybe<Scalars['String']['input']>;
  familyId?: InputMaybe<Scalars['Int']['input']>;
  familyTaskMemberHardId: Scalars['Int']['input'];
  familyTaskTypeHardId?: InputMaybe<Scalars['Int']['input']>;
  quantityCompleted?: InputMaybe<Scalars['String']['input']>;
  quantityTask?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateFamilyTaskProgressArgs = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  dateTask?: InputMaybe<Scalars['String']['input']>;
  familyId?: InputMaybe<Scalars['Int']['input']>;
  familyTaskProgressId: Scalars['Int']['input'];
  familyTaskTypeProgressId?: InputMaybe<Scalars['Int']['input']>;
  quantityCompleted?: InputMaybe<Scalars['String']['input']>;
  quantityTask?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateFamilyTaskProgressDashboardArgs = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  dateTask?: InputMaybe<Scalars['String']['input']>;
  familyId?: InputMaybe<Scalars['Int']['input']>;
  familyTaskProgressId: Scalars['Int']['input'];
  familyTaskTypeProgressId?: InputMaybe<Scalars['Int']['input']>;
  quantityCompleted?: InputMaybe<Scalars['String']['input']>;
  quantityTask?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateFamilyTaskProgressReceivedArgs = {
  familyTaskProgressId?: InputMaybe<Scalars['Int']['input']>;
  familyTaskProgressReceivedId: Scalars['Int']['input'];
  received?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateFamilyTaskProgressReceivedDashboardArgs = {
  familyTaskProgressId?: InputMaybe<Scalars['Int']['input']>;
  familyTaskProgressReceivedId: Scalars['Int']['input'];
  received?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateFamilyTaskTypeArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  familyTaskTypeId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  typeFamilyTask?: InputMaybe<TypeFamilyTask>;
};


export type MutationUpdateFamilyTaskTypeDashboardArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  familyTaskTypeId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  typeFamilyTask?: InputMaybe<TypeFamilyTask>;
};


export type MutationUpdateFamilyTaskTypeHardArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  familyTaskTypeHardId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  typeFamilyTask?: InputMaybe<TypeFamilyTask>;
};


export type MutationUpdateFamilyTaskTypeHardDashboardArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  familyTaskTypeHardId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  typeFamilyTask?: InputMaybe<TypeFamilyTask>;
};


export type MutationUpdateFamilyTaskTypeProgressArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  familyTaskTypeProgressId: Scalars['Int']['input'];
  minimumPointsUser?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  typeFamilyBonus?: InputMaybe<TypeFamilyBonus>;
  typeFamilyBox?: InputMaybe<TypeFamilyBox>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateFamilyTaskTypeProgressDashboardArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  familyTaskTypeProgressId: Scalars['Int']['input'];
  minimumPointsUser?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  typeFamilyBonus?: InputMaybe<TypeFamilyBonus>;
  typeFamilyBox?: InputMaybe<TypeFamilyBox>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateGameConfigurationDefaultEarningArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  gameConfigurationDefaultEarningId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  typeGame?: InputMaybe<TypeGame>;
};


export type MutationUpdateGameConfigurationDefaultEarningDashboardArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  gameConfigurationDefaultEarningId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  typeGame?: InputMaybe<TypeGame>;
};


export type MutationUpdateGameConfigurationLuckCoinArgs = {
  allowTimes05?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes10?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes20?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes50?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes100?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes250?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes500?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes1000?: InputMaybe<Scalars['Boolean']['input']>;
  colorTimesBiggerThen05?: InputMaybe<Scalars['String']['input']>;
  colorTimesBiggerThen100?: InputMaybe<Scalars['String']['input']>;
  colorTimesBiggerThen250?: InputMaybe<Scalars['String']['input']>;
  colorTimesBiggerThen500?: InputMaybe<Scalars['String']['input']>;
  colorTimesBiggerThen1000?: InputMaybe<Scalars['String']['input']>;
  colorTimesBiggerThen2000?: InputMaybe<Scalars['String']['input']>;
  gameConfigurationLuckCoinId: Scalars['Int']['input'];
  giftId?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes05?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes10?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes20?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes50?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes100?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes250?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes500?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes1000?: InputMaybe<Scalars['Int']['input']>;
  quantityCombo?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes05?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes10?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes20?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes50?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes100?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes250?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes500?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes1000?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateGameConfigurationLuckCoinDashboardArgs = {
  allowTimes05?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes10?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes20?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes50?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes100?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes250?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes500?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes1000?: InputMaybe<Scalars['Boolean']['input']>;
  colorTimes05?: InputMaybe<Scalars['String']['input']>;
  colorTimes10?: InputMaybe<Scalars['String']['input']>;
  colorTimes20?: InputMaybe<Scalars['String']['input']>;
  colorTimes50?: InputMaybe<Scalars['String']['input']>;
  colorTimes100?: InputMaybe<Scalars['String']['input']>;
  colorTimes250?: InputMaybe<Scalars['String']['input']>;
  colorTimes500?: InputMaybe<Scalars['String']['input']>;
  colorTimes1000?: InputMaybe<Scalars['String']['input']>;
  gameConfigurationLuckCoinId: Scalars['Int']['input'];
  gameLuckCoinMultipleCalculation?: InputMaybe<Scalars['Boolean']['input']>;
  giftId?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes05?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes10?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes20?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes50?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes100?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes250?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes500?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes1000?: InputMaybe<Scalars['Int']['input']>;
  quantityCombo?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes05?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes10?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes20?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes50?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes100?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes250?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes500?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes1000?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateGameConfigurationSurpriseBoxArgs = {
  gameConfigurationSurpriseBoxId: Scalars['Int']['input'];
  giftId?: InputMaybe<Scalars['Int']['input']>;
  modTimes?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateGameConfigurationSurpriseBoxDashboardArgs = {
  defaultTime01?: InputMaybe<Scalars['Boolean']['input']>;
  gameConfigurationSurpriseBoxId: Scalars['Int']['input'];
  giftId?: InputMaybe<Scalars['Int']['input']>;
  modTimes?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateGameLuckSurpriseBoxArgs = {
  gameLuckSurpriseBoxId: Scalars['Int']['input'];
  giftIdEarning?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  valueGift?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateGameLuckSurpriseBoxDashboardArgs = {
  gameLuckSurpriseBoxId: Scalars['Int']['input'];
  giftIdEarning?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  valueGift?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateGiftArgs = {
  allowedCombos?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  animationSpeedCenter?: InputMaybe<Scalars['Int']['input']>;
  animationSpeedSeat?: InputMaybe<Scalars['Int']['input']>;
  archive?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  giftEventId?: InputMaybe<Scalars['Int']['input']>;
  giftId: Scalars['Int']['input'];
  giftTypeId?: InputMaybe<Scalars['Int']['input']>;
  heightAnimation?: InputMaybe<Scalars['Int']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  isAnimated?: InputMaybe<Scalars['Boolean']['input']>;
  isCelebrity?: InputMaybe<Scalars['Boolean']['input']>;
  isLuck?: InputMaybe<Scalars['Boolean']['input']>;
  isPackage?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
  widthAnimation?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateGiftDashboardArgs = {
  allowedCombos?: InputMaybe<Scalars['String']['input']>;
  animationSpeedCenter?: InputMaybe<Scalars['Int']['input']>;
  animationSpeedSeat?: InputMaybe<Scalars['Int']['input']>;
  archive?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  giftEventId?: InputMaybe<Scalars['Int']['input']>;
  giftId: Scalars['Int']['input'];
  giftTypeId?: InputMaybe<Scalars['Int']['input']>;
  heightAnimation?: InputMaybe<Scalars['Int']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  isAnimated?: InputMaybe<Scalars['Boolean']['input']>;
  isCelebrity?: InputMaybe<Scalars['Boolean']['input']>;
  isLuck?: InputMaybe<Scalars['Boolean']['input']>;
  isPackage?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
  widthAnimation?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateGiftEventArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  giftEventId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateGiftEventDashboardArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  giftEventId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateGiftSentArgs = {
  familyReceivedId?: InputMaybe<Scalars['Int']['input']>;
  familySentId?: InputMaybe<Scalars['Int']['input']>;
  giftId: Scalars['Int']['input'];
  giftSentId: Scalars['Int']['input'];
  invisibleGiftGiver: Scalars['Boolean']['input'];
  liveId?: InputMaybe<Scalars['Int']['input']>;
  userReceivedId: Scalars['Int']['input'];
};


export type MutationUpdateGiftSentDashboardArgs = {
  agencyFinishedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  agencyStartedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  balanceFinishedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  balanceStartedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  dateReceived?: InputMaybe<Scalars['String']['input']>;
  dateSent?: InputMaybe<Scalars['String']['input']>;
  dateSentReceivedLive?: InputMaybe<Scalars['String']['input']>;
  eventFinishedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  eventStartedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  familyReceivedId?: InputMaybe<Scalars['Int']['input']>;
  familySentId?: InputMaybe<Scalars['Int']['input']>;
  giftId?: InputMaybe<Scalars['Int']['input']>;
  giftSentId: Scalars['Int']['input'];
  indexLuckCoin?: InputMaybe<Scalars['Int']['input']>;
  invisibleGiftGiver?: InputMaybe<Scalars['Boolean']['input']>;
  invitationFinishedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  invitationStartedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  isLuck?: InputMaybe<Scalars['Boolean']['input']>;
  liveId?: InputMaybe<Scalars['Int']['input']>;
  pointsFinishedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  pointsStartedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  processingQueueId?: InputMaybe<Scalars['Int']['input']>;
  quantityCombo?: InputMaybe<Scalars['Int']['input']>;
  returnTimes?: InputMaybe<Scalars['Int']['input']>;
  totalGift?: InputMaybe<Scalars['Int']['input']>;
  totalGiftSentReceived?: InputMaybe<Scalars['Float']['input']>;
  userReceivedId?: InputMaybe<Scalars['Int']['input']>;
  userSentId?: InputMaybe<Scalars['Int']['input']>;
  valueEarning?: InputMaybe<Scalars['Int']['input']>;
  valueGift?: InputMaybe<Scalars['Int']['input']>;
  valueGiftSentReceived?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdateGiftTypeArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  giftTypeId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateGiftTypeDashboardArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  giftTypeId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateInvitationArgs = {
  dateInvite?: InputMaybe<Scalars['String']['input']>;
  invitationId: Scalars['Int']['input'];
  userInvitedId?: InputMaybe<Scalars['Int']['input']>;
  userWhoInvitedId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateInvitationDashboardArgs = {
  dateInvite?: InputMaybe<Scalars['String']['input']>;
  invitationId: Scalars['Int']['input'];
  userInvitedId?: InputMaybe<Scalars['Int']['input']>;
  userWhoInvitedId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateInvitationRewardArgs = {
  dateReward?: InputMaybe<Scalars['String']['input']>;
  invitationId?: InputMaybe<Scalars['Int']['input']>;
  invitationRewardId: Scalars['Int']['input'];
  valueReward?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateInvitationRewardDashboardArgs = {
  dateReward?: InputMaybe<Scalars['String']['input']>;
  invitationId?: InputMaybe<Scalars['Int']['input']>;
  invitationRewardId: Scalars['Int']['input'];
  valueReward?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateItemArgs = {
  duration?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  itemId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  typeItem?: InputMaybe<TypeItem>;
  valueBeans?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateItemDashboardArgs = {
  duration?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  itemId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  typeItem?: InputMaybe<TypeItem>;
  valueBeans?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateItemPurchasedArgs = {
  datePurchased?: InputMaybe<Scalars['String']['input']>;
  expiresIn?: InputMaybe<Scalars['String']['input']>;
  itemId?: InputMaybe<Scalars['Int']['input']>;
  itemPurchasedId: Scalars['Int']['input'];
  typeItem?: InputMaybe<TypeItem>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userSentId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateItemPurchasedDashboardArgs = {
  datePurchased?: InputMaybe<Scalars['String']['input']>;
  expiresIn?: InputMaybe<Scalars['String']['input']>;
  itemId?: InputMaybe<Scalars['Int']['input']>;
  itemPurchasedId: Scalars['Int']['input'];
  typeItem?: InputMaybe<TypeItem>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userSentId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateLevelHostArgs = {
  emblem?: InputMaybe<Scalars['String']['input']>;
  gradientColor?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  levelHostId: Scalars['Int']['input'];
  requiredExp?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateLevelHostDashboardArgs = {
  emblem?: InputMaybe<Scalars['String']['input']>;
  gradientColor?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  levelHostId: Scalars['Int']['input'];
  requiredExp?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateLevelSpectatorArgs = {
  emblem?: InputMaybe<Scalars['String']['input']>;
  gradientColor?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  levelSpectatorId: Scalars['Int']['input'];
  requiredExp?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateLevelSpectatorDashboardArgs = {
  emblem?: InputMaybe<Scalars['String']['input']>;
  gradientColor?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  levelSpectatorId: Scalars['Int']['input'];
  requiredExp?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateLiveArgs = {
  announcement?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  channelClose?: InputMaybe<Scalars['Boolean']['input']>;
  channelQuality?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  imageAvatar?: InputMaybe<Scalars['String']['input']>;
  liveId: Scalars['Int']['input'];
};


export type MutationUpdateLiveDashboardArgs = {
  announcement?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  channelClose?: InputMaybe<Scalars['Boolean']['input']>;
  channelQuality?: InputMaybe<Scalars['String']['input']>;
  copyLivesDetailsTags?: InputMaybe<Scalars['String']['input']>;
  copyUsersAppId?: InputMaybe<Scalars['String']['input']>;
  copyUsersUsername?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  countryShow?: InputMaybe<Scalars['String']['input']>;
  dateClose?: InputMaybe<Scalars['String']['input']>;
  dateOpen?: InputMaybe<Scalars['String']['input']>;
  imageAvatar?: InputMaybe<Scalars['String']['input']>;
  linkShare?: InputMaybe<Scalars['String']['input']>;
  liveId: Scalars['Int']['input'];
  newFollowers?: InputMaybe<Scalars['Int']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  totalTimeLive?: InputMaybe<Scalars['String']['input']>;
  typeLive?: InputMaybe<TypeLive>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  utc?: InputMaybe<Scalars['String']['input']>;
  viewers?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateLiveDetailGuestArgs = {
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  liveId: Scalars['Int']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  rejected?: InputMaybe<Scalars['Boolean']['input']>;
  requesting?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateLiveDetailGuestDashboardArgs = {
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  audioMuted?: InputMaybe<Scalars['Boolean']['input']>;
  audioOpen?: InputMaybe<Scalars['Boolean']['input']>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  dateJoined?: InputMaybe<Scalars['String']['input']>;
  dateLeaved?: InputMaybe<Scalars['String']['input']>;
  liveDetailGuestId: Scalars['Int']['input'];
  liveId?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  rejected?: InputMaybe<Scalars['Boolean']['input']>;
  requesting?: InputMaybe<Scalars['Boolean']['input']>;
  totalTime?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  videoOpen?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateLiveDetailPeopleArgs = {
  canJoinSeat?: InputMaybe<Scalars['Boolean']['input']>;
  chatMuted?: InputMaybe<Scalars['Boolean']['input']>;
  inLive?: InputMaybe<Scalars['Boolean']['input']>;
  kicked?: InputMaybe<Scalars['Boolean']['input']>;
  liveId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationUpdateLiveDetailPeopleDashboardArgs = {
  canJoinSeat?: InputMaybe<Scalars['Boolean']['input']>;
  chatMuted?: InputMaybe<Scalars['Boolean']['input']>;
  inLive?: InputMaybe<Scalars['Boolean']['input']>;
  kicked?: InputMaybe<Scalars['Boolean']['input']>;
  liveDetailPeopleId: Scalars['Int']['input'];
  liveId?: InputMaybe<Scalars['Int']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateLiveDetailTagArgs = {
  liveDetailTagId: Scalars['Int']['input'];
  liveId?: InputMaybe<Scalars['Int']['input']>;
  liveTagId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateLiveDetailTagDashboardArgs = {
  liveDetailTagId: Scalars['Int']['input'];
  liveId?: InputMaybe<Scalars['Int']['input']>;
  liveTagId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateLiveFilterArgs = {
  liveFilterId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  resource?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateLiveFilterDashboardArgs = {
  liveFilterId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  resource?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateLiveReportArgs = {
  dateReport?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  liveId?: InputMaybe<Scalars['Int']['input']>;
  liveReportId: Scalars['Int']['input'];
  liveTypeReportId?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateLiveReportDashboardArgs = {
  dateReport?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  liveId?: InputMaybe<Scalars['Int']['input']>;
  liveReportId: Scalars['Int']['input'];
  liveTypeReportId?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateLiveResumeArgs = {
  dateLive?: InputMaybe<Scalars['String']['input']>;
  liveId?: InputMaybe<Scalars['Int']['input']>;
  liveResumeId: Scalars['Int']['input'];
  newFollowers?: InputMaybe<Scalars['Int']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  totalTimeLive?: InputMaybe<Scalars['String']['input']>;
  typeLive?: InputMaybe<TypeLive>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  viewers?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateLiveResumeDashboardArgs = {
  dateLive?: InputMaybe<Scalars['String']['input']>;
  liveId?: InputMaybe<Scalars['Int']['input']>;
  liveResumeId: Scalars['Int']['input'];
  newFollowers?: InputMaybe<Scalars['Int']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  totalTimeLive?: InputMaybe<Scalars['String']['input']>;
  typeLive?: InputMaybe<TypeLive>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  viewers?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateLiveSettingArgs = {
  allowMessagesChat?: InputMaybe<Scalars['Boolean']['input']>;
  allowStrangersInSeat?: InputMaybe<Scalars['Boolean']['input']>;
  liveId: Scalars['Int']['input'];
  messagePinnedChat?: InputMaybe<Scalars['String']['input']>;
  numberSeats?: InputMaybe<Scalars['Int']['input']>;
  roomPassword?: InputMaybe<Scalars['String']['input']>;
  themeBackground?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateLiveSettingDashboardArgs = {
  allowMessagesChat?: InputMaybe<Scalars['Boolean']['input']>;
  allowStrangersInSeat?: InputMaybe<Scalars['Boolean']['input']>;
  liveId?: InputMaybe<Scalars['Int']['input']>;
  liveSettingId: Scalars['Int']['input'];
  messagePinnedChat?: InputMaybe<Scalars['String']['input']>;
  numberSeats?: InputMaybe<Scalars['Int']['input']>;
  roomPassword?: InputMaybe<Scalars['String']['input']>;
  themeBackground?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateLiveStickerArgs = {
  liveStickerId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  resource?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateLiveStickerDashboardArgs = {
  liveStickerId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  resource?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateLiveTagArgs = {
  liveTagId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateLiveTagDashboardArgs = {
  liveTagId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateLiveTypeReportArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
  liveTypeReportId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateLiveTypeReportDashboardArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
  liveTypeReportId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateMultipleLiveDetailPeoplePointsArgs = {
  liveId: Scalars['Int']['input'];
  points: Array<InputMaybe<PointsInput>>;
};


export type MutationUpdateNotificationsArgs = {
  type: Scalars['String']['input'];
  value: Scalars['Boolean']['input'];
};


export type MutationUpdatePaymentAgentArgs = {
  online?: InputMaybe<Scalars['Boolean']['input']>;
  paymentAgentId: Scalars['Int']['input'];
  scorePayment?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdatePaymentAgentDashboardArgs = {
  online?: InputMaybe<Scalars['Boolean']['input']>;
  paymentAgentId: Scalars['Int']['input'];
  scorePayment?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdatePaymentAgentPaidArgs = {
  codeWithdrawal?: InputMaybe<Scalars['String']['input']>;
  dateStatus?: InputMaybe<Scalars['String']['input']>;
  dateWithdrawal?: InputMaybe<Scalars['String']['input']>;
  paymentAgentId?: InputMaybe<Scalars['Int']['input']>;
  paymentAgentPaidId: Scalars['Int']['input'];
  timeLeft?: InputMaybe<Scalars['String']['input']>;
  typeWithdrawalStatus?: InputMaybe<TypeWithdrawalStatus>;
  valueCurrency?: InputMaybe<Scalars['Float']['input']>;
  valuePointsEarnings?: InputMaybe<Scalars['Float']['input']>;
  valuePointsToPay?: InputMaybe<Scalars['Float']['input']>;
  valuePointsTotal?: InputMaybe<Scalars['Float']['input']>;
  valueUsd?: InputMaybe<Scalars['Int']['input']>;
  withdrawalId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdatePaymentAgentPaidDashboardArgs = {
  codeWithdrawal?: InputMaybe<Scalars['String']['input']>;
  dateStatus?: InputMaybe<Scalars['String']['input']>;
  dateWithdrawal?: InputMaybe<Scalars['String']['input']>;
  paymentAgentId?: InputMaybe<Scalars['Int']['input']>;
  paymentAgentPaidId: Scalars['Int']['input'];
  timeLeft?: InputMaybe<Scalars['String']['input']>;
  typeWithdrawalStatus?: InputMaybe<TypeWithdrawalStatus>;
  valueCurrency?: InputMaybe<Scalars['Float']['input']>;
  valuePointsEarnings?: InputMaybe<Scalars['Float']['input']>;
  valuePointsToPay?: InputMaybe<Scalars['Float']['input']>;
  valuePointsTotal?: InputMaybe<Scalars['Float']['input']>;
  valueUsd?: InputMaybe<Scalars['Int']['input']>;
  withdrawalId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdatePlatformSellerForAgencyArgs = {
  agencyId?: InputMaybe<Scalars['Int']['input']>;
  coins?: InputMaybe<Scalars['Float']['input']>;
  platformSellerForAgencyId: Scalars['Int']['input'];
};


export type MutationUpdatePlatformSellerForAgencyDashboardArgs = {
  agencyId?: InputMaybe<Scalars['Int']['input']>;
  coins?: InputMaybe<Scalars['Float']['input']>;
  platformSellerForAgencyId: Scalars['Int']['input'];
};


export type MutationUpdatePlatformSellerForAgencyPriceArgs = {
  coinsPerUsd?: InputMaybe<Scalars['Float']['input']>;
  platformSellerForAgencyPriceId: Scalars['Int']['input'];
  usdFinal?: InputMaybe<Scalars['Float']['input']>;
  usdInitial?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdatePlatformSellerForAgencyPriceDashboardArgs = {
  coinsPerUsd?: InputMaybe<Scalars['Float']['input']>;
  platformSellerForAgencyPriceId: Scalars['Int']['input'];
  usdFinal?: InputMaybe<Scalars['Float']['input']>;
  usdInitial?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdatePlatformSellerForAgencyProofArgs = {
  platformSellerForAgencyId?: InputMaybe<Scalars['Int']['input']>;
  platformSellerForAgencyProofId: Scalars['Int']['input'];
  proof?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdatePlatformSellerForAgencyProofDashboardArgs = {
  platformSellerForAgencyId?: InputMaybe<Scalars['Int']['input']>;
  platformSellerForAgencyProofId: Scalars['Int']['input'];
  proof?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdatePlatformSellerForUserArgs = {
  coins?: InputMaybe<Scalars['Float']['input']>;
  platformSellerForUserId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdatePlatformSellerForUserDashboardArgs = {
  coins?: InputMaybe<Scalars['Float']['input']>;
  platformSellerForUserId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdatePlatformSellerForUserPriceArgs = {
  coinsPerUsd?: InputMaybe<Scalars['Float']['input']>;
  platformSellerForUserPriceId: Scalars['Int']['input'];
  usdFinal?: InputMaybe<Scalars['Float']['input']>;
  usdInitial?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdatePlatformSellerForUserPriceDashboardArgs = {
  coinsPerUsd?: InputMaybe<Scalars['Float']['input']>;
  platformSellerForUserPriceId: Scalars['Int']['input'];
  usdFinal?: InputMaybe<Scalars['Float']['input']>;
  usdInitial?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdatePostArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  postId: Scalars['Int']['input'];
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


export type MutationUpdatePostCommentArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  postCommentId: Scalars['Int']['input'];
  postId: Scalars['Int']['input'];
};


export type MutationUpdatePostCommentDashboardArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  postCommentId: Scalars['Int']['input'];
  postId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdatePostDashboardArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  postId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdatePostLikeDashboardArgs = {
  date?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['Int']['input']>;
  postLikeId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdatePostTagDashboardArgs = {
  postId?: InputMaybe<Scalars['Int']['input']>;
  postTagId: Scalars['Int']['input'];
  tagId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdatePrivacyArgs = {
  type: Scalars['String']['input'];
  value: Scalars['Boolean']['input'];
};


export type MutationUpdateProfileArgs = {
  biography?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateTagArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  tagId: Scalars['Int']['input'];
};


export type MutationUpdateTagDashboardArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  tagId: Scalars['Int']['input'];
};


export type MutationUpdateTaskTypeHostArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  taskTypeHostId: Scalars['Int']['input'];
  typeTaskBonus?: InputMaybe<TypeTaskBonus>;
  typeTaskTypeHost?: InputMaybe<TypeTaskTypeHost>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateTaskTypeHostDashboardArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  taskTypeHostId: Scalars['Int']['input'];
  typeTaskBonus?: InputMaybe<TypeTaskBonus>;
  typeTaskTypeHost?: InputMaybe<TypeTaskTypeHost>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateTaskTypeSpectatorArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  taskTypeSpectatorId: Scalars['Int']['input'];
  typeTaskBonus?: InputMaybe<TypeTaskBonus>;
  typeTaskTypeSpectator?: InputMaybe<TypeTaskTypeSpectator>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateTaskTypeSpectatorDashboardArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  taskTypeSpectatorId: Scalars['Int']['input'];
  typeTaskBonus?: InputMaybe<TypeTaskBonus>;
  typeTaskTypeSpectator?: InputMaybe<TypeTaskTypeSpectator>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateTaskUserHostArgs = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  dateTask?: InputMaybe<Scalars['String']['input']>;
  quantityCompleted?: InputMaybe<Scalars['Int']['input']>;
  quantityTask?: InputMaybe<Scalars['Int']['input']>;
  rescued?: InputMaybe<Scalars['Boolean']['input']>;
  taskTypeHostId?: InputMaybe<Scalars['Int']['input']>;
  taskUserHostId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateTaskUserHostDashboardArgs = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  dateTask?: InputMaybe<Scalars['String']['input']>;
  quantityCompleted?: InputMaybe<Scalars['Int']['input']>;
  quantityTask?: InputMaybe<Scalars['Int']['input']>;
  rescued?: InputMaybe<Scalars['Boolean']['input']>;
  taskTypeHostId?: InputMaybe<Scalars['Int']['input']>;
  taskUserHostId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateTaskUserSpectatorArgs = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  dateTask?: InputMaybe<Scalars['String']['input']>;
  quantityCompleted?: InputMaybe<Scalars['Int']['input']>;
  quantityTask?: InputMaybe<Scalars['Int']['input']>;
  rescued?: InputMaybe<Scalars['Boolean']['input']>;
  taskTypeSpectatorId?: InputMaybe<Scalars['Int']['input']>;
  taskUserSpectatorId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateTaskUserSpectatorDashboardArgs = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  dateTask?: InputMaybe<Scalars['String']['input']>;
  quantityCompleted?: InputMaybe<Scalars['Int']['input']>;
  quantityTask?: InputMaybe<Scalars['Int']['input']>;
  rescued?: InputMaybe<Scalars['Boolean']['input']>;
  taskTypeSpectatorId?: InputMaybe<Scalars['Int']['input']>;
  taskUserSpectatorId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserAdministratorProfileArgs = {
  canAcceptOnSeat?: InputMaybe<Scalars['Boolean']['input']>;
  canChangeRoomTheme?: InputMaybe<Scalars['Boolean']['input']>;
  canCloseAllAudio?: InputMaybe<Scalars['Boolean']['input']>;
  canCloseAudio?: InputMaybe<Scalars['Boolean']['input']>;
  canCloseHostAudio?: InputMaybe<Scalars['Boolean']['input']>;
  canCloseVideo?: InputMaybe<Scalars['Boolean']['input']>;
  canMute?: InputMaybe<Scalars['Boolean']['input']>;
  canPlaySongs?: InputMaybe<Scalars['Boolean']['input']>;
  canPreventSeatLive?: InputMaybe<Scalars['Boolean']['input']>;
  canRemoveAllFromSeat?: InputMaybe<Scalars['Boolean']['input']>;
  canRemoveFromLive?: InputMaybe<Scalars['Boolean']['input']>;
  canRemoveFromSeat?: InputMaybe<Scalars['Boolean']['input']>;
  userAdministratorProfileId: Scalars['Int']['input'];
  userHostId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserAdministratorProfileActivityArgs = {
  typeActivity?: InputMaybe<TypeActivity>;
  userAdministratorProfileActivityId: Scalars['Int']['input'];
  userAdministratorProfileId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserAdministratorProfileActivityDashboardArgs = {
  typeActivity?: InputMaybe<TypeActivity>;
  userAdministratorProfileActivityId: Scalars['Int']['input'];
  userAdministratorProfileId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserAdministratorProfileDashboardArgs = {
  canAcceptOnSeat?: InputMaybe<Scalars['Boolean']['input']>;
  canChangeRoomTheme?: InputMaybe<Scalars['Boolean']['input']>;
  canCloseAllAudio?: InputMaybe<Scalars['Boolean']['input']>;
  canCloseAudio?: InputMaybe<Scalars['Boolean']['input']>;
  canCloseHostAudio?: InputMaybe<Scalars['Boolean']['input']>;
  canCloseVideo?: InputMaybe<Scalars['Boolean']['input']>;
  canMute?: InputMaybe<Scalars['Boolean']['input']>;
  canPlaySongs?: InputMaybe<Scalars['Boolean']['input']>;
  canPreventSeatLive?: InputMaybe<Scalars['Boolean']['input']>;
  canRemoveAllFromSeat?: InputMaybe<Scalars['Boolean']['input']>;
  canRemoveFromLive?: InputMaybe<Scalars['Boolean']['input']>;
  canRemoveFromSeat?: InputMaybe<Scalars['Boolean']['input']>;
  userAdministratorId?: InputMaybe<Scalars['Int']['input']>;
  userAdministratorProfileId: Scalars['Int']['input'];
  userHostId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserAppUidArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  lastAppUid?: InputMaybe<Scalars['Int']['input']>;
  userAppUidId: Scalars['Int']['input'];
};


export type MutationUpdateUserAppUidDashboardArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  lastAppUid?: InputMaybe<Scalars['Int']['input']>;
  userAppUidId: Scalars['Int']['input'];
};


export type MutationUpdateUserBadgeArgs = {
  badgeId?: InputMaybe<Scalars['Int']['input']>;
  expiresIn?: InputMaybe<Scalars['String']['input']>;
  inUse?: InputMaybe<Scalars['Boolean']['input']>;
  typeLocaleBadge?: InputMaybe<TypeLocaleBadge>;
  userBadgeId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserBadgeDashboardArgs = {
  badgeId?: InputMaybe<Scalars['Int']['input']>;
  expiresIn?: InputMaybe<Scalars['String']['input']>;
  inUse?: InputMaybe<Scalars['Boolean']['input']>;
  typeLocaleBadge?: InputMaybe<TypeLocaleBadge>;
  userBadgeId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserBalanceBeanDashboardArgs = {
  beansAfter?: InputMaybe<Scalars['Float']['input']>;
  beansBefore?: InputMaybe<Scalars['Float']['input']>;
  dateHourBalance?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  typeUserBalanceBeans?: InputMaybe<TypeUserBalanceBeans>;
  userBalanceBeanId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserBalanceBeansArgs = {
  beansAfter?: InputMaybe<Scalars['Float']['input']>;
  beansBefore?: InputMaybe<Scalars['Float']['input']>;
  dateHourBalance?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  typeUserBalanceBeans?: InputMaybe<TypeUserBalanceBeans>;
  userBalanceBeansId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserBalanceCoinDashboardArgs = {
  coinsAfter?: InputMaybe<Scalars['Float']['input']>;
  coinsBefore?: InputMaybe<Scalars['Float']['input']>;
  dateHourBalance?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  typeUserBalanceCoins?: InputMaybe<TypeUserBalanceCoins>;
  userBalanceCoinId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserBalanceCoinsArgs = {
  coinsAfter?: InputMaybe<Scalars['Float']['input']>;
  coinsBefore?: InputMaybe<Scalars['Float']['input']>;
  dateHourBalance?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  typeUserBalanceCoins?: InputMaybe<TypeUserBalanceCoins>;
  userBalanceCoinsId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserBalancePointDashboardArgs = {
  dateHourBalance?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  pointsAfter?: InputMaybe<Scalars['Float']['input']>;
  pointsBefore?: InputMaybe<Scalars['Float']['input']>;
  typeUserBalancePoints?: InputMaybe<TypeUserBalancePoints>;
  userBalancePointId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserBalancePointsArgs = {
  dateHourBalance?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  pointsAfter?: InputMaybe<Scalars['Float']['input']>;
  pointsBefore?: InputMaybe<Scalars['Float']['input']>;
  typeUserBalancePoints?: InputMaybe<TypeUserBalancePoints>;
  userBalancePointsId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserBannedArgs = {
  banDate?: InputMaybe<Scalars['String']['input']>;
  banExpiryDate?: InputMaybe<Scalars['String']['input']>;
  reasonForBan?: InputMaybe<Scalars['String']['input']>;
  userBannedId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserBannedDashboardArgs = {
  banDate?: InputMaybe<Scalars['String']['input']>;
  banExpiryDate?: InputMaybe<Scalars['String']['input']>;
  reasonForBan?: InputMaybe<Scalars['String']['input']>;
  userBannedId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserBannedDetailArgs = {
  proof?: InputMaybe<Scalars['String']['input']>;
  userBannedDetailId: Scalars['Int']['input'];
  userBannedId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserBannedDetailDashboardArgs = {
  proof?: InputMaybe<Scalars['String']['input']>;
  userBannedDetailId: Scalars['Int']['input'];
  userBannedId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserBlockedDashboardArgs = {
  blockedId?: InputMaybe<Scalars['Int']['input']>;
  userBlockedId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserDashboardArgs = {
  appId?: InputMaybe<Scalars['String']['input']>;
  appleId?: InputMaybe<Scalars['String']['input']>;
  appleToken?: InputMaybe<Scalars['String']['input']>;
  beans?: InputMaybe<Scalars['Float']['input']>;
  biography?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['String']['input']>;
  coins?: InputMaybe<Scalars['Float']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  countryShow?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailCode?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  fakeUser?: InputMaybe<Scalars['Boolean']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  invitationCode?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  online?: InputMaybe<Scalars['Boolean']['input']>;
  onlineLive?: InputMaybe<Scalars['Boolean']['input']>;
  onlineOtherLive?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  processingQueueId?: InputMaybe<Scalars['Int']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  smsCode?: InputMaybe<Scalars['String']['input']>;
  twoFactorEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  userId: Scalars['Int']['input'];
  userNotReturnModTimesLuckSurpriseBox?: InputMaybe<Scalars['String']['input']>;
  userSentReturnTimeLuckCoin?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  utc?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateUserDetailArgs = {
  alreadyChangedBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  alreadyChangedCountry?: InputMaybe<Scalars['Boolean']['input']>;
  alreadyChangedSex?: InputMaybe<Scalars['Boolean']['input']>;
  familyId?: InputMaybe<Scalars['Int']['input']>;
  userDetailId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserDetailDashboardArgs = {
  alreadyChangedBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  alreadyChangedCountry?: InputMaybe<Scalars['Boolean']['input']>;
  alreadyChangedSex?: InputMaybe<Scalars['Boolean']['input']>;
  familyId?: InputMaybe<Scalars['Int']['input']>;
  userDetailId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserDeviceInformationArgs = {
  baseOs?: InputMaybe<Scalars['String']['input']>;
  bootLoader?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
  buildNumber?: InputMaybe<Scalars['String']['input']>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  installationDevice?: InputMaybe<Scalars['Boolean']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  isCameraPresent?: InputMaybe<Scalars['String']['input']>;
  mac?: InputMaybe<Scalars['String']['input']>;
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  networkOperator?: InputMaybe<Scalars['String']['input']>;
  systemVersion?: InputMaybe<Scalars['String']['input']>;
  uniqueId?: InputMaybe<Scalars['String']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
  userDeviceInformationId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserDeviceInformationDashboardArgs = {
  baseOs?: InputMaybe<Scalars['String']['input']>;
  bootLoader?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
  buildNumber?: InputMaybe<Scalars['String']['input']>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  installationDevice?: InputMaybe<Scalars['Boolean']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  isCameraPresent?: InputMaybe<Scalars['String']['input']>;
  mac?: InputMaybe<Scalars['String']['input']>;
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  networkOperator?: InputMaybe<Scalars['String']['input']>;
  systemVersion?: InputMaybe<Scalars['String']['input']>;
  uniqueId?: InputMaybe<Scalars['String']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
  userDeviceInformationId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserFollowerDashboardArgs = {
  followerId?: InputMaybe<Scalars['Int']['input']>;
  userFollowerId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserFollowingDashboardArgs = {
  followingId?: InputMaybe<Scalars['Int']['input']>;
  userFollowingId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserGiftPackageArgs = {
  giftId?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  userGiftPackageId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserGiftPackageDashboardArgs = {
  giftId?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  userGiftPackageId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserLevelArgs = {
  levelHostExperience?: InputMaybe<Scalars['Int']['input']>;
  levelHostId?: InputMaybe<Scalars['Int']['input']>;
  levelSpectatorExperience?: InputMaybe<Scalars['Int']['input']>;
  levelSpectatorId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userLevelId: Scalars['Int']['input'];
};


export type MutationUpdateUserLevelDashboardArgs = {
  levelHostExperience?: InputMaybe<Scalars['Int']['input']>;
  levelHostId?: InputMaybe<Scalars['Int']['input']>;
  levelSpectatorExperience?: InputMaybe<Scalars['Int']['input']>;
  levelSpectatorId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userLevelId: Scalars['Int']['input'];
};


export type MutationUpdateUserLiveSettingArgs = {
  liveId?: InputMaybe<Scalars['Int']['input']>;
  playAllSpecialEffectEntrance?: InputMaybe<Scalars['Boolean']['input']>;
  playAllSpecialEffectGift?: InputMaybe<Scalars['Boolean']['input']>;
  playAllSpecialEffectLuckGift?: InputMaybe<Scalars['Boolean']['input']>;
  playModeRecordGift?: InputMaybe<Scalars['Boolean']['input']>;
  playNotificationGiftSentPushCountry?: InputMaybe<Scalars['Boolean']['input']>;
  playNotificationGiftSentPushLive?: InputMaybe<Scalars['Boolean']['input']>;
  playSoundEffects?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateUserLiveSettingDashboardArgs = {
  liveId?: InputMaybe<Scalars['Int']['input']>;
  playSoundEffects?: InputMaybe<Scalars['Boolean']['input']>;
  playSpecialEffects?: InputMaybe<Scalars['Boolean']['input']>;
  playSpecialEffectsEntrance?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userLiveSettingId: Scalars['Int']['input'];
};


export type MutationUpdateUserNotificationDashboardArgs = {
  receiveEmailNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  receiveEventsNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  receiveGeneralNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  receiveGiftNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  receivePushNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  receiveSmsNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  receiveUsersNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userNotificationId: Scalars['Int']['input'];
};


export type MutationUpdateUserPhotoDashboardArgs = {
  photo?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userPhotoId: Scalars['Int']['input'];
};


export type MutationUpdateUserPrivacyDashboardArgs = {
  invisibleGiftGiver?: InputMaybe<Scalars['Boolean']['input']>;
  invisibleVisitor?: InputMaybe<Scalars['Boolean']['input']>;
  showFollowers?: InputMaybe<Scalars['Boolean']['input']>;
  showFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  showMyGiftGivers?: InputMaybe<Scalars['Boolean']['input']>;
  showRechargeRanking?: InputMaybe<Scalars['Boolean']['input']>;
  showSpectatorRanking?: InputMaybe<Scalars['Boolean']['input']>;
  showStreamerRanking?: InputMaybe<Scalars['Boolean']['input']>;
  showSuperFans?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userPrivacyId: Scalars['Int']['input'];
};


export type MutationUpdateUserProcessingQueueArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  processingQueueId?: InputMaybe<Scalars['Int']['input']>;
  userProcessingQueueId: Scalars['Int']['input'];
};


export type MutationUpdateUserProcessingQueueDashboardArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  processingQueueId?: InputMaybe<Scalars['Int']['input']>;
  userProcessingQueueId: Scalars['Int']['input'];
};


export type MutationUpdateUserSuperFanDashboardArgs = {
  superFanId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userSuperFanId: Scalars['Int']['input'];
};


export type MutationUpdateUserVipArgs = {
  datePurchased?: InputMaybe<Scalars['String']['input']>;
  expiresIn?: InputMaybe<Scalars['String']['input']>;
  platformVipBonus?: InputMaybe<Scalars['Boolean']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  pointsLeft?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userVipId: Scalars['Int']['input'];
  vipId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserVipDashboardArgs = {
  datePurchased?: InputMaybe<Scalars['String']['input']>;
  expiresIn?: InputMaybe<Scalars['String']['input']>;
  platformVipBonus?: InputMaybe<Scalars['Boolean']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  pointsLeft?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userVipId: Scalars['Int']['input'];
  vipId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserVisitProfileDashboardArgs = {
  date?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userVisitProfileId: Scalars['Int']['input'];
  visitId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserWarningArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
  userWarningId: Scalars['Int']['input'];
  warningDate?: InputMaybe<Scalars['String']['input']>;
  warningExpiryDate?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateUserWarningDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
  userWarningId: Scalars['Int']['input'];
  warningDate?: InputMaybe<Scalars['String']['input']>;
  warningExpiryDate?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateUserWarningDetailArgs = {
  proof?: InputMaybe<Scalars['String']['input']>;
  userWarningDetailId: Scalars['Int']['input'];
  userWarningId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserWarningDetailDashboardArgs = {
  proof?: InputMaybe<Scalars['String']['input']>;
  userWarningDetailId: Scalars['Int']['input'];
  userWarningId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateVipArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  dateLastActive?: InputMaybe<Scalars['String']['input']>;
  dateLastDelete?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  vipId: Scalars['ID']['input'];
};


export type MutationUpdateVipBenefitArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  vipBenefitId: Scalars['Int']['input'];
};


export type MutationUpdateVipBenefitDashboardArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  typeVipBenefit?: InputMaybe<TypeVipBenefit>;
  vipBenefitId: Scalars['Int']['input'];
};


export type MutationUpdateVipBenefitDetailArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  vipBenefitDetailId?: InputMaybe<Scalars['Int']['input']>;
  vipBenefitId?: InputMaybe<Scalars['Int']['input']>;
  vipId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateVipBenefitDetailDashboardArgs = {
  vipBenefitDetailId: Scalars['Int']['input'];
  vipBenefitId?: InputMaybe<Scalars['Int']['input']>;
  vipId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateVipDashboardArgs = {
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  vipId: Scalars['Int']['input'];
  vipLevel?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateWalletCoinSaleArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  quantityCoins?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  valueCurrency?: InputMaybe<Scalars['Float']['input']>;
  valueUsd?: InputMaybe<Scalars['Int']['input']>;
  walletCoinSaleId: Scalars['Int']['input'];
  walletPriceCoinId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateWalletCoinSaleDashboardArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  quantityCoins?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  valueCurrency?: InputMaybe<Scalars['Float']['input']>;
  valueUsd?: InputMaybe<Scalars['Int']['input']>;
  walletCoinSaleId: Scalars['Int']['input'];
  walletPriceCoinId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateWalletConvertArgs = {
  quantityCoins?: InputMaybe<Scalars['Float']['input']>;
  quantityPoints?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  walletConvertId: Scalars['Int']['input'];
  walletTypeConvertId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateWalletConvertDashboardArgs = {
  quantityCoins?: InputMaybe<Scalars['Float']['input']>;
  quantityPoints?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  walletConvertId: Scalars['Int']['input'];
  walletTypeConvertId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateWalletPriceCoinArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  quantityCoins?: InputMaybe<Scalars['Float']['input']>;
  valueCurrency?: InputMaybe<Scalars['Float']['input']>;
  valueUsd?: InputMaybe<Scalars['Int']['input']>;
  walletPriceCoinId: Scalars['Int']['input'];
};


export type MutationUpdateWalletPriceCoinDashboardArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  quantityCoins?: InputMaybe<Scalars['Float']['input']>;
  valueCurrency?: InputMaybe<Scalars['Float']['input']>;
  valueUsd?: InputMaybe<Scalars['Int']['input']>;
  walletPriceCoinId: Scalars['Int']['input'];
};


export type MutationUpdateWalletTypeConvertArgs = {
  quantityCoins?: InputMaybe<Scalars['Float']['input']>;
  quantityPoints?: InputMaybe<Scalars['Float']['input']>;
  walletTypeConvertId: Scalars['Int']['input'];
};


export type MutationUpdateWalletTypeConvertDashboardArgs = {
  quantityCoins?: InputMaybe<Scalars['Float']['input']>;
  quantityPoints?: InputMaybe<Scalars['Float']['input']>;
  walletTypeConvertId: Scalars['Int']['input'];
};


export type MutationUpdateWithdrawalArgs = {
  codeWithdrawal?: InputMaybe<Scalars['String']['input']>;
  dateWithdrawal?: InputMaybe<Scalars['String']['input']>;
  paymentAgentId?: InputMaybe<Scalars['Int']['input']>;
  typeWithdrawalStatus?: InputMaybe<TypeWithdrawalStatus>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  valueCurrency?: InputMaybe<Scalars['Float']['input']>;
  valuePoints?: InputMaybe<Scalars['Float']['input']>;
  valueUsd?: InputMaybe<Scalars['Float']['input']>;
  withdrawalId: Scalars['Int']['input'];
  withdrawalMethodDataUserId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateWithdrawalDashboardArgs = {
  codeWithdrawal?: InputMaybe<Scalars['String']['input']>;
  dateWithdrawal?: InputMaybe<Scalars['String']['input']>;
  paymentAgentId?: InputMaybe<Scalars['Int']['input']>;
  typeWithdrawalStatus?: InputMaybe<TypeWithdrawalStatus>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  valueCurrency?: InputMaybe<Scalars['Float']['input']>;
  valuePoints?: InputMaybe<Scalars['Float']['input']>;
  valueUsd?: InputMaybe<Scalars['Float']['input']>;
  withdrawalId: Scalars['Int']['input'];
  withdrawalMethodDataUserId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateWithdrawalMethodArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  taxPercentPayment?: InputMaybe<Scalars['Int']['input']>;
  timePayment?: InputMaybe<Scalars['String']['input']>;
  typeWithdrawalMethodTypePayment?: InputMaybe<TypeWithdrawalMethodTypePayment>;
  withdrawalMethodId: Scalars['Int']['input'];
};


export type MutationUpdateWithdrawalMethodDashboardArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  taxPercentPayment?: InputMaybe<Scalars['Int']['input']>;
  timePayment?: InputMaybe<Scalars['String']['input']>;
  typeWithdrawalMethodTypePayment?: InputMaybe<TypeWithdrawalMethodTypePayment>;
  withdrawalMethodId: Scalars['Int']['input'];
};


export type MutationUpdateWithdrawalMethodDataUserArgs = {
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankAgencyNumber?: InputMaybe<Scalars['String']['input']>;
  bankDocument?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  bankNumber?: InputMaybe<Scalars['String']['input']>;
  binanceKey?: InputMaybe<Scalars['String']['input']>;
  binding?: InputMaybe<Scalars['Boolean']['input']>;
  bindingDate?: InputMaybe<Scalars['String']['input']>;
  paypalEmail?: InputMaybe<Scalars['String']['input']>;
  pixKey?: InputMaybe<Scalars['String']['input']>;
  pixName?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  withdrawalMethodDataUserId: Scalars['Int']['input'];
};


export type MutationUpdateWithdrawalMethodDataUserDashboardArgs = {
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankAgencyNumber?: InputMaybe<Scalars['String']['input']>;
  bankDocument?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  bankNumber?: InputMaybe<Scalars['String']['input']>;
  binanceKey?: InputMaybe<Scalars['String']['input']>;
  binding?: InputMaybe<Scalars['Boolean']['input']>;
  bindingDate?: InputMaybe<Scalars['String']['input']>;
  paypalEmail?: InputMaybe<Scalars['String']['input']>;
  pixKey?: InputMaybe<Scalars['String']['input']>;
  pixName?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  withdrawalMethodDataUserId: Scalars['Int']['input'];
  withdrawalMethodId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateWithdrawalProofArgs = {
  image?: InputMaybe<Scalars['String']['input']>;
  withdrawalId?: InputMaybe<Scalars['Int']['input']>;
  withdrawalProofId: Scalars['Int']['input'];
};


export type MutationUpdateWithdrawalProofDashboardArgs = {
  image?: InputMaybe<Scalars['String']['input']>;
  withdrawalId?: InputMaybe<Scalars['Int']['input']>;
  withdrawalProofId: Scalars['Int']['input'];
};


export type MutationUpdateWithdrawalTypeRefusedArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  withdrawalTypeRefusedId: Scalars['Int']['input'];
};


export type MutationUpdateWithdrawalTypeRefusedDashboardArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  withdrawalMethodId?: InputMaybe<Scalars['Int']['input']>;
  withdrawalTypeRefusedId: Scalars['Int']['input'];
};


export type MutationValidateCodeArgs = {
  code: Scalars['String']['input'];
};


export type MutationValidateEmailCodeArgs = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
};


export type MutationValidateSmsCodeArgs = {
  action: Scalars['String']['input'];
  code: Scalars['String']['input'];
  country: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationVisitProfileArgs = {
  targetId: Scalars['Int']['input'];
};

export type Notifications = {
  __typename?: 'Notifications';
  receiveEmailNotifications?: Maybe<Scalars['Boolean']['output']>;
  receiveEventsNotifications?: Maybe<Scalars['Boolean']['output']>;
  receiveGeneralNotifications?: Maybe<Scalars['Boolean']['output']>;
  receiveGiftNotifications?: Maybe<Scalars['Boolean']['output']>;
  receivePushNotifications?: Maybe<Scalars['Boolean']['output']>;
  receiveSmsNotifications?: Maybe<Scalars['Boolean']['output']>;
  receiveUsersNotifications?: Maybe<Scalars['Boolean']['output']>;
};

export type NotificationsReturn = {
  __typename?: 'NotificationsReturn';
  data?: Maybe<Notifications>;
  error?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type NotifyGiftQuantitySent = {
  __typename?: 'NotifyGiftQuantitySent';
  totalGiftSent?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userPhoto?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type NotifyGiftSent = {
  __typename?: 'NotifyGiftSent';
  country?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  message?: Maybe<OptionsType>;
};

export type NotifyGiftSentQuantityReturn = {
  __typename?: 'NotifyGiftSentQuantityReturn';
  data?: Maybe<NotifyGiftQuantitySent>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type NotifyGiftSentReturn = {
  __typename?: 'NotifyGiftSentReturn';
  data?: Maybe<NotifyGiftSent>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type NotifyLiveGiftAnimation = {
  __typename?: 'NotifyLiveGiftAnimation';
  data?: Maybe<LiveGiftsAnimations>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type OptionsInput = {
  chat?: InputMaybe<Scalars['String']['input']>;
  middle?: InputMaybe<Scalars['String']['input']>;
  topGlobal?: InputMaybe<Scalars['String']['input']>;
  topLocal?: InputMaybe<Scalars['String']['input']>;
  topSameCountry?: InputMaybe<Scalars['String']['input']>;
};

export type OptionsType = {
  __typename?: 'OptionsType';
  chat?: Maybe<Scalars['String']['output']>;
  middle?: Maybe<Scalars['String']['output']>;
  topGlobal?: Maybe<Scalars['String']['output']>;
  topLocal?: Maybe<Scalars['String']['output']>;
  topSameCountry?: Maybe<Scalars['String']['output']>;
};

export type OwnerUser = {
  __typename?: 'OwnerUser';
  appId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type PaymentAgent = {
  __typename?: 'PaymentAgent';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  online: Scalars['Boolean']['output'];
  scorePayment: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type PaymentAgentDashboard = {
  __typename?: 'PaymentAgentDashboard';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  online: Scalars['Boolean']['output'];
  scorePayment: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type PaymentAgentDashboardReturn = {
  __typename?: 'PaymentAgentDashboardReturn';
  data?: Maybe<PaymentAgentDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PaymentAgentDashboardReturnList = {
  __typename?: 'PaymentAgentDashboardReturnList';
  data?: Maybe<Array<Maybe<PaymentAgentDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PaymentAgentPaid = {
  __typename?: 'PaymentAgentPaid';
  codeWithdrawal: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dateStatus: Scalars['String']['output'];
  dateWithdrawal: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  paymentAgent?: Maybe<PaymentAgent>;
  paymentAgentId: Scalars['Int']['output'];
  timeLeft: Scalars['String']['output'];
  typeWithdrawalStatus: TypeWithdrawalStatus;
  updatedAt: Scalars['String']['output'];
  valueCurrency: Scalars['Float']['output'];
  valuePointsEarnings: Scalars['Float']['output'];
  valuePointsToPay: Scalars['Float']['output'];
  valuePointsTotal: Scalars['Float']['output'];
  valueUsd: Scalars['Int']['output'];
  withdrawal?: Maybe<Withdrawal>;
  withdrawalId: Scalars['Int']['output'];
};

export type PaymentAgentPaidDashboard = {
  __typename?: 'PaymentAgentPaidDashboard';
  codeWithdrawal: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dateStatus: Scalars['String']['output'];
  dateWithdrawal: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  paymentAgent?: Maybe<PaymentAgentDashboard>;
  paymentAgentId: Scalars['Int']['output'];
  timeLeft: Scalars['String']['output'];
  typeWithdrawalStatus: TypeWithdrawalStatus;
  updatedAt: Scalars['String']['output'];
  valueCurrency: Scalars['Float']['output'];
  valuePointsEarnings: Scalars['Float']['output'];
  valuePointsToPay: Scalars['Float']['output'];
  valuePointsTotal: Scalars['Float']['output'];
  valueUsd: Scalars['Int']['output'];
  withdrawal?: Maybe<WithdrawalDashboard>;
  withdrawalId: Scalars['Int']['output'];
};

export type PaymentAgentPaidDashboardReturn = {
  __typename?: 'PaymentAgentPaidDashboardReturn';
  data?: Maybe<PaymentAgentPaidDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PaymentAgentPaidDashboardReturnList = {
  __typename?: 'PaymentAgentPaidDashboardReturnList';
  data?: Maybe<Array<Maybe<PaymentAgentPaidDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PaymentAgentPaidReturn = {
  __typename?: 'PaymentAgentPaidReturn';
  data?: Maybe<PaymentAgentPaid>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PaymentAgentPaidReturnList = {
  __typename?: 'PaymentAgentPaidReturnList';
  data?: Maybe<Array<Maybe<PaymentAgentPaid>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PaymentAgentReturn = {
  __typename?: 'PaymentAgentReturn';
  data?: Maybe<PaymentAgent>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PaymentAgentReturnList = {
  __typename?: 'PaymentAgentReturnList';
  data?: Maybe<Array<Maybe<PaymentAgent>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Photo = {
  __typename?: 'Photo';
  active?: Maybe<Scalars['Boolean']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type PlatformSellerForAgency = {
  __typename?: 'PlatformSellerForAgency';
  agency?: Maybe<Agency>;
  agencyId: Scalars['Int']['output'];
  coins: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
};

export type PlatformSellerForAgencyDashboard = {
  __typename?: 'PlatformSellerForAgencyDashboard';
  agency?: Maybe<AgencyDashboard>;
  agencyId: Scalars['Int']['output'];
  coins: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
};

export type PlatformSellerForAgencyDashboardReturn = {
  __typename?: 'PlatformSellerForAgencyDashboardReturn';
  data?: Maybe<PlatformSellerForAgencyDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PlatformSellerForAgencyDashboardReturnList = {
  __typename?: 'PlatformSellerForAgencyDashboardReturnList';
  data?: Maybe<Array<Maybe<PlatformSellerForAgencyDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PlatformSellerForAgencyPrice = {
  __typename?: 'PlatformSellerForAgencyPrice';
  coinsPerUsd: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  usdFinal: Scalars['Float']['output'];
  usdInitial: Scalars['Float']['output'];
};

export type PlatformSellerForAgencyPriceDashboard = {
  __typename?: 'PlatformSellerForAgencyPriceDashboard';
  coinsPerUsd: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  usdFinal: Scalars['Float']['output'];
  usdInitial: Scalars['Float']['output'];
};

export type PlatformSellerForAgencyPriceDashboardReturn = {
  __typename?: 'PlatformSellerForAgencyPriceDashboardReturn';
  data?: Maybe<PlatformSellerForAgencyPriceDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PlatformSellerForAgencyPriceDashboardReturnList = {
  __typename?: 'PlatformSellerForAgencyPriceDashboardReturnList';
  data?: Maybe<Array<Maybe<PlatformSellerForAgencyPriceDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PlatformSellerForAgencyPriceReturn = {
  __typename?: 'PlatformSellerForAgencyPriceReturn';
  data?: Maybe<PlatformSellerForAgencyPrice>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PlatformSellerForAgencyPriceReturnList = {
  __typename?: 'PlatformSellerForAgencyPriceReturnList';
  data?: Maybe<Array<Maybe<PlatformSellerForAgencyPrice>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PlatformSellerForAgencyProof = {
  __typename?: 'PlatformSellerForAgencyProof';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  platformSellerForAgency?: Maybe<PlatformSellerForAgency>;
  platformSellerForAgencyId: Scalars['Int']['output'];
  proof: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type PlatformSellerForAgencyProofDashboard = {
  __typename?: 'PlatformSellerForAgencyProofDashboard';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  platformSellerForAgency?: Maybe<PlatformSellerForAgencyDashboard>;
  platformSellerForAgencyId: Scalars['Int']['output'];
  proof: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type PlatformSellerForAgencyProofDashboardReturn = {
  __typename?: 'PlatformSellerForAgencyProofDashboardReturn';
  data?: Maybe<PlatformSellerForAgencyProofDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PlatformSellerForAgencyProofDashboardReturnList = {
  __typename?: 'PlatformSellerForAgencyProofDashboardReturnList';
  data?: Maybe<Array<Maybe<PlatformSellerForAgencyProofDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PlatformSellerForAgencyProofReturn = {
  __typename?: 'PlatformSellerForAgencyProofReturn';
  data?: Maybe<PlatformSellerForAgencyProof>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PlatformSellerForAgencyProofReturnList = {
  __typename?: 'PlatformSellerForAgencyProofReturnList';
  data?: Maybe<Array<Maybe<PlatformSellerForAgencyProof>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PlatformSellerForAgencyReturn = {
  __typename?: 'PlatformSellerForAgencyReturn';
  data?: Maybe<PlatformSellerForAgency>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PlatformSellerForAgencyReturnList = {
  __typename?: 'PlatformSellerForAgencyReturnList';
  data?: Maybe<Array<Maybe<PlatformSellerForAgency>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PlatformSellerForUser = {
  __typename?: 'PlatformSellerForUser';
  coins: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type PlatformSellerForUserDashboard = {
  __typename?: 'PlatformSellerForUserDashboard';
  coins: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type PlatformSellerForUserDashboardReturn = {
  __typename?: 'PlatformSellerForUserDashboardReturn';
  data?: Maybe<PlatformSellerForUserDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PlatformSellerForUserDashboardReturnList = {
  __typename?: 'PlatformSellerForUserDashboardReturnList';
  data?: Maybe<Array<Maybe<PlatformSellerForUserDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PlatformSellerForUserPrice = {
  __typename?: 'PlatformSellerForUserPrice';
  coinsPerUsd: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  usdFinal: Scalars['Float']['output'];
  usdInitial: Scalars['Float']['output'];
};

export type PlatformSellerForUserPriceDashboard = {
  __typename?: 'PlatformSellerForUserPriceDashboard';
  coinsPerUsd: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  usdFinal: Scalars['Float']['output'];
  usdInitial: Scalars['Float']['output'];
};

export type PlatformSellerForUserPriceDashboardReturn = {
  __typename?: 'PlatformSellerForUserPriceDashboardReturn';
  data?: Maybe<PlatformSellerForUserPriceDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PlatformSellerForUserPriceDashboardReturnList = {
  __typename?: 'PlatformSellerForUserPriceDashboardReturnList';
  data?: Maybe<Array<Maybe<PlatformSellerForUserPriceDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PlatformSellerForUserPriceReturn = {
  __typename?: 'PlatformSellerForUserPriceReturn';
  data?: Maybe<PlatformSellerForUserPrice>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PlatformSellerForUserPriceReturnList = {
  __typename?: 'PlatformSellerForUserPriceReturnList';
  data?: Maybe<Array<Maybe<PlatformSellerForUserPrice>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PlatformSellerForUserReturn = {
  __typename?: 'PlatformSellerForUserReturn';
  data?: Maybe<PlatformSellerForUser>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PlatformSellerForUserReturnList = {
  __typename?: 'PlatformSellerForUserReturnList';
  data?: Maybe<Array<Maybe<PlatformSellerForUser>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PointsInput = {
  userId?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

export type Post = {
  __typename?: 'Post';
  comments?: Maybe<Array<Maybe<Comment>>>;
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  date: Scalars['String']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  likes?: Maybe<Array<Maybe<Like>>>;
  photo?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type PostComment = {
  __typename?: 'PostComment';
  comment: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  date: Scalars['String']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  post?: Maybe<Post>;
  postId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type PostCommentDashboard = {
  __typename?: 'PostCommentDashboard';
  comment: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  date: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  post?: Maybe<PostDashboard>;
  postId: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type PostCommentDashboardReturn = {
  __typename?: 'PostCommentDashboardReturn';
  data?: Maybe<PostCommentDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PostCommentDashboardReturnList = {
  __typename?: 'PostCommentDashboardReturnList';
  data?: Maybe<Array<Maybe<PostCommentDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PostCommentReturn = {
  __typename?: 'PostCommentReturn';
  data?: Maybe<PostComment>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PostCommentReturnList = {
  __typename?: 'PostCommentReturnList';
  data?: Maybe<Array<Maybe<PostComment>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PostDashboard = {
  __typename?: 'PostDashboard';
  active: Scalars['Boolean']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  date: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  photo: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type PostDashboardReturn = {
  __typename?: 'PostDashboardReturn';
  data?: Maybe<PostDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PostDashboardReturnList = {
  __typename?: 'PostDashboardReturnList';
  data?: Maybe<Array<Maybe<PostDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PostLike = {
  __typename?: 'PostLike';
  createdAt?: Maybe<Scalars['String']['output']>;
  date: Scalars['String']['output'];
  post?: Maybe<Post>;
  postId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type PostLikeDashboard = {
  __typename?: 'PostLikeDashboard';
  createdAt: Scalars['String']['output'];
  date: Scalars['String']['output'];
  post?: Maybe<PostDashboard>;
  postId: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type PostLikeDashboardReturn = {
  __typename?: 'PostLikeDashboardReturn';
  data?: Maybe<PostLikeDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PostLikeDashboardReturnList = {
  __typename?: 'PostLikeDashboardReturnList';
  data?: Maybe<Array<Maybe<PostLikeDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PostLikeReturn = {
  __typename?: 'PostLikeReturn';
  data?: Maybe<PostLike>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PostLikeReturnList = {
  __typename?: 'PostLikeReturnList';
  data?: Maybe<Array<Maybe<PostLike>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PostReturn = {
  __typename?: 'PostReturn';
  data?: Maybe<Post>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PostReturnList = {
  __typename?: 'PostReturnList';
  data?: Maybe<Array<Maybe<Post>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PostTag = {
  __typename?: 'PostTag';
  post?: Maybe<Post>;
  postId?: Maybe<Scalars['Int']['output']>;
  tag?: Maybe<Tag>;
  tagId?: Maybe<Scalars['Int']['output']>;
};

export type PostTagDashboard = {
  __typename?: 'PostTagDashboard';
  post?: Maybe<PostDashboard>;
  postId: Scalars['Int']['output'];
  tag?: Maybe<TagDashboard>;
  tagId: Scalars['Int']['output'];
};

export type PostTagDashboardReturn = {
  __typename?: 'PostTagDashboardReturn';
  data?: Maybe<PostTagDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PostTagDashboardReturnList = {
  __typename?: 'PostTagDashboardReturnList';
  data?: Maybe<Array<Maybe<PostTagDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PostTagReturn = {
  __typename?: 'PostTagReturn';
  data?: Maybe<PostTag>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PostTagReturnList = {
  __typename?: 'PostTagReturnList';
  data?: Maybe<Array<Maybe<PostTag>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Privacy = {
  __typename?: 'Privacy';
  invisibleGiftGiver?: Maybe<Scalars['Boolean']['output']>;
  invisibleVisitor?: Maybe<Scalars['Boolean']['output']>;
  showFollowers?: Maybe<Scalars['Boolean']['output']>;
  showFollowing?: Maybe<Scalars['Boolean']['output']>;
  showMyGiftGivers?: Maybe<Scalars['Boolean']['output']>;
  showRechargeRanking?: Maybe<Scalars['Boolean']['output']>;
  showSpectatorRanking?: Maybe<Scalars['Boolean']['output']>;
  showStreamerRanking?: Maybe<Scalars['Boolean']['output']>;
  showSuperFans?: Maybe<Scalars['Boolean']['output']>;
};

export type PrivacyReturn = {
  __typename?: 'PrivacyReturn';
  data?: Maybe<Privacy>;
  error?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type ProfileReturn = {
  __typename?: 'ProfileReturn';
  data?: Maybe<UserProfile>;
  error?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type ProfileVisitReturn = {
  __typename?: 'ProfileVisitReturn';
  data?: Maybe<Array<Maybe<VisitProfile>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type QuantityMessagesNotSeenReturn = {
  __typename?: 'QuantityMessagesNotSeenReturn';
  data?: Maybe<Scalars['Int']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  check?: Maybe<Scalars['String']['output']>;
  directDb?: Maybe<ProfileReturn>;
  getAccessAdministratorDashboard?: Maybe<AccessAdministratorDashboardReturn>;
  getAccessPartnerDashboard?: Maybe<AccessPartnerDashboardReturn>;
  getAccesssAdministratorsByDateDashboard?: Maybe<AccessAdministratorDashboardReturnList>;
  getAccesssAdministratorsDashboard?: Maybe<AccessAdministratorDashboardReturnList>;
  getAccesssPartnersByDateDashboard?: Maybe<AccessPartnerDashboardReturnList>;
  getAccesssPartnersDashboard?: Maybe<AccessPartnerDashboardReturnList>;
  getAgencies?: Maybe<AgencyReturnList>;
  getAgenciesBalancesPoints?: Maybe<AgencyBalancePointsReturnList>;
  getAgenciesBalancesPointsByDate?: Maybe<AgencyBalancePointsReturnList>;
  getAgenciesBalancesPointsByDateDashboard?: Maybe<AgencyBalancePointDashboardReturnList>;
  getAgenciesBalancesPointsByUserId?: Maybe<AgencyBalancePointsReturnList>;
  getAgenciesBalancesPointsByUserIdDashboard?: Maybe<AgencyBalancePointDashboardReturnList>;
  getAgenciesBalancesPointsDashboard?: Maybe<AgencyBalancePointDashboardReturnList>;
  getAgenciesBanneds?: Maybe<AgencyBannedReturnList>;
  getAgenciesBannedsByDate?: Maybe<AgencyBannedReturnList>;
  getAgenciesBannedsByDateDashboard?: Maybe<AgencyBannedDashboardReturnList>;
  getAgenciesBannedsDashboard?: Maybe<AgencyBannedDashboardReturnList>;
  getAgenciesBannedsDetails?: Maybe<AgencyBannedDetailReturnList>;
  getAgenciesBannedsDetailsByDate?: Maybe<AgencyBannedDetailReturnList>;
  getAgenciesBannedsDetailsByDateDashboard?: Maybe<AgencyBannedDetailDashboardReturnList>;
  getAgenciesBannedsDetailsDashboard?: Maybe<AgencyBannedDetailDashboardReturnList>;
  getAgenciesByDate?: Maybe<AgencyReturnList>;
  getAgenciesByDateDashboard?: Maybe<AgencyDashboardReturnList>;
  getAgenciesByUserId?: Maybe<AgencyReturnList>;
  getAgenciesByUserIdDashboard?: Maybe<AgencyDashboardReturnList>;
  getAgenciesDashboard?: Maybe<AgencyDashboardReturnList>;
  getAgenciesResellersBalancesCoinsByDateDashboard?: Maybe<AgencyResellerBalanceCoinDashboardReturnList>;
  getAgenciesResellersBalancesCoinsDashboard?: Maybe<AgencyResellerBalanceCoinDashboardReturnList>;
  getAgenciesSalesDetails?: Maybe<AgencySaleDetailReturnList>;
  getAgenciesSalesDetailsByDate?: Maybe<AgencySaleDetailReturnList>;
  getAgenciesSalesDetailsByDateDashboard?: Maybe<AgencySaleDetailDashboardReturnList>;
  getAgenciesSalesDetailsByUserId?: Maybe<AgencySaleDetailReturnList>;
  getAgenciesSalesDetailsByUserIdDashboard?: Maybe<AgencySaleDetailDashboardReturnList>;
  getAgenciesSalesDetailsDashboard?: Maybe<AgencySaleDetailDashboardReturnList>;
  getAgenciesUsers?: Maybe<AgencyUserReturnList>;
  getAgenciesUsersByDate?: Maybe<AgencyUserReturnList>;
  getAgenciesUsersByDateDashboard?: Maybe<AgencyUserDashboardReturnList>;
  getAgenciesUsersByUserId?: Maybe<AgencyUserReturnList>;
  getAgenciesUsersByUserIdDashboard?: Maybe<AgencyUserDashboardReturnList>;
  getAgenciesUsersDashboard?: Maybe<AgencyUserDashboardReturnList>;
  getAgenciesWarnings?: Maybe<AgencyWarningReturnList>;
  getAgenciesWarningsByDate?: Maybe<AgencyWarningReturnList>;
  getAgenciesWarningsByDateDashboard?: Maybe<AgencyWarningDashboardReturnList>;
  getAgenciesWarningsDashboard?: Maybe<AgencyWarningDashboardReturnList>;
  getAgenciesWarningsDetails?: Maybe<AgencyWarningDetailReturnList>;
  getAgenciesWarningsDetailsByDate?: Maybe<AgencyWarningDetailReturnList>;
  getAgenciesWarningsDetailsByDateDashboard?: Maybe<AgencyWarningDetailDashboardReturnList>;
  getAgenciesWarningsDetailsDashboard?: Maybe<AgencyWarningDetailDashboardReturnList>;
  getAgency?: Maybe<AgencyReturn>;
  getAgencyBalancePointDashboard?: Maybe<AgencyBalancePointDashboardReturn>;
  getAgencyBalancePointOneByUserIdDashboard?: Maybe<AgencyBalancePointDashboardReturn>;
  getAgencyBalancePoints?: Maybe<AgencyBalancePointsReturn>;
  getAgencyBalancePointsOneByUserId?: Maybe<AgencyBalancePointsReturn>;
  getAgencyBanned?: Maybe<AgencyBannedReturn>;
  getAgencyBannedDashboard?: Maybe<AgencyBannedDashboardReturn>;
  getAgencyBannedDetail?: Maybe<AgencyBannedDetailReturn>;
  getAgencyBannedDetailDashboard?: Maybe<AgencyBannedDetailDashboardReturn>;
  getAgencyDashboard?: Maybe<AgencyDashboardReturn>;
  getAgencyOneByUserId?: Maybe<AgencyReturn>;
  getAgencyOneByUserIdDashboard?: Maybe<AgencyDashboardReturn>;
  getAgencyResellerBalanceCoinDashboard?: Maybe<AgencyResellerBalanceCoinDashboardReturn>;
  getAgencySaleDetail?: Maybe<AgencySaleDetailReturn>;
  getAgencySaleDetailDashboard?: Maybe<AgencySaleDetailDashboardReturn>;
  getAgencySaleDetailOneByUserId?: Maybe<AgencySaleDetailReturn>;
  getAgencySaleDetailOneByUserIdDashboard?: Maybe<AgencySaleDetailDashboardReturn>;
  getAgencyUser?: Maybe<AgencyUserReturn>;
  getAgencyUserDashboard?: Maybe<AgencyUserDashboardReturn>;
  getAgencyUserOneByUserId?: Maybe<AgencyUserReturn>;
  getAgencyUserOneByUserIdDashboard?: Maybe<AgencyUserDashboardReturn>;
  getAgencyWarning?: Maybe<AgencyWarningReturn>;
  getAgencyWarningDashboard?: Maybe<AgencyWarningDashboardReturn>;
  getAgencyWarningDetail?: Maybe<AgencyWarningDetailReturn>;
  getAgencyWarningDetailDashboard?: Maybe<AgencyWarningDetailDashboardReturn>;
  getAnyProfile?: Maybe<ProfileReturn>;
  getAppLog?: Maybe<AppLogReturn>;
  getAppLogDashboard?: Maybe<AppLogDashboardReturn>;
  getAppLogOneByUserId?: Maybe<AppLogReturn>;
  getAppLogOneByUserIdDashboard?: Maybe<AppLogDashboardReturn>;
  getAppSetting?: Maybe<AppSettingReturn>;
  getAppSettingDashboard?: Maybe<AppSettingDashboardReturn>;
  getAppsLogs?: Maybe<AppLogReturnList>;
  getAppsLogsByDate?: Maybe<AppLogReturnList>;
  getAppsLogsByDateDashboard?: Maybe<AppLogDashboardReturnList>;
  getAppsLogsByUserId?: Maybe<AppLogReturnList>;
  getAppsLogsByUserIdDashboard?: Maybe<AppLogDashboardReturnList>;
  getAppsLogsDashboard?: Maybe<AppLogDashboardReturnList>;
  getAppsSettings?: Maybe<AppSettingReturnList>;
  getAppsSettingsByDate?: Maybe<AppSettingReturnList>;
  getAppsSettingsByDateDashboard?: Maybe<AppSettingDashboardReturnList>;
  getAppsSettingsDashboard?: Maybe<AppSettingDashboardReturnList>;
  getBadge?: Maybe<BadgeReturn>;
  getBadgeDashboard?: Maybe<BadgeDashboardReturn>;
  getBadges?: Maybe<BadgeReturnList>;
  getBadgesByDate?: Maybe<BadgeReturnList>;
  getBadgesByDateDashboard?: Maybe<BadgeDashboardReturnList>;
  getBadgesDashboard?: Maybe<BadgeDashboardReturnList>;
  getBannerLink?: Maybe<BannerLinkReturn>;
  getBannerLinkDashboard?: Maybe<BannerLinkDashboardReturn>;
  getBannersLinks?: Maybe<BannerLinkReturnList>;
  getBannersLinksByDate?: Maybe<BannerLinkReturnList>;
  getBannersLinksByDateDashboard?: Maybe<BannerLinkDashboardReturnList>;
  getBannersLinksDashboard?: Maybe<BannerLinkDashboardReturnList>;
  getChat?: Maybe<ChatReturn>;
  getChatDetail?: Maybe<ChatDetailReturn>;
  getChats?: Maybe<ChatReturnList>;
  getChatsByDate?: Maybe<ChatReturnList>;
  getChatsByUserId?: Maybe<ChatReturnList>;
  getChatsByUsername?: Maybe<ChatReturnList>;
  getChatsDetails?: Maybe<ChatDetailReturnList>;
  getChatsDetailsByChatId?: Maybe<ChatDetailReturnList>;
  getChatsDetailsByDate?: Maybe<ChatDetailReturnList>;
  getConfig?: Maybe<ConfigReturn>;
  getCountriesCodes?: Maybe<CountryCodeReturnList>;
  getCountriesCodesByDate?: Maybe<CountryCodeReturnList>;
  getCountriesCodesByDateDashboard?: Maybe<CountryCodeDashboardReturnList>;
  getCountriesCodesDashboard?: Maybe<CountryCodeDashboardReturnList>;
  getCountryCode?: Maybe<CountryCodeReturn>;
  getCountryCodeDashboard?: Maybe<CountryCodeDashboardReturn>;
  getDomainDashboard?: Maybe<DomainDashboardReturn>;
  getDomainsByDateDashboard?: Maybe<DomainDashboardReturnList>;
  getDomainsDashboard?: Maybe<DomainDashboardReturnList>;
  getEvent?: Maybe<EventReturn>;
  getEventDashboard?: Maybe<EventDashboardReturn>;
  getEventOneByUserId?: Maybe<EventReturn>;
  getEventOneByUserIdDashboard?: Maybe<EventDashboardReturn>;
  getEvents?: Maybe<EventReturnList>;
  getEventsByDate?: Maybe<EventReturnList>;
  getEventsByDateDashboard?: Maybe<EventDashboardReturnList>;
  getEventsByUserId?: Maybe<EventReturnList>;
  getEventsByUserIdDashboard?: Maybe<EventDashboardReturnList>;
  getEventsDashboard?: Maybe<EventDashboardReturnList>;
  getExampleOtherOneDashboard?: Maybe<ExampleOtherOneDashboardReturn>;
  getExampleOtherTwoDashboard?: Maybe<ExampleOtherTwoDashboardReturn>;
  getExampleTableDashboard?: Maybe<ExampleTableDashboardReturn>;
  getExamplesOthersOnesByDateDashboard?: Maybe<ExampleOtherOneDashboardReturnList>;
  getExamplesOthersOnesDashboard?: Maybe<ExampleOtherOneDashboardReturnList>;
  getExamplesOthersTwosByDateDashboard?: Maybe<ExampleOtherTwoDashboardReturnList>;
  getExamplesOthersTwosDashboard?: Maybe<ExampleOtherTwoDashboardReturnList>;
  getExamplesTablesByDateDashboard?: Maybe<ExampleTableDashboardReturnList>;
  getExamplesTablesDashboard?: Maybe<ExampleTableDashboardReturnList>;
  getFamilies?: Maybe<FamilyReturnList>;
  getFamiliesByDate?: Maybe<FamilyReturnList>;
  getFamiliesByDateDashboard?: Maybe<FamilyDashboardReturnList>;
  getFamiliesByName?: Maybe<GetFamiliesByUsername>;
  getFamiliesByUserIdDashboard?: Maybe<FamilyDashboardReturnList>;
  getFamiliesDashboard?: Maybe<FamilyDashboardReturnList>;
  getFamiliesForces?: Maybe<FamilyForceReturnList>;
  getFamiliesForcesBenefits?: Maybe<FamilyForceBenefitReturnList>;
  getFamiliesForcesBenefitsByDate?: Maybe<FamilyForceBenefitReturnList>;
  getFamiliesForcesBenefitsByDateDashboard?: Maybe<FamilyForceBenefitDashboardReturnList>;
  getFamiliesForcesBenefitsDashboard?: Maybe<FamilyForceBenefitDashboardReturnList>;
  getFamiliesForcesBenefitsDetails?: Maybe<FamilyForceBenefitDetailReturnList>;
  getFamiliesForcesBenefitsDetailsByDate?: Maybe<FamilyForceBenefitDetailReturnList>;
  getFamiliesForcesBenefitsDetailsByDateDashboard?: Maybe<FamilyForceBenefitDetailDashboardReturnList>;
  getFamiliesForcesBenefitsDetailsDashboard?: Maybe<FamilyForceBenefitDetailDashboardReturnList>;
  getFamiliesForcesByDate?: Maybe<FamilyForceReturnList>;
  getFamiliesForcesByDateDashboard?: Maybe<FamilyForceDashboardReturnList>;
  getFamiliesForcesDashboard?: Maybe<FamilyForceDashboardReturnList>;
  getFamiliesMembers?: Maybe<FamilyMemberReturnList>;
  getFamiliesMembersByDate?: Maybe<FamilyMemberReturnList>;
  getFamiliesMembersByDateDashboard?: Maybe<FamilyMemberDashboardReturnList>;
  getFamiliesMembersByUserId?: Maybe<FamilyMemberReturnList>;
  getFamiliesMembersByUserIdDashboard?: Maybe<FamilyMemberDashboardReturnList>;
  getFamiliesMembersByUserIds?: Maybe<FamilyMemberReturnList>;
  getFamiliesMembersDashboard?: Maybe<FamilyMemberDashboardReturnList>;
  getFamiliesTasksMembers?: Maybe<FamilyTaskMemberReturnList>;
  getFamiliesTasksMembersByDate?: Maybe<FamilyTaskMemberReturnList>;
  getFamiliesTasksMembersByDateDashboard?: Maybe<FamilyTaskMemberDashboardReturnList>;
  getFamiliesTasksMembersByUserId?: Maybe<FamilyTaskMemberReturnList>;
  getFamiliesTasksMembersByUserIdDashboard?: Maybe<FamilyTaskMemberDashboardReturnList>;
  getFamiliesTasksMembersDashboard?: Maybe<FamilyTaskMemberDashboardReturnList>;
  getFamiliesTasksMembersHards?: Maybe<FamilyTaskMemberHardReturnList>;
  getFamiliesTasksMembersHardsByDate?: Maybe<FamilyTaskMemberHardReturnList>;
  getFamiliesTasksMembersHardsByDateDashboard?: Maybe<FamilyTaskMemberHardDashboardReturnList>;
  getFamiliesTasksMembersHardsByUserId?: Maybe<FamilyTaskMemberHardReturnList>;
  getFamiliesTasksMembersHardsByUserIdDashboard?: Maybe<FamilyTaskMemberHardDashboardReturnList>;
  getFamiliesTasksMembersHardsDashboard?: Maybe<FamilyTaskMemberHardDashboardReturnList>;
  getFamiliesTasksProgress?: Maybe<FamilyTaskProgressReturnList>;
  getFamiliesTasksProgressByDate?: Maybe<FamilyTaskProgressReturnList>;
  getFamiliesTasksProgressByDateDashboard?: Maybe<FamilyTaskProgressDashboardReturnList>;
  getFamiliesTasksProgressDashboard?: Maybe<FamilyTaskProgressDashboardReturnList>;
  getFamiliesTasksProgresssReceiveds?: Maybe<FamilyTaskProgressReceivedReturnList>;
  getFamiliesTasksProgresssReceivedsByDate?: Maybe<FamilyTaskProgressReceivedReturnList>;
  getFamiliesTasksProgresssReceivedsByDateDashboard?: Maybe<FamilyTaskProgressReceivedDashboardReturnList>;
  getFamiliesTasksProgresssReceivedsDashboard?: Maybe<FamilyTaskProgressReceivedDashboardReturnList>;
  getFamiliesTasksTypes?: Maybe<FamilyTaskTypeReturnList>;
  getFamiliesTasksTypesByDate?: Maybe<FamilyTaskTypeReturnList>;
  getFamiliesTasksTypesByDateDashboard?: Maybe<FamilyTaskTypeDashboardReturnList>;
  getFamiliesTasksTypesDashboard?: Maybe<FamilyTaskTypeDashboardReturnList>;
  getFamiliesTasksTypesHards?: Maybe<FamilyTaskTypeHardReturnList>;
  getFamiliesTasksTypesHardsByDate?: Maybe<FamilyTaskTypeHardReturnList>;
  getFamiliesTasksTypesHardsByDateDashboard?: Maybe<FamilyTaskTypeHardDashboardReturnList>;
  getFamiliesTasksTypesHardsDashboard?: Maybe<FamilyTaskTypeHardDashboardReturnList>;
  getFamiliesTasksTypesProgress?: Maybe<FamilyTaskTypeProgressReturnList>;
  getFamiliesTasksTypesProgressByDate?: Maybe<FamilyTaskTypeProgressReturnList>;
  getFamiliesTasksTypesProgressByDateDashboard?: Maybe<FamilyTaskTypeProgressDashboardReturnList>;
  getFamiliesTasksTypesProgressDashboard?: Maybe<FamilyTaskTypeProgressDashboardReturnList>;
  getFamily?: Maybe<FamilyReturn>;
  getFamilyDashboard?: Maybe<FamilyDashboardReturn>;
  getFamilyForce?: Maybe<FamilyForceReturn>;
  getFamilyForceBenefit?: Maybe<FamilyForceBenefitReturn>;
  getFamilyForceBenefitDashboard?: Maybe<FamilyForceBenefitDashboardReturn>;
  getFamilyForceBenefitDetail?: Maybe<FamilyForceBenefitDetailReturn>;
  getFamilyForceBenefitDetailDashboard?: Maybe<FamilyForceBenefitDetailDashboardReturn>;
  getFamilyForceDashboard?: Maybe<FamilyForceDashboardReturn>;
  getFamilyMember?: Maybe<FamilyMemberReturn>;
  getFamilyMemberByUsername?: Maybe<FamilyMemberReturnList>;
  getFamilyMemberDashboard?: Maybe<FamilyMemberDashboardReturn>;
  getFamilyMemberOneByUserIdDashboard?: Maybe<FamilyMemberDashboardReturn>;
  getFamilyOneByUserIdDashboard?: Maybe<FamilyDashboardReturn>;
  getFamilyTaskMember?: Maybe<FamilyTaskMemberReturn>;
  getFamilyTaskMemberDashboard?: Maybe<FamilyTaskMemberDashboardReturn>;
  getFamilyTaskMemberHard?: Maybe<FamilyTaskMemberHardReturn>;
  getFamilyTaskMemberHardDashboard?: Maybe<FamilyTaskMemberHardDashboardReturn>;
  getFamilyTaskMemberHardOneByUserId?: Maybe<FamilyTaskMemberHardReturn>;
  getFamilyTaskMemberHardOneByUserIdDashboard?: Maybe<FamilyTaskMemberHardDashboardReturn>;
  getFamilyTaskMemberOneByUserId?: Maybe<FamilyTaskMemberReturn>;
  getFamilyTaskMemberOneByUserIdDashboard?: Maybe<FamilyTaskMemberDashboardReturn>;
  getFamilyTaskProgress?: Maybe<FamilyTaskProgressReturn>;
  getFamilyTaskProgressDashboard?: Maybe<FamilyTaskProgressDashboardReturn>;
  getFamilyTaskProgressReceived?: Maybe<FamilyTaskProgressReceivedReturn>;
  getFamilyTaskProgressReceivedDashboard?: Maybe<FamilyTaskProgressReceivedDashboardReturn>;
  getFamilyTaskType?: Maybe<FamilyTaskTypeReturn>;
  getFamilyTaskTypeDashboard?: Maybe<FamilyTaskTypeDashboardReturn>;
  getFamilyTaskTypeHard?: Maybe<FamilyTaskTypeHardReturn>;
  getFamilyTaskTypeHardDashboard?: Maybe<FamilyTaskTypeHardDashboardReturn>;
  getFamilyTaskTypeProgress?: Maybe<FamilyTaskTypeProgressReturn>;
  getFamilyTaskTypeProgressDashboard?: Maybe<FamilyTaskTypeProgressDashboardReturn>;
  getFansGiftsList?: Maybe<FansGiftsReturn>;
  getGameConfigurationDefaultEarning?: Maybe<GameConfigurationDefaultEarningReturn>;
  getGameConfigurationDefaultEarningDashboard?: Maybe<GameConfigurationDefaultEarningDashboardReturn>;
  getGameConfigurationLuckCoin?: Maybe<GameConfigurationLuckCoinReturn>;
  getGameConfigurationLuckCoinDashboard?: Maybe<GameConfigurationLuckCoinDashboardReturn>;
  getGameConfigurationSurpriseBox?: Maybe<GameConfigurationSurpriseBoxReturn>;
  getGameConfigurationSurpriseBoxDashboard?: Maybe<GameConfigurationSurpriseBoxDashboardReturn>;
  getGameLuckSurpriseBox?: Maybe<GameLuckSurpriseBoxReturn>;
  getGameLuckSurpriseBoxDashboard?: Maybe<GameLuckSurpriseBoxDashboardReturn>;
  getGameLuckSurpriseBoxOneByUserId?: Maybe<GameLuckSurpriseBoxReturn>;
  getGameLuckSurpriseBoxOneByUserIdDashboard?: Maybe<GameLuckSurpriseBoxDashboardReturn>;
  getGamesConfigurationsDefaultsEarnings?: Maybe<GameConfigurationDefaultEarningReturnList>;
  getGamesConfigurationsDefaultsEarningsByDate?: Maybe<GameConfigurationDefaultEarningReturnList>;
  getGamesConfigurationsDefaultsEarningsByDateDashboard?: Maybe<GameConfigurationDefaultEarningDashboardReturnList>;
  getGamesConfigurationsDefaultsEarningsDashboard?: Maybe<GameConfigurationDefaultEarningDashboardReturnList>;
  getGamesConfigurationsLucksCoins?: Maybe<GameConfigurationLuckCoinReturnList>;
  getGamesConfigurationsLucksCoinsByDate?: Maybe<GameConfigurationLuckCoinReturnList>;
  getGamesConfigurationsLucksCoinsByDateDashboard?: Maybe<GameConfigurationLuckCoinDashboardReturnList>;
  getGamesConfigurationsLucksCoinsDashboard?: Maybe<GameConfigurationLuckCoinDashboardReturnList>;
  getGamesConfigurationsSurprisesBox?: Maybe<GameConfigurationSurpriseBoxReturnList>;
  getGamesConfigurationsSurprisesBoxByDate?: Maybe<GameConfigurationSurpriseBoxReturnList>;
  getGamesConfigurationsSurprisesBoxsByDateDashboard?: Maybe<GameConfigurationSurpriseBoxDashboardReturnList>;
  getGamesConfigurationsSurprisesBoxsDashboard?: Maybe<GameConfigurationSurpriseBoxDashboardReturnList>;
  getGamesLucksSurprisesBox?: Maybe<GameLuckSurpriseBoxReturnList>;
  getGamesLucksSurprisesBoxByDate?: Maybe<GameLuckSurpriseBoxReturnList>;
  getGamesLucksSurprisesBoxByUserId?: Maybe<GameLuckSurpriseBoxReturnList>;
  getGamesLucksSurprisesBoxsByDateDashboard?: Maybe<GameLuckSurpriseBoxDashboardReturnList>;
  getGamesLucksSurprisesBoxsByUserIdDashboard?: Maybe<GameLuckSurpriseBoxDashboardReturnList>;
  getGamesLucksSurprisesBoxsDashboard?: Maybe<GameLuckSurpriseBoxDashboardReturnList>;
  getGift?: Maybe<GiftReturn>;
  getGiftDashboard?: Maybe<GiftDashboardReturn>;
  getGiftEvent?: Maybe<GiftEventReturn>;
  getGiftEventDashboard?: Maybe<GiftEventDashboardReturn>;
  getGiftEvents?: Maybe<GiftEventReturnList>;
  getGiftSent?: Maybe<GiftSentReturn>;
  getGiftSentDashboard?: Maybe<GiftSentDashboardReturn>;
  getGiftSentLuckCoinDashboard?: Maybe<GiftSentLuckCoinDashboardReturn>;
  getGiftSentLuckCoinOneByUserIdDashboard?: Maybe<GiftSentLuckCoinDashboardReturn>;
  getGiftSentOneByUserIdDashboard?: Maybe<GiftSentDashboardReturn>;
  getGiftSentRankingHostBetweenDate?: Maybe<GiftSentRankingHostReturnList>;
  getGiftSentRankingHostByFamilyBetweenDate?: Maybe<GiftSentRankingHostFamilyReturnList>;
  getGiftSentRankingHostByLiveBetweenDate?: Maybe<GiftSentRankingHostLiveReturnList>;
  getGiftSentRankingLiveBetweenDate?: Maybe<GiftSentRankingLiveReturnList>;
  getGiftSentRankingSpectatorBetweenDate?: Maybe<GiftSentRankingSpectatorReturnList>;
  getGiftSentRankingSpectatorByFamilyBetweenDate?: Maybe<GiftSentRankingSpectatorFamilyReturnList>;
  getGiftSentRankingSpectatorByLiveBetweenDate?: Maybe<GiftSentRankingSpectatorLiveReturnList>;
  getGiftSentRankingSpectatorByProfileBetweenDate?: Maybe<GiftSentRankingSpectatorByProfileReturnList>;
  getGiftSentResumeBetweenDate?: Maybe<GiftSentResumeBetweenDateReturn>;
  getGiftSents?: Maybe<GiftSentReturnList>;
  getGiftSentsByUserId?: Maybe<GiftSentReturnList>;
  getGiftSentsByUserReceivedId?: Maybe<GiftReceivedReturnList>;
  getGiftType?: Maybe<GiftTypeReturn>;
  getGiftTypeDashboard?: Maybe<GiftTypeDashboardReturn>;
  getGiftTypes?: Maybe<GiftTypeReturnList>;
  getGifts?: Maybe<GiftReturnList>;
  getGiftsByDateDashboard?: Maybe<GiftDashboardReturnList>;
  getGiftsDashboard?: Maybe<GiftDashboardReturnList>;
  getGiftsEventsByDateDashboard?: Maybe<GiftEventDashboardReturnList>;
  getGiftsEventsDashboard?: Maybe<GiftEventDashboardReturnList>;
  getGiftsSentsByDateDashboard?: Maybe<GiftSentDashboardReturnList>;
  getGiftsSentsByUserIdDashboard?: Maybe<GiftSentDashboardReturnList>;
  getGiftsSentsDashboard?: Maybe<GiftSentDashboardReturnList>;
  getGiftsSentsLucksCoinsByDateDashboard?: Maybe<GiftSentLuckCoinDashboardReturnList>;
  getGiftsSentsLucksCoinsByUserIdDashboard?: Maybe<GiftSentLuckCoinDashboardReturnList>;
  getGiftsSentsLucksCoinsDashboard?: Maybe<GiftSentLuckCoinDashboardReturnList>;
  getGiftsTypesByDateDashboard?: Maybe<GiftTypeDashboardReturnList>;
  getGiftsTypesDashboard?: Maybe<GiftTypeDashboardReturnList>;
  getInvitation?: Maybe<InvitationReturn>;
  getInvitationDashboard?: Maybe<InvitationDashboardReturn>;
  getInvitationOneByUserId?: Maybe<InvitationReturn>;
  getInvitationOneByUserIdDashboard?: Maybe<InvitationDashboardReturn>;
  getInvitationReward?: Maybe<InvitationRewardReturn>;
  getInvitationRewardDashboard?: Maybe<InvitationRewardDashboardReturn>;
  getInvitations?: Maybe<InvitationReturnList>;
  getInvitationsByDate?: Maybe<InvitationReturnList>;
  getInvitationsByDateDashboard?: Maybe<InvitationDashboardReturnList>;
  getInvitationsByUserId?: Maybe<InvitationReturnList>;
  getInvitationsByUserIdDashboard?: Maybe<InvitationDashboardReturnList>;
  getInvitationsDashboard?: Maybe<InvitationDashboardReturnList>;
  getInvitationsRewards?: Maybe<InvitationRewardReturnList>;
  getInvitationsRewardsByDate?: Maybe<InvitationRewardReturnList>;
  getInvitationsRewardsByDateDashboard?: Maybe<InvitationRewardDashboardReturnList>;
  getInvitationsRewardsDashboard?: Maybe<InvitationRewardDashboardReturnList>;
  getItem?: Maybe<ItemReturn>;
  getItemDashboard?: Maybe<ItemDashboardReturn>;
  getItemPurchased?: Maybe<ItemPurchasedReturn>;
  getItemPurchasedDashboard?: Maybe<ItemPurchasedDashboardReturn>;
  getItemPurchasedOneByUserId?: Maybe<ItemPurchasedReturn>;
  getItemPurchasedOneByUserIdDashboard?: Maybe<ItemPurchasedDashboardReturn>;
  getItens?: Maybe<ItemReturnList>;
  getItensByDate?: Maybe<ItemReturnList>;
  getItensByDateDashboard?: Maybe<ItemDashboardReturnList>;
  getItensDashboard?: Maybe<ItemDashboardReturnList>;
  getItensPurchaseds?: Maybe<ItemPurchasedReturnList>;
  getItensPurchasedsByDate?: Maybe<ItemPurchasedReturnList>;
  getItensPurchasedsByDateDashboard?: Maybe<ItemPurchasedDashboardReturnList>;
  getItensPurchasedsByUserId?: Maybe<ItemPurchasedReturnList>;
  getItensPurchasedsByUserIdDashboard?: Maybe<ItemPurchasedDashboardReturnList>;
  getItensPurchasedsDashboard?: Maybe<ItemPurchasedDashboardReturnList>;
  getLastMessageFromRoom?: Maybe<ChatDetailReturnList>;
  getLevelByUserId?: Maybe<UserLevelReturn>;
  getLevelHost?: Maybe<LevelHostReturn>;
  getLevelHostDashboard?: Maybe<LevelHostDashboardReturn>;
  getLevelSpectator?: Maybe<LevelSpectatorReturn>;
  getLevelSpectatorDashboard?: Maybe<LevelSpectatorDashboardReturn>;
  getLevelsHosts?: Maybe<LevelHostReturnList>;
  getLevelsHostsByDate?: Maybe<LevelHostReturnList>;
  getLevelsHostsByDateDashboard?: Maybe<LevelHostDashboardReturnList>;
  getLevelsHostsDashboard?: Maybe<LevelHostDashboardReturnList>;
  getLevelsSpectators?: Maybe<LevelSpectatorReturnList>;
  getLevelsSpectatorsByDate?: Maybe<LevelSpectatorReturnList>;
  getLevelsSpectatorsByDateDashboard?: Maybe<LevelSpectatorDashboardReturnList>;
  getLevelsSpectatorsDashboard?: Maybe<LevelSpectatorDashboardReturnList>;
  getLive?: Maybe<LiveReturn>;
  getLiveDashboard?: Maybe<LiveDashboardReturn>;
  getLiveDetailGuestDashboard?: Maybe<LiveDetailGuestDashboardReturn>;
  getLiveDetailGuestOneByUserId?: Maybe<LiveDetailGuestReturn>;
  getLiveDetailGuestOneByUserIdDashboard?: Maybe<LiveDetailGuestDashboardReturn>;
  getLiveDetailPeople?: Maybe<LiveDetailPeopleReturn>;
  getLiveDetailPeopleDashboard?: Maybe<LiveDetailPeopleDashboardReturn>;
  getLiveDetailPeopleOneByUserId?: Maybe<LiveDetailPeopleReturn>;
  getLiveDetailPeopleOneByUserIdDashboard?: Maybe<LiveDetailPeopleDashboardReturn>;
  getLiveDetailTag?: Maybe<LiveDetailTagReturn>;
  getLiveDetailTagDashboard?: Maybe<LiveDetailTagDashboardReturn>;
  getLiveFilter?: Maybe<LiveFilterReturn>;
  getLiveFilterDashboard?: Maybe<LiveFilterDashboardReturn>;
  getLiveGuestsByLiveId?: Maybe<LiveDetailGuestReturnList>;
  getLiveOneByUserId?: Maybe<LiveReturn>;
  getLiveOneByUserIdAndUpdate?: Maybe<LiveReturn>;
  getLiveOneByUserIdDashboard?: Maybe<LiveDashboardReturn>;
  getLiveReport?: Maybe<LiveReportReturn>;
  getLiveReportDashboard?: Maybe<LiveReportDashboardReturn>;
  getLiveReportOneByUserId?: Maybe<LiveReportReturn>;
  getLiveReportOneByUserIdDashboard?: Maybe<LiveReportDashboardReturn>;
  getLiveResume?: Maybe<LiveResumeReturn>;
  getLiveResumeDashboard?: Maybe<LiveResumeDashboardReturn>;
  getLiveResumeOneByUserId?: Maybe<LiveResumeReturn>;
  getLiveResumeOneByUserIdDashboard?: Maybe<LiveResumeDashboardReturn>;
  getLiveSetting?: Maybe<LiveSettingReturn>;
  getLiveSettingDashboard?: Maybe<LiveSettingDashboardReturn>;
  getLiveSticker?: Maybe<LiveStickerReturn>;
  getLiveStickerDashboard?: Maybe<LiveStickerDashboardReturn>;
  getLiveTag?: Maybe<LiveTagReturn>;
  getLiveTagDashboard?: Maybe<LiveTagDashboardReturn>;
  getLiveToken?: Maybe<Scalars['String']['output']>;
  getLiveTypeReport?: Maybe<LiveTypeReportReturn>;
  getLiveTypeReportDashboard?: Maybe<LiveTypeReportDashboardReturn>;
  getLives?: Maybe<LiveReturnList>;
  getLivesByDate?: Maybe<LiveReturnList>;
  getLivesByDateDashboard?: Maybe<LiveDashboardReturnList>;
  getLivesByFollowing?: Maybe<LiveReturnList>;
  getLivesByTypeAndCountry?: Maybe<LiveReturnList>;
  getLivesByUserId?: Maybe<LiveReturnList>;
  getLivesByUserIdDashboard?: Maybe<LiveDashboardReturnList>;
  getLivesDashboard?: Maybe<LiveDashboardReturnList>;
  getLivesDetailsGuests?: Maybe<LiveDetailGuestReturnList>;
  getLivesDetailsGuestsByDate?: Maybe<LiveDetailGuestReturnList>;
  getLivesDetailsGuestsByDateDashboard?: Maybe<LiveDetailGuestDashboardReturnList>;
  getLivesDetailsGuestsByUserId?: Maybe<LiveDetailGuestReturnList>;
  getLivesDetailsGuestsByUserIdDashboard?: Maybe<LiveDetailGuestDashboardReturnList>;
  getLivesDetailsGuestsDashboard?: Maybe<LiveDetailGuestDashboardReturnList>;
  getLivesDetailsPeoples?: Maybe<LiveDetailPeopleReturnList>;
  getLivesDetailsPeoplesByDate?: Maybe<LiveDetailPeopleReturnList>;
  getLivesDetailsPeoplesByDateDashboard?: Maybe<LiveDetailPeopleDashboardReturnList>;
  getLivesDetailsPeoplesByLiveId?: Maybe<LiveDetailPeopleReturnList>;
  getLivesDetailsPeoplesByUserId?: Maybe<LiveDetailPeopleReturnList>;
  getLivesDetailsPeoplesByUserIdDashboard?: Maybe<LiveDetailPeopleDashboardReturnList>;
  getLivesDetailsPeoplesDashboard?: Maybe<LiveDetailPeopleDashboardReturnList>;
  getLivesDetailsTags?: Maybe<LiveDetailTagReturnList>;
  getLivesDetailsTagsByDate?: Maybe<LiveDetailTagReturnList>;
  getLivesDetailsTagsByDateDashboard?: Maybe<LiveDetailTagDashboardReturnList>;
  getLivesDetailsTagsDashboard?: Maybe<LiveDetailTagDashboardReturnList>;
  getLivesFilters?: Maybe<LiveFilterReturnList>;
  getLivesFiltersByDate?: Maybe<LiveFilterReturnList>;
  getLivesFiltersByDateDashboard?: Maybe<LiveFilterDashboardReturnList>;
  getLivesFiltersDashboard?: Maybe<LiveFilterDashboardReturnList>;
  getLivesReports?: Maybe<LiveReportReturnList>;
  getLivesReportsByDate?: Maybe<LiveReportReturnList>;
  getLivesReportsByDateDashboard?: Maybe<LiveReportDashboardReturnList>;
  getLivesReportsByUserId?: Maybe<LiveReportReturnList>;
  getLivesReportsByUserIdDashboard?: Maybe<LiveReportDashboardReturnList>;
  getLivesReportsDashboard?: Maybe<LiveReportDashboardReturnList>;
  getLivesResumes?: Maybe<LiveResumeReturnList>;
  getLivesResumesByDate?: Maybe<LiveResumeReturnList>;
  getLivesResumesByDateDashboard?: Maybe<LiveResumeDashboardReturnList>;
  getLivesResumesByUserId?: Maybe<LiveResumeReturnList>;
  getLivesResumesByUserIdDashboard?: Maybe<LiveResumeDashboardReturnList>;
  getLivesResumesDashboard?: Maybe<LiveResumeDashboardReturnList>;
  getLivesSettings?: Maybe<LiveSettingReturnList>;
  getLivesSettingsByDateDashboard?: Maybe<LiveSettingDashboardReturnList>;
  getLivesSettingsDashboard?: Maybe<LiveSettingDashboardReturnList>;
  getLivesStickers?: Maybe<LiveStickerReturnList>;
  getLivesStickersByDate?: Maybe<LiveStickerReturnList>;
  getLivesStickersByDateDashboard?: Maybe<LiveStickerDashboardReturnList>;
  getLivesStickersDashboard?: Maybe<LiveStickerDashboardReturnList>;
  getLivesTags?: Maybe<LiveTagReturnList>;
  getLivesTagsByDate?: Maybe<LiveTagReturnList>;
  getLivesTagsByDateDashboard?: Maybe<LiveTagDashboardReturnList>;
  getLivesTagsDashboard?: Maybe<LiveTagDashboardReturnList>;
  getLivesTypesReports?: Maybe<LiveTypeReportReturnList>;
  getLivesTypesReportsByDate?: Maybe<LiveTypeReportReturnList>;
  getLivesTypesReportsByDateDashboard?: Maybe<LiveTypeReportDashboardReturnList>;
  getLivesTypesReportsDashboard?: Maybe<LiveTypeReportDashboardReturnList>;
  getLucksGifts?: Maybe<GiftReturnList>;
  getMyAndFollowingPosts?: Maybe<PostReturnList>;
  getMyLive?: Maybe<LiveReturn>;
  getMyVisitedsToday?: Maybe<ProfileVisitReturn>;
  getPaymentAgent?: Maybe<PaymentAgentReturn>;
  getPaymentAgentDashboard?: Maybe<PaymentAgentDashboardReturn>;
  getPaymentAgentOneByUserId?: Maybe<PaymentAgentReturn>;
  getPaymentAgentOneByUserIdDashboard?: Maybe<PaymentAgentDashboardReturn>;
  getPaymentAgentPaid?: Maybe<PaymentAgentPaidReturn>;
  getPaymentAgentPaidDashboard?: Maybe<PaymentAgentPaidDashboardReturn>;
  getPaymentsAgents?: Maybe<PaymentAgentReturnList>;
  getPaymentsAgentsByDate?: Maybe<PaymentAgentReturnList>;
  getPaymentsAgentsByDateDashboard?: Maybe<PaymentAgentDashboardReturnList>;
  getPaymentsAgentsByUserId?: Maybe<PaymentAgentReturnList>;
  getPaymentsAgentsByUserIdDashboard?: Maybe<PaymentAgentDashboardReturnList>;
  getPaymentsAgentsDashboard?: Maybe<PaymentAgentDashboardReturnList>;
  getPaymentsAgentsPaids?: Maybe<PaymentAgentPaidReturnList>;
  getPaymentsAgentsPaidsByDate?: Maybe<PaymentAgentPaidReturnList>;
  getPaymentsAgentsPaidsByDateDashboard?: Maybe<PaymentAgentPaidDashboardReturnList>;
  getPaymentsAgentsPaidsDashboard?: Maybe<PaymentAgentPaidDashboardReturnList>;
  getPhoneByEmail?: Maybe<DefaultReturn>;
  getPlatformSellerForAgency?: Maybe<PlatformSellerForAgencyReturn>;
  getPlatformSellerForAgencyDashboard?: Maybe<PlatformSellerForAgencyDashboardReturn>;
  getPlatformSellerForAgencyPrice?: Maybe<PlatformSellerForAgencyPriceReturn>;
  getPlatformSellerForAgencyPriceDashboard?: Maybe<PlatformSellerForAgencyPriceDashboardReturn>;
  getPlatformSellerForAgencyProof?: Maybe<PlatformSellerForAgencyProofReturn>;
  getPlatformSellerForAgencyProofDashboard?: Maybe<PlatformSellerForAgencyProofDashboardReturn>;
  getPlatformSellerForUser?: Maybe<PlatformSellerForUserReturn>;
  getPlatformSellerForUserDashboard?: Maybe<PlatformSellerForUserDashboardReturn>;
  getPlatformSellerForUserOneByUserId?: Maybe<PlatformSellerForUserReturn>;
  getPlatformSellerForUserOneByUserIdDashboard?: Maybe<PlatformSellerForUserDashboardReturn>;
  getPlatformSellerForUserPrice?: Maybe<PlatformSellerForUserPriceReturn>;
  getPlatformSellerForUserPriceDashboard?: Maybe<PlatformSellerForUserPriceDashboardReturn>;
  getPlatformsSellersForAgencies?: Maybe<PlatformSellerForAgencyReturnList>;
  getPlatformsSellersForAgenciesByDate?: Maybe<PlatformSellerForAgencyReturnList>;
  getPlatformsSellersForAgenciesByDateDashboard?: Maybe<PlatformSellerForAgencyDashboardReturnList>;
  getPlatformsSellersForAgenciesDashboard?: Maybe<PlatformSellerForAgencyDashboardReturnList>;
  getPlatformsSellersForAgenciesPrices?: Maybe<PlatformSellerForAgencyPriceReturnList>;
  getPlatformsSellersForAgenciesPricesByDate?: Maybe<PlatformSellerForAgencyPriceReturnList>;
  getPlatformsSellersForAgenciesPricesByDateDashboard?: Maybe<PlatformSellerForAgencyPriceDashboardReturnList>;
  getPlatformsSellersForAgenciesPricesDashboard?: Maybe<PlatformSellerForAgencyPriceDashboardReturnList>;
  getPlatformsSellersForAgenciesProofs?: Maybe<PlatformSellerForAgencyProofReturnList>;
  getPlatformsSellersForAgenciesProofsByDate?: Maybe<PlatformSellerForAgencyProofReturnList>;
  getPlatformsSellersForAgenciesProofsByDateDashboard?: Maybe<PlatformSellerForAgencyProofDashboardReturnList>;
  getPlatformsSellersForAgenciesProofsDashboard?: Maybe<PlatformSellerForAgencyProofDashboardReturnList>;
  getPlatformsSellersForUsers?: Maybe<PlatformSellerForUserReturnList>;
  getPlatformsSellersForUsersByDate?: Maybe<PlatformSellerForUserReturnList>;
  getPlatformsSellersForUsersByDateDashboard?: Maybe<PlatformSellerForUserDashboardReturnList>;
  getPlatformsSellersForUsersByUserId?: Maybe<PlatformSellerForUserReturnList>;
  getPlatformsSellersForUsersByUserIdDashboard?: Maybe<PlatformSellerForUserDashboardReturnList>;
  getPlatformsSellersForUsersDashboard?: Maybe<PlatformSellerForUserDashboardReturnList>;
  getPlatformsSellersForUsersPrices?: Maybe<PlatformSellerForUserPriceReturnList>;
  getPlatformsSellersForUsersPricesByDate?: Maybe<PlatformSellerForUserPriceReturnList>;
  getPlatformsSellersForUsersPricesByDateDashboard?: Maybe<PlatformSellerForUserPriceDashboardReturnList>;
  getPlatformsSellersForUsersPricesDashboard?: Maybe<PlatformSellerForUserPriceDashboardReturnList>;
  getPost?: Maybe<PostReturn>;
  getPostComment?: Maybe<PostCommentReturn>;
  getPostCommentDashboard?: Maybe<PostCommentDashboardReturn>;
  getPostCommentOneByUserIdDashboard?: Maybe<PostCommentDashboardReturn>;
  getPostCommentsByPostId?: Maybe<PostCommentReturnList>;
  getPostDashboard?: Maybe<PostDashboardReturn>;
  getPostLikeDashboard?: Maybe<PostLikeDashboardReturn>;
  getPostLikeOneByUserIdDashboard?: Maybe<PostLikeDashboardReturn>;
  getPostLikesByPostId?: Maybe<PostLikeReturnList>;
  getPostOneByUserIdDashboard?: Maybe<PostDashboardReturn>;
  getPostTag?: Maybe<PostTagReturn>;
  getPostTagDashboard?: Maybe<PostTagDashboardReturn>;
  getPostTags?: Maybe<PostTagReturnList>;
  getPosts?: Maybe<PostReturnList>;
  getPostsByDateDashboard?: Maybe<PostDashboardReturnList>;
  getPostsByUserId?: Maybe<PostReturnList>;
  getPostsByUserIdDashboard?: Maybe<PostDashboardReturnList>;
  getPostsCommentsByDateDashboard?: Maybe<PostCommentDashboardReturnList>;
  getPostsCommentsByUserIdDashboard?: Maybe<PostCommentDashboardReturnList>;
  getPostsCommentsDashboard?: Maybe<PostCommentDashboardReturnList>;
  getPostsDashboard?: Maybe<PostDashboardReturnList>;
  getPostsLikesByDateDashboard?: Maybe<PostLikeDashboardReturnList>;
  getPostsLikesByUserIdDashboard?: Maybe<PostLikeDashboardReturnList>;
  getPostsLikesDashboard?: Maybe<PostLikeDashboardReturnList>;
  getPostsTagsByDateDashboard?: Maybe<PostTagDashboardReturnList>;
  getPostsTagsDashboard?: Maybe<PostTagDashboardReturnList>;
  getProfile?: Maybe<ProfileReturn>;
  getQuantityNotSeenMessages?: Maybe<QuantityMessagesNotSeenReturn>;
  getTag?: Maybe<TagReturn>;
  getTagDashboard?: Maybe<TagDashboardReturn>;
  getTags?: Maybe<TagReturnList>;
  getTagsByDate?: Maybe<TagReturnList>;
  getTagsByDateDashboard?: Maybe<TagDashboardReturnList>;
  getTagsDashboard?: Maybe<TagDashboardReturnList>;
  getTaskTypeHost?: Maybe<TaskTypeHostReturn>;
  getTaskTypeHostDashboard?: Maybe<TaskTypeHostDashboardReturn>;
  getTaskTypeSpectator?: Maybe<TaskTypeSpectatorReturn>;
  getTaskTypeSpectatorDashboard?: Maybe<TaskTypeSpectatorDashboardReturn>;
  getTaskUserHost?: Maybe<TaskUserHostReturn>;
  getTaskUserHostDashboard?: Maybe<TaskUserHostDashboardReturn>;
  getTaskUserHostOneByUserId?: Maybe<TaskUserHostReturn>;
  getTaskUserHostOneByUserIdDashboard?: Maybe<TaskUserHostDashboardReturn>;
  getTaskUserSpectator?: Maybe<TaskUserSpectatorReturn>;
  getTaskUserSpectatorDashboard?: Maybe<TaskUserSpectatorDashboardReturn>;
  getTaskUserSpectatorOneByUserId?: Maybe<TaskUserSpectatorReturn>;
  getTaskUserSpectatorOneByUserIdDashboard?: Maybe<TaskUserSpectatorDashboardReturn>;
  getTasksTypesHosts?: Maybe<TaskTypeHostReturnList>;
  getTasksTypesHostsByDate?: Maybe<TaskTypeHostReturnList>;
  getTasksTypesHostsByDateDashboard?: Maybe<TaskTypeHostDashboardReturnList>;
  getTasksTypesHostsDashboard?: Maybe<TaskTypeHostDashboardReturnList>;
  getTasksTypesSpectators?: Maybe<TaskTypeSpectatorReturnList>;
  getTasksTypesSpectatorsByDate?: Maybe<TaskTypeSpectatorReturnList>;
  getTasksTypesSpectatorsByDateDashboard?: Maybe<TaskTypeSpectatorDashboardReturnList>;
  getTasksTypesSpectatorsDashboard?: Maybe<TaskTypeSpectatorDashboardReturnList>;
  getTasksUsersHosts?: Maybe<TaskUserHostReturnList>;
  getTasksUsersHostsByDate?: Maybe<TaskUserHostReturnList>;
  getTasksUsersHostsByDateDashboard?: Maybe<TaskUserHostDashboardReturnList>;
  getTasksUsersHostsByUserId?: Maybe<TaskUserHostReturnList>;
  getTasksUsersHostsByUserIdDashboard?: Maybe<TaskUserHostDashboardReturnList>;
  getTasksUsersHostsDashboard?: Maybe<TaskUserHostDashboardReturnList>;
  getTasksUsersSpectators?: Maybe<TaskUserSpectatorReturnList>;
  getTasksUsersSpectatorsByDate?: Maybe<TaskUserSpectatorReturnList>;
  getTasksUsersSpectatorsByDateDashboard?: Maybe<TaskUserSpectatorDashboardReturnList>;
  getTasksUsersSpectatorsByUserId?: Maybe<TaskUserSpectatorReturnList>;
  getTasksUsersSpectatorsByUserIdDashboard?: Maybe<TaskUserSpectatorDashboardReturnList>;
  getTasksUsersSpectatorsDashboard?: Maybe<TaskUserSpectatorDashboardReturnList>;
  getUserAdministratorProfile?: Maybe<UserAdministratorProfileReturn>;
  getUserAdministratorProfileActivity?: Maybe<UserAdministratorProfileActivityReturn>;
  getUserAdministratorProfileActivityDashboard?: Maybe<UserAdministratorProfileActivityDashboardReturn>;
  getUserAdministratorProfileActivityOneByUserId?: Maybe<UserAdministratorProfileActivityReturn>;
  getUserAdministratorProfileActivityOneByUserIdDashboard?: Maybe<UserAdministratorProfileActivityDashboardReturn>;
  getUserAdministratorProfileDashboard?: Maybe<UserAdministratorProfileDashboardReturn>;
  getUserAdministratorProfileOneByUserId?: Maybe<UserAdministratorProfileReturn>;
  getUserAdministratorProfileOneByUserIdDashboard?: Maybe<UserAdministratorProfileDashboardReturn>;
  getUserAppUid?: Maybe<UserAppUidReturn>;
  getUserAppUidDashboard?: Maybe<UserAppUidDashboardReturn>;
  getUserBadge?: Maybe<UserBadgeReturn>;
  getUserBadgeDashboard?: Maybe<UserBadgeDashboardReturn>;
  getUserBadgeOneByUserId?: Maybe<UserBadgeReturn>;
  getUserBadgeOneByUserIdDashboard?: Maybe<UserBadgeDashboardReturn>;
  getUserBalanceBeanDashboard?: Maybe<UserBalanceBeanDashboardReturn>;
  getUserBalanceBeanOneByUserIdDashboard?: Maybe<UserBalanceBeanDashboardReturn>;
  getUserBalanceBeans?: Maybe<UserBalanceBeansReturn>;
  getUserBalanceBeansOneByUserId?: Maybe<UserBalanceBeansReturn>;
  getUserBalanceCoinDashboard?: Maybe<UserBalanceCoinDashboardReturn>;
  getUserBalanceCoinOneByUserIdDashboard?: Maybe<UserBalanceCoinDashboardReturn>;
  getUserBalanceCoins?: Maybe<UserBalanceCoinsReturn>;
  getUserBalanceCoinsOneByUserId?: Maybe<UserBalanceCoinsReturn>;
  getUserBalancePointDashboard?: Maybe<UserBalancePointDashboardReturn>;
  getUserBalancePointOneByUserIdDashboard?: Maybe<UserBalancePointDashboardReturn>;
  getUserBalancePoints?: Maybe<UserBalancePointsReturn>;
  getUserBalancePointsOneByUserId?: Maybe<UserBalancePointsReturn>;
  getUserBanned?: Maybe<UserBannedReturn>;
  getUserBannedDashboard?: Maybe<UserBannedDashboardReturn>;
  getUserBannedDetail?: Maybe<UserBannedDetailReturn>;
  getUserBannedDetailDashboard?: Maybe<UserBannedDetailDashboardReturn>;
  getUserBannedDetailOneByUserId?: Maybe<UserBannedDetailReturn>;
  getUserBannedDetailOneByUserIdDashboard?: Maybe<UserBannedDetailDashboardReturn>;
  getUserBannedOneByUserId?: Maybe<UserBannedReturn>;
  getUserBannedOneByUserIdDashboard?: Maybe<UserBannedDashboardReturn>;
  getUserBlockedDashboard?: Maybe<UserBlockedDashboardReturn>;
  getUserBlockedOneByUserIdDashboard?: Maybe<UserBlockedDashboardReturn>;
  getUserBlockeds?: Maybe<GetUserBlockedsReturn>;
  getUserByEmail?: Maybe<User>;
  getUserByUsername?: Maybe<GetUserByUsernameReturn>;
  getUserDashboard?: Maybe<UserDashboardReturn>;
  getUserDetail?: Maybe<UserDetailReturn>;
  getUserDetailDashboard?: Maybe<UserDetailDashboardReturn>;
  getUserDetailOneByUserId?: Maybe<UserDetailReturn>;
  getUserDetailOneByUserIdDashboard?: Maybe<UserDetailDashboardReturn>;
  getUserDeviceInformation?: Maybe<UserDeviceInformationReturn>;
  getUserDeviceInformationDashboard?: Maybe<UserDeviceInformationDashboardReturn>;
  getUserDeviceInformationOneByUserId?: Maybe<UserDeviceInformationReturn>;
  getUserDeviceInformationOneByUserIdDashboard?: Maybe<UserDeviceInformationDashboardReturn>;
  getUserFollowerDashboard?: Maybe<UserFollowerDashboardReturn>;
  getUserFollowerOneByUserIdDashboard?: Maybe<UserFollowerDashboardReturn>;
  getUserFollowingDashboard?: Maybe<UserFollowingDashboardReturn>;
  getUserFollowingOneByUserIdDashboard?: Maybe<UserFollowingDashboardReturn>;
  getUserForSale?: Maybe<UserForSaleReturn>;
  getUserGiftPackage?: Maybe<UserGiftPackageReturn>;
  getUserGiftPackageDashboard?: Maybe<UserGiftPackageDashboardReturn>;
  getUserGiftPackageOneByUserId?: Maybe<UserGiftPackageReturn>;
  getUserGiftPackageOneByUserIdDashboard?: Maybe<UserGiftPackageDashboardReturn>;
  getUserLevel?: Maybe<UserLevelReturn>;
  getUserLevelDashboard?: Maybe<UserLevelDashboardReturn>;
  getUserLevelOneByUserId?: Maybe<UserLevelCustomReturn>;
  getUserLevelOneByUserIdDashboard?: Maybe<UserLevelDashboardReturn>;
  getUserLiveSetting?: Maybe<UserLiveSettingReturn>;
  getUserLiveSettingDashboard?: Maybe<UserLiveSettingDashboardReturn>;
  getUserLiveSettingOneByUserId?: Maybe<UserLiveSettingReturn>;
  getUserLiveSettingOneByUserIdDashboard?: Maybe<UserLiveSettingDashboardReturn>;
  getUserNotificationDashboard?: Maybe<UserNotificationDashboardReturn>;
  getUserNotificationOneByUserIdDashboard?: Maybe<UserNotificationDashboardReturn>;
  getUserOneByUserIdDashboard?: Maybe<UserDashboardReturn>;
  getUserPhotoDashboard?: Maybe<UserPhotoDashboardReturn>;
  getUserPhotoOneByUserIdDashboard?: Maybe<UserPhotoDashboardReturn>;
  getUserPrivacyDashboard?: Maybe<UserPrivacyDashboardReturn>;
  getUserPrivacyOneByUserIdDashboard?: Maybe<UserPrivacyDashboardReturn>;
  getUserProcessingQueue?: Maybe<UserProcessingQueueReturn>;
  getUserProcessingQueueDashboard?: Maybe<UserProcessingQueueDashboardReturn>;
  getUserSuperFanDashboard?: Maybe<UserSuperFanDashboardReturn>;
  getUserSuperFanOneByUserIdDashboard?: Maybe<UserSuperFanDashboardReturn>;
  getUserVip?: Maybe<UserVipReturn>;
  getUserVipDashboard?: Maybe<UserVipDashboardReturn>;
  getUserVipOneByUserIdDashboard?: Maybe<UserVipDashboardReturn>;
  getUserVisitProfileDashboard?: Maybe<UserVisitProfileDashboardReturn>;
  getUserVisitProfileOneByUserIdDashboard?: Maybe<UserVisitProfileDashboardReturn>;
  getUserWarning?: Maybe<UserWarningReturn>;
  getUserWarningDashboard?: Maybe<UserWarningDashboardReturn>;
  getUserWarningDetail?: Maybe<UserWarningDetailReturn>;
  getUserWarningDetailDashboard?: Maybe<UserWarningDetailDashboardReturn>;
  getUserWarningDetailOneByUserId?: Maybe<UserWarningDetailReturn>;
  getUserWarningDetailOneByUserIdDashboard?: Maybe<UserWarningDetailDashboardReturn>;
  getUserWarningOneByUserId?: Maybe<UserWarningReturn>;
  getUserWarningOneByUserIdDashboard?: Maybe<UserWarningDashboardReturn>;
  getUsers?: Maybe<UsersReturn>;
  getUsersAdministratorsProfiles?: Maybe<UserAdministratorProfileReturnList>;
  getUsersAdministratorsProfilesActivities?: Maybe<UserAdministratorProfileActivityReturnList>;
  getUsersAdministratorsProfilesActivitiesByDate?: Maybe<UserAdministratorProfileActivityReturnList>;
  getUsersAdministratorsProfilesActivitiesByDateDashboard?: Maybe<UserAdministratorProfileActivityDashboardReturnList>;
  getUsersAdministratorsProfilesActivitiesByUserId?: Maybe<UserAdministratorProfileActivityReturnList>;
  getUsersAdministratorsProfilesActivitiesByUserIdDashboard?: Maybe<UserAdministratorProfileActivityDashboardReturnList>;
  getUsersAdministratorsProfilesActivitiesDashboard?: Maybe<UserAdministratorProfileActivityDashboardReturnList>;
  getUsersAdministratorsProfilesByDate?: Maybe<UserAdministratorProfileReturnList>;
  getUsersAdministratorsProfilesByDateDashboard?: Maybe<UserAdministratorProfileDashboardReturnList>;
  getUsersAdministratorsProfilesByUserId?: Maybe<UserAdministratorProfileReturnList>;
  getUsersAdministratorsProfilesByUserIdDashboard?: Maybe<UserAdministratorProfileDashboardReturnList>;
  getUsersAdministratorsProfilesDashboard?: Maybe<UserAdministratorProfileDashboardReturnList>;
  getUsersAppsUids?: Maybe<UserAppUidReturnList>;
  getUsersAppsUidsByDate?: Maybe<UserAppUidReturnList>;
  getUsersAppsUidsByDateDashboard?: Maybe<UserAppUidDashboardReturnList>;
  getUsersAppsUidsDashboard?: Maybe<UserAppUidDashboardReturnList>;
  getUsersBadges?: Maybe<UserBadgeReturnList>;
  getUsersBadgesByDate?: Maybe<UserBadgeReturnList>;
  getUsersBadgesByDateDashboard?: Maybe<UserBadgeDashboardReturnList>;
  getUsersBadgesByUserId?: Maybe<UserBadgeReturnList>;
  getUsersBadgesByUserIdDashboard?: Maybe<UserBadgeDashboardReturnList>;
  getUsersBadgesDashboard?: Maybe<UserBadgeDashboardReturnList>;
  getUsersBalancesBeans?: Maybe<UserBalanceBeansReturnList>;
  getUsersBalancesBeansByDate?: Maybe<UserBalanceBeansReturnList>;
  getUsersBalancesBeansByDateDashboard?: Maybe<UserBalanceBeanDashboardReturnList>;
  getUsersBalancesBeansByUserId?: Maybe<UserBalanceBeansReturnList>;
  getUsersBalancesBeansByUserIdDashboard?: Maybe<UserBalanceBeanDashboardReturnList>;
  getUsersBalancesBeansDashboard?: Maybe<UserBalanceBeanDashboardReturnList>;
  getUsersBalancesCoins?: Maybe<UserBalanceCoinsReturnList>;
  getUsersBalancesCoinsByDate?: Maybe<UserBalanceCoinsReturnList>;
  getUsersBalancesCoinsByDateDashboard?: Maybe<UserBalanceCoinDashboardReturnList>;
  getUsersBalancesCoinsByUserId?: Maybe<UserBalanceCoinsReturnList>;
  getUsersBalancesCoinsByUserIdDashboard?: Maybe<UserBalanceCoinDashboardReturnList>;
  getUsersBalancesCoinsDashboard?: Maybe<UserBalanceCoinDashboardReturnList>;
  getUsersBalancesPoints?: Maybe<UserBalancePointsReturnList>;
  getUsersBalancesPointsByDate?: Maybe<UserBalancePointsReturnList>;
  getUsersBalancesPointsByDateDashboard?: Maybe<UserBalancePointDashboardReturnList>;
  getUsersBalancesPointsByUserId?: Maybe<UserBalancePointsReturnList>;
  getUsersBalancesPointsByUserIdDashboard?: Maybe<UserBalancePointDashboardReturnList>;
  getUsersBalancesPointsDashboard?: Maybe<UserBalancePointDashboardReturnList>;
  getUsersBanneds?: Maybe<UserBannedReturnList>;
  getUsersBannedsByDate?: Maybe<UserBannedReturnList>;
  getUsersBannedsByDateDashboard?: Maybe<UserBannedDashboardReturnList>;
  getUsersBannedsByUserId?: Maybe<UserBannedReturnList>;
  getUsersBannedsByUserIdDashboard?: Maybe<UserBannedDashboardReturnList>;
  getUsersBannedsDashboard?: Maybe<UserBannedDashboardReturnList>;
  getUsersBannedsDetails?: Maybe<UserBannedDetailReturnList>;
  getUsersBannedsDetailsByDate?: Maybe<UserBannedDetailReturnList>;
  getUsersBannedsDetailsByDateDashboard?: Maybe<UserBannedDetailDashboardReturnList>;
  getUsersBannedsDetailsByUserId?: Maybe<UserBannedDetailReturnList>;
  getUsersBannedsDetailsByUserIdDashboard?: Maybe<UserBannedDetailDashboardReturnList>;
  getUsersBannedsDetailsDashboard?: Maybe<UserBannedDetailDashboardReturnList>;
  getUsersBeans?: Maybe<UserBeansReturn>;
  getUsersBlockedsByDateDashboard?: Maybe<UserBlockedDashboardReturnList>;
  getUsersBlockedsByUserIdDashboard?: Maybe<UserBlockedDashboardReturnList>;
  getUsersBlockedsDashboard?: Maybe<UserBlockedDashboardReturnList>;
  getUsersByDateDashboard?: Maybe<UserDashboardReturnList>;
  getUsersByIds?: Maybe<UsersReturn>;
  getUsersByUserIdDashboard?: Maybe<UserDashboardReturnList>;
  getUsersCoins?: Maybe<UserCoinsReturn>;
  getUsersDashboard?: Maybe<UserDashboardReturnList>;
  getUsersDetails?: Maybe<UserDetailReturnList>;
  getUsersDetailsByDate?: Maybe<UserDetailReturnList>;
  getUsersDetailsByDateDashboard?: Maybe<UserDetailDashboardReturnList>;
  getUsersDetailsByUserId?: Maybe<UserDetailReturnList>;
  getUsersDetailsByUserIdDashboard?: Maybe<UserDetailDashboardReturnList>;
  getUsersDetailsDashboard?: Maybe<UserDetailDashboardReturnList>;
  getUsersDevicesInformations?: Maybe<UserDeviceInformationReturnList>;
  getUsersDevicesInformationsByDate?: Maybe<UserDeviceInformationReturnList>;
  getUsersDevicesInformationsByDateDashboard?: Maybe<UserDeviceInformationDashboardReturnList>;
  getUsersDevicesInformationsByUserId?: Maybe<UserDeviceInformationReturnList>;
  getUsersDevicesInformationsByUserIdDashboard?: Maybe<UserDeviceInformationDashboardReturnList>;
  getUsersDevicesInformationsDashboard?: Maybe<UserDeviceInformationDashboardReturnList>;
  getUsersFollowersByDateDashboard?: Maybe<UserFollowerDashboardReturnList>;
  getUsersFollowersByUserIdDashboard?: Maybe<UserFollowerDashboardReturnList>;
  getUsersFollowersDashboard?: Maybe<UserFollowerDashboardReturnList>;
  getUsersFollowingsByDateDashboard?: Maybe<UserFollowingDashboardReturnList>;
  getUsersFollowingsByUserIdDashboard?: Maybe<UserFollowingDashboardReturnList>;
  getUsersFollowingsDashboard?: Maybe<UserFollowingDashboardReturnList>;
  getUsersForChatByUsername?: Maybe<UsersForChatReturnList>;
  getUsersGiftsPackages?: Maybe<UserGiftPackageReturnList>;
  getUsersGiftsPackagesByDate?: Maybe<UserGiftPackageReturnList>;
  getUsersGiftsPackagesByDateDashboard?: Maybe<UserGiftPackageDashboardReturnList>;
  getUsersGiftsPackagesByUserId?: Maybe<UserGiftPackageReturnList>;
  getUsersGiftsPackagesByUserIdDashboard?: Maybe<UserGiftPackageDashboardReturnList>;
  getUsersGiftsPackagesDashboard?: Maybe<UserGiftPackageDashboardReturnList>;
  getUsersLevels?: Maybe<UserLevelReturnList>;
  getUsersLevelsByDate?: Maybe<UserLevelReturnList>;
  getUsersLevelsByDateDashboard?: Maybe<UserLevelDashboardReturnList>;
  getUsersLevelsByUserId?: Maybe<UserLevelReturnList>;
  getUsersLevelsByUserIdDashboard?: Maybe<UserLevelDashboardReturnList>;
  getUsersLevelsDashboard?: Maybe<UserLevelDashboardReturnList>;
  getUsersLivesSettings?: Maybe<UserLiveSettingReturnList>;
  getUsersLivesSettingsByDateDashboard?: Maybe<UserLiveSettingDashboardReturnList>;
  getUsersLivesSettingsByUserId?: Maybe<UserLiveSettingReturnList>;
  getUsersLivesSettingsByUserIdDashboard?: Maybe<UserLiveSettingDashboardReturnList>;
  getUsersLivesSettingsDashboard?: Maybe<UserLiveSettingDashboardReturnList>;
  getUsersNotificationsByDateDashboard?: Maybe<UserNotificationDashboardReturnList>;
  getUsersNotificationsByUserIdDashboard?: Maybe<UserNotificationDashboardReturnList>;
  getUsersNotificationsDashboard?: Maybe<UserNotificationDashboardReturnList>;
  getUsersPhotosByDateDashboard?: Maybe<UserPhotoDashboardReturnList>;
  getUsersPhotosByUserIdDashboard?: Maybe<UserPhotoDashboardReturnList>;
  getUsersPhotosDashboard?: Maybe<UserPhotoDashboardReturnList>;
  getUsersPoints?: Maybe<UserPointsReturn>;
  getUsersPrivaciesByDateDashboard?: Maybe<UserPrivacyDashboardReturnList>;
  getUsersPrivaciesByUserIdDashboard?: Maybe<UserPrivacyDashboardReturnList>;
  getUsersPrivaciesDashboard?: Maybe<UserPrivacyDashboardReturnList>;
  getUsersProcessingsQueues?: Maybe<UserProcessingQueueReturnList>;
  getUsersProcessingsQueuesByDate?: Maybe<UserProcessingQueueReturnList>;
  getUsersProcessingsQueuesByDateDashboard?: Maybe<UserProcessingQueueDashboardReturnList>;
  getUsersProcessingsQueuesDashboard?: Maybe<UserProcessingQueueDashboardReturnList>;
  getUsersSupersFansByDateDashboard?: Maybe<UserSuperFanDashboardReturnList>;
  getUsersSupersFansByUserIdDashboard?: Maybe<UserSuperFanDashboardReturnList>;
  getUsersSupersFansDashboard?: Maybe<UserSuperFanDashboardReturnList>;
  getUsersUTCByIds?: Maybe<UsersReturn>;
  getUsersVips?: Maybe<UserVipReturnList>;
  getUsersVipsByDate?: Maybe<UserVipReturnList>;
  getUsersVipsByDateDashboard?: Maybe<UserVipDashboardReturnList>;
  getUsersVipsByUserId?: Maybe<UserVipReturnList>;
  getUsersVipsByUserIdDashboard?: Maybe<UserVipDashboardReturnList>;
  getUsersVipsDashboard?: Maybe<UserVipDashboardReturnList>;
  getUsersVisitsProfilesByDateDashboard?: Maybe<UserVisitProfileDashboardReturnList>;
  getUsersVisitsProfilesByUserIdDashboard?: Maybe<UserVisitProfileDashboardReturnList>;
  getUsersVisitsProfilesDashboard?: Maybe<UserVisitProfileDashboardReturnList>;
  getUsersWarnings?: Maybe<UserWarningReturnList>;
  getUsersWarningsByDate?: Maybe<UserWarningReturnList>;
  getUsersWarningsByDateDashboard?: Maybe<UserWarningDashboardReturnList>;
  getUsersWarningsByUserId?: Maybe<UserWarningReturnList>;
  getUsersWarningsByUserIdDashboard?: Maybe<UserWarningDashboardReturnList>;
  getUsersWarningsDashboard?: Maybe<UserWarningDashboardReturnList>;
  getUsersWarningsDetails?: Maybe<UserWarningDetailReturnList>;
  getUsersWarningsDetailsByDate?: Maybe<UserWarningDetailReturnList>;
  getUsersWarningsDetailsByDateDashboard?: Maybe<UserWarningDetailDashboardReturnList>;
  getUsersWarningsDetailsByUserId?: Maybe<UserWarningDetailReturnList>;
  getUsersWarningsDetailsByUserIdDashboard?: Maybe<UserWarningDetailDashboardReturnList>;
  getUsersWarningsDetailsDashboard?: Maybe<UserWarningDetailDashboardReturnList>;
  getVip?: Maybe<VipReturn>;
  getVipBenefit?: Maybe<VipBenefitReturn>;
  getVipBenefitDashboard?: Maybe<VipBenefitDashboardReturn>;
  getVipBenefitDetail?: Maybe<VipBenefitDetailReturn>;
  getVipBenefitDetailDashboard?: Maybe<VipBenefitDetailDashboardReturn>;
  getVipBenefitDetails?: Maybe<VipBenefitDetailReturnList>;
  getVipBenefits?: Maybe<VipBenefitReturnList>;
  getVipDashboard?: Maybe<VipDashboardReturn>;
  getVips?: Maybe<VipReturnList>;
  getVipsBenefitsByDateDashboard?: Maybe<VipBenefitDashboardReturnList>;
  getVipsBenefitsDashboard?: Maybe<VipBenefitDashboardReturnList>;
  getVipsBenefitsDetailsByDateDashboard?: Maybe<VipBenefitDetailDashboardReturnList>;
  getVipsBenefitsDetailsDashboard?: Maybe<VipBenefitDetailDashboardReturnList>;
  getVipsByDate?: Maybe<VipReturnList>;
  getVipsByDateDashboard?: Maybe<VipDashboardReturnList>;
  getVipsDashboard?: Maybe<VipDashboardReturnList>;
  getWalletCoinSale?: Maybe<WalletCoinSaleReturn>;
  getWalletCoinSaleDashboard?: Maybe<WalletCoinSaleDashboardReturn>;
  getWalletCoinSaleOneByUserId?: Maybe<WalletCoinSaleReturn>;
  getWalletCoinSaleOneByUserIdDashboard?: Maybe<WalletCoinSaleDashboardReturn>;
  getWalletConvert?: Maybe<WalletConvertReturn>;
  getWalletConvertDashboard?: Maybe<WalletConvertDashboardReturn>;
  getWalletConvertOneByUserId?: Maybe<WalletConvertReturn>;
  getWalletConvertOneByUserIdDashboard?: Maybe<WalletConvertDashboardReturn>;
  getWalletPriceCoin?: Maybe<WalletPriceCoinReturn>;
  getWalletPriceCoinDashboard?: Maybe<WalletPriceCoinDashboardReturn>;
  getWalletTypeConvert?: Maybe<WalletTypeConvertReturn>;
  getWalletTypeConvertDashboard?: Maybe<WalletTypeConvertDashboardReturn>;
  getWalletsCoinsSales?: Maybe<WalletCoinSaleReturnList>;
  getWalletsCoinsSalesByDate?: Maybe<WalletCoinSaleReturnList>;
  getWalletsCoinsSalesByDateDashboard?: Maybe<WalletCoinSaleDashboardReturnList>;
  getWalletsCoinsSalesByUserId?: Maybe<WalletCoinSaleReturnList>;
  getWalletsCoinsSalesByUserIdDashboard?: Maybe<WalletCoinSaleDashboardReturnList>;
  getWalletsCoinsSalesDashboard?: Maybe<WalletCoinSaleDashboardReturnList>;
  getWalletsConverts?: Maybe<WalletConvertReturnList>;
  getWalletsConvertsByDate?: Maybe<WalletConvertReturnList>;
  getWalletsConvertsByDateDashboard?: Maybe<WalletConvertDashboardReturnList>;
  getWalletsConvertsByUserId?: Maybe<WalletConvertReturnList>;
  getWalletsConvertsByUserIdDashboard?: Maybe<WalletConvertDashboardReturnList>;
  getWalletsConvertsDashboard?: Maybe<WalletConvertDashboardReturnList>;
  getWalletsPricesCoins?: Maybe<WalletPriceCoinReturnList>;
  getWalletsPricesCoinsByDate?: Maybe<WalletPriceCoinReturnList>;
  getWalletsPricesCoinsByDateDashboard?: Maybe<WalletPriceCoinDashboardReturnList>;
  getWalletsPricesCoinsDashboard?: Maybe<WalletPriceCoinDashboardReturnList>;
  getWalletsTypesConverts?: Maybe<WalletTypeConvertReturnList>;
  getWalletsTypesConvertsByDate?: Maybe<WalletTypeConvertReturnList>;
  getWalletsTypesConvertsByDateDashboard?: Maybe<WalletTypeConvertDashboardReturnList>;
  getWalletsTypesConvertsDashboard?: Maybe<WalletTypeConvertDashboardReturnList>;
  getWithdrawal?: Maybe<WithdrawalReturn>;
  getWithdrawalDashboard?: Maybe<WithdrawalDashboardReturn>;
  getWithdrawalMethod?: Maybe<WithdrawalMethodReturn>;
  getWithdrawalMethodDashboard?: Maybe<WithdrawalMethodDashboardReturn>;
  getWithdrawalMethodDataUser?: Maybe<WithdrawalMethodDataUserReturn>;
  getWithdrawalMethodDataUserDashboard?: Maybe<WithdrawalMethodDataUserDashboardReturn>;
  getWithdrawalMethodDataUserOneByUserId?: Maybe<WithdrawalMethodDataUserReturn>;
  getWithdrawalMethodDataUserOneByUserIdDashboard?: Maybe<WithdrawalMethodDataUserDashboardReturn>;
  getWithdrawalOneByUserId?: Maybe<WithdrawalReturn>;
  getWithdrawalOneByUserIdDashboard?: Maybe<WithdrawalDashboardReturn>;
  getWithdrawalProof?: Maybe<WithdrawalProofReturn>;
  getWithdrawalProofDashboard?: Maybe<WithdrawalProofDashboardReturn>;
  getWithdrawalTypeRefused?: Maybe<WithdrawalTypeRefusedReturn>;
  getWithdrawalTypeRefusedDashboard?: Maybe<WithdrawalTypeRefusedDashboardReturn>;
  getWithdrawals?: Maybe<WithdrawalReturnList>;
  getWithdrawalsByDate?: Maybe<WithdrawalReturnList>;
  getWithdrawalsByDateDashboard?: Maybe<WithdrawalDashboardReturnList>;
  getWithdrawalsByUserId?: Maybe<WithdrawalReturnList>;
  getWithdrawalsByUserIdDashboard?: Maybe<WithdrawalDashboardReturnList>;
  getWithdrawalsDashboard?: Maybe<WithdrawalDashboardReturnList>;
  getWithdrawalsMethods?: Maybe<WithdrawalMethodReturnList>;
  getWithdrawalsMethodsByDate?: Maybe<WithdrawalMethodReturnList>;
  getWithdrawalsMethodsByDateDashboard?: Maybe<WithdrawalMethodDashboardReturnList>;
  getWithdrawalsMethodsDashboard?: Maybe<WithdrawalMethodDashboardReturnList>;
  getWithdrawalsMethodsDatasUsers?: Maybe<WithdrawalMethodDataUserReturnList>;
  getWithdrawalsMethodsDatasUsersByDate?: Maybe<WithdrawalMethodDataUserReturnList>;
  getWithdrawalsMethodsDatasUsersByDateDashboard?: Maybe<WithdrawalMethodDataUserDashboardReturnList>;
  getWithdrawalsMethodsDatasUsersByUserId?: Maybe<WithdrawalMethodDataUserReturnList>;
  getWithdrawalsMethodsDatasUsersByUserIdDashboard?: Maybe<WithdrawalMethodDataUserDashboardReturnList>;
  getWithdrawalsMethodsDatasUsersDashboard?: Maybe<WithdrawalMethodDataUserDashboardReturnList>;
  getWithdrawalsProofs?: Maybe<WithdrawalProofReturnList>;
  getWithdrawalsProofsByDate?: Maybe<WithdrawalProofReturnList>;
  getWithdrawalsProofsByDateDashboard?: Maybe<WithdrawalProofDashboardReturnList>;
  getWithdrawalsProofsDashboard?: Maybe<WithdrawalProofDashboardReturnList>;
  getWithdrawalsTypesRefuseds?: Maybe<WithdrawalTypeRefusedReturnList>;
  getWithdrawalsTypesRefusedsByDate?: Maybe<WithdrawalTypeRefusedReturnList>;
  getWithdrawalsTypesRefusedsByDateDashboard?: Maybe<WithdrawalTypeRefusedDashboardReturnList>;
  getWithdrawalsTypesRefusedsDashboard?: Maybe<WithdrawalTypeRefusedDashboardReturnList>;
  verifyEmail?: Maybe<StringReturn>;
  verifyPhone?: Maybe<StringReturn>;
  verifyUsername?: Maybe<StringReturn>;
};


export type QueryGetAccessAdministratorDashboardArgs = {
  accessAdministratorId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAccessPartnerDashboardArgs = {
  accessPartnerId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAccesssAdministratorsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAccesssAdministratorsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  smsCode?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAccesssPartnersByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAccesssPartnersDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesBalancesPointsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesBalancesPointsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesBalancesPointsByDateDashboardArgs = {
  agencyId?: InputMaybe<Scalars['Int']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  dateHourBalance?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  pointsAfter?: InputMaybe<Scalars['Float']['input']>;
  pointsBefore?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeAgencyBalancePoints?: InputMaybe<TypeAgencyBalancePoints>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesBalancesPointsByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetAgenciesBalancesPointsByUserIdDashboardArgs = {
  agencyId?: InputMaybe<Scalars['Int']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  dateHourBalance?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  pointsAfter?: InputMaybe<Scalars['Float']['input']>;
  pointsBefore?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeAgencyBalancePoints?: InputMaybe<TypeAgencyBalancePoints>;
  userId: Scalars['Int']['input'];
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesBalancesPointsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesBannedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesBannedsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesBannedsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesBannedsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesBannedsDetailsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesBannedsDetailsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesBannedsDetailsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesBannedsDetailsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesByUserIdArgs = {
  UserOwnerId: Scalars['Int']['input'];
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesByUserIdDashboardArgs = {
  UserOwnerAppId: Scalars['Int']['input'];
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  agencyCode?: InputMaybe<Scalars['Int']['input']>;
  agencyComission?: InputMaybe<Scalars['Float']['input']>;
  coinsForSale?: InputMaybe<Scalars['Float']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  document?: InputMaybe<Scalars['String']['input']>;
  documentPhotoBack?: InputMaybe<Scalars['String']['input']>;
  documentPhotoFront?: InputMaybe<Scalars['String']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  facebook?: InputMaybe<Scalars['String']['input']>;
  homeAddress?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  isReseller?: InputMaybe<Scalars['Boolean']['input']>;
  isSubAgency?: InputMaybe<Scalars['Boolean']['input']>;
  levelAgency?: InputMaybe<Scalars['Int']['input']>;
  levelAgencyExperience?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  pointsAccumulatedCurrentMonth?: InputMaybe<Scalars['Float']['input']>;
  pointsAccumulatedLastMonth?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeWithdrawalAgency?: InputMaybe<TypeWithdrawalAgency>;
  userOwnerAppId?: InputMaybe<Scalars['String']['input']>;
  userOwnerId?: InputMaybe<Scalars['Int']['input']>;
  utc?: InputMaybe<Scalars['String']['input']>;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAgenciesResellersBalancesCoinsByDateDashboardArgs = {
  agencyId?: InputMaybe<Scalars['Int']['input']>;
  coinsAfter?: InputMaybe<Scalars['Float']['input']>;
  coinsBefore?: InputMaybe<Scalars['Float']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  dateHourBalance?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeAgencyResellerBalanceCoins?: InputMaybe<TypeAgencyResellerBalanceCoins>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesResellersBalancesCoinsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesSalesDetailsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesSalesDetailsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesSalesDetailsByDateDashboardArgs = {
  agencyId?: InputMaybe<Scalars['Int']['input']>;
  coins?: InputMaybe<Scalars['Float']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  dateReceivedCoins?: InputMaybe<Scalars['String']['input']>;
  dateSentCoins?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesSalesDetailsByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetAgenciesSalesDetailsByUserIdDashboardArgs = {
  agencyId?: InputMaybe<Scalars['Int']['input']>;
  coins?: InputMaybe<Scalars['Float']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  dateReceivedCoins?: InputMaybe<Scalars['String']['input']>;
  dateSentCoins?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetAgenciesSalesDetailsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesUsersArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesUsersByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesUsersByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesUsersByUserIdArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetAgenciesUsersByUserIdDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetAgenciesUsersDashboardArgs = {
  accept?: InputMaybe<Scalars['Boolean']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  agencyId?: InputMaybe<Scalars['Int']['input']>;
  dateAccept?: InputMaybe<Scalars['String']['input']>;
  dateRejected?: InputMaybe<Scalars['String']['input']>;
  dateReleased?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  rejected?: InputMaybe<Scalars['Boolean']['input']>;
  released?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesWarningsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesWarningsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesWarningsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesWarningsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesWarningsDetailsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesWarningsDetailsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesWarningsDetailsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgenciesWarningsDetailsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencyArgs = {
  agencyId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencyBalancePointDashboardArgs = {
  agencyBalancePointId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencyBalancePointOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencyBalancePointsArgs = {
  agencyBalancePointsId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencyBalancePointsOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencyBannedArgs = {
  agencyBannedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencyBannedDashboardArgs = {
  agencyBannedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencyBannedDetailArgs = {
  agencyBannedDetailId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencyBannedDetailDashboardArgs = {
  agencyBannedDetailId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencyDashboardArgs = {
  agencyId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencyOneByUserIdArgs = {
  UserOwnerId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencyOneByUserIdDashboardArgs = {
  UserOwnerAppId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencyResellerBalanceCoinDashboardArgs = {
  agencyResellerBalanceCoinId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencySaleDetailArgs = {
  agencySaleDetailId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencySaleDetailDashboardArgs = {
  agencySaleDetailId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencySaleDetailOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencySaleDetailOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencyUserArgs = {
  agencyUserId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencyUserDashboardArgs = {
  agencyUserId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencyUserOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencyUserOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencyWarningArgs = {
  agencyWarningId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencyWarningDashboardArgs = {
  agencyWarningId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencyWarningDetailArgs = {
  agencyWarningDetailId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAgencyWarningDetailDashboardArgs = {
  agencyWarningDetailId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAnyProfileArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetAppLogArgs = {
  appLogId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAppLogDashboardArgs = {
  appLogId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAppLogOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAppLogOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAppSettingArgs = {
  appSettingId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAppSettingDashboardArgs = {
  appSettingId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAppsLogsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAppsLogsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAppsLogsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAppsLogsByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetAppsLogsByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetAppsLogsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAppsSettingsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAppsSettingsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAppsSettingsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAppsSettingsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetBadgeArgs = {
  badgeId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetBadgeDashboardArgs = {
  badgeId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetBadgesArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetBadgesByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetBadgesByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetBadgesDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  archive?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeBadge?: InputMaybe<TypeBadge>;
};


export type QueryGetBannerLinkArgs = {
  bannerLinkId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetBannerLinkDashboardArgs = {
  bannerLinkId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetBannersLinksArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  expiresIn: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeBannerLink?: InputMaybe<TypeBannerLink>;
  typeBannerLinkPage?: InputMaybe<TypeBannerLinkPage>;
};


export type QueryGetBannersLinksByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  expiresIn: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeBannerLink?: InputMaybe<TypeBannerLink>;
  typeBannerLinkPage?: InputMaybe<TypeBannerLinkPage>;
};


export type QueryGetBannersLinksByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetBannersLinksDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  appId?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expiresIn?: InputMaybe<Scalars['String']['input']>;
  linkWebPage?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeBannerLink?: InputMaybe<TypeBannerLink>;
  typeBannerLinkPage?: InputMaybe<TypeBannerLinkPage>;
};


export type QueryGetChatArgs = {
  chatId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetChatDetailArgs = {
  chatDetailId: Scalars['Int']['input'];
};


export type QueryGetChatsArgs = {
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetChatsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetChatsByUserIdArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetChatsByUsernameArgs = {
  username?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetChatsDetailsArgs = {
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetChatsDetailsByChatIdArgs = {
  chatId: Scalars['Int']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetChatsDetailsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetCountriesCodesArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetCountriesCodesByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetCountriesCodesByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetCountriesCodesDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  codeIsoAlpha2?: InputMaybe<Scalars['String']['input']>;
  codeIsoAlpha3?: InputMaybe<Scalars['String']['input']>;
  codeIsoNumeric?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  ddi?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  extensionDomain?: InputMaybe<Scalars['String']['input']>;
  iconFlag?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  usedInSearch?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetCountryCodeArgs = {
  countryCodeId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetCountryCodeDashboardArgs = {
  countryCodeId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetDomainDashboardArgs = {
  domainId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetDomainsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetDomainsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetEventArgs = {
  eventId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetEventDashboardArgs = {
  eventId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetEventOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetEventOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetEventsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetEventsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetEventsByUserIdArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetEventsByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetEventsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetExampleOtherOneDashboardArgs = {
  exampleOtherOneId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetExampleOtherTwoDashboardArgs = {
  exampleOtherTwoId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetExampleTableDashboardArgs = {
  exampleTableId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetExamplesOthersOnesByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetExamplesOthersOnesDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetExamplesOthersTwosByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetExamplesOthersTwosDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetExamplesTablesByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  exampleOtherOneId?: InputMaybe<Scalars['Int']['input']>;
  exampleOtherTwoId?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeBoolean?: InputMaybe<Scalars['Boolean']['input']>;
  typeCurrency?: InputMaybe<Scalars['Float']['input']>;
  typeDatetime?: InputMaybe<Scalars['String']['input']>;
  typeDecimal?: InputMaybe<Scalars['Float']['input']>;
  typeEnum?: InputMaybe<TypeEnum>;
  typeInt?: InputMaybe<Scalars['Int']['input']>;
  typeText?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetExamplesTablesDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  exampleOtherOneId?: InputMaybe<Scalars['Int']['input']>;
  exampleOtherTwoId?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeBoolean?: InputMaybe<Scalars['Boolean']['input']>;
  typeCurrency?: InputMaybe<Scalars['Float']['input']>;
  typeDatetime?: InputMaybe<Scalars['String']['input']>;
  typeDecimal?: InputMaybe<Scalars['Float']['input']>;
  typeEnum?: InputMaybe<TypeEnum>;
  typeInt?: InputMaybe<Scalars['Int']['input']>;
  typeText?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetFamiliesArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  announcement?: InputMaybe<Scalars['String']['input']>;
  anyCanJoin?: InputMaybe<Scalars['Boolean']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerUserId?: InputMaybe<Scalars['Int']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryGetFamiliesByUserIdDashboardArgs = {
  OwnerUserId: Scalars['Int']['input'];
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  announcement?: InputMaybe<Scalars['String']['input']>;
  anyCanJoin?: InputMaybe<Scalars['Boolean']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerUserId?: InputMaybe<Scalars['Int']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesForcesArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesForcesBenefitsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesForcesBenefitsByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesForcesBenefitsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeFamilyForceBenefit?: InputMaybe<TypeFamilyForceBenefit>;
};


export type QueryGetFamiliesForcesBenefitsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeFamilyForceBenefit?: InputMaybe<TypeFamilyForceBenefit>;
};


export type QueryGetFamiliesForcesBenefitsDetailsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesForcesBenefitsDetailsByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesForcesBenefitsDetailsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  familyForceBenefitId?: InputMaybe<Scalars['Int']['input']>;
  familyForceId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesForcesBenefitsDetailsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  familyForceBenefitId?: InputMaybe<Scalars['Int']['input']>;
  familyForceId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesForcesByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesForcesByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  familyForceLevel?: InputMaybe<Scalars['Int']['input']>;
  limitMember?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesForcesDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  familyForceLevel?: InputMaybe<Scalars['Int']['input']>;
  limitMember?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesMembersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesMembersByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesMembersByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  familyId?: InputMaybe<Scalars['Int']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isCreator?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesMembersByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetFamiliesMembersByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  familyId?: InputMaybe<Scalars['Int']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isCreator?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetFamiliesMembersByUserIdsArgs = {
  userIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


export type QueryGetFamiliesMembersDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksMembersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksMembersByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksMembersByDateDashboardArgs = {
  completed?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  dateTask?: InputMaybe<Scalars['String']['input']>;
  familyId?: InputMaybe<Scalars['Int']['input']>;
  familyTaskTypeId?: InputMaybe<Scalars['Int']['input']>;
  quantityCompleted?: InputMaybe<Scalars['String']['input']>;
  quantityTask?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksMembersByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetFamiliesTasksMembersByUserIdDashboardArgs = {
  completed?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  dateTask?: InputMaybe<Scalars['String']['input']>;
  familyId?: InputMaybe<Scalars['Int']['input']>;
  familyTaskTypeId?: InputMaybe<Scalars['Int']['input']>;
  quantityCompleted?: InputMaybe<Scalars['String']['input']>;
  quantityTask?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetFamiliesTasksMembersDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksMembersHardsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksMembersHardsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksMembersHardsByDateDashboardArgs = {
  completed?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  dateTask?: InputMaybe<Scalars['String']['input']>;
  familyId?: InputMaybe<Scalars['Int']['input']>;
  familyTaskTypeHardId?: InputMaybe<Scalars['Int']['input']>;
  quantityCompleted?: InputMaybe<Scalars['String']['input']>;
  quantityTask?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksMembersHardsByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetFamiliesTasksMembersHardsByUserIdDashboardArgs = {
  completed?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  dateTask?: InputMaybe<Scalars['String']['input']>;
  familyId?: InputMaybe<Scalars['Int']['input']>;
  familyTaskTypeHardId?: InputMaybe<Scalars['Int']['input']>;
  quantityCompleted?: InputMaybe<Scalars['String']['input']>;
  quantityTask?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetFamiliesTasksMembersHardsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksProgressArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksProgressByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksProgressByDateDashboardArgs = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  dateTask?: InputMaybe<Scalars['String']['input']>;
  familyId?: InputMaybe<Scalars['Int']['input']>;
  familyTaskTypeProgressId?: InputMaybe<Scalars['Int']['input']>;
  quantityCompleted?: InputMaybe<Scalars['String']['input']>;
  quantityTask?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksProgressDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksProgresssReceivedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksProgresssReceivedsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksProgresssReceivedsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  familyTaskProgressId?: InputMaybe<Scalars['Int']['input']>;
  received?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksProgresssReceivedsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksTypesArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksTypesByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksTypesByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeFamilyTask?: InputMaybe<TypeFamilyTask>;
};


export type QueryGetFamiliesTasksTypesDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeFamilyTask?: InputMaybe<TypeFamilyTask>;
};


export type QueryGetFamiliesTasksTypesHardsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksTypesHardsByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksTypesHardsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeFamilyTask?: InputMaybe<TypeFamilyTask>;
};


export type QueryGetFamiliesTasksTypesHardsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeFamilyTask?: InputMaybe<TypeFamilyTask>;
};


export type QueryGetFamiliesTasksTypesProgressArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksTypesProgressByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksTypesProgressByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  minimumPointsUser?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeFamilyBonus?: InputMaybe<TypeFamilyBonus>;
  typeFamilyBox?: InputMaybe<TypeFamilyBox>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamiliesTasksTypesProgressDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  minimumPointsUser?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeFamilyBonus?: InputMaybe<TypeFamilyBonus>;
  typeFamilyBox?: InputMaybe<TypeFamilyBox>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyArgs = {
  familyId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyDashboardArgs = {
  familyId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyForceArgs = {
  familyForceId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyForceBenefitArgs = {
  familyForceBenefitId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyForceBenefitDashboardArgs = {
  familyForceBenefitId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyForceBenefitDetailArgs = {
  familyForceBenefitDetailId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyForceBenefitDetailDashboardArgs = {
  familyForceBenefitDetailId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyForceDashboardArgs = {
  familyForceId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyMemberArgs = {
  familyMemberId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyMemberByUsernameArgs = {
  familyId: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};


export type QueryGetFamilyMemberDashboardArgs = {
  familyMemberId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyMemberOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyOneByUserIdDashboardArgs = {
  OwnerUserId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyTaskMemberArgs = {
  familyTaskMemberId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyTaskMemberDashboardArgs = {
  familyTaskMemberId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyTaskMemberHardArgs = {
  familyTaskMemberHardId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyTaskMemberHardDashboardArgs = {
  familyTaskMemberHardId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyTaskMemberHardOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyTaskMemberHardOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyTaskMemberOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyTaskMemberOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyTaskProgressArgs = {
  familyTaskProgressId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyTaskProgressDashboardArgs = {
  familyTaskProgressId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyTaskProgressReceivedArgs = {
  familyTaskProgressReceivedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyTaskProgressReceivedDashboardArgs = {
  familyTaskProgressReceivedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyTaskTypeArgs = {
  familyTaskTypeId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyTaskTypeDashboardArgs = {
  familyTaskTypeId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyTaskTypeHardArgs = {
  familyTaskTypeHardId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyTaskTypeHardDashboardArgs = {
  familyTaskTypeHardId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyTaskTypeProgressArgs = {
  familyTaskTypeProgressId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFamilyTaskTypeProgressDashboardArgs = {
  familyTaskTypeProgressId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGameConfigurationDefaultEarningArgs = {
  gameConfigurationDefaultEarningId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGameConfigurationDefaultEarningDashboardArgs = {
  gameConfigurationDefaultEarningId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGameConfigurationLuckCoinArgs = {
  gameConfigurationLuckCoinId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGameConfigurationLuckCoinDashboardArgs = {
  gameConfigurationLuckCoinId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGameConfigurationSurpriseBoxArgs = {
  gameConfigurationSurpriseBoxId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGameConfigurationSurpriseBoxDashboardArgs = {
  gameConfigurationSurpriseBoxId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGameLuckSurpriseBoxArgs = {
  gameLuckSurpriseBoxId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGameLuckSurpriseBoxDashboardArgs = {
  gameLuckSurpriseBoxId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGameLuckSurpriseBoxOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGameLuckSurpriseBoxOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGamesConfigurationsDefaultsEarningsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGamesConfigurationsDefaultsEarningsByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGamesConfigurationsDefaultsEarningsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeGame?: InputMaybe<TypeGame>;
};


export type QueryGetGamesConfigurationsDefaultsEarningsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeGame?: InputMaybe<TypeGame>;
};


export type QueryGetGamesConfigurationsLucksCoinsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGamesConfigurationsLucksCoinsByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGamesConfigurationsLucksCoinsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes05?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes10?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes20?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes50?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes100?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes250?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes500?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes1000?: InputMaybe<Scalars['Boolean']['input']>;
  colorTimes05?: InputMaybe<Scalars['String']['input']>;
  colorTimes10?: InputMaybe<Scalars['String']['input']>;
  colorTimes20?: InputMaybe<Scalars['String']['input']>;
  colorTimes50?: InputMaybe<Scalars['String']['input']>;
  colorTimes100?: InputMaybe<Scalars['String']['input']>;
  colorTimes250?: InputMaybe<Scalars['String']['input']>;
  colorTimes500?: InputMaybe<Scalars['String']['input']>;
  colorTimes1000?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  gameLuckCoinMultipleCalculation?: InputMaybe<Scalars['Boolean']['input']>;
  giftId?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes05?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes10?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes20?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes50?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes100?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes250?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes500?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes1000?: InputMaybe<Scalars['Int']['input']>;
  quantityCombo?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes05?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes10?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes20?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes50?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes100?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes250?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes500?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes1000?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGamesConfigurationsLucksCoinsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes05?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes10?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes20?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes50?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes100?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes250?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes500?: InputMaybe<Scalars['Boolean']['input']>;
  allowTimes1000?: InputMaybe<Scalars['Boolean']['input']>;
  colorTimes05?: InputMaybe<Scalars['String']['input']>;
  colorTimes10?: InputMaybe<Scalars['String']['input']>;
  colorTimes20?: InputMaybe<Scalars['String']['input']>;
  colorTimes50?: InputMaybe<Scalars['String']['input']>;
  colorTimes100?: InputMaybe<Scalars['String']['input']>;
  colorTimes250?: InputMaybe<Scalars['String']['input']>;
  colorTimes500?: InputMaybe<Scalars['String']['input']>;
  colorTimes1000?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  gameLuckCoinMultipleCalculation?: InputMaybe<Scalars['Boolean']['input']>;
  giftId?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes05?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes10?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes20?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes50?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes100?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes250?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes500?: InputMaybe<Scalars['Int']['input']>;
  modAllowTimes1000?: InputMaybe<Scalars['Int']['input']>;
  quantityCombo?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes05?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes10?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes20?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes50?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes100?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes250?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes500?: InputMaybe<Scalars['Int']['input']>;
  returnAllowTimes1000?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGamesConfigurationsSurprisesBoxArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGamesConfigurationsSurprisesBoxByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGamesConfigurationsSurprisesBoxsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  defaultTime01?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  giftId?: InputMaybe<Scalars['Int']['input']>;
  modTimes?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGamesConfigurationsSurprisesBoxsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  defaultTime01?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  giftId?: InputMaybe<Scalars['Int']['input']>;
  modTimes?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGamesLucksSurprisesBoxArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGamesLucksSurprisesBoxByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGamesLucksSurprisesBoxByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetGamesLucksSurprisesBoxsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  giftIdEarning?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  valueGift?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGamesLucksSurprisesBoxsByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  giftIdEarning?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
  valueGift?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGamesLucksSurprisesBoxsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftArgs = {
  giftId: Scalars['Int']['input'];
};


export type QueryGetGiftDashboardArgs = {
  giftId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftEventArgs = {
  giftEventId: Scalars['Int']['input'];
};


export type QueryGetGiftEventDashboardArgs = {
  giftEventId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftSentArgs = {
  giftSentId: Scalars['Int']['input'];
};


export type QueryGetGiftSentDashboardArgs = {
  giftSentId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftSentLuckCoinDashboardArgs = {
  giftSentLuckCoinId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftSentLuckCoinOneByUserIdDashboardArgs = {
  UserSentId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftSentOneByUserIdDashboardArgs = {
  UserReceivedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftSentRankingHostBetweenDateArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  finalDate?: InputMaybe<Scalars['String']['input']>;
  initialDate?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userReceivedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftSentRankingHostByFamilyBetweenDateArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  familyReceivedId?: InputMaybe<Scalars['Int']['input']>;
  finalDate?: InputMaybe<Scalars['String']['input']>;
  initialDate?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftSentRankingHostByLiveBetweenDateArgs = {
  finalDate?: InputMaybe<Scalars['String']['input']>;
  initialDate?: InputMaybe<Scalars['String']['input']>;
  liveId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftSentRankingLiveBetweenDateArgs = {
  finalDate?: InputMaybe<Scalars['String']['input']>;
  initialDate?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftSentRankingSpectatorBetweenDateArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  finalDate?: InputMaybe<Scalars['String']['input']>;
  initialDate?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userSentId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftSentRankingSpectatorByFamilyBetweenDateArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  familySentId?: InputMaybe<Scalars['Int']['input']>;
  finalDate?: InputMaybe<Scalars['String']['input']>;
  initialDate?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftSentRankingSpectatorByLiveBetweenDateArgs = {
  finalDate?: InputMaybe<Scalars['String']['input']>;
  initialDate?: InputMaybe<Scalars['String']['input']>;
  liveId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftSentRankingSpectatorByProfileBetweenDateArgs = {
  finalDate?: InputMaybe<Scalars['String']['input']>;
  initialDate?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userReceivedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftSentResumeBetweenDateArgs = {
  finalDate?: InputMaybe<Scalars['String']['input']>;
  initialDate?: InputMaybe<Scalars['String']['input']>;
  userReceivedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftSentsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftSentsByUserIdArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetGiftSentsByUserReceivedIdArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userReceivedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftTypeArgs = {
  giftTypeId: Scalars['Int']['input'];
};


export type QueryGetGiftTypeDashboardArgs = {
  giftTypeId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftTypesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  allowedCombos?: InputMaybe<Scalars['String']['input']>;
  animationSpeedCenter?: InputMaybe<Scalars['Int']['input']>;
  animationSpeedSeat?: InputMaybe<Scalars['Int']['input']>;
  archive?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  giftEventId?: InputMaybe<Scalars['Int']['input']>;
  giftTypeId?: InputMaybe<Scalars['Int']['input']>;
  heightAnimation?: InputMaybe<Scalars['Int']['input']>;
  isAnimated?: InputMaybe<Scalars['Boolean']['input']>;
  isCelebrity?: InputMaybe<Scalars['Boolean']['input']>;
  isLuck?: InputMaybe<Scalars['Boolean']['input']>;
  isPackage?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
  widthAnimation?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  allowedCombos?: InputMaybe<Scalars['String']['input']>;
  animationSpeedCenter?: InputMaybe<Scalars['Int']['input']>;
  animationSpeedSeat?: InputMaybe<Scalars['Int']['input']>;
  archive?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  giftEventId?: InputMaybe<Scalars['Int']['input']>;
  giftTypeId?: InputMaybe<Scalars['Int']['input']>;
  heightAnimation?: InputMaybe<Scalars['Int']['input']>;
  isAnimated?: InputMaybe<Scalars['Boolean']['input']>;
  isCelebrity?: InputMaybe<Scalars['Boolean']['input']>;
  isLuck?: InputMaybe<Scalars['Boolean']['input']>;
  isPackage?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
  widthAnimation?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftsEventsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftsEventsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftsSentsByDateDashboardArgs = {
  agencyFinishedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  agencyStartedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  balanceFinishedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  balanceStartedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  dateReceived?: InputMaybe<Scalars['String']['input']>;
  dateSent?: InputMaybe<Scalars['String']['input']>;
  dateSentReceivedLive?: InputMaybe<Scalars['String']['input']>;
  eventFinishedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  eventStartedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  familyReceivedId?: InputMaybe<Scalars['Int']['input']>;
  familySentId?: InputMaybe<Scalars['Int']['input']>;
  giftId?: InputMaybe<Scalars['Int']['input']>;
  indexLuckCoin?: InputMaybe<Scalars['Int']['input']>;
  invisibleGiftGiver?: InputMaybe<Scalars['Boolean']['input']>;
  invitationFinishedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  invitationStartedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  isLuck?: InputMaybe<Scalars['Boolean']['input']>;
  liveId?: InputMaybe<Scalars['Int']['input']>;
  pointsFinishedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  pointsStartedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  processingQueueId?: InputMaybe<Scalars['Int']['input']>;
  quantityCombo?: InputMaybe<Scalars['Int']['input']>;
  returnTimes?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  totalGift?: InputMaybe<Scalars['Int']['input']>;
  totalGiftSentReceived?: InputMaybe<Scalars['Float']['input']>;
  userReceivedId?: InputMaybe<Scalars['Int']['input']>;
  userSentId?: InputMaybe<Scalars['Int']['input']>;
  valueEarning?: InputMaybe<Scalars['Int']['input']>;
  valueGift?: InputMaybe<Scalars['Int']['input']>;
  valueGiftSentReceived?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryGetGiftsSentsByUserIdDashboardArgs = {
  UserReceivedId: Scalars['Int']['input'];
  agencyFinishedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  agencyStartedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  balanceFinishedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  balanceStartedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  dateReceived?: InputMaybe<Scalars['String']['input']>;
  dateSent?: InputMaybe<Scalars['String']['input']>;
  dateSentReceivedLive?: InputMaybe<Scalars['String']['input']>;
  eventFinishedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  eventStartedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  familyReceivedId?: InputMaybe<Scalars['Int']['input']>;
  familySentId?: InputMaybe<Scalars['Int']['input']>;
  giftId?: InputMaybe<Scalars['Int']['input']>;
  indexLuckCoin?: InputMaybe<Scalars['Int']['input']>;
  invisibleGiftGiver?: InputMaybe<Scalars['Boolean']['input']>;
  invitationFinishedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  invitationStartedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  isLuck?: InputMaybe<Scalars['Boolean']['input']>;
  liveId?: InputMaybe<Scalars['Int']['input']>;
  pointsFinishedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  pointsStartedProcessing?: InputMaybe<Scalars['Boolean']['input']>;
  processingQueueId?: InputMaybe<Scalars['Int']['input']>;
  quantityCombo?: InputMaybe<Scalars['Int']['input']>;
  returnTimes?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  totalGift?: InputMaybe<Scalars['Int']['input']>;
  totalGiftSentReceived?: InputMaybe<Scalars['Float']['input']>;
  userReceivedId?: InputMaybe<Scalars['Int']['input']>;
  userSentId?: InputMaybe<Scalars['Int']['input']>;
  valueEarning?: InputMaybe<Scalars['Int']['input']>;
  valueGift?: InputMaybe<Scalars['Int']['input']>;
  valueGiftSentReceived?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryGetGiftsSentsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftsSentsLucksCoinsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  giftId?: InputMaybe<Scalars['Int']['input']>;
  indexId?: InputMaybe<Scalars['Int']['input']>;
  quantityCombo?: InputMaybe<Scalars['Int']['input']>;
  returnTimes?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userSentId?: InputMaybe<Scalars['Int']['input']>;
  valueEarning?: InputMaybe<Scalars['Int']['input']>;
  valueGift?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftsSentsLucksCoinsByUserIdDashboardArgs = {
  UserSentId: Scalars['Int']['input'];
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  giftId?: InputMaybe<Scalars['Int']['input']>;
  indexId?: InputMaybe<Scalars['Int']['input']>;
  quantityCombo?: InputMaybe<Scalars['Int']['input']>;
  returnTimes?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userSentId?: InputMaybe<Scalars['Int']['input']>;
  valueEarning?: InputMaybe<Scalars['Int']['input']>;
  valueGift?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftsSentsLucksCoinsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftsTypesByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGiftsTypesDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetInvitationArgs = {
  invitationId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetInvitationDashboardArgs = {
  invitationId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetInvitationOneByUserIdArgs = {
  UserInvitedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetInvitationOneByUserIdDashboardArgs = {
  UserInvitedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetInvitationRewardArgs = {
  invitationRewardId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetInvitationRewardDashboardArgs = {
  invitationRewardId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetInvitationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetInvitationsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetInvitationsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  dateInvite?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userInvitedId?: InputMaybe<Scalars['Int']['input']>;
  userWhoInvitedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetInvitationsByUserIdArgs = {
  UserInvitedId: Scalars['Int']['input'];
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetInvitationsByUserIdDashboardArgs = {
  UserInvitedId: Scalars['Int']['input'];
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  dateInvite?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userInvitedId?: InputMaybe<Scalars['Int']['input']>;
  userWhoInvitedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetInvitationsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetInvitationsRewardsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetInvitationsRewardsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetInvitationsRewardsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  dateReward?: InputMaybe<Scalars['String']['input']>;
  invitationId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  valueReward?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetInvitationsRewardsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetItemArgs = {
  itemId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetItemDashboardArgs = {
  itemId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetItemPurchasedArgs = {
  itemPurchasedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetItemPurchasedDashboardArgs = {
  itemPurchasedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetItemPurchasedOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetItemPurchasedOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetItensArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeItem?: InputMaybe<TypeItem>;
  valueBeans?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetItensByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeItem?: InputMaybe<TypeItem>;
  valueBeans?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetItensByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeItem?: InputMaybe<TypeItem>;
  valueBeans?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetItensDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeItem?: InputMaybe<TypeItem>;
  valueBeans?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetItensPurchasedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetItensPurchasedsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetItensPurchasedsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  datePurchased?: InputMaybe<Scalars['String']['input']>;
  expiresIn?: InputMaybe<Scalars['String']['input']>;
  itemId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeItem?: InputMaybe<TypeItem>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userSentId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetItensPurchasedsByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetItensPurchasedsByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  datePurchased?: InputMaybe<Scalars['String']['input']>;
  expiresIn?: InputMaybe<Scalars['String']['input']>;
  itemId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeItem?: InputMaybe<TypeItem>;
  userId: Scalars['Int']['input'];
  userSentId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetItensPurchasedsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLastMessageFromRoomArgs = {
  chatId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLevelByUserIdArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryGetLevelHostArgs = {
  levelHostId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLevelHostDashboardArgs = {
  levelHostId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLevelSpectatorArgs = {
  levelSpectatorId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLevelSpectatorDashboardArgs = {
  levelSpectatorId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLevelsHostsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLevelsHostsByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLevelsHostsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  emblem?: InputMaybe<Scalars['String']['input']>;
  gradientColor?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  requiredExp?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLevelsHostsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  emblem?: InputMaybe<Scalars['String']['input']>;
  gradientColor?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  requiredExp?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLevelsSpectatorsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLevelsSpectatorsByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLevelsSpectatorsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  emblem?: InputMaybe<Scalars['String']['input']>;
  gradientColor?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  requiredExp?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLevelsSpectatorsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  emblem?: InputMaybe<Scalars['String']['input']>;
  gradientColor?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  requiredExp?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveArgs = {
  liveId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveDashboardArgs = {
  liveId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveDetailGuestDashboardArgs = {
  liveDetailGuestId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveDetailGuestOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveDetailGuestOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveDetailPeopleArgs = {
  liveId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type QueryGetLiveDetailPeopleDashboardArgs = {
  liveDetailPeopleId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveDetailPeopleOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveDetailPeopleOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveDetailTagArgs = {
  liveDetailTagId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveDetailTagDashboardArgs = {
  liveDetailTagId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveFilterArgs = {
  liveFilterId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveFilterDashboardArgs = {
  liveFilterId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveGuestsByLiveIdArgs = {
  liveId: Scalars['Int']['input'];
};


export type QueryGetLiveOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveOneByUserIdAndUpdateArgs = {
  liveId?: InputMaybe<Scalars['Int']['input']>;
  liveUtc?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetLiveOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveReportArgs = {
  liveReportId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveReportDashboardArgs = {
  liveReportId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveReportOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveReportOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveResumeArgs = {
  liveResumeId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveResumeDashboardArgs = {
  liveResumeId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveResumeOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveResumeOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveSettingArgs = {
  liveId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveSettingDashboardArgs = {
  liveSettingId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveStickerArgs = {
  liveStickerId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveStickerDashboardArgs = {
  liveStickerId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveTagArgs = {
  liveTagId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveTagDashboardArgs = {
  liveTagId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveTokenArgs = {
  channelName: Scalars['String']['input'];
};


export type QueryGetLiveTypeReportArgs = {
  liveTypeReportId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLiveTypeReportDashboardArgs = {
  liveTypeReportId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesByDateDashboardArgs = {
  announcement?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  channelClose?: InputMaybe<Scalars['Boolean']['input']>;
  channelQuality?: InputMaybe<Scalars['String']['input']>;
  copyLivesDetailsTags?: InputMaybe<Scalars['String']['input']>;
  copyUsersAppId?: InputMaybe<Scalars['String']['input']>;
  copyUsersUsername?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  countryShow?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  dateClose?: InputMaybe<Scalars['String']['input']>;
  dateOpen?: InputMaybe<Scalars['String']['input']>;
  imageAvatar?: InputMaybe<Scalars['String']['input']>;
  linkShare?: InputMaybe<Scalars['String']['input']>;
  newFollowers?: InputMaybe<Scalars['Int']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  totalTimeLive?: InputMaybe<Scalars['String']['input']>;
  typeLive?: InputMaybe<TypeLive>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  utc?: InputMaybe<Scalars['String']['input']>;
  viewers?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesByFollowingArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesByTypeAndCountryArgs = {
  country?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeLive?: InputMaybe<TypeLive>;
};


export type QueryGetLivesByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetLivesByUserIdDashboardArgs = {
  announcement?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  channelClose?: InputMaybe<Scalars['Boolean']['input']>;
  channelQuality?: InputMaybe<Scalars['String']['input']>;
  copyLivesDetailsTags?: InputMaybe<Scalars['String']['input']>;
  copyUsersAppId?: InputMaybe<Scalars['String']['input']>;
  copyUsersUsername?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  countryShow?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  dateClose?: InputMaybe<Scalars['String']['input']>;
  dateOpen?: InputMaybe<Scalars['String']['input']>;
  imageAvatar?: InputMaybe<Scalars['String']['input']>;
  linkShare?: InputMaybe<Scalars['String']['input']>;
  newFollowers?: InputMaybe<Scalars['Int']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  totalTimeLive?: InputMaybe<Scalars['String']['input']>;
  typeLive?: InputMaybe<TypeLive>;
  userId: Scalars['Int']['input'];
  utc?: InputMaybe<Scalars['String']['input']>;
  viewers?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesDetailsGuestsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesDetailsGuestsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesDetailsGuestsByDateDashboardArgs = {
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  audioMuted?: InputMaybe<Scalars['Boolean']['input']>;
  audioOpen?: InputMaybe<Scalars['Boolean']['input']>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  dateJoined?: InputMaybe<Scalars['String']['input']>;
  dateLeaved?: InputMaybe<Scalars['String']['input']>;
  liveId?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  rejected?: InputMaybe<Scalars['Boolean']['input']>;
  requesting?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  totalTime?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  videoOpen?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetLivesDetailsGuestsByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetLivesDetailsGuestsByUserIdDashboardArgs = {
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  audioMuted?: InputMaybe<Scalars['Boolean']['input']>;
  audioOpen?: InputMaybe<Scalars['Boolean']['input']>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  dateJoined?: InputMaybe<Scalars['String']['input']>;
  dateLeaved?: InputMaybe<Scalars['String']['input']>;
  liveId?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  rejected?: InputMaybe<Scalars['Boolean']['input']>;
  requesting?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  totalTime?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['Int']['input'];
  videoOpen?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetLivesDetailsGuestsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesDetailsPeoplesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesDetailsPeoplesByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesDetailsPeoplesByDateDashboardArgs = {
  canJoinSeat?: InputMaybe<Scalars['Boolean']['input']>;
  chatMuted?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  inLive?: InputMaybe<Scalars['Boolean']['input']>;
  kicked?: InputMaybe<Scalars['Boolean']['input']>;
  liveId?: InputMaybe<Scalars['Int']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesDetailsPeoplesByLiveIdArgs = {
  liveId: Scalars['Int']['input'];
};


export type QueryGetLivesDetailsPeoplesByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetLivesDetailsPeoplesByUserIdDashboardArgs = {
  canJoinSeat?: InputMaybe<Scalars['Boolean']['input']>;
  chatMuted?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  inLive?: InputMaybe<Scalars['Boolean']['input']>;
  kicked?: InputMaybe<Scalars['Boolean']['input']>;
  liveId?: InputMaybe<Scalars['Int']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetLivesDetailsPeoplesDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesDetailsTagsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesDetailsTagsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesDetailsTagsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  liveId?: InputMaybe<Scalars['Int']['input']>;
  liveTagId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesDetailsTagsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesFiltersArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesFiltersByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesFiltersByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  resource?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesFiltersDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  resource?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesReportsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesReportsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesReportsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  dateReport?: InputMaybe<Scalars['String']['input']>;
  liveId?: InputMaybe<Scalars['Int']['input']>;
  liveTypeReportId?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesReportsByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetLivesReportsByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  dateReport?: InputMaybe<Scalars['String']['input']>;
  liveId?: InputMaybe<Scalars['Int']['input']>;
  liveTypeReportId?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetLivesReportsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesResumesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesResumesByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesResumesByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  dateLive?: InputMaybe<Scalars['String']['input']>;
  liveId?: InputMaybe<Scalars['Int']['input']>;
  newFollowers?: InputMaybe<Scalars['Int']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  totalTimeLive?: InputMaybe<Scalars['String']['input']>;
  typeLive?: InputMaybe<TypeLive>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  viewers?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesResumesByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetLivesResumesByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  dateLive?: InputMaybe<Scalars['String']['input']>;
  liveId?: InputMaybe<Scalars['Int']['input']>;
  newFollowers?: InputMaybe<Scalars['Int']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  totalTimeLive?: InputMaybe<Scalars['String']['input']>;
  typeLive?: InputMaybe<TypeLive>;
  userId: Scalars['Int']['input'];
  viewers?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesResumesDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesSettingsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesSettingsByDateDashboardArgs = {
  allowMessagesChat?: InputMaybe<Scalars['Boolean']['input']>;
  allowStrangersInSeat?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  liveId?: InputMaybe<Scalars['Int']['input']>;
  messagePinnedChat?: InputMaybe<Scalars['String']['input']>;
  numberSeats?: InputMaybe<Scalars['Int']['input']>;
  roomPassword?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  themeBackground?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetLivesSettingsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesStickersArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesStickersByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesStickersByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  resource?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesStickersDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  resource?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesTagsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesTagsByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesTagsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesTagsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesTypesReportsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesTypesReportsByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesTypesReportsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLivesTypesReportsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLucksGiftsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetMyAndFollowingPostsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetMyLiveArgs = {
  type?: InputMaybe<TypeLive>;
};


export type QueryGetPaymentAgentArgs = {
  paymentAgentId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPaymentAgentDashboardArgs = {
  paymentAgentId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPaymentAgentOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPaymentAgentOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPaymentAgentPaidArgs = {
  paymentAgentPaidId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPaymentAgentPaidDashboardArgs = {
  paymentAgentPaidId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPaymentsAgentsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPaymentsAgentsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPaymentsAgentsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  online?: InputMaybe<Scalars['Boolean']['input']>;
  scorePayment?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPaymentsAgentsByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetPaymentsAgentsByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  online?: InputMaybe<Scalars['Boolean']['input']>;
  scorePayment?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetPaymentsAgentsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPaymentsAgentsPaidsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPaymentsAgentsPaidsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPaymentsAgentsPaidsByDateDashboardArgs = {
  codeWithdrawal?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  dateStatus?: InputMaybe<Scalars['String']['input']>;
  dateWithdrawal?: InputMaybe<Scalars['String']['input']>;
  paymentAgentId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  timeLeft?: InputMaybe<Scalars['String']['input']>;
  typeWithdrawalStatus?: InputMaybe<TypeWithdrawalStatus>;
  valueCurrency?: InputMaybe<Scalars['Float']['input']>;
  valuePointsEarnings?: InputMaybe<Scalars['Float']['input']>;
  valuePointsToPay?: InputMaybe<Scalars['Float']['input']>;
  valuePointsTotal?: InputMaybe<Scalars['Float']['input']>;
  valueUsd?: InputMaybe<Scalars['Int']['input']>;
  withdrawalId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPaymentsAgentsPaidsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPhoneByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryGetPlatformSellerForAgencyArgs = {
  platformSellerForAgencyId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformSellerForAgencyDashboardArgs = {
  platformSellerForAgencyId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformSellerForAgencyPriceArgs = {
  platformSellerForAgencyPriceId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformSellerForAgencyPriceDashboardArgs = {
  platformSellerForAgencyPriceId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformSellerForAgencyProofArgs = {
  platformSellerForAgencyProofId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformSellerForAgencyProofDashboardArgs = {
  platformSellerForAgencyProofId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformSellerForUserArgs = {
  platformSellerForUserId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformSellerForUserDashboardArgs = {
  platformSellerForUserId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformSellerForUserOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformSellerForUserOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformSellerForUserPriceArgs = {
  platformSellerForUserPriceId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformSellerForUserPriceDashboardArgs = {
  platformSellerForUserPriceId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformsSellersForAgenciesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformsSellersForAgenciesByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformsSellersForAgenciesByDateDashboardArgs = {
  agencyId?: InputMaybe<Scalars['Int']['input']>;
  coins?: InputMaybe<Scalars['Float']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformsSellersForAgenciesDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformsSellersForAgenciesPricesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformsSellersForAgenciesPricesByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformsSellersForAgenciesPricesByDateDashboardArgs = {
  coinsPerUsd?: InputMaybe<Scalars['Float']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  usdFinal?: InputMaybe<Scalars['Float']['input']>;
  usdInitial?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryGetPlatformsSellersForAgenciesPricesDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformsSellersForAgenciesProofsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformsSellersForAgenciesProofsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformsSellersForAgenciesProofsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  platformSellerForAgencyId?: InputMaybe<Scalars['Int']['input']>;
  proof?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformsSellersForAgenciesProofsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformsSellersForUsersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformsSellersForUsersByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformsSellersForUsersByDateDashboardArgs = {
  coins?: InputMaybe<Scalars['Float']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformsSellersForUsersByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetPlatformsSellersForUsersByUserIdDashboardArgs = {
  coins?: InputMaybe<Scalars['Float']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetPlatformsSellersForUsersDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformsSellersForUsersPricesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformsSellersForUsersPricesByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlatformsSellersForUsersPricesByDateDashboardArgs = {
  coinsPerUsd?: InputMaybe<Scalars['Float']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  usdFinal?: InputMaybe<Scalars['Float']['input']>;
  usdInitial?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryGetPlatformsSellersForUsersPricesDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostArgs = {
  postId: Scalars['Int']['input'];
};


export type QueryGetPostCommentArgs = {
  postCommentId: Scalars['Int']['input'];
};


export type QueryGetPostCommentDashboardArgs = {
  postCommentId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostCommentOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostCommentsByPostIdArgs = {
  postId: Scalars['Int']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostDashboardArgs = {
  postId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostLikeDashboardArgs = {
  postLikeId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostLikeOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostLikesByPostIdArgs = {
  data?: InputMaybe<GetPostLikesByPostId>;
};


export type QueryGetPostOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostTagArgs = {
  postId: Scalars['Int']['input'];
  postTagId: Scalars['Int']['input'];
};


export type QueryGetPostTagDashboardArgs = {
  postTagId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostTagsArgs = {
  postId: Scalars['Int']['input'];
};


export type QueryGetPostsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  date?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostsByUserIdArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetPostsByUserIdDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetPostsCommentsByDateDashboardArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  date?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostsCommentsByUserIdDashboardArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetPostsCommentsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostsLikesByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  date?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostsLikesByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetPostsLikesDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostsTagsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  postId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  tagId?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostsTagsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetQuantityNotSeenMessagesArgs = {
  chatId: Scalars['Int']['input'];
  messageId: Scalars['Int']['input'];
};


export type QueryGetTagArgs = {
  tagId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTagDashboardArgs = {
  tagId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTagsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTagsByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTagsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTagsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTaskTypeHostArgs = {
  taskTypeHostId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTaskTypeHostDashboardArgs = {
  taskTypeHostId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTaskTypeSpectatorArgs = {
  taskTypeSpectatorId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTaskTypeSpectatorDashboardArgs = {
  taskTypeSpectatorId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTaskUserHostArgs = {
  taskUserHostId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTaskUserHostDashboardArgs = {
  taskUserHostId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTaskUserHostOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTaskUserHostOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTaskUserSpectatorArgs = {
  taskUserSpectatorId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTaskUserSpectatorDashboardArgs = {
  taskUserSpectatorId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTaskUserSpectatorOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTaskUserSpectatorOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTasksTypesHostsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTasksTypesHostsByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTasksTypesHostsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeTaskBonus?: InputMaybe<TypeTaskBonus>;
  typeTaskTypeHost?: InputMaybe<TypeTaskTypeHost>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTasksTypesHostsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeTaskBonus?: InputMaybe<TypeTaskBonus>;
  typeTaskTypeHost?: InputMaybe<TypeTaskTypeHost>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTasksTypesSpectatorsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTasksTypesSpectatorsByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTasksTypesSpectatorsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeTaskBonus?: InputMaybe<TypeTaskBonus>;
  typeTaskTypeSpectator?: InputMaybe<TypeTaskTypeSpectator>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTasksTypesSpectatorsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeTaskBonus?: InputMaybe<TypeTaskBonus>;
  typeTaskTypeSpectator?: InputMaybe<TypeTaskTypeSpectator>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTasksUsersHostsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTasksUsersHostsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTasksUsersHostsByDateDashboardArgs = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  dateTask?: InputMaybe<Scalars['String']['input']>;
  quantityCompleted?: InputMaybe<Scalars['Int']['input']>;
  quantityTask?: InputMaybe<Scalars['Int']['input']>;
  rescued?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  taskTypeHostId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTasksUsersHostsByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetTasksUsersHostsByUserIdDashboardArgs = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  dateTask?: InputMaybe<Scalars['String']['input']>;
  quantityCompleted?: InputMaybe<Scalars['Int']['input']>;
  quantityTask?: InputMaybe<Scalars['Int']['input']>;
  rescued?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  taskTypeHostId?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetTasksUsersHostsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTasksUsersSpectatorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTasksUsersSpectatorsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTasksUsersSpectatorsByDateDashboardArgs = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  dateTask?: InputMaybe<Scalars['String']['input']>;
  quantityCompleted?: InputMaybe<Scalars['Int']['input']>;
  quantityTask?: InputMaybe<Scalars['Int']['input']>;
  rescued?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  taskTypeSpectatorId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTasksUsersSpectatorsByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetTasksUsersSpectatorsByUserIdDashboardArgs = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  dateTask?: InputMaybe<Scalars['String']['input']>;
  quantityCompleted?: InputMaybe<Scalars['Int']['input']>;
  quantityTask?: InputMaybe<Scalars['Int']['input']>;
  rescued?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  taskTypeSpectatorId?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetTasksUsersSpectatorsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserAdministratorProfileArgs = {
  userAdministratorProfileId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserAdministratorProfileActivityArgs = {
  userAdministratorProfileActivityId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserAdministratorProfileActivityDashboardArgs = {
  userAdministratorProfileActivityId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserAdministratorProfileActivityOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserAdministratorProfileActivityOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserAdministratorProfileDashboardArgs = {
  userAdministratorProfileId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserAdministratorProfileOneByUserIdArgs = {
  UserHostId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserAdministratorProfileOneByUserIdDashboardArgs = {
  UserAdministratorId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserAppUidArgs = {
  userAppUidId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserAppUidDashboardArgs = {
  userAppUidId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBadgeArgs = {
  userBadgeId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBadgeDashboardArgs = {
  userBadgeId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBadgeOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBadgeOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBalanceBeanDashboardArgs = {
  userBalanceBeanId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBalanceBeanOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBalanceBeansArgs = {
  userBalanceBeansId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBalanceBeansOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBalanceCoinDashboardArgs = {
  userBalanceCoinId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBalanceCoinOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBalanceCoinsArgs = {
  userBalanceCoinsId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBalanceCoinsOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBalancePointDashboardArgs = {
  userBalancePointId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBalancePointOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBalancePointsArgs = {
  userBalancePointsId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBalancePointsOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBannedArgs = {
  userBannedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBannedDashboardArgs = {
  userBannedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBannedDetailArgs = {
  userBannedDetailId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBannedDetailDashboardArgs = {
  userBannedDetailId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBannedDetailOneByUserIdArgs = {
  UserBannedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBannedDetailOneByUserIdDashboardArgs = {
  UserBannedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBannedOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBannedOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBlockedDashboardArgs = {
  userBlockedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserBlockedOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryGetUserByUsernameArgs = {
  username: Scalars['String']['input'];
};


export type QueryGetUserDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserDetailArgs = {
  userDetailId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserDetailDashboardArgs = {
  userDetailId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserDetailOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserDetailOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserDeviceInformationArgs = {
  userDeviceInformationId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserDeviceInformationDashboardArgs = {
  userDeviceInformationId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserDeviceInformationOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserDeviceInformationOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserFollowerDashboardArgs = {
  userFollowerId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserFollowerOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserFollowingDashboardArgs = {
  userFollowingId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserFollowingOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserForSaleArgs = {
  appId: Scalars['String']['input'];
};


export type QueryGetUserGiftPackageArgs = {
  userGiftPackageId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserGiftPackageDashboardArgs = {
  userGiftPackageId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserGiftPackageOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserGiftPackageOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserLevelArgs = {
  userLevelId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserLevelDashboardArgs = {
  userLevelId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserLevelOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserLiveSettingArgs = {
  liveId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserLiveSettingDashboardArgs = {
  userLiveSettingId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserLiveSettingOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserLiveSettingOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserNotificationDashboardArgs = {
  userNotificationId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserNotificationOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserOneByUserIdDashboardArgs = {
  UserNotReturnModTimesLuckSurpriseBox?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserPhotoDashboardArgs = {
  userPhotoId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserPhotoOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserPrivacyDashboardArgs = {
  userPrivacyId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserPrivacyOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserProcessingQueueArgs = {
  userProcessingQueueId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserProcessingQueueDashboardArgs = {
  userProcessingQueueId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserSuperFanDashboardArgs = {
  userSuperFanId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserSuperFanOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserVipArgs = {
  userVipId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserVipDashboardArgs = {
  userVipId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserVipOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserVisitProfileDashboardArgs = {
  userVisitProfileId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserVisitProfileOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserWarningArgs = {
  userWarningId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserWarningDashboardArgs = {
  userWarningId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserWarningDetailArgs = {
  userWarningDetailId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserWarningDetailDashboardArgs = {
  userWarningDetailId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserWarningDetailOneByUserIdArgs = {
  UserWarningId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserWarningDetailOneByUserIdDashboardArgs = {
  UserWarningId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserWarningOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserWarningOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersAdministratorsProfilesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersAdministratorsProfilesActivitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersAdministratorsProfilesActivitiesByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersAdministratorsProfilesActivitiesByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeActivity?: InputMaybe<TypeActivity>;
  userAdministratorProfileId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersAdministratorsProfilesActivitiesByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersAdministratorsProfilesActivitiesByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeActivity?: InputMaybe<TypeActivity>;
  userAdministratorProfileId?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersAdministratorsProfilesActivitiesDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersAdministratorsProfilesByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersAdministratorsProfilesByDateDashboardArgs = {
  canAcceptOnSeat?: InputMaybe<Scalars['Boolean']['input']>;
  canChangeRoomTheme?: InputMaybe<Scalars['Boolean']['input']>;
  canCloseAllAudio?: InputMaybe<Scalars['Boolean']['input']>;
  canCloseAudio?: InputMaybe<Scalars['Boolean']['input']>;
  canCloseHostAudio?: InputMaybe<Scalars['Boolean']['input']>;
  canCloseVideo?: InputMaybe<Scalars['Boolean']['input']>;
  canMute?: InputMaybe<Scalars['Boolean']['input']>;
  canPlaySongs?: InputMaybe<Scalars['Boolean']['input']>;
  canPreventSeatLive?: InputMaybe<Scalars['Boolean']['input']>;
  canRemoveAllFromSeat?: InputMaybe<Scalars['Boolean']['input']>;
  canRemoveFromLive?: InputMaybe<Scalars['Boolean']['input']>;
  canRemoveFromSeat?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userAdministratorId?: InputMaybe<Scalars['Int']['input']>;
  userHostId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersAdministratorsProfilesByUserIdArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userHostId: Scalars['Int']['input'];
};


export type QueryGetUsersAdministratorsProfilesByUserIdDashboardArgs = {
  UserAdministratorId: Scalars['Int']['input'];
  canAcceptOnSeat?: InputMaybe<Scalars['Boolean']['input']>;
  canChangeRoomTheme?: InputMaybe<Scalars['Boolean']['input']>;
  canCloseAllAudio?: InputMaybe<Scalars['Boolean']['input']>;
  canCloseAudio?: InputMaybe<Scalars['Boolean']['input']>;
  canCloseHostAudio?: InputMaybe<Scalars['Boolean']['input']>;
  canCloseVideo?: InputMaybe<Scalars['Boolean']['input']>;
  canMute?: InputMaybe<Scalars['Boolean']['input']>;
  canPlaySongs?: InputMaybe<Scalars['Boolean']['input']>;
  canPreventSeatLive?: InputMaybe<Scalars['Boolean']['input']>;
  canRemoveAllFromSeat?: InputMaybe<Scalars['Boolean']['input']>;
  canRemoveFromLive?: InputMaybe<Scalars['Boolean']['input']>;
  canRemoveFromSeat?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userAdministratorId?: InputMaybe<Scalars['Int']['input']>;
  userHostId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersAdministratorsProfilesDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersAppsUidsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersAppsUidsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersAppsUidsByDateDashboardArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  lastAppUid?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersAppsUidsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBadgesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBadgesByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBadgesByDateDashboardArgs = {
  badgeId?: InputMaybe<Scalars['Int']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  expiresIn?: InputMaybe<Scalars['String']['input']>;
  inUse?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeLocaleBadge?: InputMaybe<TypeLocaleBadge>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBadgesByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersBadgesByUserIdDashboardArgs = {
  badgeId?: InputMaybe<Scalars['Int']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  expiresIn?: InputMaybe<Scalars['String']['input']>;
  inUse?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeLocaleBadge?: InputMaybe<TypeLocaleBadge>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersBadgesDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBalancesBeansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBalancesBeansByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBalancesBeansByDateDashboardArgs = {
  beansAfter?: InputMaybe<Scalars['Float']['input']>;
  beansBefore?: InputMaybe<Scalars['Float']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  dateHourBalance?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeUserBalanceBeans?: InputMaybe<TypeUserBalanceBeans>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBalancesBeansByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersBalancesBeansByUserIdDashboardArgs = {
  beansAfter?: InputMaybe<Scalars['Float']['input']>;
  beansBefore?: InputMaybe<Scalars['Float']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  dateHourBalance?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeUserBalanceBeans?: InputMaybe<TypeUserBalanceBeans>;
  userId: Scalars['Int']['input'];
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBalancesBeansDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBalancesCoinsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBalancesCoinsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBalancesCoinsByDateDashboardArgs = {
  coinsAfter?: InputMaybe<Scalars['Float']['input']>;
  coinsBefore?: InputMaybe<Scalars['Float']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  dateHourBalance?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeUserBalanceCoins?: InputMaybe<TypeUserBalanceCoins>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBalancesCoinsByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersBalancesCoinsByUserIdDashboardArgs = {
  coinsAfter?: InputMaybe<Scalars['Float']['input']>;
  coinsBefore?: InputMaybe<Scalars['Float']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  dateHourBalance?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeUserBalanceCoins?: InputMaybe<TypeUserBalanceCoins>;
  userId: Scalars['Int']['input'];
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBalancesCoinsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBalancesPointsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBalancesPointsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBalancesPointsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  dateHourBalance?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  pointsAfter?: InputMaybe<Scalars['Float']['input']>;
  pointsBefore?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeUserBalancePoints?: InputMaybe<TypeUserBalancePoints>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBalancesPointsByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersBalancesPointsByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  dateHourBalance?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  pointsAfter?: InputMaybe<Scalars['Float']['input']>;
  pointsBefore?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeUserBalancePoints?: InputMaybe<TypeUserBalancePoints>;
  userId: Scalars['Int']['input'];
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBalancesPointsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBannedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBannedsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBannedsByDateDashboardArgs = {
  banDate?: InputMaybe<Scalars['String']['input']>;
  banExpiryDate?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  reasonForBan?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBannedsByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersBannedsByUserIdDashboardArgs = {
  banDate?: InputMaybe<Scalars['String']['input']>;
  banExpiryDate?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  reasonForBan?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersBannedsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBannedsDetailsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBannedsDetailsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBannedsDetailsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  proof?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userBannedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBannedsDetailsByUserIdArgs = {
  UserBannedId: Scalars['Int']['input'];
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBannedsDetailsByUserIdDashboardArgs = {
  UserBannedId: Scalars['Int']['input'];
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  proof?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userBannedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBannedsDetailsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBlockedsByDateDashboardArgs = {
  blockedId?: InputMaybe<Scalars['Int']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersBlockedsByUserIdDashboardArgs = {
  blockedId?: InputMaybe<Scalars['Int']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersBlockedsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersByDateDashboardArgs = {
  appId?: InputMaybe<Scalars['String']['input']>;
  appleId?: InputMaybe<Scalars['String']['input']>;
  appleToken?: InputMaybe<Scalars['String']['input']>;
  beans?: InputMaybe<Scalars['Float']['input']>;
  biography?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['String']['input']>;
  coins?: InputMaybe<Scalars['Float']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  countryShow?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  emailCode?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  fakeUser?: InputMaybe<Scalars['Boolean']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  invitationCode?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  online?: InputMaybe<Scalars['Boolean']['input']>;
  onlineLive?: InputMaybe<Scalars['Boolean']['input']>;
  onlineOtherLive?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  processingQueueId?: InputMaybe<Scalars['Int']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  smsCode?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  twoFactorEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  userNotReturnModTimesLuckSurpriseBox?: InputMaybe<Scalars['String']['input']>;
  userSentReturnTimeLuckCoin?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  utc?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUsersByIdsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


export type QueryGetUsersByUserIdDashboardArgs = {
  UserNotReturnModTimesLuckSurpriseBox: Scalars['Int']['input'];
  appId?: InputMaybe<Scalars['String']['input']>;
  appleId?: InputMaybe<Scalars['String']['input']>;
  appleToken?: InputMaybe<Scalars['String']['input']>;
  beans?: InputMaybe<Scalars['Float']['input']>;
  biography?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['String']['input']>;
  coins?: InputMaybe<Scalars['Float']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  countryShow?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailCode?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  fakeUser?: InputMaybe<Scalars['Boolean']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  invitationCode?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  online?: InputMaybe<Scalars['Boolean']['input']>;
  onlineLive?: InputMaybe<Scalars['Boolean']['input']>;
  onlineOtherLive?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  processingQueueId?: InputMaybe<Scalars['Int']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  smsCode?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  twoFactorEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  userNotReturnModTimesLuckSurpriseBox?: InputMaybe<Scalars['String']['input']>;
  userSentReturnTimeLuckCoin?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  utc?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUsersDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersDetailsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersDetailsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersDetailsByDateDashboardArgs = {
  alreadyChangedBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  alreadyChangedCountry?: InputMaybe<Scalars['Boolean']['input']>;
  alreadyChangedSex?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  familyId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersDetailsByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersDetailsByUserIdDashboardArgs = {
  alreadyChangedBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  alreadyChangedCountry?: InputMaybe<Scalars['Boolean']['input']>;
  alreadyChangedSex?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  familyId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersDetailsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersDevicesInformationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersDevicesInformationsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersDevicesInformationsByDateDashboardArgs = {
  baseOs?: InputMaybe<Scalars['String']['input']>;
  bootLoader?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
  buildNumber?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  installationDevice?: InputMaybe<Scalars['Boolean']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  isCameraPresent?: InputMaybe<Scalars['String']['input']>;
  mac?: InputMaybe<Scalars['String']['input']>;
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  networkOperator?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  systemVersion?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  uniqueId?: InputMaybe<Scalars['String']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersDevicesInformationsByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersDevicesInformationsByUserIdDashboardArgs = {
  baseOs?: InputMaybe<Scalars['String']['input']>;
  bootLoader?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
  buildNumber?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  installationDevice?: InputMaybe<Scalars['Boolean']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  isCameraPresent?: InputMaybe<Scalars['String']['input']>;
  mac?: InputMaybe<Scalars['String']['input']>;
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  networkOperator?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  systemVersion?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  uniqueId?: InputMaybe<Scalars['String']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersDevicesInformationsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersFollowersByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  followerId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersFollowersByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  followerId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersFollowersDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersFollowingsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  followingId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersFollowingsByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  followingId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersFollowingsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersForChatByUsernameArgs = {
  username?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUsersGiftsPackagesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersGiftsPackagesByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersGiftsPackagesByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  giftId?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersGiftsPackagesByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersGiftsPackagesByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  giftId?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersGiftsPackagesDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersLevelsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersLevelsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersLevelsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  levelHostExperience?: InputMaybe<Scalars['Int']['input']>;
  levelHostId?: InputMaybe<Scalars['Int']['input']>;
  levelSpectatorExperience?: InputMaybe<Scalars['Int']['input']>;
  levelSpectatorId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersLevelsByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersLevelsByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  levelHostExperience?: InputMaybe<Scalars['Int']['input']>;
  levelHostId?: InputMaybe<Scalars['Int']['input']>;
  levelSpectatorExperience?: InputMaybe<Scalars['Int']['input']>;
  levelSpectatorId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersLevelsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersLivesSettingsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersLivesSettingsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  liveId?: InputMaybe<Scalars['Int']['input']>;
  playSoundEffects?: InputMaybe<Scalars['Boolean']['input']>;
  playSpecialEffects?: InputMaybe<Scalars['Boolean']['input']>;
  playSpecialEffectsEntrance?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersLivesSettingsByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersLivesSettingsByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  liveId?: InputMaybe<Scalars['Int']['input']>;
  playSoundEffects?: InputMaybe<Scalars['Boolean']['input']>;
  playSpecialEffects?: InputMaybe<Scalars['Boolean']['input']>;
  playSpecialEffectsEntrance?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersLivesSettingsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersNotificationsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  receiveEmailNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  receiveEventsNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  receiveGeneralNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  receiveGiftNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  receivePushNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  receiveSmsNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  receiveUsersNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersNotificationsByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  receiveEmailNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  receiveEventsNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  receiveGeneralNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  receiveGiftNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  receivePushNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  receiveSmsNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  receiveUsersNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersNotificationsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersPhotosByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersPhotosByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersPhotosDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersPrivaciesByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  invisibleGiftGiver?: InputMaybe<Scalars['Boolean']['input']>;
  invisibleVisitor?: InputMaybe<Scalars['Boolean']['input']>;
  showFollowers?: InputMaybe<Scalars['Boolean']['input']>;
  showFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  showMyGiftGivers?: InputMaybe<Scalars['Boolean']['input']>;
  showRechargeRanking?: InputMaybe<Scalars['Boolean']['input']>;
  showSpectatorRanking?: InputMaybe<Scalars['Boolean']['input']>;
  showStreamerRanking?: InputMaybe<Scalars['Boolean']['input']>;
  showSuperFans?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersPrivaciesByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  invisibleGiftGiver?: InputMaybe<Scalars['Boolean']['input']>;
  invisibleVisitor?: InputMaybe<Scalars['Boolean']['input']>;
  showFollowers?: InputMaybe<Scalars['Boolean']['input']>;
  showFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  showMyGiftGivers?: InputMaybe<Scalars['Boolean']['input']>;
  showRechargeRanking?: InputMaybe<Scalars['Boolean']['input']>;
  showSpectatorRanking?: InputMaybe<Scalars['Boolean']['input']>;
  showStreamerRanking?: InputMaybe<Scalars['Boolean']['input']>;
  showSuperFans?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersPrivaciesDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersProcessingsQueuesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersProcessingsQueuesByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersProcessingsQueuesByDateDashboardArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  processingQueueId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersProcessingsQueuesDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersSupersFansByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  superFanId?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersSupersFansByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  superFanId?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersSupersFansDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersUtcByIdsArgs = {
  userIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


export type QueryGetUsersVipsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersVipsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersVipsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  datePurchased?: InputMaybe<Scalars['String']['input']>;
  expiresIn?: InputMaybe<Scalars['String']['input']>;
  platformVipBonus?: InputMaybe<Scalars['Boolean']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  pointsLeft?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  vipId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersVipsByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersVipsByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  datePurchased?: InputMaybe<Scalars['String']['input']>;
  expiresIn?: InputMaybe<Scalars['String']['input']>;
  platformVipBonus?: InputMaybe<Scalars['Boolean']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  pointsLeft?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
  vipId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersVipsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersVisitsProfilesByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  date?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  visitId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersVisitsProfilesByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
  visitId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersVisitsProfilesDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersWarningsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersWarningsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersWarningsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  warningDate?: InputMaybe<Scalars['String']['input']>;
  warningExpiryDate?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUsersWarningsByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersWarningsByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
  warningDate?: InputMaybe<Scalars['String']['input']>;
  warningExpiryDate?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUsersWarningsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersWarningsDetailsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersWarningsDetailsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersWarningsDetailsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  proof?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userWarningId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersWarningsDetailsByUserIdArgs = {
  UserWarningId: Scalars['Int']['input'];
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersWarningsDetailsByUserIdDashboardArgs = {
  UserWarningId: Scalars['Int']['input'];
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  proof?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userWarningId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersWarningsDetailsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetVipArgs = {
  vipId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetVipBenefitArgs = {
  vipBenefitId: Scalars['Int']['input'];
};


export type QueryGetVipBenefitDashboardArgs = {
  vipBenefitId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetVipBenefitDetailArgs = {
  vipBenefitDetailId: Scalars['Int']['input'];
};


export type QueryGetVipBenefitDetailDashboardArgs = {
  vipBenefitDetailId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetVipBenefitDetailsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetVipBenefitsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetVipDashboardArgs = {
  vipId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetVipsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetVipsBenefitsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeVipBenefit?: InputMaybe<TypeVipBenefit>;
};


export type QueryGetVipsBenefitsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeVipBenefit?: InputMaybe<TypeVipBenefit>;
};


export type QueryGetVipsBenefitsDetailsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  vipBenefitId?: InputMaybe<Scalars['Int']['input']>;
  vipId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetVipsBenefitsDetailsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  vipBenefitId?: InputMaybe<Scalars['Int']['input']>;
  vipId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetVipsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetVipsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  vipLevel?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetVipsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  vipLevel?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletCoinSaleArgs = {
  walletCoinSaleId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletCoinSaleDashboardArgs = {
  walletCoinSaleId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletCoinSaleOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletCoinSaleOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletConvertArgs = {
  walletConvertId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletConvertDashboardArgs = {
  walletConvertId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletConvertOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletConvertOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletPriceCoinArgs = {
  walletPriceCoinId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletPriceCoinDashboardArgs = {
  walletPriceCoinId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletTypeConvertArgs = {
  walletTypeConvertId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletTypeConvertDashboardArgs = {
  walletTypeConvertId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletsCoinsSalesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletsCoinsSalesByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletsCoinsSalesByDateDashboardArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  quantityCoins?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  valueCurrency?: InputMaybe<Scalars['Float']['input']>;
  valueUsd?: InputMaybe<Scalars['Int']['input']>;
  walletPriceCoinId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletsCoinsSalesByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetWalletsCoinsSalesByUserIdDashboardArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  quantityCoins?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
  valueCurrency?: InputMaybe<Scalars['Float']['input']>;
  valueUsd?: InputMaybe<Scalars['Int']['input']>;
  walletPriceCoinId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletsCoinsSalesDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletsConvertsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletsConvertsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletsConvertsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  quantityCoins?: InputMaybe<Scalars['Float']['input']>;
  quantityPoints?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  walletTypeConvertId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletsConvertsByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetWalletsConvertsByUserIdDashboardArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  quantityCoins?: InputMaybe<Scalars['Float']['input']>;
  quantityPoints?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
  walletTypeConvertId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletsConvertsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletsPricesCoinsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletsPricesCoinsByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletsPricesCoinsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  quantityCoins?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  valueCurrency?: InputMaybe<Scalars['Float']['input']>;
  valueUsd?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletsPricesCoinsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  quantityCoins?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  valueCurrency?: InputMaybe<Scalars['Float']['input']>;
  valueUsd?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletsTypesConvertsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletsTypesConvertsByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletsTypesConvertsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  quantityCoins?: InputMaybe<Scalars['Float']['input']>;
  quantityPoints?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWalletsTypesConvertsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  quantityCoins?: InputMaybe<Scalars['Float']['input']>;
  quantityPoints?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalArgs = {
  withdrawalId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalDashboardArgs = {
  withdrawalId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalMethodArgs = {
  withdrawalMethodId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalMethodDashboardArgs = {
  withdrawalMethodId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalMethodDataUserArgs = {
  withdrawalMethodDataUserId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalMethodDataUserDashboardArgs = {
  withdrawalMethodDataUserId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalMethodDataUserOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalMethodDataUserOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalOneByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalOneByUserIdDashboardArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalProofArgs = {
  withdrawalProofId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalProofDashboardArgs = {
  withdrawalProofId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalTypeRefusedArgs = {
  withdrawalTypeRefusedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalTypeRefusedDashboardArgs = {
  withdrawalTypeRefusedId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalsByDateDashboardArgs = {
  codeWithdrawal?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  dateWithdrawal?: InputMaybe<Scalars['String']['input']>;
  paymentAgentId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeWithdrawalStatus?: InputMaybe<TypeWithdrawalStatus>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  valueCurrency?: InputMaybe<Scalars['Float']['input']>;
  valuePoints?: InputMaybe<Scalars['Float']['input']>;
  valueUsd?: InputMaybe<Scalars['Float']['input']>;
  withdrawalMethodDataUserId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalsByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetWithdrawalsByUserIdDashboardArgs = {
  codeWithdrawal?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  dateWithdrawal?: InputMaybe<Scalars['String']['input']>;
  paymentAgentId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeWithdrawalStatus?: InputMaybe<TypeWithdrawalStatus>;
  userId: Scalars['Int']['input'];
  valueCurrency?: InputMaybe<Scalars['Float']['input']>;
  valuePoints?: InputMaybe<Scalars['Float']['input']>;
  valueUsd?: InputMaybe<Scalars['Float']['input']>;
  withdrawalMethodDataUserId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalsMethodsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalsMethodsByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalsMethodsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  taxPercentPayment?: InputMaybe<Scalars['Int']['input']>;
  timePayment?: InputMaybe<Scalars['String']['input']>;
  typeWithdrawalMethodTypePayment?: InputMaybe<TypeWithdrawalMethodTypePayment>;
};


export type QueryGetWithdrawalsMethodsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  taxPercentPayment?: InputMaybe<Scalars['Int']['input']>;
  timePayment?: InputMaybe<Scalars['String']['input']>;
  typeWithdrawalMethodTypePayment?: InputMaybe<TypeWithdrawalMethodTypePayment>;
};


export type QueryGetWithdrawalsMethodsDatasUsersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalsMethodsDatasUsersByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalsMethodsDatasUsersByDateDashboardArgs = {
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankAgencyNumber?: InputMaybe<Scalars['String']['input']>;
  bankDocument?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  bankNumber?: InputMaybe<Scalars['String']['input']>;
  binanceKey?: InputMaybe<Scalars['String']['input']>;
  binding?: InputMaybe<Scalars['Boolean']['input']>;
  bindingDate?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  paypalEmail?: InputMaybe<Scalars['String']['input']>;
  pixKey?: InputMaybe<Scalars['String']['input']>;
  pixName?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  withdrawalMethodId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalsMethodsDatasUsersByUserIdArgs = {
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetWithdrawalsMethodsDatasUsersByUserIdDashboardArgs = {
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankAgencyNumber?: InputMaybe<Scalars['String']['input']>;
  bankDocument?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  bankNumber?: InputMaybe<Scalars['String']['input']>;
  binanceKey?: InputMaybe<Scalars['String']['input']>;
  binding?: InputMaybe<Scalars['Boolean']['input']>;
  bindingDate?: InputMaybe<Scalars['String']['input']>;
  createdAtFinal?: InputMaybe<Scalars['String']['input']>;
  createdAtInitial?: InputMaybe<Scalars['String']['input']>;
  paypalEmail?: InputMaybe<Scalars['String']['input']>;
  pixKey?: InputMaybe<Scalars['String']['input']>;
  pixName?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
  withdrawalMethodId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalsMethodsDatasUsersDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalsProofsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalsProofsByDateArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalsProofsByDateDashboardArgs = {
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  withdrawalId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalsProofsDashboardArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalsTypesRefusedsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalsTypesRefusedsByDateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalsTypesRefusedsByDateDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFinal: Scalars['String']['input'];
  createdAtInitial: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  withdrawalMethodId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWithdrawalsTypesRefusedsDashboardArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  withdrawalMethodId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryVerifyEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryVerifyPhoneArgs = {
  country: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type QueryVerifyUsernameArgs = {
  username: Scalars['String']['input'];
};

export type SignupFakeReturn = {
  __typename?: 'SignupFakeReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type SignupReturn = {
  __typename?: 'SignupReturn';
  data?: Maybe<User>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type StringReturn = {
  __typename?: 'StringReturn';
  status: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  liveAdmins?: Maybe<Array<Maybe<UserAdministratorProfile>>>;
  liveChat?: Maybe<LiveChatMessage>;
  liveDetailPeople?: Maybe<Array<Maybe<LiveDetailPeople>>>;
  liveGiftsAnimations?: Maybe<LiveGiftsAnimations>;
  liveInfo?: Maybe<Array<Maybe<LiveDetailGuest>>>;
  liveSettings?: Maybe<LiveSetting>;
  newMessage?: Maybe<ChatDetail>;
  notifyGiftSent?: Maybe<NotifyGiftSent>;
  notifyGiftSentQuantity?: Maybe<NotifyGiftQuantitySent>;
};


export type SubscriptionLiveAdminsArgs = {
  userHostId: Scalars['Int']['input'];
};


export type SubscriptionLiveChatArgs = {
  liveId: Scalars['Int']['input'];
};


export type SubscriptionLiveDetailPeopleArgs = {
  liveId: Scalars['Int']['input'];
};


export type SubscriptionLiveGiftsAnimationsArgs = {
  liveId: Scalars['Int']['input'];
};


export type SubscriptionLiveInfoArgs = {
  liveId: Scalars['Int']['input'];
};


export type SubscriptionLiveSettingsArgs = {
  liveId: Scalars['Int']['input'];
};


export type SubscriptionNewMessageArgs = {
  chatId: Scalars['Int']['input'];
};


export type SubscriptionNotifyGiftSentArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionNotifyGiftSentQuantityArgs = {
  liveId: Scalars['Int']['input'];
};

export type SuperFans = {
  __typename?: 'SuperFans';
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type Tag = {
  __typename?: 'Tag';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  liveTag?: Maybe<LiveTag>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type TagDashboard = {
  __typename?: 'TagDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type TagDashboardReturn = {
  __typename?: 'TagDashboardReturn';
  data?: Maybe<TagDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type TagDashboardReturnList = {
  __typename?: 'TagDashboardReturnList';
  data?: Maybe<Array<Maybe<TagDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type TagReturn = {
  __typename?: 'TagReturn';
  data?: Maybe<Tag>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type TagReturnList = {
  __typename?: 'TagReturnList';
  data?: Maybe<Array<Maybe<Tag>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type TaskTypeHost = {
  __typename?: 'TaskTypeHost';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  typeTaskBonus?: Maybe<TypeTaskBonus>;
  typeTaskTypeHost?: Maybe<TypeTaskTypeHost>;
  updatedAt: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type TaskTypeHostDashboard = {
  __typename?: 'TaskTypeHostDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  typeTaskBonus?: Maybe<TypeTaskBonus>;
  typeTaskTypeHost?: Maybe<TypeTaskTypeHost>;
  updatedAt: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type TaskTypeHostDashboardReturn = {
  __typename?: 'TaskTypeHostDashboardReturn';
  data?: Maybe<TaskTypeHostDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type TaskTypeHostDashboardReturnList = {
  __typename?: 'TaskTypeHostDashboardReturnList';
  data?: Maybe<Array<Maybe<TaskTypeHostDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type TaskTypeHostReturn = {
  __typename?: 'TaskTypeHostReturn';
  data?: Maybe<TaskTypeHost>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type TaskTypeHostReturnList = {
  __typename?: 'TaskTypeHostReturnList';
  data?: Maybe<Array<Maybe<TaskTypeHost>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type TaskTypeSpectator = {
  __typename?: 'TaskTypeSpectator';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  typeTaskBonus?: Maybe<TypeTaskBonus>;
  typeTaskTypeSpectator?: Maybe<TypeTaskTypeSpectator>;
  updatedAt: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type TaskTypeSpectatorDashboard = {
  __typename?: 'TaskTypeSpectatorDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  typeTaskBonus?: Maybe<TypeTaskBonus>;
  typeTaskTypeSpectator?: Maybe<TypeTaskTypeSpectator>;
  updatedAt: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type TaskTypeSpectatorDashboardReturn = {
  __typename?: 'TaskTypeSpectatorDashboardReturn';
  data?: Maybe<TaskTypeSpectatorDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type TaskTypeSpectatorDashboardReturnList = {
  __typename?: 'TaskTypeSpectatorDashboardReturnList';
  data?: Maybe<Array<Maybe<TaskTypeSpectatorDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type TaskTypeSpectatorReturn = {
  __typename?: 'TaskTypeSpectatorReturn';
  data?: Maybe<TaskTypeSpectator>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type TaskTypeSpectatorReturnList = {
  __typename?: 'TaskTypeSpectatorReturnList';
  data?: Maybe<Array<Maybe<TaskTypeSpectator>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type TaskUserHost = {
  __typename?: 'TaskUserHost';
  completed: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateTask: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  quantityCompleted: Scalars['Int']['output'];
  quantityTask: Scalars['Int']['output'];
  rescued: Scalars['Boolean']['output'];
  taskTypeHost?: Maybe<TaskTypeHost>;
  taskTypeHostId: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type TaskUserHostDashboard = {
  __typename?: 'TaskUserHostDashboard';
  completed: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateTask: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  quantityCompleted: Scalars['Int']['output'];
  quantityTask: Scalars['Int']['output'];
  rescued: Scalars['Boolean']['output'];
  taskTypeHost?: Maybe<TaskTypeHostDashboard>;
  taskTypeHostId: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type TaskUserHostDashboardReturn = {
  __typename?: 'TaskUserHostDashboardReturn';
  data?: Maybe<TaskUserHostDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type TaskUserHostDashboardReturnList = {
  __typename?: 'TaskUserHostDashboardReturnList';
  data?: Maybe<Array<Maybe<TaskUserHostDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type TaskUserHostReturn = {
  __typename?: 'TaskUserHostReturn';
  data?: Maybe<TaskUserHost>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type TaskUserHostReturnList = {
  __typename?: 'TaskUserHostReturnList';
  data?: Maybe<Array<Maybe<TaskUserHost>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type TaskUserSpectator = {
  __typename?: 'TaskUserSpectator';
  completed: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateTask: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  quantityCompleted: Scalars['Int']['output'];
  quantityTask: Scalars['Int']['output'];
  rescued: Scalars['Boolean']['output'];
  taskTypeSpectator?: Maybe<TaskTypeSpectator>;
  taskTypeSpectatorId: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type TaskUserSpectatorDashboard = {
  __typename?: 'TaskUserSpectatorDashboard';
  completed: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateTask: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  quantityCompleted: Scalars['Int']['output'];
  quantityTask: Scalars['Int']['output'];
  rescued: Scalars['Boolean']['output'];
  taskTypeSpectator?: Maybe<TaskTypeSpectatorDashboard>;
  taskTypeSpectatorId: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type TaskUserSpectatorDashboardReturn = {
  __typename?: 'TaskUserSpectatorDashboardReturn';
  data?: Maybe<TaskUserSpectatorDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type TaskUserSpectatorDashboardReturnList = {
  __typename?: 'TaskUserSpectatorDashboardReturnList';
  data?: Maybe<Array<Maybe<TaskUserSpectatorDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type TaskUserSpectatorReturn = {
  __typename?: 'TaskUserSpectatorReturn';
  data?: Maybe<TaskUserSpectator>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type TaskUserSpectatorReturnList = {
  __typename?: 'TaskUserSpectatorReturnList';
  data?: Maybe<Array<Maybe<TaskUserSpectator>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type TransferFamilyReturn = {
  __typename?: 'TransferFamilyReturn';
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export enum TypeActivity {
  CanAcceptInRoom = 'canAcceptInRoom',
  CanAcceptOnSeat = 'canAcceptOnSeat',
  CanChangeRoomTheme = 'canChangeRoomTheme',
  CanCloseAllAudio = 'canCloseAllAudio',
  CanCloseAudio = 'canCloseAudio',
  CanCloseHostAudio = 'canCloseHostAudio',
  CanCloseVideo = 'canCloseVideo',
  CanPlaySongs = 'canPlaySongs',
  CanPreventSeatLive = 'canPreventSeatLive',
  CanRemoveAllFromSeat = 'canRemoveAllFromSeat',
  CanRemoveAllInRoom = 'canRemoveAllInRoom',
  CanRemoveFromSeat = 'canRemoveFromSeat',
  CanRemoveInRoom = 'canRemoveInRoom',
  CanRemoveLive = 'canRemoveLive'
}

export enum TypeAgencyBalancePoints {
  ComissionPoints = 'comissionPoints',
  ConvertToSale = 'convertToSale',
  ConvertToUser = 'convertToUser',
  Initial = 'initial',
  WithdrawalPoints = 'withdrawalPoints'
}

export enum TypeAgencyResellerBalanceCoins {
  BuyingCoins = 'buyingCoins',
  ConvertPointsToSale = 'convertPointsToSale',
  Initial = 'initial',
  SellingCoins = 'sellingCoins'
}

export enum TypeAppLogType {
  Active = 'active',
  Delete = 'delete',
  DeleteForever = 'deleteForever',
  Insert = 'insert',
  Update = 'update'
}

export enum TypeBadge {
  AgencyEarningDaily = 'agencyEarningDaily',
  AgencyEarningMonth = 'agencyEarningMonth',
  AgencyEarningWeek = 'agencyEarningWeek',
  HostSentDaily = 'hostSentDaily',
  HostSentMonth = 'hostSentMonth',
  HostSentWeek = 'hostSentWeek',
  LevelSpectator = 'levelSpectator',
  LiveEarningDaily = 'liveEarningDaily',
  LiveEarningMonth = 'liveEarningMonth',
  LiveEarningWeek = 'liveEarningWeek',
  SpectatorSentDaily = 'spectatorSentDaily',
  SpectatorSentMonth = 'spectatorSentMonth',
  SpectatorSentWeek = 'spectatorSentWeek',
  VipSpectator = 'vipSpectator'
}

export enum TypeBannerLink {
  OpenChatProfile = 'openChatProfile',
  OpenChatTechnical = 'openChatTechnical',
  OpenGame = 'openGame',
  OpenLiveProfile = 'openLiveProfile',
  OpenProfile = 'openProfile',
  OpenWebPage = 'openWebPage'
}

export enum TypeBannerLinkPage {
  HalfLivePage = 'halfLivePage',
  InsideLive = 'insideLive',
  ProfileUser = 'profileUser',
  TopLivePage = 'topLivePage'
}

export enum TypeEnum {
  ExampleOne = 'exampleOne',
  ExampleTwo = 'exampleTwo'
}

export enum TypeEventStatus {
  Analysis = 'analysis',
  Approved = 'approved',
  Rejected = 'rejected'
}

export enum TypeFamilyBonus {
  DidderBeans = 'didderBeans',
  DidderCoins = 'didderCoins',
  DidderPoints = 'didderPoints',
  FrameAvatar = 'frameAvatar'
}

export enum TypeFamilyBox {
  Box1 = 'box1',
  Box2 = 'box2',
  Box3 = 'box3',
  Box4 = 'box4',
  Box5 = 'box5'
}

export enum TypeFamilyForceBenefit {
  DontBeKickedByAdmin = 'dontBeKickedByAdmin',
  DontBeMutedByAdmin = 'dontBeMutedByAdmin',
  ExclusiveGift = 'exclusiveGift',
  GroupChatFunction = 'groupChatFunction',
  HideContributions = 'hideContributions',
  HideEarnings = 'hideEarnings',
  HideFollowers = 'hideFollowers',
  HideFollowings = 'hideFollowings',
  HideOnlineStatus = 'hideOnlineStatus',
  HideProfileVisit = 'hideProfileVisit',
  InvisibleGifter = 'invisibleGifter',
  InvisibleUser = 'invisibleUser',
  LevelUpAcceleration = 'levelUpAcceleration',
  LiveTranslation = 'liveTranslation',
  SpecialEntranceName = 'specialEntranceName',
  SpecialEntry = 'specialEntry',
  SpecialFrame = 'specialFrame',
  SpecialName = 'specialName',
  SpecialProfileName = 'specialProfileName'
}

export enum TypeFamilyTask {
  ReceivePoints = 'receivePoints',
  SendCoins = 'sendCoins',
  SendLuckCoins = 'sendLuckCoins',
  SendSecretCoins = 'sendSecretCoins'
}

export enum TypeGame {
  LuckCoin = 'luckCoin',
  Roulette = 'roulette',
  RouletteSimple = 'rouletteSimple'
}

export enum TypeItem {
  BackgroundRoom = 'backgroundRoom',
  Entrance = 'entrance',
  FrameAvatar = 'frameAvatar'
}

export enum TypeLive {
  MultiAudio = 'multiAudio',
  MultiVideo = 'multiVideo',
  Video = 'video'
}

export enum TypeLocaleBadge {
  EntranceLive = 'entranceLive',
  ProfileUser = 'profileUser'
}

export enum TypeTaskBonus {
  DidderBeans = 'didderBeans',
  DidderCoins = 'didderCoins',
  DidderPoints = 'didderPoints',
  FrameAvatar = 'frameAvatar'
}

export enum TypeTaskTypeHost {
  DoLive = 'doLive',
  NewFollowers = 'newFollowers',
  NewGuardian = 'newGuardian',
  NewSuperFan = 'newSuperFan',
  PostMoments = 'postMoments',
  ReceivePoints = 'receivePoints'
}

export enum TypeTaskTypeSpectator {
  FollowPeople = 'followPeople',
  SendCoins = 'sendCoins',
  SendLuckCoins = 'sendLuckCoins',
  SubscribeGuardian = 'subscribeGuardian',
  SubscribeSuperFan = 'subscribeSuperFan',
  WatchLive = 'watchLive'
}

export enum TypeUserBalanceBeans {
  Initial = 'initial',
  PurchaseItensWithBeans = 'purchaseItensWithBeans',
  ReceivedBeans = 'receivedBeans'
}

export enum TypeUserBalanceCoins {
  ConvertInCoins = 'convertInCoins',
  Initial = 'initial',
  PurchaseCoins = 'purchaseCoins',
  SentCoins = 'sentCoins',
  UsedCoins = 'usedCoins'
}

export enum TypeUserBalancePoints {
  ConvertPoints = 'convertPoints',
  Initial = 'initial',
  ReceivedPoints = 'receivedPoints',
  WithdrawalPoints = 'withdrawalPoints'
}

export enum TypeVipBenefit {
  DontBeKickedByAdmin = 'dontBeKickedByAdmin',
  DontBeMutedByAdmin = 'dontBeMutedByAdmin',
  ExclusiveGift = 'exclusiveGift',
  GroupChatFunction = 'groupChatFunction',
  HideContributions = 'hideContributions',
  HideEarnings = 'hideEarnings',
  HideFollowers = 'hideFollowers',
  HideFollowings = 'hideFollowings',
  HideOnlineStatus = 'hideOnlineStatus',
  HideProfileVisit = 'hideProfileVisit',
  InvisibleGifter = 'invisibleGifter',
  InvisibleUser = 'invisibleUser',
  LevelUpAcceleration = 'levelUpAcceleration',
  LiveTranslation = 'liveTranslation',
  SpecialEntranceName = 'specialEntranceName',
  SpecialEntry = 'specialEntry',
  SpecialFrame = 'specialFrame',
  SpecialName = 'specialName',
  SpecialProfileName = 'specialProfileName'
}

export enum TypeWithdrawalAgency {
  Biweekly = 'biweekly',
  Monthly = 'monthly',
  Weekly = 'weekly'
}

export enum TypeWithdrawalMethodTypePayment {
  Bank = 'bank',
  Binance = 'binance',
  Fed = 'fed',
  Paypal = 'paypal',
  Pix = 'pix'
}

export enum TypeWithdrawalStatus {
  Approved = 'approved',
  Failed = 'failed',
  InProcess = 'inProcess',
  Pending = 'pending',
  Refused = 'refused'
}

export type UnblockReturn = {
  __typename?: 'UnblockReturn';
  status?: Maybe<Scalars['String']['output']>;
};

export type Unfollow = {
  __typename?: 'Unfollow';
  followers?: Maybe<Array<Maybe<Follower>>>;
  following?: Maybe<Array<Maybe<Following>>>;
  status?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<User>;
};

export type UnfollowReturn = {
  __typename?: 'UnfollowReturn';
  data?: Maybe<Unfollow>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAccessAdministratorDashboardReturn = {
  __typename?: 'UpdateAccessAdministratorDashboardReturn';
  data?: Maybe<AccessAdministratorDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAccessPartnerDashboardReturn = {
  __typename?: 'UpdateAccessPartnerDashboardReturn';
  data?: Maybe<AccessPartnerDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAgencyBalancePointDashboardReturn = {
  __typename?: 'UpdateAgencyBalancePointDashboardReturn';
  data?: Maybe<AgencyBalancePointDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAgencyBannedDashboardReturn = {
  __typename?: 'UpdateAgencyBannedDashboardReturn';
  data?: Maybe<AgencyBannedDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAgencyBannedDetailDashboardReturn = {
  __typename?: 'UpdateAgencyBannedDetailDashboardReturn';
  data?: Maybe<AgencyBannedDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAgencyBannedDetailReturn = {
  __typename?: 'UpdateAgencyBannedDetailReturn';
  data?: Maybe<AgencyBannedDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAgencyBannedReturn = {
  __typename?: 'UpdateAgencyBannedReturn';
  data?: Maybe<AgencyBanned>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAgencyDashboardReturn = {
  __typename?: 'UpdateAgencyDashboardReturn';
  data?: Maybe<AgencyDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAgencyResellerBalanceCoinDashboardReturn = {
  __typename?: 'UpdateAgencyResellerBalanceCoinDashboardReturn';
  data?: Maybe<AgencyResellerBalanceCoinDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAgencyReturn = {
  __typename?: 'UpdateAgencyReturn';
  data?: Maybe<Agency>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAgencySaleDetailDashboardReturn = {
  __typename?: 'UpdateAgencySaleDetailDashboardReturn';
  data?: Maybe<AgencySaleDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAgencySaleDetailReturn = {
  __typename?: 'UpdateAgencySaleDetailReturn';
  data?: Maybe<AgencySaleDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAgencyUserDashboardReturn = {
  __typename?: 'UpdateAgencyUserDashboardReturn';
  data?: Maybe<AgencyUserDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAgencyUserReturn = {
  __typename?: 'UpdateAgencyUserReturn';
  data?: Maybe<AgencyUser>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAgencyWarningDashboardReturn = {
  __typename?: 'UpdateAgencyWarningDashboardReturn';
  data?: Maybe<AgencyWarningDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAgencyWarningDetailDashboardReturn = {
  __typename?: 'UpdateAgencyWarningDetailDashboardReturn';
  data?: Maybe<AgencyWarningDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAgencyWarningDetailReturn = {
  __typename?: 'UpdateAgencyWarningDetailReturn';
  data?: Maybe<AgencyWarningDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAgencyWarningReturn = {
  __typename?: 'UpdateAgencyWarningReturn';
  data?: Maybe<AgencyWarning>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAppLogDashboardReturn = {
  __typename?: 'UpdateAppLogDashboardReturn';
  data?: Maybe<AppLogDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAppLogReturn = {
  __typename?: 'UpdateAppLogReturn';
  data?: Maybe<AppLog>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAppSettingDashboardReturn = {
  __typename?: 'UpdateAppSettingDashboardReturn';
  data?: Maybe<AppSettingDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateAppSettingReturn = {
  __typename?: 'UpdateAppSettingReturn';
  data?: Maybe<AppSetting>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateBadgeDashboardReturn = {
  __typename?: 'UpdateBadgeDashboardReturn';
  data?: Maybe<BadgeDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateBadgeReturn = {
  __typename?: 'UpdateBadgeReturn';
  data?: Maybe<Badge>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateBannerLinkDashboardReturn = {
  __typename?: 'UpdateBannerLinkDashboardReturn';
  data?: Maybe<BannerLinkDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateBannerLinkReturn = {
  __typename?: 'UpdateBannerLinkReturn';
  data?: Maybe<BannerLink>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateChatDetailReturn = {
  __typename?: 'UpdateChatDetailReturn';
  data?: Maybe<ChatDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateChatReturn = {
  __typename?: 'UpdateChatReturn';
  data?: Maybe<Chat>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateCountryCodeDashboardReturn = {
  __typename?: 'UpdateCountryCodeDashboardReturn';
  data?: Maybe<CountryCodeDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateCountryCodeReturn = {
  __typename?: 'UpdateCountryCodeReturn';
  data?: Maybe<CountryCode>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateDomainDashboardReturn = {
  __typename?: 'UpdateDomainDashboardReturn';
  data?: Maybe<DomainDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateEventDashboardReturn = {
  __typename?: 'UpdateEventDashboardReturn';
  data?: Maybe<EventDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateEventReturn = {
  __typename?: 'UpdateEventReturn';
  data?: Maybe<Event>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateExampleOtherOneDashboardReturn = {
  __typename?: 'UpdateExampleOtherOneDashboardReturn';
  data?: Maybe<ExampleOtherOneDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateExampleOtherTwoDashboardReturn = {
  __typename?: 'UpdateExampleOtherTwoDashboardReturn';
  data?: Maybe<ExampleOtherTwoDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateExampleTableDashboardReturn = {
  __typename?: 'UpdateExampleTableDashboardReturn';
  data?: Maybe<ExampleTableDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyDashboardReturn = {
  __typename?: 'UpdateFamilyDashboardReturn';
  data?: Maybe<FamilyDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyForceBenefitDashboardReturn = {
  __typename?: 'UpdateFamilyForceBenefitDashboardReturn';
  data?: Maybe<FamilyForceBenefitDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyForceBenefitDetailDashboardReturn = {
  __typename?: 'UpdateFamilyForceBenefitDetailDashboardReturn';
  data?: Maybe<FamilyForceBenefitDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyForceBenefitDetailReturn = {
  __typename?: 'UpdateFamilyForceBenefitDetailReturn';
  data?: Maybe<FamilyForceBenefitDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyForceBenefitReturn = {
  __typename?: 'UpdateFamilyForceBenefitReturn';
  data?: Maybe<FamilyForceBenefit>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyForceDashboardReturn = {
  __typename?: 'UpdateFamilyForceDashboardReturn';
  data?: Maybe<FamilyForceDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyForceReturn = {
  __typename?: 'UpdateFamilyForceReturn';
  data?: Maybe<FamilyForce>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyMemberDashboardReturn = {
  __typename?: 'UpdateFamilyMemberDashboardReturn';
  data?: Maybe<FamilyMemberDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyMemberReturn = {
  __typename?: 'UpdateFamilyMemberReturn';
  data?: Maybe<FamilyMember>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyReturn = {
  __typename?: 'UpdateFamilyReturn';
  data?: Maybe<Family>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyTaskMemberDashboardReturn = {
  __typename?: 'UpdateFamilyTaskMemberDashboardReturn';
  data?: Maybe<FamilyTaskMemberDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyTaskMemberHardDashboardReturn = {
  __typename?: 'UpdateFamilyTaskMemberHardDashboardReturn';
  data?: Maybe<FamilyTaskMemberHardDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyTaskMemberHardReturn = {
  __typename?: 'UpdateFamilyTaskMemberHardReturn';
  data?: Maybe<FamilyTaskMemberHard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyTaskMemberReturn = {
  __typename?: 'UpdateFamilyTaskMemberReturn';
  data?: Maybe<FamilyTaskMember>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyTaskProgressDashboardReturn = {
  __typename?: 'UpdateFamilyTaskProgressDashboardReturn';
  data?: Maybe<FamilyTaskProgressDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyTaskProgressReceivedDashboardReturn = {
  __typename?: 'UpdateFamilyTaskProgressReceivedDashboardReturn';
  data?: Maybe<FamilyTaskProgressReceivedDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyTaskProgressReceivedReturn = {
  __typename?: 'UpdateFamilyTaskProgressReceivedReturn';
  data?: Maybe<FamilyTaskProgressReceived>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyTaskProgressReturn = {
  __typename?: 'UpdateFamilyTaskProgressReturn';
  data?: Maybe<FamilyTaskProgress>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyTaskTypeDashboardReturn = {
  __typename?: 'UpdateFamilyTaskTypeDashboardReturn';
  data?: Maybe<FamilyTaskTypeDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyTaskTypeHardDashboardReturn = {
  __typename?: 'UpdateFamilyTaskTypeHardDashboardReturn';
  data?: Maybe<FamilyTaskTypeHardDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyTaskTypeHardReturn = {
  __typename?: 'UpdateFamilyTaskTypeHardReturn';
  data?: Maybe<FamilyTaskTypeHard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyTaskTypeProgressDashboardReturn = {
  __typename?: 'UpdateFamilyTaskTypeProgressDashboardReturn';
  data?: Maybe<FamilyTaskTypeProgressDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyTaskTypeProgressReturn = {
  __typename?: 'UpdateFamilyTaskTypeProgressReturn';
  data?: Maybe<FamilyTaskTypeProgress>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateFamilyTaskTypeReturn = {
  __typename?: 'UpdateFamilyTaskTypeReturn';
  data?: Maybe<FamilyTaskType>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateGameConfigurationDefaultEarningDashboardReturn = {
  __typename?: 'UpdateGameConfigurationDefaultEarningDashboardReturn';
  data?: Maybe<GameConfigurationDefaultEarningDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateGameConfigurationDefaultEarningReturn = {
  __typename?: 'UpdateGameConfigurationDefaultEarningReturn';
  data?: Maybe<GameConfigurationDefaultEarning>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateGameConfigurationLuckCoinDashboardReturn = {
  __typename?: 'UpdateGameConfigurationLuckCoinDashboardReturn';
  data?: Maybe<GameConfigurationLuckCoinDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateGameConfigurationLuckCoinReturn = {
  __typename?: 'UpdateGameConfigurationLuckCoinReturn';
  data?: Maybe<GameConfigurationLuckCoin>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateGameConfigurationSurpriseBoxDashboardReturn = {
  __typename?: 'UpdateGameConfigurationSurpriseBoxDashboardReturn';
  data?: Maybe<GameConfigurationSurpriseBoxDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateGameConfigurationSurpriseBoxReturn = {
  __typename?: 'UpdateGameConfigurationSurpriseBoxReturn';
  data?: Maybe<GameConfigurationSurpriseBox>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateGameLuckSurpriseBoxDashboardReturn = {
  __typename?: 'UpdateGameLuckSurpriseBoxDashboardReturn';
  data?: Maybe<GameLuckSurpriseBoxDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateGameLuckSurpriseBoxReturn = {
  __typename?: 'UpdateGameLuckSurpriseBoxReturn';
  data?: Maybe<GameLuckSurpriseBox>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateGiftDashboardReturn = {
  __typename?: 'UpdateGiftDashboardReturn';
  data?: Maybe<GiftDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateGiftDashboardSentReturn = {
  __typename?: 'UpdateGiftDashboardSentReturn';
  data?: Maybe<GiftSent>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateGiftEventDashboardReturn = {
  __typename?: 'UpdateGiftEventDashboardReturn';
  data?: Maybe<GiftEventDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateGiftEventReturn = {
  __typename?: 'UpdateGiftEventReturn';
  data?: Maybe<GiftEvent>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateGiftReturn = {
  __typename?: 'UpdateGiftReturn';
  data?: Maybe<Gift>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateGiftSentDashboardReturn = {
  __typename?: 'UpdateGiftSentDashboardReturn';
  data?: Maybe<GiftSentDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateGiftSentReturn = {
  __typename?: 'UpdateGiftSentReturn';
  data?: Maybe<GiftSent>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateGiftTypeDashboardReturn = {
  __typename?: 'UpdateGiftTypeDashboardReturn';
  data?: Maybe<GiftTypeDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateGiftTypeReturn = {
  __typename?: 'UpdateGiftTypeReturn';
  data?: Maybe<GiftType>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateInvitationDashboardReturn = {
  __typename?: 'UpdateInvitationDashboardReturn';
  data?: Maybe<InvitationDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateInvitationReturn = {
  __typename?: 'UpdateInvitationReturn';
  data?: Maybe<Invitation>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateInvitationRewardDashboardReturn = {
  __typename?: 'UpdateInvitationRewardDashboardReturn';
  data?: Maybe<InvitationRewardDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateInvitationRewardReturn = {
  __typename?: 'UpdateInvitationRewardReturn';
  data?: Maybe<InvitationReward>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateItemDashboardReturn = {
  __typename?: 'UpdateItemDashboardReturn';
  data?: Maybe<ItemDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateItemPurchasedDashboardReturn = {
  __typename?: 'UpdateItemPurchasedDashboardReturn';
  data?: Maybe<ItemPurchasedDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateItemPurchasedReturn = {
  __typename?: 'UpdateItemPurchasedReturn';
  data?: Maybe<ItemPurchased>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateItemReturn = {
  __typename?: 'UpdateItemReturn';
  data?: Maybe<Item>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLevelHostDashboardReturn = {
  __typename?: 'UpdateLevelHostDashboardReturn';
  data?: Maybe<LevelHostDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLevelHostReturn = {
  __typename?: 'UpdateLevelHostReturn';
  data?: Maybe<LevelHost>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLevelSpectatorDashboardReturn = {
  __typename?: 'UpdateLevelSpectatorDashboardReturn';
  data?: Maybe<LevelSpectatorDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLevelSpectatorReturn = {
  __typename?: 'UpdateLevelSpectatorReturn';
  data?: Maybe<LevelSpectator>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveDashboardReturn = {
  __typename?: 'UpdateLiveDashboardReturn';
  data?: Maybe<LiveDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveDetailGuestDashboardReturn = {
  __typename?: 'UpdateLiveDetailGuestDashboardReturn';
  data?: Maybe<LiveDetailGuestDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveDetailGuestReturn = {
  __typename?: 'UpdateLiveDetailGuestReturn';
  data?: Maybe<LiveDetailGuest>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveDetailPeopleDashboardReturn = {
  __typename?: 'UpdateLiveDetailPeopleDashboardReturn';
  data?: Maybe<LiveDetailPeopleDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveDetailPeopleReturn = {
  __typename?: 'UpdateLiveDetailPeopleReturn';
  data?: Maybe<LiveDetailPeople>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveDetailTagDashboardReturn = {
  __typename?: 'UpdateLiveDetailTagDashboardReturn';
  data?: Maybe<LiveDetailTagDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveDetailTagReturn = {
  __typename?: 'UpdateLiveDetailTagReturn';
  data?: Maybe<LiveDetailTag>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveFilterDashboardReturn = {
  __typename?: 'UpdateLiveFilterDashboardReturn';
  data?: Maybe<LiveFilterDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveFilterReturn = {
  __typename?: 'UpdateLiveFilterReturn';
  data?: Maybe<LiveFilter>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveReportDashboardReturn = {
  __typename?: 'UpdateLiveReportDashboardReturn';
  data?: Maybe<LiveReportDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveReportReturn = {
  __typename?: 'UpdateLiveReportReturn';
  data?: Maybe<LiveReport>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveResumeDashboardReturn = {
  __typename?: 'UpdateLiveResumeDashboardReturn';
  data?: Maybe<LiveResumeDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveResumeReturn = {
  __typename?: 'UpdateLiveResumeReturn';
  data?: Maybe<LiveResume>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveReturn = {
  __typename?: 'UpdateLiveReturn';
  data?: Maybe<Live>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveSettingDashboardReturn = {
  __typename?: 'UpdateLiveSettingDashboardReturn';
  data?: Maybe<LiveSettingDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveSettingReturn = {
  __typename?: 'UpdateLiveSettingReturn';
  data?: Maybe<LiveSetting>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveStickerDashboardReturn = {
  __typename?: 'UpdateLiveStickerDashboardReturn';
  data?: Maybe<LiveStickerDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveStickerReturn = {
  __typename?: 'UpdateLiveStickerReturn';
  data?: Maybe<LiveSticker>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveTagDashboardReturn = {
  __typename?: 'UpdateLiveTagDashboardReturn';
  data?: Maybe<LiveTagDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveTagReturn = {
  __typename?: 'UpdateLiveTagReturn';
  data?: Maybe<LiveTag>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveTypeReportDashboardReturn = {
  __typename?: 'UpdateLiveTypeReportDashboardReturn';
  data?: Maybe<LiveTypeReportDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateLiveTypeReportReturn = {
  __typename?: 'UpdateLiveTypeReportReturn';
  data?: Maybe<LiveTypeReport>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateMultiplePointsLiveDetailPeopleReturn = {
  __typename?: 'UpdateMultiplePointsLiveDetailPeopleReturn';
  data?: Maybe<Array<Maybe<LiveDetailPeople>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePaymentAgentDashboardReturn = {
  __typename?: 'UpdatePaymentAgentDashboardReturn';
  data?: Maybe<PaymentAgentDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePaymentAgentPaidDashboardReturn = {
  __typename?: 'UpdatePaymentAgentPaidDashboardReturn';
  data?: Maybe<PaymentAgentPaidDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePaymentAgentPaidReturn = {
  __typename?: 'UpdatePaymentAgentPaidReturn';
  data?: Maybe<PaymentAgentPaid>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePaymentAgentReturn = {
  __typename?: 'UpdatePaymentAgentReturn';
  data?: Maybe<PaymentAgent>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePlatformSellerForAgencyDashboardReturn = {
  __typename?: 'UpdatePlatformSellerForAgencyDashboardReturn';
  data?: Maybe<PlatformSellerForAgencyDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePlatformSellerForAgencyPriceDashboardReturn = {
  __typename?: 'UpdatePlatformSellerForAgencyPriceDashboardReturn';
  data?: Maybe<PlatformSellerForAgencyPriceDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePlatformSellerForAgencyPriceReturn = {
  __typename?: 'UpdatePlatformSellerForAgencyPriceReturn';
  data?: Maybe<PlatformSellerForAgencyPrice>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePlatformSellerForAgencyProofDashboardReturn = {
  __typename?: 'UpdatePlatformSellerForAgencyProofDashboardReturn';
  data?: Maybe<PlatformSellerForAgencyProofDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePlatformSellerForAgencyProofReturn = {
  __typename?: 'UpdatePlatformSellerForAgencyProofReturn';
  data?: Maybe<PlatformSellerForAgencyProof>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePlatformSellerForAgencyReturn = {
  __typename?: 'UpdatePlatformSellerForAgencyReturn';
  data?: Maybe<PlatformSellerForAgency>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePlatformSellerForUserDashboardReturn = {
  __typename?: 'UpdatePlatformSellerForUserDashboardReturn';
  data?: Maybe<PlatformSellerForUserDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePlatformSellerForUserPriceDashboardReturn = {
  __typename?: 'UpdatePlatformSellerForUserPriceDashboardReturn';
  data?: Maybe<PlatformSellerForUserPriceDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePlatformSellerForUserPriceReturn = {
  __typename?: 'UpdatePlatformSellerForUserPriceReturn';
  data?: Maybe<PlatformSellerForUserPrice>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePlatformSellerForUserReturn = {
  __typename?: 'UpdatePlatformSellerForUserReturn';
  data?: Maybe<PlatformSellerForUser>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePostCommentDashboardReturn = {
  __typename?: 'UpdatePostCommentDashboardReturn';
  data?: Maybe<PostCommentDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePostCommentReturn = {
  __typename?: 'UpdatePostCommentReturn';
  data?: Maybe<PostComment>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePostDashboardReturn = {
  __typename?: 'UpdatePostDashboardReturn';
  data?: Maybe<PostDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePostLikeDashboardReturn = {
  __typename?: 'UpdatePostLikeDashboardReturn';
  data?: Maybe<PostLikeDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePostLikeReturn = {
  __typename?: 'UpdatePostLikeReturn';
  data?: Maybe<PostLike>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePostReturn = {
  __typename?: 'UpdatePostReturn';
  data?: Maybe<Post>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePostTagDashboardReturn = {
  __typename?: 'UpdatePostTagDashboardReturn';
  data?: Maybe<PostTagDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdatePostTagReturn = {
  __typename?: 'UpdatePostTagReturn';
  data?: Maybe<PostTag>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateTagDashboardReturn = {
  __typename?: 'UpdateTagDashboardReturn';
  data?: Maybe<TagDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateTagReturn = {
  __typename?: 'UpdateTagReturn';
  data?: Maybe<Tag>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateTaskTypeHostDashboardReturn = {
  __typename?: 'UpdateTaskTypeHostDashboardReturn';
  data?: Maybe<TaskTypeHostDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateTaskTypeHostReturn = {
  __typename?: 'UpdateTaskTypeHostReturn';
  data?: Maybe<TaskTypeHost>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateTaskTypeSpectatorDashboardReturn = {
  __typename?: 'UpdateTaskTypeSpectatorDashboardReturn';
  data?: Maybe<TaskTypeSpectatorDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateTaskTypeSpectatorReturn = {
  __typename?: 'UpdateTaskTypeSpectatorReturn';
  data?: Maybe<TaskTypeSpectator>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateTaskUserHostDashboardReturn = {
  __typename?: 'UpdateTaskUserHostDashboardReturn';
  data?: Maybe<TaskUserHostDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateTaskUserHostReturn = {
  __typename?: 'UpdateTaskUserHostReturn';
  data?: Maybe<TaskUserHost>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateTaskUserSpectatorDashboardReturn = {
  __typename?: 'UpdateTaskUserSpectatorDashboardReturn';
  data?: Maybe<TaskUserSpectatorDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateTaskUserSpectatorReturn = {
  __typename?: 'UpdateTaskUserSpectatorReturn';
  data?: Maybe<TaskUserSpectator>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserAdministratorProfileActivityDashboardReturn = {
  __typename?: 'UpdateUserAdministratorProfileActivityDashboardReturn';
  data?: Maybe<UserAdministratorProfileActivityDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserAdministratorProfileActivityReturn = {
  __typename?: 'UpdateUserAdministratorProfileActivityReturn';
  data?: Maybe<UserAdministratorProfileActivity>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserAdministratorProfileDashboardReturn = {
  __typename?: 'UpdateUserAdministratorProfileDashboardReturn';
  data?: Maybe<UserAdministratorProfileDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserAdministratorProfileReturn = {
  __typename?: 'UpdateUserAdministratorProfileReturn';
  data?: Maybe<UserAdministratorProfile>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserAppUidDashboardReturn = {
  __typename?: 'UpdateUserAppUidDashboardReturn';
  data?: Maybe<UserAppUidDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserAppUidReturn = {
  __typename?: 'UpdateUserAppUidReturn';
  data?: Maybe<UserAppUid>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserBadgeDashboardReturn = {
  __typename?: 'UpdateUserBadgeDashboardReturn';
  data?: Maybe<UserBadgeDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserBadgeReturn = {
  __typename?: 'UpdateUserBadgeReturn';
  data?: Maybe<UserBadge>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserBalanceBeanDashboardReturn = {
  __typename?: 'UpdateUserBalanceBeanDashboardReturn';
  data?: Maybe<UserBalanceBeanDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserBalanceBeansReturn = {
  __typename?: 'UpdateUserBalanceBeansReturn';
  data?: Maybe<UserBalanceBeans>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserBalanceCoinDashboardReturn = {
  __typename?: 'UpdateUserBalanceCoinDashboardReturn';
  data?: Maybe<UserBalanceCoinDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserBalanceCoinsReturn = {
  __typename?: 'UpdateUserBalanceCoinsReturn';
  data?: Maybe<UserBalanceCoins>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserBalancePointDashboardReturn = {
  __typename?: 'UpdateUserBalancePointDashboardReturn';
  data?: Maybe<UserBalancePointDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserBalancePointsReturn = {
  __typename?: 'UpdateUserBalancePointsReturn';
  data?: Maybe<UserBalancePoints>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserBannedDashboardReturn = {
  __typename?: 'UpdateUserBannedDashboardReturn';
  data?: Maybe<UserBannedDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserBannedDetailDashboardReturn = {
  __typename?: 'UpdateUserBannedDetailDashboardReturn';
  data?: Maybe<UserBannedDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserBannedDetailReturn = {
  __typename?: 'UpdateUserBannedDetailReturn';
  data?: Maybe<UserBannedDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserBannedReturn = {
  __typename?: 'UpdateUserBannedReturn';
  data?: Maybe<UserBanned>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserBlockedDashboardReturn = {
  __typename?: 'UpdateUserBlockedDashboardReturn';
  data?: Maybe<UserBlockedDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserDashboardReturn = {
  __typename?: 'UpdateUserDashboardReturn';
  data?: Maybe<UserDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserDetailDashboardReturn = {
  __typename?: 'UpdateUserDetailDashboardReturn';
  data?: Maybe<UserDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserDetailReturn = {
  __typename?: 'UpdateUserDetailReturn';
  data?: Maybe<UserDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserDeviceInformationDashboardReturn = {
  __typename?: 'UpdateUserDeviceInformationDashboardReturn';
  data?: Maybe<UserDeviceInformationDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserDeviceInformationReturn = {
  __typename?: 'UpdateUserDeviceInformationReturn';
  data?: Maybe<UserDeviceInformation>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserFollowerDashboardReturn = {
  __typename?: 'UpdateUserFollowerDashboardReturn';
  data?: Maybe<UserFollowerDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserFollowingDashboardReturn = {
  __typename?: 'UpdateUserFollowingDashboardReturn';
  data?: Maybe<UserFollowingDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserGiftPackageDashboardReturn = {
  __typename?: 'UpdateUserGiftPackageDashboardReturn';
  data?: Maybe<UserGiftPackageDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserGiftPackageReturn = {
  __typename?: 'UpdateUserGiftPackageReturn';
  data?: Maybe<UserGiftPackage>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserLevelDashboardReturn = {
  __typename?: 'UpdateUserLevelDashboardReturn';
  data?: Maybe<UserLevelDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserLevelReturn = {
  __typename?: 'UpdateUserLevelReturn';
  data?: Maybe<UserLevel>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserLiveSettingDashboardReturn = {
  __typename?: 'UpdateUserLiveSettingDashboardReturn';
  data?: Maybe<UserLiveSettingDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserLiveSettingReturn = {
  __typename?: 'UpdateUserLiveSettingReturn';
  data?: Maybe<UserLiveSetting>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserNotificationDashboardReturn = {
  __typename?: 'UpdateUserNotificationDashboardReturn';
  data?: Maybe<UserNotificationDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserPhotoDashboardReturn = {
  __typename?: 'UpdateUserPhotoDashboardReturn';
  data?: Maybe<UserPhotoDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserPrivacyDashboardReturn = {
  __typename?: 'UpdateUserPrivacyDashboardReturn';
  data?: Maybe<UserPrivacyDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserProcessingQueueDashboardReturn = {
  __typename?: 'UpdateUserProcessingQueueDashboardReturn';
  data?: Maybe<UserProcessingQueueDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserProcessingQueueReturn = {
  __typename?: 'UpdateUserProcessingQueueReturn';
  data?: Maybe<UserProcessingQueue>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserSuperFanDashboardReturn = {
  __typename?: 'UpdateUserSuperFanDashboardReturn';
  data?: Maybe<UserSuperFanDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserVipDashboardReturn = {
  __typename?: 'UpdateUserVipDashboardReturn';
  data?: Maybe<UserVipDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserVipReturn = {
  __typename?: 'UpdateUserVipReturn';
  data?: Maybe<UserVip>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserVisitProfileDashboardReturn = {
  __typename?: 'UpdateUserVisitProfileDashboardReturn';
  data?: Maybe<UserVisitProfileDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserWarningDashboardReturn = {
  __typename?: 'UpdateUserWarningDashboardReturn';
  data?: Maybe<UserWarningDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserWarningDetailDashboardReturn = {
  __typename?: 'UpdateUserWarningDetailDashboardReturn';
  data?: Maybe<UserWarningDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserWarningDetailReturn = {
  __typename?: 'UpdateUserWarningDetailReturn';
  data?: Maybe<UserWarningDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserWarningReturn = {
  __typename?: 'UpdateUserWarningReturn';
  data?: Maybe<UserWarning>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateVipBenefitDashboardReturn = {
  __typename?: 'UpdateVipBenefitDashboardReturn';
  data?: Maybe<VipBenefitDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateVipBenefitDetailDashboardReturn = {
  __typename?: 'UpdateVipBenefitDetailDashboardReturn';
  data?: Maybe<VipBenefitDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateVipBenefitDetailReturn = {
  __typename?: 'UpdateVipBenefitDetailReturn';
  data?: Maybe<VipBenefitDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateVipBenefitReturn = {
  __typename?: 'UpdateVipBenefitReturn';
  data?: Maybe<VipBenefit>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateVipDashboardReturn = {
  __typename?: 'UpdateVipDashboardReturn';
  data?: Maybe<VipDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateVipReturn = {
  __typename?: 'UpdateVipReturn';
  data?: Maybe<Vip>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateWalletCoinSaleDashboardReturn = {
  __typename?: 'UpdateWalletCoinSaleDashboardReturn';
  data?: Maybe<WalletCoinSaleDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateWalletCoinSaleReturn = {
  __typename?: 'UpdateWalletCoinSaleReturn';
  data?: Maybe<WalletCoinSale>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateWalletConvertDashboardReturn = {
  __typename?: 'UpdateWalletConvertDashboardReturn';
  data?: Maybe<WalletConvertDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateWalletConvertReturn = {
  __typename?: 'UpdateWalletConvertReturn';
  data?: Maybe<WalletConvert>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateWalletPriceCoinDashboardReturn = {
  __typename?: 'UpdateWalletPriceCoinDashboardReturn';
  data?: Maybe<WalletPriceCoinDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateWalletPriceCoinReturn = {
  __typename?: 'UpdateWalletPriceCoinReturn';
  data?: Maybe<WalletPriceCoin>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateWalletTypeConvertDashboardReturn = {
  __typename?: 'UpdateWalletTypeConvertDashboardReturn';
  data?: Maybe<WalletTypeConvertDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateWalletTypeConvertReturn = {
  __typename?: 'UpdateWalletTypeConvertReturn';
  data?: Maybe<WalletTypeConvert>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateWithdrawalDashboardReturn = {
  __typename?: 'UpdateWithdrawalDashboardReturn';
  data?: Maybe<WithdrawalDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateWithdrawalMethodDashboardReturn = {
  __typename?: 'UpdateWithdrawalMethodDashboardReturn';
  data?: Maybe<WithdrawalMethodDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateWithdrawalMethodDataUserDashboardReturn = {
  __typename?: 'UpdateWithdrawalMethodDataUserDashboardReturn';
  data?: Maybe<WithdrawalMethodDataUserDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateWithdrawalMethodDataUserReturn = {
  __typename?: 'UpdateWithdrawalMethodDataUserReturn';
  data?: Maybe<WithdrawalMethodDataUser>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateWithdrawalMethodReturn = {
  __typename?: 'UpdateWithdrawalMethodReturn';
  data?: Maybe<WithdrawalMethod>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateWithdrawalProofDashboardReturn = {
  __typename?: 'UpdateWithdrawalProofDashboardReturn';
  data?: Maybe<WithdrawalProofDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateWithdrawalProofReturn = {
  __typename?: 'UpdateWithdrawalProofReturn';
  data?: Maybe<WithdrawalProof>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateWithdrawalReturn = {
  __typename?: 'UpdateWithdrawalReturn';
  data?: Maybe<Withdrawal>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateWithdrawalTypeRefusedDashboardReturn = {
  __typename?: 'UpdateWithdrawalTypeRefusedDashboardReturn';
  data?: Maybe<WithdrawalTypeRefusedDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UpdateWithdrawalTypeRefusedReturn = {
  __typename?: 'UpdateWithdrawalTypeRefusedReturn';
  data?: Maybe<WithdrawalTypeRefused>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  appId?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  invitationCode?: Maybe<Scalars['String']['output']>;
  online?: Maybe<Scalars['Boolean']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  twoFactorEnabled?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  userSentReturnTimeLuckCoin?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  utc?: Maybe<Scalars['String']['output']>;
};

export type UserAdministratorProfile = {
  __typename?: 'UserAdministratorProfile';
  canAcceptOnSeat?: Maybe<Scalars['Boolean']['output']>;
  canChangeRoomTheme?: Maybe<Scalars['Boolean']['output']>;
  canCloseAllAudio?: Maybe<Scalars['Boolean']['output']>;
  canCloseAudio?: Maybe<Scalars['Boolean']['output']>;
  canCloseHostAudio?: Maybe<Scalars['Boolean']['output']>;
  canCloseVideo?: Maybe<Scalars['Boolean']['output']>;
  canMute?: Maybe<Scalars['Boolean']['output']>;
  canPlaySongs?: Maybe<Scalars['Boolean']['output']>;
  canPreventSeatLive?: Maybe<Scalars['Boolean']['output']>;
  canRemoveAllFromSeat?: Maybe<Scalars['Boolean']['output']>;
  canRemoveFromLive?: Maybe<Scalars['Boolean']['output']>;
  canRemoveFromSeat?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  userAdministrator?: Maybe<User>;
  userAdministratorId: Scalars['Int']['output'];
  userHost?: Maybe<User>;
  userHostId: Scalars['Int']['output'];
};

export type UserAdministratorProfileActivity = {
  __typename?: 'UserAdministratorProfileActivity';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  typeActivity: TypeActivity;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userAdministratorProfile?: Maybe<UserAdministratorProfile>;
  userAdministratorProfileId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserAdministratorProfileActivityDashboard = {
  __typename?: 'UserAdministratorProfileActivityDashboard';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  typeActivity: TypeActivity;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userAdministratorProfile?: Maybe<UserDashboard>;
  userAdministratorProfileId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserAdministratorProfileActivityDashboardReturn = {
  __typename?: 'UserAdministratorProfileActivityDashboardReturn';
  data?: Maybe<UserAdministratorProfileActivityDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserAdministratorProfileActivityDashboardReturnList = {
  __typename?: 'UserAdministratorProfileActivityDashboardReturnList';
  data?: Maybe<Array<Maybe<UserAdministratorProfileActivityDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserAdministratorProfileActivityReturn = {
  __typename?: 'UserAdministratorProfileActivityReturn';
  data?: Maybe<UserAdministratorProfileActivity>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserAdministratorProfileActivityReturnList = {
  __typename?: 'UserAdministratorProfileActivityReturnList';
  data?: Maybe<Array<Maybe<UserAdministratorProfileActivity>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserAdministratorProfileDashboard = {
  __typename?: 'UserAdministratorProfileDashboard';
  canAcceptOnSeat: Scalars['Boolean']['output'];
  canChangeRoomTheme: Scalars['Boolean']['output'];
  canCloseAllAudio: Scalars['Boolean']['output'];
  canCloseAudio: Scalars['Boolean']['output'];
  canCloseHostAudio: Scalars['Boolean']['output'];
  canCloseVideo: Scalars['Boolean']['output'];
  canMute: Scalars['Boolean']['output'];
  canPlaySongs: Scalars['Boolean']['output'];
  canPreventSeatLive: Scalars['Boolean']['output'];
  canRemoveAllFromSeat: Scalars['Boolean']['output'];
  canRemoveFromLive: Scalars['Boolean']['output'];
  canRemoveFromSeat: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  userAdministrator?: Maybe<UserDashboard>;
  userAdministratorId: Scalars['Int']['output'];
  userHost?: Maybe<UserDashboard>;
  userHostId: Scalars['Int']['output'];
};

export type UserAdministratorProfileDashboardReturn = {
  __typename?: 'UserAdministratorProfileDashboardReturn';
  data?: Maybe<UserAdministratorProfileDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserAdministratorProfileDashboardReturnList = {
  __typename?: 'UserAdministratorProfileDashboardReturnList';
  data?: Maybe<Array<Maybe<UserAdministratorProfileDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserAdministratorProfileReturn = {
  __typename?: 'UserAdministratorProfileReturn';
  data?: Maybe<UserAdministratorProfile>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserAdministratorProfileReturnList = {
  __typename?: 'UserAdministratorProfileReturnList';
  data?: Maybe<Array<Maybe<UserAdministratorProfile>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserAppUid = {
  __typename?: 'UserAppUid';
  country: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastAppUid: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type UserAppUidDashboard = {
  __typename?: 'UserAppUidDashboard';
  country: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastAppUid: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type UserAppUidDashboardReturn = {
  __typename?: 'UserAppUidDashboardReturn';
  data?: Maybe<UserAppUidDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserAppUidDashboardReturnList = {
  __typename?: 'UserAppUidDashboardReturnList';
  data?: Maybe<Array<Maybe<UserAppUidDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserAppUidReturn = {
  __typename?: 'UserAppUidReturn';
  data?: Maybe<UserAppUid>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserAppUidReturnList = {
  __typename?: 'UserAppUidReturnList';
  data?: Maybe<Array<Maybe<UserAppUid>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserBadge = {
  __typename?: 'UserBadge';
  badge?: Maybe<Badge>;
  badgeId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  expiresIn: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  inUse: Scalars['Boolean']['output'];
  typeLocaleBadge: TypeLocaleBadge;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type UserBadgeDashboard = {
  __typename?: 'UserBadgeDashboard';
  badge?: Maybe<BadgeDashboard>;
  badgeId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  expiresIn: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  inUse: Scalars['Boolean']['output'];
  typeLocaleBadge: TypeLocaleBadge;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type UserBadgeDashboardReturn = {
  __typename?: 'UserBadgeDashboardReturn';
  data?: Maybe<UserBadgeDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserBadgeDashboardReturnList = {
  __typename?: 'UserBadgeDashboardReturnList';
  data?: Maybe<Array<Maybe<UserBadgeDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserBadgeReturn = {
  __typename?: 'UserBadgeReturn';
  data?: Maybe<UserBadge>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserBadgeReturnList = {
  __typename?: 'UserBadgeReturnList';
  data?: Maybe<Array<Maybe<UserBadge>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserBalanceBeanDashboard = {
  __typename?: 'UserBalanceBeanDashboard';
  beansAfter: Scalars['Float']['output'];
  beansBefore: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  dateHourBalance: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  typeUserBalanceBeans?: Maybe<TypeUserBalanceBeans>;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type UserBalanceBeanDashboardReturn = {
  __typename?: 'UserBalanceBeanDashboardReturn';
  data?: Maybe<UserBalanceBeanDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserBalanceBeanDashboardReturnList = {
  __typename?: 'UserBalanceBeanDashboardReturnList';
  data?: Maybe<Array<Maybe<UserBalanceBeanDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserBalanceBeans = {
  __typename?: 'UserBalanceBeans';
  beansAfter: Scalars['Float']['output'];
  beansBefore: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  dateHourBalance: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  typeUserBalanceBeans?: Maybe<TypeUserBalanceBeans>;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type UserBalanceBeansReturn = {
  __typename?: 'UserBalanceBeansReturn';
  data?: Maybe<UserBalanceBeans>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserBalanceBeansReturnList = {
  __typename?: 'UserBalanceBeansReturnList';
  data?: Maybe<Array<Maybe<UserBalanceBeans>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserBalanceCoinDashboard = {
  __typename?: 'UserBalanceCoinDashboard';
  coinsAfter: Scalars['Float']['output'];
  coinsBefore: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  dateHourBalance: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  typeUserBalanceCoins?: Maybe<TypeUserBalanceCoins>;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type UserBalanceCoinDashboardReturn = {
  __typename?: 'UserBalanceCoinDashboardReturn';
  data?: Maybe<UserBalanceCoinDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserBalanceCoinDashboardReturnList = {
  __typename?: 'UserBalanceCoinDashboardReturnList';
  data?: Maybe<Array<Maybe<UserBalanceCoinDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserBalanceCoins = {
  __typename?: 'UserBalanceCoins';
  coinsAfter: Scalars['Float']['output'];
  coinsBefore: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  dateHourBalance: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  typeUserBalanceCoins?: Maybe<TypeUserBalanceCoins>;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type UserBalanceCoinsReturn = {
  __typename?: 'UserBalanceCoinsReturn';
  data?: Maybe<UserBalanceCoins>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserBalanceCoinsReturnList = {
  __typename?: 'UserBalanceCoinsReturnList';
  data?: Maybe<Array<Maybe<UserBalanceCoins>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserBalancePointDashboard = {
  __typename?: 'UserBalancePointDashboard';
  createdAt: Scalars['String']['output'];
  dateHourBalance: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  pointsAfter: Scalars['Float']['output'];
  pointsBefore: Scalars['Float']['output'];
  typeUserBalancePoints?: Maybe<TypeUserBalancePoints>;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type UserBalancePointDashboardReturn = {
  __typename?: 'UserBalancePointDashboardReturn';
  data?: Maybe<UserBalancePointDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserBalancePointDashboardReturnList = {
  __typename?: 'UserBalancePointDashboardReturnList';
  data?: Maybe<Array<Maybe<UserBalancePointDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserBalancePoints = {
  __typename?: 'UserBalancePoints';
  createdAt: Scalars['String']['output'];
  dateHourBalance: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  pointsAfter: Scalars['Float']['output'];
  pointsBefore: Scalars['Float']['output'];
  typeUserBalancePoints?: Maybe<TypeUserBalancePoints>;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type UserBalancePointsReturn = {
  __typename?: 'UserBalancePointsReturn';
  data?: Maybe<UserBalancePoints>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserBalancePointsReturnList = {
  __typename?: 'UserBalancePointsReturnList';
  data?: Maybe<Array<Maybe<UserBalancePoints>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserBanned = {
  __typename?: 'UserBanned';
  banDate: Scalars['String']['output'];
  banExpiryDate: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  reasonForBan: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type UserBannedDashboard = {
  __typename?: 'UserBannedDashboard';
  banDate: Scalars['String']['output'];
  banExpiryDate: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  reasonForBan: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type UserBannedDashboardReturn = {
  __typename?: 'UserBannedDashboardReturn';
  data?: Maybe<UserBannedDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserBannedDashboardReturnList = {
  __typename?: 'UserBannedDashboardReturnList';
  data?: Maybe<Array<Maybe<UserBannedDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserBannedDetail = {
  __typename?: 'UserBannedDetail';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  proof: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  userBanned?: Maybe<User>;
  userBannedId: Scalars['Int']['output'];
};

export type UserBannedDetailDashboard = {
  __typename?: 'UserBannedDetailDashboard';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  proof: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  userBanned?: Maybe<UserDashboard>;
  userBannedId: Scalars['Int']['output'];
};

export type UserBannedDetailDashboardReturn = {
  __typename?: 'UserBannedDetailDashboardReturn';
  data?: Maybe<UserBannedDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserBannedDetailDashboardReturnList = {
  __typename?: 'UserBannedDetailDashboardReturnList';
  data?: Maybe<Array<Maybe<UserBannedDetailDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserBannedDetailReturn = {
  __typename?: 'UserBannedDetailReturn';
  data?: Maybe<UserBannedDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserBannedDetailReturnList = {
  __typename?: 'UserBannedDetailReturnList';
  data?: Maybe<Array<Maybe<UserBannedDetail>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserBannedReturn = {
  __typename?: 'UserBannedReturn';
  data?: Maybe<UserBanned>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserBannedReturnList = {
  __typename?: 'UserBannedReturnList';
  data?: Maybe<Array<Maybe<UserBanned>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserBeans = {
  __typename?: 'UserBeans';
  beans?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UserBeansReturn = {
  __typename?: 'UserBeansReturn';
  data: UserBeans;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserBlockedDashboard = {
  __typename?: 'UserBlockedDashboard';
  blocked?: Maybe<UserDashboard>;
  blockedId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type UserBlockedDashboardReturn = {
  __typename?: 'UserBlockedDashboardReturn';
  data?: Maybe<UserBlockedDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserBlockedDashboardReturnList = {
  __typename?: 'UserBlockedDashboardReturnList';
  data?: Maybe<Array<Maybe<UserBlockedDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserBlockeds = {
  __typename?: 'UserBlockeds';
  blocked?: Maybe<User>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type UserCoins = {
  __typename?: 'UserCoins';
  coins?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UserCoinsReturn = {
  __typename?: 'UserCoinsReturn';
  data: UserCoins;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserConfig = {
  __typename?: 'UserConfig';
  email?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  notification?: Maybe<Notifications>;
  phone?: Maybe<Scalars['String']['output']>;
  privacy?: Maybe<Privacy>;
  twoFactorEnabled?: Maybe<Scalars['Boolean']['output']>;
};

export type UserDashboard = {
  __typename?: 'UserDashboard';
  appId: Scalars['String']['output'];
  appleId?: Maybe<Scalars['String']['output']>;
  appleToken?: Maybe<Scalars['String']['output']>;
  beans: Scalars['Float']['output'];
  biography?: Maybe<Scalars['String']['output']>;
  birthday: Scalars['String']['output'];
  coins: Scalars['Float']['output'];
  country: Scalars['String']['output'];
  countryShow: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  emailCode: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  fakeUser: Scalars['Boolean']['output'];
  fullname?: Maybe<Scalars['String']['output']>;
  gender: Scalars['String']['output'];
  googleId?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  invitationCode: Scalars['String']['output'];
  language: Scalars['String']['output'];
  online: Scalars['Boolean']['output'];
  onlineLive: Scalars['Boolean']['output'];
  onlineOtherLive: Scalars['Boolean']['output'];
  password: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  phoneVerified: Scalars['Boolean']['output'];
  photo: Scalars['String']['output'];
  points: Scalars['Float']['output'];
  processingQueueId: Scalars['Int']['output'];
  region: Scalars['String']['output'];
  smsCode?: Maybe<Scalars['String']['output']>;
  twoFactorEnabled: Scalars['Boolean']['output'];
  updatedAt: Scalars['String']['output'];
  userNotReturnModTimesLuckSurpriseBox?: Maybe<Scalars['String']['output']>;
  userSentReturnTimeLuckCoin: Scalars['String']['output'];
  username: Scalars['String']['output'];
  utc?: Maybe<Scalars['String']['output']>;
};

export type UserDashboardReturn = {
  __typename?: 'UserDashboardReturn';
  data?: Maybe<UserDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserDashboardReturnList = {
  __typename?: 'UserDashboardReturnList';
  data?: Maybe<Array<Maybe<UserDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserDetail = {
  __typename?: 'UserDetail';
  alreadyChangedBirthday: Scalars['Boolean']['output'];
  alreadyChangedCountry: Scalars['Boolean']['output'];
  alreadyChangedSex: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  family?: Maybe<Family>;
  familyId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type UserDetailDashboard = {
  __typename?: 'UserDetailDashboard';
  alreadyChangedBirthday: Scalars['Boolean']['output'];
  alreadyChangedCountry: Scalars['Boolean']['output'];
  alreadyChangedSex: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  family?: Maybe<FamilyDashboard>;
  familyId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type UserDetailDashboardReturn = {
  __typename?: 'UserDetailDashboardReturn';
  data?: Maybe<UserDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserDetailDashboardReturnList = {
  __typename?: 'UserDetailDashboardReturnList';
  data?: Maybe<Array<Maybe<UserDetailDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserDetailReturn = {
  __typename?: 'UserDetailReturn';
  data?: Maybe<UserDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserDetailReturnList = {
  __typename?: 'UserDetailReturnList';
  data?: Maybe<Array<Maybe<UserDetail>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserDeviceInformation = {
  __typename?: 'UserDeviceInformation';
  baseOs?: Maybe<Scalars['String']['output']>;
  bootLoader?: Maybe<Scalars['String']['output']>;
  brand: Scalars['String']['output'];
  buildNumber: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  deviceId: Scalars['String']['output'];
  deviceName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  installationDevice: Scalars['Boolean']['output'];
  ipAddress: Scalars['String']['output'];
  isCameraPresent?: Maybe<Scalars['String']['output']>;
  mac: Scalars['String']['output'];
  manufacturer: Scalars['String']['output'];
  networkOperator: Scalars['String']['output'];
  systemVersion: Scalars['String']['output'];
  uniqueId: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userAgent: Scalars['String']['output'];
  userId: Scalars['Int']['output'];
};

export type UserDeviceInformationDashboard = {
  __typename?: 'UserDeviceInformationDashboard';
  baseOs?: Maybe<Scalars['String']['output']>;
  bootLoader?: Maybe<Scalars['String']['output']>;
  brand: Scalars['String']['output'];
  buildNumber: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  deviceId: Scalars['String']['output'];
  deviceName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  installationDevice: Scalars['Boolean']['output'];
  ipAddress: Scalars['String']['output'];
  isCameraPresent?: Maybe<Scalars['String']['output']>;
  mac: Scalars['String']['output'];
  manufacturer: Scalars['String']['output'];
  networkOperator: Scalars['String']['output'];
  systemVersion: Scalars['String']['output'];
  uniqueId: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userAgent: Scalars['String']['output'];
  userId: Scalars['Int']['output'];
};

export type UserDeviceInformationDashboardReturn = {
  __typename?: 'UserDeviceInformationDashboardReturn';
  data?: Maybe<UserDeviceInformationDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserDeviceInformationDashboardReturnList = {
  __typename?: 'UserDeviceInformationDashboardReturnList';
  data?: Maybe<Array<Maybe<UserDeviceInformationDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserDeviceInformationReturn = {
  __typename?: 'UserDeviceInformationReturn';
  data?: Maybe<UserDeviceInformation>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserDeviceInformationReturnList = {
  __typename?: 'UserDeviceInformationReturnList';
  data?: Maybe<Array<Maybe<UserDeviceInformation>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserFollowed = {
  __typename?: 'UserFollowed';
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type UserFollowerDashboard = {
  __typename?: 'UserFollowerDashboard';
  createdAt: Scalars['String']['output'];
  follower?: Maybe<UserDashboard>;
  followerId: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type UserFollowerDashboardReturn = {
  __typename?: 'UserFollowerDashboardReturn';
  data?: Maybe<UserFollowerDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserFollowerDashboardReturnList = {
  __typename?: 'UserFollowerDashboardReturnList';
  data?: Maybe<Array<Maybe<UserFollowerDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserFollowing = {
  __typename?: 'UserFollowing';
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type UserFollowingDashboard = {
  __typename?: 'UserFollowingDashboard';
  createdAt: Scalars['String']['output'];
  following?: Maybe<UserDashboard>;
  followingId: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type UserFollowingDashboardReturn = {
  __typename?: 'UserFollowingDashboardReturn';
  data?: Maybe<UserFollowingDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserFollowingDashboardReturnList = {
  __typename?: 'UserFollowingDashboardReturnList';
  data?: Maybe<Array<Maybe<UserFollowingDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserForSale = {
  __typename?: 'UserForSale';
  photo: Scalars['String']['output'];
  userAppId: Scalars['String']['output'];
  userId: Scalars['Int']['output'];
  userUtc: Scalars['String']['output'];
};

export type UserForSaleReturn = {
  __typename?: 'UserForSaleReturn';
  data?: Maybe<UserForSale>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserGiftPackage = {
  __typename?: 'UserGiftPackage';
  createdAt: Scalars['String']['output'];
  gift?: Maybe<Gift>;
  giftId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type UserGiftPackageDashboard = {
  __typename?: 'UserGiftPackageDashboard';
  createdAt: Scalars['String']['output'];
  gift?: Maybe<GiftDashboard>;
  giftId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type UserGiftPackageDashboardReturn = {
  __typename?: 'UserGiftPackageDashboardReturn';
  data?: Maybe<UserGiftPackageDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserGiftPackageDashboardReturnList = {
  __typename?: 'UserGiftPackageDashboardReturnList';
  data?: Maybe<Array<Maybe<UserGiftPackageDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserGiftPackageReturn = {
  __typename?: 'UserGiftPackageReturn';
  data?: Maybe<UserGiftPackage>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserGiftPackageReturnList = {
  __typename?: 'UserGiftPackageReturnList';
  data?: Maybe<Array<Maybe<UserGiftPackage>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserLevel = {
  __typename?: 'UserLevel';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  levelHost?: Maybe<LevelHost>;
  levelHostExperience: Scalars['Int']['output'];
  levelHostId: Scalars['Int']['output'];
  levelSpectator?: Maybe<LevelSpectator>;
  levelSpectatorExperience: Scalars['Int']['output'];
  levelSpectatorId: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type UserLevelCustom = {
  __typename?: 'UserLevelCustom';
  beforeLevelHostExperience?: Maybe<Scalars['Int']['output']>;
  beforeLevelSpectatorExperience?: Maybe<Scalars['Int']['output']>;
  levelHostExperience?: Maybe<Scalars['Int']['output']>;
  levelHostId?: Maybe<Scalars['Int']['output']>;
  levelSpectatorExperience?: Maybe<Scalars['Int']['output']>;
  levelSpectatorId?: Maybe<Scalars['Int']['output']>;
  nextLevelHostExperience?: Maybe<Scalars['Int']['output']>;
  nextLevelSpectatorExperience?: Maybe<Scalars['Int']['output']>;
  progressBarLevelHostExperience?: Maybe<Scalars['Int']['output']>;
  progressBarLevelSpectatorExperience?: Maybe<Scalars['Int']['output']>;
  userId: Scalars['Int']['output'];
  userPhoto?: Maybe<Scalars['String']['output']>;
  widthBarLevelHostExperience?: Maybe<Scalars['Int']['output']>;
  widthBarLevelSpectatorExperience?: Maybe<Scalars['Int']['output']>;
};

export type UserLevelCustomReturn = {
  __typename?: 'UserLevelCustomReturn';
  data?: Maybe<UserLevelCustom>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserLevelDashboard = {
  __typename?: 'UserLevelDashboard';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  levelHost?: Maybe<LevelHostDashboard>;
  levelHostExperience: Scalars['Int']['output'];
  levelHostId: Scalars['Int']['output'];
  levelSpectator?: Maybe<LevelSpectatorDashboard>;
  levelSpectatorExperience: Scalars['Int']['output'];
  levelSpectatorId: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type UserLevelDashboardReturn = {
  __typename?: 'UserLevelDashboardReturn';
  data?: Maybe<UserLevelDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserLevelDashboardReturnList = {
  __typename?: 'UserLevelDashboardReturnList';
  data?: Maybe<Array<Maybe<UserLevelDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserLevelReturn = {
  __typename?: 'UserLevelReturn';
  data?: Maybe<UserLevel>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserLevelReturnList = {
  __typename?: 'UserLevelReturnList';
  data?: Maybe<Array<Maybe<UserLevel>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserLiveSetting = {
  __typename?: 'UserLiveSetting';
  id?: Maybe<Scalars['Int']['output']>;
  liveId?: Maybe<Scalars['Int']['output']>;
  playAllSpecialEffectEntrance: Scalars['Boolean']['output'];
  playAllSpecialEffectGift: Scalars['Boolean']['output'];
  playAllSpecialEffectLuckGift: Scalars['Boolean']['output'];
  playModeRecordGift: Scalars['Boolean']['output'];
  playNotificationGiftSentPushCountry: Scalars['Boolean']['output'];
  playNotificationGiftSentPushLive: Scalars['Boolean']['output'];
  playSoundEffects: Scalars['Boolean']['output'];
};

export type UserLiveSettingDashboard = {
  __typename?: 'UserLiveSettingDashboard';
  createdAt: Scalars['String']['output'];
  live?: Maybe<LiveDashboard>;
  liveId: Scalars['Int']['output'];
  playSoundEffects: Scalars['Boolean']['output'];
  playSpecialEffects: Scalars['Boolean']['output'];
  playSpecialEffectsEntrance: Scalars['Boolean']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type UserLiveSettingDashboardReturn = {
  __typename?: 'UserLiveSettingDashboardReturn';
  data?: Maybe<UserLiveSettingDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserLiveSettingDashboardReturnList = {
  __typename?: 'UserLiveSettingDashboardReturnList';
  data?: Maybe<Array<Maybe<UserLiveSettingDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserLiveSettingReturn = {
  __typename?: 'UserLiveSettingReturn';
  data?: Maybe<UserLiveSetting>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserLiveSettingReturnList = {
  __typename?: 'UserLiveSettingReturnList';
  data?: Maybe<Array<Maybe<UserLiveSetting>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserMessage = {
  __typename?: 'UserMessage';
  appId: Scalars['String']['output'];
  beans?: Maybe<Scalars['Float']['output']>;
  birthday?: Maybe<Scalars['String']['output']>;
  coins?: Maybe<Scalars['Float']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
  userLevel?: Maybe<UserLevel>;
  username: Scalars['String']['output'];
};

export type UserNotificationDashboard = {
  __typename?: 'UserNotificationDashboard';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  receiveEmailNotifications: Scalars['Boolean']['output'];
  receiveEventsNotifications: Scalars['Boolean']['output'];
  receiveGeneralNotifications: Scalars['Boolean']['output'];
  receiveGiftNotifications: Scalars['Boolean']['output'];
  receivePushNotifications: Scalars['Boolean']['output'];
  receiveSmsNotifications: Scalars['Boolean']['output'];
  receiveUsersNotifications: Scalars['Boolean']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type UserNotificationDashboardReturn = {
  __typename?: 'UserNotificationDashboardReturn';
  data?: Maybe<UserNotificationDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserNotificationDashboardReturnList = {
  __typename?: 'UserNotificationDashboardReturnList';
  data?: Maybe<Array<Maybe<UserNotificationDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserPhotoDashboard = {
  __typename?: 'UserPhotoDashboard';
  createdAt: Scalars['String']['output'];
  photo: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type UserPhotoDashboardReturn = {
  __typename?: 'UserPhotoDashboardReturn';
  data?: Maybe<UserPhotoDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserPhotoDashboardReturnList = {
  __typename?: 'UserPhotoDashboardReturnList';
  data?: Maybe<Array<Maybe<UserPhotoDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserPoints = {
  __typename?: 'UserPoints';
  id?: Maybe<Scalars['ID']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

export type UserPointsReturn = {
  __typename?: 'UserPointsReturn';
  data: UserPoints;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserPrivacyDashboard = {
  __typename?: 'UserPrivacyDashboard';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  invisibleGiftGiver: Scalars['Boolean']['output'];
  invisibleVisitor: Scalars['Boolean']['output'];
  showFollowers: Scalars['Boolean']['output'];
  showFollowing: Scalars['Boolean']['output'];
  showMyGiftGivers: Scalars['Boolean']['output'];
  showRechargeRanking: Scalars['Boolean']['output'];
  showSpectatorRanking: Scalars['Boolean']['output'];
  showStreamerRanking: Scalars['Boolean']['output'];
  showSuperFans: Scalars['Boolean']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type UserPrivacyDashboardReturn = {
  __typename?: 'UserPrivacyDashboardReturn';
  data?: Maybe<UserPrivacyDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserPrivacyDashboardReturnList = {
  __typename?: 'UserPrivacyDashboardReturnList';
  data?: Maybe<Array<Maybe<UserPrivacyDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserProcessingQueue = {
  __typename?: 'UserProcessingQueue';
  country: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  processingQueueId: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type UserProcessingQueueDashboard = {
  __typename?: 'UserProcessingQueueDashboard';
  country: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  processingQueueId: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type UserProcessingQueueDashboardReturn = {
  __typename?: 'UserProcessingQueueDashboardReturn';
  data?: Maybe<UserProcessingQueueDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserProcessingQueueDashboardReturnList = {
  __typename?: 'UserProcessingQueueDashboardReturnList';
  data?: Maybe<Array<Maybe<UserProcessingQueueDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserProcessingQueueReturn = {
  __typename?: 'UserProcessingQueueReturn';
  data?: Maybe<UserProcessingQueue>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserProcessingQueueReturnList = {
  __typename?: 'UserProcessingQueueReturnList';
  data?: Maybe<Array<Maybe<UserProcessingQueue>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  appId: Scalars['String']['output'];
  beans?: Maybe<Scalars['Float']['output']>;
  biography?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['String']['output']>;
  blockeds?: Maybe<Array<Maybe<UserBlockeds>>>;
  coins?: Maybe<Scalars['Float']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  countryShow?: Maybe<Scalars['String']['output']>;
  followers?: Maybe<Array<Maybe<Follower>>>;
  following?: Maybe<Array<Maybe<Following>>>;
  gender?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitationCode?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  online?: Maybe<Scalars['Boolean']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
  post?: Maybe<Array<Maybe<Post>>>;
  privacy?: Maybe<Privacy>;
  region?: Maybe<Scalars['String']['output']>;
  superFans?: Maybe<Array<Maybe<SuperFans>>>;
  tasks?: Maybe<Scalars['Float']['output']>;
  userDetail?: Maybe<UserDetail>;
  userPhotos?: Maybe<Array<Maybe<Photo>>>;
  username: Scalars['String']['output'];
  utc?: Maybe<Scalars['String']['output']>;
};

export type UserSuperFanDashboard = {
  __typename?: 'UserSuperFanDashboard';
  createdAt: Scalars['String']['output'];
  superFan?: Maybe<UserDashboard>;
  superFanId: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
};

export type UserSuperFanDashboardReturn = {
  __typename?: 'UserSuperFanDashboardReturn';
  data?: Maybe<UserSuperFanDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserSuperFanDashboardReturnList = {
  __typename?: 'UserSuperFanDashboardReturnList';
  data?: Maybe<Array<Maybe<UserSuperFanDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserVip = {
  __typename?: 'UserVip';
  createdAt: Scalars['String']['output'];
  datePurchased: Scalars['String']['output'];
  expiresIn: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  platformVipBonus: Scalars['Boolean']['output'];
  points: Scalars['Float']['output'];
  pointsLeft: Scalars['Float']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
  vip?: Maybe<Vip>;
  vipId: Scalars['Int']['output'];
};

export type UserVipDashboard = {
  __typename?: 'UserVipDashboard';
  createdAt: Scalars['String']['output'];
  datePurchased: Scalars['String']['output'];
  expiresIn: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  platformVipBonus: Scalars['Boolean']['output'];
  points: Scalars['Float']['output'];
  pointsLeft: Scalars['Float']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
  vip?: Maybe<VipDashboard>;
  vipId: Scalars['Int']['output'];
};

export type UserVipDashboardReturn = {
  __typename?: 'UserVipDashboardReturn';
  data?: Maybe<UserVipDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserVipDashboardReturnList = {
  __typename?: 'UserVipDashboardReturnList';
  data?: Maybe<Array<Maybe<UserVipDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserVipReturn = {
  __typename?: 'UserVipReturn';
  data?: Maybe<UserVip>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserVipReturnList = {
  __typename?: 'UserVipReturnList';
  data?: Maybe<Array<Maybe<UserVip>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserVisitProfileDashboard = {
  __typename?: 'UserVisitProfileDashboard';
  createdAt: Scalars['String']['output'];
  date: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
  visit?: Maybe<UserDashboard>;
  visitId: Scalars['Int']['output'];
};

export type UserVisitProfileDashboardReturn = {
  __typename?: 'UserVisitProfileDashboardReturn';
  data?: Maybe<UserVisitProfileDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserVisitProfileDashboardReturnList = {
  __typename?: 'UserVisitProfileDashboardReturnList';
  data?: Maybe<Array<Maybe<UserVisitProfileDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserWarning = {
  __typename?: 'UserWarning';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
  warningDate: Scalars['String']['output'];
  warningExpiryDate: Scalars['String']['output'];
};

export type UserWarningDashboard = {
  __typename?: 'UserWarningDashboard';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
  warningDate: Scalars['String']['output'];
  warningExpiryDate: Scalars['String']['output'];
};

export type UserWarningDashboardReturn = {
  __typename?: 'UserWarningDashboardReturn';
  data?: Maybe<UserWarningDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserWarningDashboardReturnList = {
  __typename?: 'UserWarningDashboardReturnList';
  data?: Maybe<Array<Maybe<UserWarningDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserWarningDetail = {
  __typename?: 'UserWarningDetail';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  proof: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  userWarning?: Maybe<UserWarning>;
  userWarningId: Scalars['Int']['output'];
};

export type UserWarningDetailDashboard = {
  __typename?: 'UserWarningDetailDashboard';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  proof: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  userWarning?: Maybe<UserDashboard>;
  userWarningId: Scalars['Int']['output'];
};

export type UserWarningDetailDashboardReturn = {
  __typename?: 'UserWarningDetailDashboardReturn';
  data?: Maybe<UserWarningDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserWarningDetailDashboardReturnList = {
  __typename?: 'UserWarningDetailDashboardReturnList';
  data?: Maybe<Array<Maybe<UserWarningDetailDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserWarningDetailReturn = {
  __typename?: 'UserWarningDetailReturn';
  data?: Maybe<UserWarningDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserWarningDetailReturnList = {
  __typename?: 'UserWarningDetailReturnList';
  data?: Maybe<Array<Maybe<UserWarningDetail>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserWarningReturn = {
  __typename?: 'UserWarningReturn';
  data?: Maybe<UserWarning>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserWarningReturnList = {
  __typename?: 'UserWarningReturnList';
  data?: Maybe<Array<Maybe<UserWarning>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UsersForChat = {
  __typename?: 'UsersForChat';
  createdAt?: Maybe<Scalars['String']['output']>;
  following?: Maybe<User>;
  followingId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type UsersForChatReturnList = {
  __typename?: 'UsersForChatReturnList';
  data?: Maybe<Array<Maybe<UsersForChat>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UsersReturn = {
  __typename?: 'UsersReturn';
  data: Array<User>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Vip = {
  __typename?: 'Vip';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  icon: Scalars['String']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  points: Scalars['Float']['output'];
  updatedAt: Scalars['String']['output'];
  vipBenefitDetail?: Maybe<Array<Maybe<VipBenefitDetail>>>;
};

export type VipBenefit = {
  __typename?: 'VipBenefit';
  active?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon: Scalars['String']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type VipBenefitDashboard = {
  __typename?: 'VipBenefitDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  typeVipBenefit?: Maybe<TypeVipBenefit>;
  updatedAt: Scalars['String']['output'];
};

export type VipBenefitDashboardReturn = {
  __typename?: 'VipBenefitDashboardReturn';
  data?: Maybe<VipBenefitDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type VipBenefitDashboardReturnList = {
  __typename?: 'VipBenefitDashboardReturnList';
  data?: Maybe<Array<Maybe<VipBenefitDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type VipBenefitDetail = {
  __typename?: 'VipBenefitDetail';
  active?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  vip?: Maybe<Vip>;
  vipBenefit?: Maybe<VipBenefit>;
  vipBenefitId?: Maybe<Scalars['Int']['output']>;
  vipId?: Maybe<Scalars['Int']['output']>;
};

export type VipBenefitDetailDashboard = {
  __typename?: 'VipBenefitDetailDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  vip?: Maybe<VipDashboard>;
  vipBenefit?: Maybe<VipBenefitDashboard>;
  vipBenefitId: Scalars['Int']['output'];
  vipId: Scalars['Int']['output'];
};

export type VipBenefitDetailDashboardReturn = {
  __typename?: 'VipBenefitDetailDashboardReturn';
  data?: Maybe<VipBenefitDetailDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type VipBenefitDetailDashboardReturnList = {
  __typename?: 'VipBenefitDetailDashboardReturnList';
  data?: Maybe<Array<Maybe<VipBenefitDetailDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type VipBenefitDetailReturn = {
  __typename?: 'VipBenefitDetailReturn';
  data?: Maybe<VipBenefitDetail>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type VipBenefitDetailReturnList = {
  __typename?: 'VipBenefitDetailReturnList';
  data?: Maybe<Array<Maybe<VipBenefitDetail>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type VipBenefitReturn = {
  __typename?: 'VipBenefitReturn';
  data?: Maybe<VipBenefit>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type VipBenefitReturnList = {
  __typename?: 'VipBenefitReturnList';
  data?: Maybe<Array<Maybe<VipBenefit>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type VipDashboard = {
  __typename?: 'VipDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  points: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  vipLevel: Scalars['Int']['output'];
};

export type VipDashboardReturn = {
  __typename?: 'VipDashboardReturn';
  data?: Maybe<VipDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type VipDashboardReturnList = {
  __typename?: 'VipDashboardReturnList';
  data?: Maybe<Array<Maybe<VipDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type VipReturn = {
  __typename?: 'VipReturn';
  data?: Maybe<Vip>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type VipReturnList = {
  __typename?: 'VipReturnList';
  data?: Maybe<Array<Maybe<Vip>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Visit = {
  __typename?: 'Visit';
  date?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type VisitProfile = {
  __typename?: 'VisitProfile';
  date?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  visit?: Maybe<User>;
};

export type VisitProfileReturn = {
  __typename?: 'VisitProfileReturn';
  data?: Maybe<Visit>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WalletCoinSale = {
  __typename?: 'WalletCoinSale';
  country: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  quantityCoins: Scalars['Float']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
  valueCurrency: Scalars['Float']['output'];
  valueUsd: Scalars['Int']['output'];
  walletPriceCoin?: Maybe<WalletPriceCoin>;
  walletPriceCoinId: Scalars['Int']['output'];
};

export type WalletCoinSaleDashboard = {
  __typename?: 'WalletCoinSaleDashboard';
  country: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  quantityCoins: Scalars['Float']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
  valueCurrency: Scalars['Float']['output'];
  valueUsd: Scalars['Int']['output'];
  walletPriceCoin?: Maybe<WalletPriceCoinDashboard>;
  walletPriceCoinId: Scalars['Int']['output'];
};

export type WalletCoinSaleDashboardReturn = {
  __typename?: 'WalletCoinSaleDashboardReturn';
  data?: Maybe<WalletCoinSaleDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WalletCoinSaleDashboardReturnList = {
  __typename?: 'WalletCoinSaleDashboardReturnList';
  data?: Maybe<Array<Maybe<WalletCoinSaleDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type WalletCoinSaleReturn = {
  __typename?: 'WalletCoinSaleReturn';
  data?: Maybe<WalletCoinSale>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WalletCoinSaleReturnList = {
  __typename?: 'WalletCoinSaleReturnList';
  data?: Maybe<Array<Maybe<WalletCoinSale>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WalletConvert = {
  __typename?: 'WalletConvert';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  quantityCoins: Scalars['Float']['output'];
  quantityPoints: Scalars['Float']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserProfile>;
  userId: Scalars['Int']['output'];
  walletTypeConvert?: Maybe<WalletTypeConvert>;
  walletTypeConvertId: Scalars['Int']['output'];
};

export type WalletConvertDashboard = {
  __typename?: 'WalletConvertDashboard';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  quantityCoins: Scalars['Float']['output'];
  quantityPoints: Scalars['Float']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
  walletTypeConvert?: Maybe<WalletTypeConvertDashboard>;
  walletTypeConvertId: Scalars['Int']['output'];
};

export type WalletConvertDashboardReturn = {
  __typename?: 'WalletConvertDashboardReturn';
  data?: Maybe<WalletConvertDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WalletConvertDashboardReturnList = {
  __typename?: 'WalletConvertDashboardReturnList';
  data?: Maybe<Array<Maybe<WalletConvertDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type WalletConvertReturn = {
  __typename?: 'WalletConvertReturn';
  data?: Maybe<WalletConvert>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WalletConvertReturnList = {
  __typename?: 'WalletConvertReturnList';
  data?: Maybe<Array<Maybe<WalletConvert>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WalletPriceCoin = {
  __typename?: 'WalletPriceCoin';
  active: Scalars['Boolean']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  quantityCoins: Scalars['Float']['output'];
  updatedAt: Scalars['String']['output'];
  valueCurrency: Scalars['Float']['output'];
  valueUsd: Scalars['Int']['output'];
};

export type WalletPriceCoinDashboard = {
  __typename?: 'WalletPriceCoinDashboard';
  active: Scalars['Boolean']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  quantityCoins: Scalars['Float']['output'];
  updatedAt: Scalars['String']['output'];
  valueCurrency: Scalars['Float']['output'];
  valueUsd: Scalars['Int']['output'];
};

export type WalletPriceCoinDashboardReturn = {
  __typename?: 'WalletPriceCoinDashboardReturn';
  data?: Maybe<WalletPriceCoinDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WalletPriceCoinDashboardReturnList = {
  __typename?: 'WalletPriceCoinDashboardReturnList';
  data?: Maybe<Array<Maybe<WalletPriceCoinDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type WalletPriceCoinReturn = {
  __typename?: 'WalletPriceCoinReturn';
  data?: Maybe<WalletPriceCoin>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WalletPriceCoinReturnList = {
  __typename?: 'WalletPriceCoinReturnList';
  data?: Maybe<Array<Maybe<WalletPriceCoin>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WalletTypeConvert = {
  __typename?: 'WalletTypeConvert';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  quantityCoins: Scalars['Float']['output'];
  quantityPoints: Scalars['Float']['output'];
  updatedAt: Scalars['String']['output'];
};

export type WalletTypeConvertDashboard = {
  __typename?: 'WalletTypeConvertDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  quantityCoins: Scalars['Float']['output'];
  quantityPoints: Scalars['Float']['output'];
  updatedAt: Scalars['String']['output'];
};

export type WalletTypeConvertDashboardReturn = {
  __typename?: 'WalletTypeConvertDashboardReturn';
  data?: Maybe<WalletTypeConvertDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WalletTypeConvertDashboardReturnList = {
  __typename?: 'WalletTypeConvertDashboardReturnList';
  data?: Maybe<Array<Maybe<WalletTypeConvertDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type WalletTypeConvertReturn = {
  __typename?: 'WalletTypeConvertReturn';
  data?: Maybe<WalletTypeConvert>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WalletTypeConvertReturnList = {
  __typename?: 'WalletTypeConvertReturnList';
  data?: Maybe<Array<Maybe<WalletTypeConvert>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Withdrawal = {
  __typename?: 'Withdrawal';
  codeWithdrawal: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dateWithdrawal: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  paymentAgent?: Maybe<PaymentAgent>;
  paymentAgentId: Scalars['Int']['output'];
  typeWithdrawalStatus: TypeWithdrawalStatus;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
  valueCurrency: Scalars['Float']['output'];
  valuePoints: Scalars['Float']['output'];
  valueUsd: Scalars['Float']['output'];
  withdrawalMethodDataUser?: Maybe<WithdrawalMethodDataUser>;
  withdrawalMethodDataUserId: Scalars['Int']['output'];
};

export type WithdrawalDashboard = {
  __typename?: 'WithdrawalDashboard';
  codeWithdrawal: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dateWithdrawal: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  paymentAgent?: Maybe<PaymentAgentDashboard>;
  paymentAgentId: Scalars['Int']['output'];
  typeWithdrawalStatus: TypeWithdrawalStatus;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
  valueCurrency: Scalars['Float']['output'];
  valuePoints: Scalars['Float']['output'];
  valueUsd: Scalars['Float']['output'];
  withdrawalMethodDataUser?: Maybe<WithdrawalMethodDataUserDashboard>;
  withdrawalMethodDataUserId: Scalars['Int']['output'];
};

export type WithdrawalDashboardReturn = {
  __typename?: 'WithdrawalDashboardReturn';
  data?: Maybe<WithdrawalDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WithdrawalDashboardReturnList = {
  __typename?: 'WithdrawalDashboardReturnList';
  data?: Maybe<Array<Maybe<WithdrawalDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type WithdrawalMethod = {
  __typename?: 'WithdrawalMethod';
  active: Scalars['Boolean']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  taxPercentPayment: Scalars['Int']['output'];
  timePayment: Scalars['String']['output'];
  typeWithdrawalMethodTypePayment?: Maybe<TypeWithdrawalMethodTypePayment>;
  updatedAt: Scalars['String']['output'];
};

export type WithdrawalMethodDashboard = {
  __typename?: 'WithdrawalMethodDashboard';
  active: Scalars['Boolean']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  taxPercentPayment: Scalars['Int']['output'];
  timePayment: Scalars['String']['output'];
  typeWithdrawalMethodTypePayment?: Maybe<TypeWithdrawalMethodTypePayment>;
  updatedAt: Scalars['String']['output'];
};

export type WithdrawalMethodDashboardReturn = {
  __typename?: 'WithdrawalMethodDashboardReturn';
  data?: Maybe<WithdrawalMethodDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WithdrawalMethodDashboardReturnList = {
  __typename?: 'WithdrawalMethodDashboardReturnList';
  data?: Maybe<Array<Maybe<WithdrawalMethodDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type WithdrawalMethodDataUser = {
  __typename?: 'WithdrawalMethodDataUser';
  bankAccountNumber: Scalars['String']['output'];
  bankAgencyNumber: Scalars['String']['output'];
  bankDocument: Scalars['String']['output'];
  bankName: Scalars['String']['output'];
  bankNumber: Scalars['String']['output'];
  binanceKey: Scalars['String']['output'];
  binding: Scalars['Boolean']['output'];
  bindingDate: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  paypalEmail: Scalars['String']['output'];
  pixKey: Scalars['String']['output'];
  pixName: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type WithdrawalMethodDataUserDashboard = {
  __typename?: 'WithdrawalMethodDataUserDashboard';
  bankAccountNumber?: Maybe<Scalars['String']['output']>;
  bankAgencyNumber?: Maybe<Scalars['String']['output']>;
  bankDocument?: Maybe<Scalars['String']['output']>;
  bankName?: Maybe<Scalars['String']['output']>;
  bankNumber?: Maybe<Scalars['String']['output']>;
  binanceKey?: Maybe<Scalars['String']['output']>;
  binding: Scalars['Boolean']['output'];
  bindingDate: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  paypalEmail?: Maybe<Scalars['String']['output']>;
  pixKey?: Maybe<Scalars['String']['output']>;
  pixName?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserDashboard>;
  userId: Scalars['Int']['output'];
  withdrawalMethod?: Maybe<WithdrawalMethodDashboard>;
  withdrawalMethodId: Scalars['Int']['output'];
};

export type WithdrawalMethodDataUserDashboardReturn = {
  __typename?: 'WithdrawalMethodDataUserDashboardReturn';
  data?: Maybe<WithdrawalMethodDataUserDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WithdrawalMethodDataUserDashboardReturnList = {
  __typename?: 'WithdrawalMethodDataUserDashboardReturnList';
  data?: Maybe<Array<Maybe<WithdrawalMethodDataUserDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type WithdrawalMethodDataUserReturn = {
  __typename?: 'WithdrawalMethodDataUserReturn';
  data?: Maybe<WithdrawalMethodDataUser>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WithdrawalMethodDataUserReturnList = {
  __typename?: 'WithdrawalMethodDataUserReturnList';
  data?: Maybe<Array<Maybe<WithdrawalMethodDataUser>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WithdrawalMethodReturn = {
  __typename?: 'WithdrawalMethodReturn';
  data?: Maybe<WithdrawalMethod>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WithdrawalMethodReturnList = {
  __typename?: 'WithdrawalMethodReturnList';
  data?: Maybe<Array<Maybe<WithdrawalMethod>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WithdrawalProof = {
  __typename?: 'WithdrawalProof';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  withdrawal?: Maybe<Withdrawal>;
  withdrawalId: Scalars['Int']['output'];
};

export type WithdrawalProofDashboard = {
  __typename?: 'WithdrawalProofDashboard';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  withdrawal?: Maybe<WithdrawalDashboard>;
  withdrawalId: Scalars['Int']['output'];
};

export type WithdrawalProofDashboardReturn = {
  __typename?: 'WithdrawalProofDashboardReturn';
  data?: Maybe<WithdrawalProofDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WithdrawalProofDashboardReturnList = {
  __typename?: 'WithdrawalProofDashboardReturnList';
  data?: Maybe<Array<Maybe<WithdrawalProofDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type WithdrawalProofReturn = {
  __typename?: 'WithdrawalProofReturn';
  data?: Maybe<WithdrawalProof>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WithdrawalProofReturnList = {
  __typename?: 'WithdrawalProofReturnList';
  data?: Maybe<Array<Maybe<WithdrawalProof>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WithdrawalReturn = {
  __typename?: 'WithdrawalReturn';
  data?: Maybe<Withdrawal>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WithdrawalReturnList = {
  __typename?: 'WithdrawalReturnList';
  data?: Maybe<Array<Maybe<Withdrawal>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WithdrawalTypeRefused = {
  __typename?: 'WithdrawalTypeRefused';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type WithdrawalTypeRefusedDashboard = {
  __typename?: 'WithdrawalTypeRefusedDashboard';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dateLastActive?: Maybe<Scalars['String']['output']>;
  dateLastDelete?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  withdrawalMethodId?: Maybe<Scalars['Int']['output']>;
};

export type WithdrawalTypeRefusedDashboardReturn = {
  __typename?: 'WithdrawalTypeRefusedDashboardReturn';
  data?: Maybe<WithdrawalTypeRefusedDashboard>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WithdrawalTypeRefusedDashboardReturnList = {
  __typename?: 'WithdrawalTypeRefusedDashboardReturnList';
  data?: Maybe<Array<Maybe<WithdrawalTypeRefusedDashboard>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type WithdrawalTypeRefusedReturn = {
  __typename?: 'WithdrawalTypeRefusedReturn';
  data?: Maybe<WithdrawalTypeRefused>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WithdrawalTypeRefusedReturnList = {
  __typename?: 'WithdrawalTypeRefusedReturnList';
  data?: Maybe<Array<Maybe<WithdrawalTypeRefused>>>;
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ReturnForUser = {
  __typename?: 'returnForUser';
  userId: Scalars['Int']['output'];
  value: Scalars['Float']['output'];
};
