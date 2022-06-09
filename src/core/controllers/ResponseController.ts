export type ResponseController = {
  statusCode: number;
  payload: any;
  success: boolean;
};

export function ok<T>(dto?: T): ResponseController {
  return {
    statusCode: 200,
    payload: dto,
    success: true,
  };
}

export function created(): ResponseController {
  return {
    statusCode: 201,
    payload: undefined,
    success: true,
  };
}

export function accepted(): ResponseController {
  return {
    statusCode: 202,
    payload: undefined,
    success: true,
  };
}

export function badRequest(error: Error): ResponseController {
  return {
    statusCode: 400,
    payload: { error: error.message },
    success: false,
  };
}

export function unprocessableEntity(error: Error): ResponseController {
  return {
    statusCode: 422,
    payload: { error: error.message },
    success: false,
  };
}

export function unauthorized(error: Error): ResponseController {
  return {
    statusCode: 401,
    payload: { error: error.message },
    success: false,
  };
}

export function forbidden(error: Error): ResponseController {
  return {
    statusCode: 403,
    payload: { error: error.message },
    success: false,
  };
}

export function notFound(error: Error): ResponseController {
  return {
    statusCode: 404,
    payload: { error: error.message },
    success: false,
  };
}

export function conflict(error: Error): ResponseController {
  return {
    statusCode: 409,
    payload: { error: error.message },
    success: false,
  };
}

export function tooMany(error: Error): ResponseController {
  return {
    statusCode: 429,
    payload: { error: error.message },
    success: false,
  };
}

export function fail(error: Error): ResponseController {
  console.log(error);

  return {
    statusCode: 500,
    payload: { error: error.message },
    success: false,
  };
}
