export class ResourceTypes {
  public static category = 'CATEGORY';
  public static assignment = 'ASSIGNMENT';
  public static department = 'DEPARTMENT';
  public static applicationSetting = 'APP_SETTING';
  public static user = 'USER';
  public static municipality = 'MUNICIPALITY';
  public static auth = 'AUTH';
  public static location = 'LOCATION';
  public static comment = 'COMMENT';
  public static report = 'REPORT';
  public static reporter = 'REPORTER';
  public static reportExport = 'REPORT_EXPORT';
  public static reportCategory = 'REPORT_CATEGORY';
}

export class ErrorCodes {
  public static SUCCESS = 200;
  public static UNAUTHORIZED = 401;
  public static CONFLICT = 409;
  public static INTERNAL_ERROR = 500;
}

export class ErrorAppCodes {
  public static PREFIX = 'REPPIDO-';

  public static TEST_UTF8_KEYS = ErrorAppCodes.PREFIX + 'utf8.check';

  public static SYSTEM_ERROR = ErrorAppCodes.PREFIX + 'generalError';
  public static API_ERROR = ErrorAppCodes.PREFIX + 'apiError';

  public static USER_NOT_FOUND = ErrorAppCodes.PREFIX + '101';
  public static DATASET_NOT_FOUND = ErrorAppCodes.PREFIX + '102';
  public static AUTHORIZATION_NOT_FOUND = ErrorAppCodes.PREFIX + '103';
  public static SETTING_NOT_FOUND = ErrorAppCodes.PREFIX + '104';

  public static NO_ACTIVE_DATASET = ErrorAppCodes.PREFIX + '105';
  public static NOT_SUBSCRIBED_TO_DATASET = ErrorAppCodes.PREFIX + '106';
  public static ALREADY_SUBSCRIBED_TO_DATASET = ErrorAppCodes.PREFIX + '107';

  public static PERMISSION_DENIED = ErrorAppCodes.PREFIX + '108';

  public static INVALID_SETTING_OPERATION = ErrorAppCodes.PREFIX + '109';
  public static INVALID_DATASET_OPERATION = ErrorAppCodes.PREFIX + '110';
  public static INVALID_USER_OPERATION = ErrorAppCodes.PREFIX + '111';
  public static INVALID_USER_MANAGE_OPERATION = ErrorAppCodes.PREFIX + '112';

  public static INVALID_SETTING_TYPE = ErrorAppCodes.PREFIX + '113';
  public static SETTING_IS_NOT_OVERRIDABLE = ErrorAppCodes.PREFIX + '114';
  public static SETTING_TYPE_CANNOT_BE_CREATED = ErrorAppCodes.PREFIX + '115';
  public static SETTING_TYPE_CANNOT_BE_OVERRIDEN = ErrorAppCodes.PREFIX + '116';

  public static NULL_PARAMETER = ErrorAppCodes.PREFIX + '117';

  public static ERROR_ON_DATASET_OPERATION = ErrorAppCodes.PREFIX + '118';
  public static ERROR_ON_USER_OPERATION = ErrorAppCodes.PREFIX + '119';
  public static ERROR_LOADING_PAGE = ErrorAppCodes.PREFIX + '120';

  public static INTERFACE_NOT_FOUND = ErrorAppCodes.PREFIX + '121';

  public static OPERATION_FAILED_DUE_TO_DESIGN_ERROR =
    ErrorAppCodes.PREFIX + '122';

  public static LANGUAGE_NOT_FOUND = ErrorAppCodes.PREFIX + '123';
  public static NOT_SUBSCRIBED_TO_LANGUAGE = ErrorAppCodes.PREFIX + '124';

  public static TENANT_NOT_SPECIFIED = ErrorAppCodes.PREFIX + '125';

