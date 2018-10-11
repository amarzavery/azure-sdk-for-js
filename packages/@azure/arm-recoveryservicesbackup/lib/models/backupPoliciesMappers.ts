/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

export {
  discriminators,
  ProtectionPolicyResourceList,
  ResourceList,
  ProtectionPolicyResource,
  Resource,
  BaseResource,
  ProtectionPolicy,
  CloudError,
  AzureFileShareProtectionPolicy,
  SchedulePolicy,
  RetentionPolicy,
  AzureIaaSVMProtectionPolicy,
  AzureSqlProtectionPolicy,
  AzureVmWorkloadProtectionPolicy,
  Settings,
  SubProtectionPolicy,
  GenericProtectionPolicy,
  JobResource,
  Job,
  JobResourceList,
  LogSchedulePolicy,
  LongTermRetentionPolicy,
  DailyRetentionSchedule,
  RetentionDuration,
  WeeklyRetentionSchedule,
  MonthlyRetentionSchedule,
  DailyRetentionFormat,
  Day,
  WeeklyRetentionFormat,
  YearlyRetentionSchedule,
  LongTermSchedulePolicy,
  MabJob,
  MabErrorInfo,
  MabJobExtendedInfo,
  MabJobTaskDetails,
  MabProtectionPolicy,
  ProtectedItemResource,
  ProtectedItem,
  ProtectedItemResourceList,
  ProtectionIntentResource,
  ProtectionIntent,
  ProtectionIntentResourceList,
  SimpleRetentionPolicy,
  SimpleSchedulePolicy,
  BackupEngineBaseResource,
  BackupEngineBase,
  BackupEngineExtendedInfo,
  BackupEngineBaseResourceList,
  BackupRequestResource,
  BackupRequest,
  BackupResourceConfigResource,
  BackupResourceConfig,
  BackupResourceVaultConfigResource,
  BackupResourceVaultConfig,
  DpmBackupEngine,
  IaasVMBackupRequest,
  ILRRequestResource,
  ILRRequest,
  ProtectableContainerResource,
  ProtectableContainer,
  ProtectableContainerResourceList,
  ProtectionContainerResource,
  ProtectionContainer,
  ProtectionContainerResourceList,
  RecoveryPointResource,
  RecoveryPoint,
  RecoveryPointResourceList,
  RestoreRequestResource,
  RestoreRequest,
  WorkloadItemResource,
  WorkloadItem,
  WorkloadItemResourceList,
  WorkloadProtectableItemResource,
  WorkloadProtectableItem,
  WorkloadProtectableItemResourceList,
  AzureFileshareProtectedItem,
  AzureFileshareProtectedItemExtendedInfo,
  AzureFileShareRestoreRequest,
  RestoreFileSpecs,
  TargetAFSRestoreInfo,
  AzureIaaSVMJob,
  AzureIaaSVMErrorInfo,
  AzureIaaSVMJobExtendedInfo,
  AzureIaaSVMJobTaskDetails,
  AzureIaaSVMProtectedItem,
  AzureIaaSVMHealthDetails,
  AzureIaaSVMProtectedItemExtendedInfo,
  AzureRecoveryServiceVaultProtectionIntent,
  AzureResourceProtectionIntent,
  AzureSqlProtectedItem,
  AzureSqlProtectedItemExtendedInfo,
  AzureStorageJob,
  AzureStorageErrorInfo,
  AzureStorageJobExtendedInfo,
  AzureStorageJobTaskDetails,
  AzureVmWorkloadProtectedItem,
  ErrorDetail,
  AzureVmWorkloadProtectedItemExtendedInfo,
  AzureVmWorkloadSAPHanaDatabaseProtectedItem,
  AzureVmWorkloadSQLDatabaseProtectedItem,
  AzureWorkloadAutoProtectionIntent,
  AzureWorkloadJob,
  AzureWorkloadErrorInfo,
  AzureWorkloadJobExtendedInfo,
  AzureWorkloadJobTaskDetails,
  AzureWorkloadRestoreRequest,
  AzureWorkloadSAPHanaRestoreRequest,
  TargetRestoreInfo,
  AzureWorkloadSQLAutoProtectionIntent,
  AzureWorkloadSQLRestoreRequest,
  SQLDataDirectoryMapping,
  DpmJob,
  DpmErrorInfo,
  DpmJobExtendedInfo,
  DpmJobTaskDetails,
  DPMProtectedItem,
  DPMProtectedItemExtendedInfo,
  GenericProtectedItem,
  IaasVMRestoreRequest,
  EncryptionDetails,
  MabFileFolderProtectedItem,
  MabFileFolderProtectedItemExtendedInfo,
  AzureBackupServerContainer,
  DPMContainerExtendedInfo,
  AzureBackupServerEngine,
  AzureFileShareBackupRequest,
  AzureFileShareProtectableItem,
  AzureFileShareRecoveryPoint,
  AzureSqlContainer,
  AzureStorageContainer,
  AzureStorageProtectableContainer,
  AzureVMAppContainerProtectableContainer,
  AzureVmWorkloadItem,
  AzureVmWorkloadProtectableItem,
  PreBackupValidation,
  AzureVmWorkloadSAPHanaDatabaseProtectableItem,
  AzureVmWorkloadSAPHanaDatabaseWorkloadItem,
  AzureVmWorkloadSAPHanaSystemProtectableItem,
  AzureVmWorkloadSAPHanaSystemWorkloadItem,
  AzureVmWorkloadSQLAvailabilityGroupProtectableItem,
  AzureVmWorkloadSQLDatabaseProtectableItem,
  AzureVmWorkloadSQLDatabaseWorkloadItem,
  AzureVmWorkloadSQLInstanceProtectableItem,
  AzureVmWorkloadSQLInstanceWorkloadItem,
  SQLDataDirectory,
  AzureWorkloadBackupRequest,
  AzureWorkloadContainer,
  AzureWorkloadContainerExtendedInfo,
  InquiryInfo,
  WorkloadInquiryDetails,
  InquiryValidation,
  DistributedNodesInfo,
  AzureWorkloadRecoveryPoint,
  AzureWorkloadSAPHanaRecoveryPoint,
  AzureWorkloadSQLRecoveryPoint,
  AzureWorkloadSQLRecoveryPointExtendedInfo,
  DpmContainer,
  GenericContainer,
  GenericContainerExtendedInfo,
  ContainerIdentityInfo,
  GenericRecoveryPoint,
  IaaSVMContainer,
  IaasVMILRRegistrationRequest,
  IaaSVMProtectableItem,
  IaasVMRecoveryPoint,
  KeyAndSecretDetails,
  KEKDetails,
  BEKDetails,
  RecoveryPointTierInformation,
  MabContainer,
  MabContainerExtendedInfo,
  MABContainerHealthDetails,
  AzureIaaSClassicComputeVMProtectedItem,
  AzureIaaSComputeVMProtectedItem,
  AzureWorkloadSAPHanaPointInTimeRestoreRequest,
  AzureWorkloadSQLPointInTimeRestoreRequest,
  AzureIaaSClassicComputeVMContainer,
  AzureIaaSClassicComputeVMProtectableItem,
  AzureIaaSComputeVMContainer,
  AzureIaaSComputeVMProtectableItem,
  AzureSQLAGWorkloadContainerProtectionContainer,
  AzureVMAppContainerProtectionContainer,
  AzureWorkloadSAPHanaPointInTimeRecoveryPoint,
  PointInTimeRange,
  AzureWorkloadSQLPointInTimeRecoveryPoint
} from "../models/mappers";

