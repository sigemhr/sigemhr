// /* eslint-disable @typescript-eslint/no-explicit-any */
// /**
//  * @version 1.0.0
//  * @author Alexis
//  * @description HTTP client for all Web requests based on superagent: GET, POST, DELETE, PUT, PATCH
//  * @param {string} url: "/EndPoint"
//  * @param {object} data: Payload
//  */
// import request from "superagent";
// import { decryptString } from "./encript";
// import { pathApi } from "./configuratio";
//
//
// const baseUrl:string = pathApi;
// export interface Response { result?: any; statusCode?: number; message?: any }
// interface SuperagentResponse { result: any, statusCode: number; message?: any }
// class Request {
//
//   async get(url: string, data?: any): Promise<{ result?: any; statusCode?: number,message?:any }> {
//     let token:string = "";
//     const tkn:string | null = localStorage.getItem("auth_token");
//
//     if (tkn) {
//       token = decryptString(tkn);
//     }
//
//     try {
//       const response = await request
//         .get(baseUrl + url)
//         .query(data)
//         .set({
//           Accept: "application/json",
//           Authorization: "Bearer " + token,
//         });
//       return { result: response.body, statusCode: response.status };
//     } catch (error: any) {
//
//       const { status, response } = error;
//
//       // Manejo de error 404 específico
//       if (status === 404) {
//         return {
//           message: response.body.message || "No se encontraron datos.",
//           statusCode: 404,
//         };
//       }
//
//       // Otros errores 4xx
//       if (status >= 400 && status < 500) {
//         return {
//           message: response.body.message || "Ocurrió un error al procesar la solicitud.",
//           statusCode: status,
//         };
//       }
//
//       // Errores 5xx
//       if (status >= 500) {
//         return {
//           message: "Error del servidor, intenta más tarde.",
//           statusCode: status,
//         };
//       }
//
//       // Manejo de errores desconocidos
//       return {
//         message: error.message || "Error desconocido.",
//         statusCode: 503,
//       }
//     }
//   }
//
//   async post(url: string, data: object): Promise<{ result?: any; statusCode: number,message?:any }> {
//     let token = "";
//    const tkn = localStorage.getItem("auth_token");
//
//     if (tkn) {
//       token = decryptString(tkn);
//     }
//
//     try {
//       const response = await request
//         .post(baseUrl + url)
//         .set({
//           Accept: "application/json",
//           Authorization: "Bearer " + token,
//         })
//         .send(data);
//       return { result: response.body, statusCode: response.status };
//     } catch (error: any) {
//       return { message: error.message, statusCode: 503 };
//     }
//   }
//
//   async delete(url: string, data?: object): Promise<{ result?: any; statusCode: number,message?:any }> {
//     let token = "";
//     const tkn = sessionStorage.getItem("authToken");
//     if (tkn) {
//       token = decryptString(tkn);
//     }
//
//     try {
//       const response = await request
//         .delete(baseUrl + url)
//         .send(data)
//         .set({
//           Accept: "application/json",
//           Authorization: "Bearer " + token,
//         });
//       return { result: response.body, statusCode: response.status };
//     } catch (error: any) {
//       return { message: error.message, statusCode: 503 };
//     }
//   }
//
//   async put(url: string, data: object): Promise<{ result?: any; statusCode: number,message?:any }> {
//     let token = "";
//     const tkn = sessionStorage.getItem("authToken");
//     if (tkn) {
//       token = decryptString(tkn);
//     }
//
//     try {
//       const response = await request
//         .put(baseUrl + url)
//         .send(data)
//         .set({
//           Accept: "application/json",
//           Authorization: "Bearer " + token,
//         });
//       return { result: response.body, statusCode: response.status };
//     } catch (error: any) {
//       return { message: error.message, statusCode: 503 };
//     }
//   }
//
//   async patch(url: string, data: object): Promise<{ result?: any; statusCode: number,message?:any }> {
//     let token = "";
//     const tkn = sessionStorage.getItem("authToken");
//     if (tkn) {
//       token = decryptString(tkn);
//     }
//
//     try {
//       const response = await request
//         .patch(baseUrl + url)
//         .send(data)
//         .set({
//           Accept: "application/json",
//           Authorization: "Bearer " + token,
//         });
//       return { result: response.body, statusCode: response.status };
//     } catch (error: any) {
//       return { message: error.message, statusCode: 503 };
//     }
//   }
//   async postFiles(url: string, data: object): Promise<{ result?: any; statusCode: number, message?:any }> {
//     let token = "";
//     const tkn = sessionStorage.getItem("authToken");
//     if (tkn) {
//       token = decryptString(tkn);
//     }
//
//     try {
//       const response = await request
//         .post(baseUrl + url)
//         .set({
//           // Remove Accept header for multipart/form-data
//           Authorization: "Bearer " + token,
//         })
//         // Check if data is a FormData object
//         .send(data instanceof FormData ? data : data);
//
//       return { result: response.body, statusCode: response.status };
//     } catch (error: any) {
//       return { message: error.message, statusCode: 503 };
//     }
//   }
// }
//
// export default Request;

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @version 1.0.0
 * @author Alexis
 * @description HTTP client for all Web requests based on superagent: GET, POST, DELETE, PUT, PATCH
 * @param {string} url: "/EndPoint"
 * @param {object} data: Payload
 */