  public static USER_ALREADY_EXIST = ErrorAppCodes.PREFIX + '127';
  public static ENTITY_HAS_RELATION = ErrorAppCodes.PREFIX + '128';
  public static CATEGORY_ALREADY_EXIST = ErrorAppCodes.PREFIX + '129';
  public static DEPARTMENT_ALREADY_EXIST = ErrorAppCodes.PREFIX + '130';
  public static ENTITY_NOT_FOUND = ErrorAppCodes.PREFIX + '131';
  public static FILTER_NOT_FOUND = ErrorAppCodes.PREFIX + '132';
  public static EXCEED_MAX_FILE_SIZE = ErrorAppCodes.PREFIX + '134';
  public static TENANT_DISPARITY = ErrorAppCodes.PREFIX + '135';
  public static INVALID_USER_ROLE_CHANGE = ErrorAppCodes.PREFIX + '136';
  public static MODIFYING_OLD_OBJECT = ErrorAppCodes.PREFIX + '138';
  public static INVALID_USER_DELETION_OR_DISABLE = ErrorAppCodes.PREFIX + '139';
  public static USER_ACCOUNT_EXPIRE = ErrorAppCodes.PREFIX + '147';
  public static USER_ACCOUNT_LOCK = ErrorAppCodes.PREFIX + '148';
  public static USER_ACCOUNT_RESET_EXPIRE = ErrorAppCodes.PREFIX + '149';
  public static USER_ACCOUNT_RESET_ON_LOCK = ErrorAppCodes.PREFIX + '150';
  public static USER_PASSWORD_HISTORY = ErrorAppCodes.PREFIX + '151';
  // Report sub category change error codes
  public static CATEGORY_CHANGE_CARETAKER_IS_LOGIN_USER =
    ErrorAppCodes.PREFIX + '140';
  public static CATEGORY_CHANGE_CARETAKER_IS_DIFFERENT_USER =
    ErrorAppCodes.PREFIX + '141';
  public static CATEGORY_CHANGE_CARETAKER_HAS_RIGHT =
    ErrorAppCodes.PREFIX + '142';
  public static CATEGORY_CHANGE_CARETAKER_HAS_NO_RIGHT =
    ErrorAppCodes.PREFIX + '143';
  public static CATEGORY_CHANGE_HAS_DEFAULT_CARETAKER =
    ErrorAppCodes.PREFIX + '144';
  public static CATEGORY_CHANGE_ASSIGNED_HAS_NO_DEFAULT_CARETAKER =
    ErrorAppCodes.PREFIX + '145';
  public static INVALID_USER_PICKUP_REPORT = ErrorAppCodes.PREFIX + '146';
  public static INVALID_USER_UPDATE = ErrorAppCodes.PREFIX + '152';

  // All projects common value translation keys
  public static MSG_ALL_BACK = ErrorAppCodes.PREFIX + 'all.back';
  public static MSG_ALL_NEXT = ErrorAppCodes.PREFIX + 'all.next';
  public static MSG_ALL_CLOSE = ErrorAppCodes.PREFIX + 'all.close';
  public static MSG_ALL_CONTINUE = ErrorAppCodes.PREFIX + 'all.continue';
  public static MSG_ALL_CANCEL = ErrorAppCodes.PREFIX + 'all.cancel';
  public static MSG_ALL_CREATE = ErrorAppCodes.PREFIX + 'all.create';
  public static MSG_ALL_OF = ErrorAppCodes.PREFIX + 'all.of';
  public static MSG_ALL_YES = ErrorAppCodes.PREFIX + 'all.yes';
  public static MSG_ALL_SAVE = ErrorAppCodes.PREFIX + 'all.save';
  public static MSG_ALL_NO = ErrorAppCodes.PREFIX + 'all.no';
  public static MSG_ALL_OK = ErrorAppCodes.PREFIX + 'all.ok';
  public static MSG_ALL_PHOTOS = ErrorAppCodes.PREFIX + 'all.photos';
  public static MSG_ALL_AND_OR = ErrorAppCodes.PREFIX + 'all.and.or';
  public static MSG_ALL_WARNING = ErrorAppCodes.PREFIX + 'all.warning';
  public static MSG_SOLVED_SITUATION =
    ErrorAppCodes.PREFIX + 'all.solved.situation';
  public static MSG_PHOTO_UPLOADING =
    ErrorAppCodes.PREFIX + 'all.photo.uploading';

  public static MSG_ACCOUNT_VIEW_LANGUAGE_LABEL =
    ErrorAppCodes.PREFIX + 'ui.view.account.language.label';

