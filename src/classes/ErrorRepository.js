export default class ErrorRepository {
  /**
   * В качестве ошибок использованы ошибки клиента и сервера с сайта:
   * https://ru.wikipedia.org/wiki/Список_кодов_состояния_HTTP
   */
  constructor() {
    this.errors = new Map();
    this.errors.set(400, 'Bad Request');
    this.errors.set(401, 'Unauthorized');
    this.errors.set(402, 'Payment Required');
    this.errors.set(403, 'Forbidden');
    this.errors.set(404, 'Not Found');
    this.errors.set(405, 'Method Not Allowed');
    this.errors.set(406, 'Not Acceptable');
    this.errors.set(407, 'Proxy Authentication Required');
    this.errors.set(408, 'Request Timeout');
    this.errors.set(409, 'Conflict');
    this.errors.set(410, 'Gone');
    this.errors.set(411, 'Length Required');
    this.errors.set(412, 'Precondition Failed');
    this.errors.set(413, 'Payload Too Large');
    this.errors.set(414, 'URI Too Long');
    this.errors.set(415, 'Unsupported Media Type');
    this.errors.set(416, 'Range Not Satisfiable');
    this.errors.set(417, 'Expectation Failed');
    this.errors.set(418, 'I’m a teapot');
    this.errors.set(419, 'Authentication Timeout (not in RFC 2616)');
    this.errors.set(421, 'Misdirected Request');
    this.errors.set(422, 'Unprocessable Entity');
    this.errors.set(423, 'Locked');
    this.errors.set(424, 'Failed Dependency');
    this.errors.set(425, 'Too Early');
    this.errors.set(426, 'Upgrade Required');
    this.errors.set(428, 'Precondition Required');
    this.errors.set(429, 'Too Many Requests');
    this.errors.set(431, 'Request Header Fields Too Large');
    this.errors.set(449, 'Retry With');
    this.errors.set(451, 'Unavailable For Legal Reasons');
    this.errors.set(499, 'Client Closed Request');
    this.errors.set(500, 'Internal Server Error');
    this.errors.set(501, 'Not Implemented');
    this.errors.set(502, 'Bad Gateway');
    this.errors.set(503, 'Service Unavailable');
    this.errors.set(504, 'Gateway Timeout');
    this.errors.set(505, 'HTTP Version Not Supported');
    this.errors.set(506, 'Variant Also Negotiates');
    this.errors.set(507, 'Insufficient Storage');
    this.errors.set(508, 'Loop Detected');
    this.errors.set(509, 'Bandwidth Limit Exceeded');
    this.errors.set(510, 'Not Extended');
    this.errors.set(511, 'Network Authentication Required');
    this.errors.set(520, 'Unknown Error');
    this.errors.set(521, 'Web Server Is Down');
    this.errors.set(522, 'Connection Timed Out');
    this.errors.set(523, 'Origin Is Unreachable');
    this.errors.set(524, 'A Timeout Occurred');
    this.errors.set(525, 'SSL Handshake Failed');
    this.errors.set(526, 'Invalid SSL Certificate');
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }

    return 'Unknown error';
  }
}