import request, { Response as SuperagentResponse } from "superagent";
import { decryptString } from "./encript";
import { pathApi } from "./configuratio";

const baseUrl: string = pathApi;

export interface Response {
    result?: any;
    statusCode?: number;
    message?: any;
}

interface ErrorResponse {
    status: number;
    response: {
        body: {
            message?: string;
        };
    };
    message?: string;
}

class Request {
    async get(
        url: string,
        data?: Record<string, any>
    ): Promise<Response> {
        let token: string = "";
        const tkn: string | null = localStorage.getItem("auth_token");

        if (tkn) {
            token = decryptString(tkn);
        }

        try {
            const response: SuperagentResponse = await request
                .get(baseUrl + url)
                .query(data?data:[])
                .set({
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                });
            return { result: response.body, statusCode: response.status };
        } catch (error) {
            const err = error as ErrorResponse;
            const { status, response } = err;

            // Manejo de error 404 específico
            if (status === 404) {
                return {
                    message: response?.body?.message || "No se encontraron datos.",
                    statusCode: 404,
                };
            }

            // Otros errores 4xx
            if (status >= 400 && status < 500) {
                return {
                    message:
                        response?.body?.message ||
                        "Ocurrió un error al procesar la solicitud.",
                    statusCode: status,
                };
            }

            // Errores 5xx
            if (status >= 500) {
                return {
                    message: "Error del servidor, intenta más tarde.",
                    statusCode: status,
                };
            }

            // Manejo de errores desconocidos
            return {
                message: err.message || "Error desconocido.",
                statusCode: 503,
            };
        }
    }

    async post(
        url: string,
        data: Record<string, any>
    ): Promise<Response> {
        let token: string = "";
        const tkn: string | null = localStorage.getItem("auth_token");

        if (tkn) {
            token = decryptString(tkn);
        }

        try {
            const response: SuperagentResponse = await request
                .post(baseUrl + url)
                .set({
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                })
                .send(data);
            return { result: response.body, statusCode: response.status };
        } catch (error) {
            const err = error as ErrorResponse;
            return { message: err.message, statusCode: 503 };
        }
    }

    async delete(
        url: string,
        data?: Record<string, any>
    ): Promise<Response> {
        let token: string = "";
        const tkn: string | null = sessionStorage.getItem("authToken");
        if (tkn) {
            token = decryptString(tkn);
        }

        try {
            const response: SuperagentResponse = await request
                .delete(baseUrl + url)
                .send(data)
                .set({
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                });
            return { result: response.body, statusCode: response.status };
        } catch (error) {
            const err = error as ErrorResponse;
            return { message: err.message, statusCode: 503 };
        }
    }

    async put(
        url: string,
        data: Record<string, any>
    ): Promise<Response> {
        let token: string = "";
        const tkn: string | null = sessionStorage.getItem("authToken");
        if (tkn) {
            token = decryptString(tkn);
        }

        try {
            const response: SuperagentResponse = await request
                .put(baseUrl + url)
                .send(data)
                .set({
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                });
            return { result: response.body, statusCode: response.status };
        } catch (error) {
            const err = error as ErrorResponse;
            return { message: err.message, statusCode: 503 };
        }
    }

    async patch(
        url: string,
        data: Record<string, any>
    ): Promise<Response> {
        let token: string = "";
        const tkn: string | null = sessionStorage.getItem("authToken");
        if (tkn) {
            token = decryptString(tkn);
        }

        try {
            const response: SuperagentResponse = await request
                .patch(baseUrl + url)
                .send(data)
                .set({
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                });
            return { result: response.body, statusCode: response.status };
        } catch (error) {
            const err = error as ErrorResponse;
            return { message: err.message, statusCode: 503 };
        }
    }

    async postFiles(
        url: string,
        data: FormData | Record<string, any>
    ): Promise<Response> {
        let token: string = "";
        const tkn: string | null = sessionStorage.getItem("authToken");
        if (tkn) {
            token = decryptString(tkn);
        }

        try {
            const response: SuperagentResponse = await request
                .post(baseUrl + url)
                .set({
                    // Remove Accept header for multipart/form-data
                    Authorization: "Bearer " + token,
                })
                // Check if data is a FormData object
                .send(data instanceof FormData ? data : data);

            return { result: response.body, statusCode: response.status };
        } catch (error) {
            const err = error as ErrorResponse;
            return { message: err.message, statusCode: 503 };
        }
    }
}

export default Request;