  public static MSG_BEFORE_IDLE_TIME_OUT_MESSAGE =
    ErrorAppCodes.PREFIX + 'ui.before.idle.time.out.message';
  public static MSG_IDLE_TIME_OUT_MESSAGE_CAPTION =
    ErrorAppCodes.PREFIX + 'ui.idle.time.out.message.caption';
  public static MSG_IDLE_TIME_OUT_MESSAGE =
    ErrorAppCodes.PREFIX + 'ui.idle.time.out.message';

  public static ESTIMATE_DAY = ErrorAppCodes.PREFIX + 'ui.views.estimate.day';
  public static ESTIMATE_MONTH =
    ErrorAppCodes.PREFIX + 'ui.views.estimate.month';
  public static ESTIMATE_WEEK = ErrorAppCodes.PREFIX + 'ui.views.estimate.week';
  public static ESTIMATE_YEAR = ErrorAppCodes.PREFIX + 'ui.views.estimate.year';

  public static MSG_FILE_UPLOAD_INVALID_FORMAT =
    ErrorAppCodes.PREFIX + 'ui.view.file.upload.invalid.format';
  public static MSG_FILE_UPLOAD_INVALID_SIZE =
    ErrorAppCodes.PREFIX + 'ui.view.file.upload.invalid.size';

  public static MSG_VISIBILITY_OF_REPORT_IMAGE_TO_CITIZEN =
    ErrorAppCodes.PREFIX + 'ui.view.visibility.of.report.image.to.citizen';
  public static HIDE_REPORT_IMAGE_TO_CITIZEN_WARNING_MSG =
    ErrorAppCodes.PREFIX + 'ui.view.hide.report.image.to.citizen.warn.msg';
  public static SHOW_REPORT_IMAGE_TO_CITIZEN_WARNING_MSG =
    ErrorAppCodes.PREFIX + 'ui.view.show.report.image.to.citizen.warn.msg';

  // GUI module password validator - translation keys
  public static MSG_MUNICIPALITY_USER_FORM_TEXT_FIELD_PASSWORD_FORMAT_LOWER_CASE_VALIDATION =
    ErrorAppCodes.PREFIX +
    'municipality.admin.ui.views.users.user.form.text.field.user.password.format.lower.case.validation';
  public static MSG_MUNICIPALITY_USER_FORM_TEXT_FIELD_PASSWORD_FORMAT_UPPER_CASE_VALIDATION =
    ErrorAppCodes.PREFIX +
    'municipality.admin.ui.views.users.user.form.text.field.user.password.format.upper.case.validation';
  public static MSG_MUNICIPALITY_USER_FORM_TEXT_FIELD_PASSWORD_FORMAT_NUMBER_SPECIAL_CHATRACTERS_VALIDATION =
    ErrorAppCodes.PREFIX +
    'municipality.admin.ui.views.users.user.form.text.field.user.password.format.number.special.characters.validation';
  public static MSG_MUNICIPALITY_USER_FORM_TEXT_FIELD_PASSWORD_FORMAT_MINIMUM_EIGHT_CHARACTERS_VALIDATION =
    ErrorAppCodes.PREFIX +
    'municipality.admin.ui.views.users.user.form.text.field.user.password.format.minium.eight.characters.validation';

  public static REPORT_STATUS = ErrorAppCodes.PREFIX + 'report.status';
  public static USERS_GROUP = ErrorAppCodes.PREFIX + 'users.group';

  // Citizen/Caretaker/municipality - Create Report Window Translation keys
  public static MSG_CREATE_REPORT_WINDOW_CATEGORY =
    ErrorAppCodes.PREFIX + 'ui.view.create.report.window.category';
  public static MSG_CREATE_REPORT_WINDOW_CATEGORY_INPUT_PROMPT =
    ErrorAppCodes.PREFIX + 'ui.view.create.report.window.category.input.prompt';
  public static MSG_CREATE_REPORT_WINDOW_CATEGORY_VALIDATION_MSG =
    ErrorAppCodes.PREFIX +
    'ui.view.create.report.window.category.validation.msg';
  public static MSG_CREATE_REPORT_WINDOW_SUB_CATEGORY =
    ErrorAppCodes.PREFIX + 'ui.view.create.report.window.sub.category';
  public static MSG_CREATE_REPORT_WINDOW_SUB_CATEGORY_INPUT_PROMPT =
    ErrorAppCodes.PREFIX +
    'ui.view.create.report.window.sub.category.input.prompt';
  public static MSG_CREATE_REPORT_WINDOW_SUB_CATEGORY_VALIDATION_MSG =
    ErrorAppCodes.PREFIX +
    'ui.view.create.report.window.sub.category.validation.msg';
  public static MSG_CREATE_REPORT_WINDOW_DESCRIPTION =
    ErrorAppCodes.PREFIX + 'ui.view.create.report.window.description';
  public static MSG_CREATE_REPORT_WINDOW_DESCRIPTION_INPUT_PROMPT =
    ErrorAppCodes.PREFIX +
    'ui.view.create.report.window.description.input.prompt';
  public static MSG_CREATE_REPORT_WINDOW_CREATE_REPORT_BUTTON_LABEL =
    ErrorAppCodes.PREFIX +
    'ui.view.create.report.window.create.report.button.label';
  public static MSG_CREATE_REPORT_WINDOW_CREATE_REPORT_HEADING =
    ErrorAppCodes.PREFIX + 'ui.view.create.report.window.create.report.heading';
  public static MSG_CREATE_REPORT_WINDOW_LOCATION =
    ErrorAppCodes.PREFIX + 'ui.view.create.report.window.location';
  public static MSG_CREATE_REPORT_WINDOW_LOCATION_INPUT_PROMPT =
    ErrorAppCodes.PREFIX + 'ui.view.create.report.window.location.input.prompt';
  public static MSG_CREATE_REPORT_WINDOW_PHOTOS =
    ErrorAppCodes.PREFIX + 'ui.view.create.report.window.photos';
  public static MSG_CREATE_REPORT_WINDOW_PHOTOS_UPLOAD =
    ErrorAppCodes.PREFIX + 'ui.view.create.report.window.photos.upload';
  public static MSG_CREATE_REPORT_WINDOW_OUTSIDE_MUNICIPALITY_MSG_TITLE =
    ErrorAppCodes.PREFIX + 'ui.view.map.window.outside.municipality.msg.title';
  public static MSG_CREATE_REPORT_MAP_WINDOW_OUTSIDE_MUNICIPALITY_MSG_TEXT =
    ErrorAppCodes.PREFIX + 'ui.view.map.window.outside.municipality.msg.text';
  public static MSG_REPORT_UPLOAD_ATTACHMENT_CAPTION_INFO =
    ErrorAppCodes.PREFIX + 'ui.view.upload.attachment.caption.info';

  // Citizen/Caretaker  - Choose Location Window Translation keys
  public static MSG_CHOOSE_LOCATION_WINDOW_ADD_LOCATION_LABEL =
    ErrorAppCodes.PREFIX + 'ui.view.choose.location.window.add.location.label';
  public static MSG_CHOOSE_LOCATION_WINDOW_ADD_LOCATION_BUTTON_CAPTION =
    ErrorAppCodes.PREFIX +
    'ui.view.choose.location.window.add.location.button.caption';
  public static MSG_CHOOSE_LOCATION_WINDOW_MY_LOCATION_LABEL =
    ErrorAppCodes.PREFIX +
    'ui.view.choose.location.window.add.my.location.label';

  // Municipality/Caretaker  - Comment box
  public static COMMENT_BOX_MESSAGE_SEND =
    ErrorAppCodes.PREFIX + 'ui.view.comment.box.send.caption';
  public static COMMENT_BOX_TEXT_BOX_PLACEHOLDER =
    ErrorAppCodes.PREFIX + 'ui.view.comment.box.textarea.placeholder';
  public static COMMENT_BOX_COMMENTS_SHOW_PREVIOUS_COMMENTS =
    ErrorAppCodes.PREFIX + 'ui.view.comment.box.showmore.button.caption';
  public static COMMENT_BOX_TEXT_BOX_VALIDATE_MSG =
    ErrorAppCodes.PREFIX +
    'ui.view.comment.box.max.comment.length.validate.msg';
  public static COMMENT_BOX_COMMENT_INFO_TIME_SEPARATOR =
    ErrorAppCodes.PREFIX + 'ui.view.comment.box.comment.info.time.separator';
  public static COMMENT_BOX_EMAIL_TO_CITIZEN =
    ErrorAppCodes.PREFIX + 'ui.view.comment.box.email.to.citizen';
  public static COMMENT_BOX_EMAIL_TO_CITIZEN_DISABLE =
    ErrorAppCodes.PREFIX + 'ui.view.comment.box.email.to.citizen.disable';
  public static COMMENT_BOX_EXTERNAL_COMMENTER =
    ErrorAppCodes.PREFIX + 'ui.view.comment.box.external.commenter';
  public static COMMENT_BOX_INTERNAL_COMMENT =
    ErrorAppCodes.PREFIX + 'ui.view.comment.box.internal.comment';
  public static COMMENT_BOX_EXTERNAL_COMMENT =
    ErrorAppCodes.PREFIX + 'ui.view.comment.box.external.comment';
  public static COMMENT_BOX_EXTERNAL_COMMENT_EMAIL =
    ErrorAppCodes.PREFIX + 'ui.view.comment.box.external.comment.email';
  public static COMMENT_BOX_EMAIL_COMMENT_WARNING_MSG =
    ErrorAppCodes.PREFIX + 'ui.view.comment.box.email.comment.warn.msg';
  public static COMMENT_BOX_EMAIL_COMMENT_WARNING_HEADING =
    ErrorAppCodes.PREFIX + 'ui.view.comment.box.email.comment.warn.heading';

  // Municipality/Caretaker  - Attachment box
  public static ATTACHMENT_BOX_ADD_ATTACHEMNT =
    ErrorAppCodes.PREFIX + 'ui.view.attachment.box.add.attachment';
  public static ATTACHMENT_BOX_ADD_ATTACHEMNT_WARNING_MSG =
    ErrorAppCodes.PREFIX + 'ui.view.attachment.box.add.attachment.warn.msg';
  public static ATTACHMENT_BOX_ADD_REPORT_IMAGE =
    ErrorAppCodes.PREFIX + 'ui.view.attachment.box.add.report.image';
  public static ATTACHMENT_BOX_ADD_SOLVE_IMAGE =
    ErrorAppCodes.PREFIX + 'ui.view.attachment.box.add.solve.image';
  public static ATTACHMENT_BOX_ADD_IMAGE_WARNING_MSG =
    ErrorAppCodes.PREFIX + 'ui.view.attachment.box.add.image.warn.msg';

  public static ATTACHMENT_BOX_TITLE_ATTACHEMNT =
    ErrorAppCodes.PREFIX + 'ui.view.attachment.box.title.attachment';
  public static ATTACHMENT_BOX_TITLE_INFO_ATTACHEMNT =
    ErrorAppCodes.PREFIX + 'ui.view.attachment.box.title.info.attachment';
  public static ATTACHMENT_BOX_TITLE_REPORT_IMAGE =
    ErrorAppCodes.PREFIX + 'ui.view.attachment.box.title.report.image';
  public static ATTACHMENT_BOX_TITLE_INFO_REPORT_IMAGE =
    ErrorAppCodes.PREFIX + 'ui.view.attachment.box.title.info.report.image';
  public static ATTACHMENT_BOX_TITLE_SOLVE_IMAGE =
    ErrorAppCodes.PREFIX + 'ui.view.attachment.box.title.solve.image';
  public static ATTACHMENT_BOX_TITLE_INFO_SOLVE_IMAGE =
    ErrorAppCodes.PREFIX + 'ui.view.attachment.box.title.info.solve.image';
  public static ATTACHMENT_BOX_ADDED_BY_REPORTER =
    ErrorAppCodes.PREFIX + 'ui.view.attachment.box.added.by.repoter';
  public static ATTACHMENT_BOX_ADDED_BY_OTHER =
    ErrorAppCodes.PREFIX + 'ui.view.attachment.box.added.by.other';
  public static ATTACHMENT_BOX_DELETE_WARNING_MSG =
    ErrorAppCodes.PREFIX + 'ui.view.attachment.box.delete.warn.msg';
  public static ATTACHMENT_BOX_DELETE_WARNING_HEADING =
    ErrorAppCodes.PREFIX + 'ui.view.attachment.box.delete.warn.heading';

  // municipality/Caretaker  - Category Editor
  public static MSG_REPORT_CATEGORY_EDITOR_WINDOW_CATEGORY =
    ErrorAppCodes.PREFIX + 'ui.view.report.category.editor.window.category';
  public static MSG_REPORT_CATEGORY_EDITOR_WINDOW_SUB_CATEGORY =
    ErrorAppCodes.PREFIX + 'ui.view.report.category.editor.window.sub.category';
  public static MSG_REPORT_CATEGORY_EDITOR_WINDOW_CATEGORY_PLACEHOLDER =
    ErrorAppCodes.PREFIX +
    'ui.view.report.category.editor.window.category.placeholder';
  public static MSG_REPORT_CATEGORY_EDITOR_WINDOW_SUB_CATEGORY_PLACEHOLDER =
    ErrorAppCodes.PREFIX +
    'ui.view.report.category.editor.window.sub.category.placeholder';
  public static MSG_REPORT_CATEGORY_EDITOR_WINDOW_CATEGORY_VALIDATE_MESSAGE =
    ErrorAppCodes.PREFIX +
    'ui.view.report.category.editor.window.category.validate.message';
  public static MSG_REPORT_CATEGORY_EDITOR_WINDOW_SUB_CATEGORY_VALIDATE_MESSAGE =
    ErrorAppCodes.PREFIX +
    'ui.view.report.category.editor.window.sub.category.validate.message';

  public static MSG_REPORT_CATEGORY_EDITOR_WINDOW_SUB_CATEGORY_VALIDATE_HAS_DEFAULT_OPS_MESSAGE =
    ErrorAppCodes.PREFIX +
    'ui.view.report.category.editor.window.category.change.validate.message1';
  public static MSG_REPORT_CATEGORY_EDITOR_WINDOW_SUB_CATEGORY_VALIDATE_HAS_DEFAULT_OPS_SAME_USER =
    ErrorAppCodes.PREFIX +
    'ui.view.report.category.editor.window.category.change.validate.note1';
  public static MSG_REPORT_CATEGORY_EDITOR_WINDOW_SUB_CATEGORY_VALIDATE_HAS_DEFAULT_OPS_DIFFERENT_USER =
    ErrorAppCodes.PREFIX +
    'ui.view.report.category.editor.window.category.change.validate.note2';
  public static MSG_REPORT_CATEGORY_EDITOR_WINDOW_SUB_CATEGORY_VALIDATE_ASSIGN_CURR_CARETAKER_MESSAGE =
    ErrorAppCodes.PREFIX +
    'ui.view.report.category.editor.window.category.change.validate.message2';
  public static MSG_REPORT_CATEGORY_EDITOR_WINDOW_SUB_CATEGORY_VALIDATE_CARETAKER_CHANGE_N_UNASSIGN =
    ErrorAppCodes.PREFIX +
    'ui.view.report.category.editor.window.category.change.validate.message3';
  public static MSG_REPORT_CATEGORY_EDITOR_WINDOW_SUB_CATEGORY_VALIDATE_CARETAKER_HAS_NO_RIGHTS =
    ErrorAppCodes.PREFIX +
    'ui.view.report.category.editor.window.category.change.validate.message4';

  /*forgot password*/
  public static MSG_LOGIN_SCREEN_FORGOT_PASSWORD =
    ErrorAppCodes.PREFIX + 'login.screen.forgot.password';

  // API error codes
  public static EXCP_NOT_SUPPORTED = 'API-001';
  public static EXCP_NOT_EXIST = 'API-002';
  public static EXCP_UNAUTHORIZED = 'API-003';
  public static EXCP_INVALID_PARAM = 'API-004';
  public static EXCP_INVALID_LOGIN_INFO = 'API-005'; // Requested module is not allowed to login
  public static EXCP_BAD_REQUEST = 'API-006'; // login name and password required

  public static INVALID_REFRESH_TOKEN = 'Invalid refresh token';
}
