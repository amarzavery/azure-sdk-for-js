/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/listManagementImageMappers";
import * as Parameters from "../models/parameters";
import { ContentModeratorClientContext } from "../contentModeratorClientContext";

/** Class representing a ListManagementImage. */
export class ListManagementImage {
  private readonly client: ContentModeratorClientContext;

  /**
   * Create a ListManagementImage.
   * @param {ContentModeratorClientContext} client Reference to the service client.
   */
  constructor(client: ContentModeratorClientContext) {
    this.client = client;
  }

  /**
   * Add an image to the list with list Id equal to list Id passed.
   * @param listId List Id of the image list.
   * @param [options] The optional parameters
   * @returns Promise<Models.ListManagementImageAddImageResponse>
   */
  addImage(listId: string, options?: Models.ListManagementImageAddImageOptionalParams): Promise<Models.ListManagementImageAddImageResponse>;
  /**
   * @param listId List Id of the image list.
   * @param callback The callback
   */
  addImage(listId: string, callback: msRest.ServiceCallback<Models.Image>): void;
  /**
   * @param listId List Id of the image list.
   * @param options The optional parameters
   * @param callback The callback
   */
  addImage(listId: string, options: Models.ListManagementImageAddImageOptionalParams, callback: msRest.ServiceCallback<Models.Image>): void;
  addImage(listId: string, options?: Models.ListManagementImageAddImageOptionalParams, callback?: msRest.ServiceCallback<Models.Image>): Promise<Models.ListManagementImageAddImageResponse> {
    return this.client.sendOperationRequest(
      {
        listId,
        options
      },
      addImageOperationSpec,
      callback) as Promise<Models.ListManagementImageAddImageResponse>;
  }

  /**
   * Deletes all images from the list with list Id equal to list Id passed.
   * @param listId List Id of the image list.
   * @param [options] The optional parameters
   * @returns Promise<Models.ListManagementImageDeleteAllImagesResponse>
   */
  deleteAllImages(listId: string, options?: msRest.RequestOptionsBase): Promise<Models.ListManagementImageDeleteAllImagesResponse>;
  /**
   * @param listId List Id of the image list.
   * @param callback The callback
   */
  deleteAllImages(listId: string, callback: msRest.ServiceCallback<string>): void;
  /**
   * @param listId List Id of the image list.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteAllImages(listId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  deleteAllImages(listId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<string>): Promise<Models.ListManagementImageDeleteAllImagesResponse> {
    return this.client.sendOperationRequest(
      {
        listId,
        options
      },
      deleteAllImagesOperationSpec,
      callback) as Promise<Models.ListManagementImageDeleteAllImagesResponse>;
  }

  /**
   * Gets all image Ids from the list with list Id equal to list Id passed.
   * @param listId List Id of the image list.
   * @param [options] The optional parameters
   * @returns Promise<Models.ListManagementImageGetAllImageIdsResponse>
   */
  getAllImageIds(listId: string, options?: msRest.RequestOptionsBase): Promise<Models.ListManagementImageGetAllImageIdsResponse>;
  /**
   * @param listId List Id of the image list.
   * @param callback The callback
   */
  getAllImageIds(listId: string, callback: msRest.ServiceCallback<Models.ImageIds>): void;
  /**
   * @param listId List Id of the image list.
   * @param options The optional parameters
   * @param callback The callback
   */
  getAllImageIds(listId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ImageIds>): void;
  getAllImageIds(listId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ImageIds>): Promise<Models.ListManagementImageGetAllImageIdsResponse> {
    return this.client.sendOperationRequest(
      {
        listId,
        options
      },
      getAllImageIdsOperationSpec,
      callback) as Promise<Models.ListManagementImageGetAllImageIdsResponse>;
  }

  /**
   * Deletes an image from the list with list Id and image Id passed.
   * @param listId List Id of the image list.
   * @param imageId Id of the image.
   * @param [options] The optional parameters
   * @returns Promise<Models.ListManagementImageDeleteImageResponse>
   */
  deleteImage(listId: string, imageId: string, options?: msRest.RequestOptionsBase): Promise<Models.ListManagementImageDeleteImageResponse>;
  /**
   * @param listId List Id of the image list.
   * @param imageId Id of the image.
   * @param callback The callback
   */
  deleteImage(listId: string, imageId: string, callback: msRest.ServiceCallback<string>): void;
  /**
   * @param listId List Id of the image list.
   * @param imageId Id of the image.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteImage(listId: string, imageId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  deleteImage(listId: string, imageId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<string>): Promise<Models.ListManagementImageDeleteImageResponse> {
    return this.client.sendOperationRequest(
      {
        listId,
        imageId,
        options
      },
      deleteImageOperationSpec,
      callback) as Promise<Models.ListManagementImageDeleteImageResponse>;
  }

  /**
   * Add an image to the list with list Id equal to list Id passed.
   * @param listId List Id of the image list.
   * @param contentType The content type.
   * @param imageUrl The image url.
   * @param [options] The optional parameters
   * @returns Promise<Models.ListManagementImageAddImageUrlInputResponse>
   */
  addImageUrlInput(listId: string, contentType: string, imageUrl: Models.BodyModel, options?: Models.ListManagementImageAddImageUrlInputOptionalParams): Promise<Models.ListManagementImageAddImageUrlInputResponse>;
  /**
   * @param listId List Id of the image list.
   * @param contentType The content type.
   * @param imageUrl The image url.
   * @param callback The callback
   */
  addImageUrlInput(listId: string, contentType: string, imageUrl: Models.BodyModel, callback: msRest.ServiceCallback<Models.Image>): void;
  /**
   * @param listId List Id of the image list.
   * @param contentType The content type.
   * @param imageUrl The image url.
   * @param options The optional parameters
   * @param callback The callback
   */
  addImageUrlInput(listId: string, contentType: string, imageUrl: Models.BodyModel, options: Models.ListManagementImageAddImageUrlInputOptionalParams, callback: msRest.ServiceCallback<Models.Image>): void;
  addImageUrlInput(listId: string, contentType: string, imageUrl: Models.BodyModel, options?: Models.ListManagementImageAddImageUrlInputOptionalParams, callback?: msRest.ServiceCallback<Models.Image>): Promise<Models.ListManagementImageAddImageUrlInputResponse> {
    return this.client.sendOperationRequest(
      {
        listId,
        contentType,
        imageUrl,
        options
      },
      addImageUrlInputOperationSpec,
      callback) as Promise<Models.ListManagementImageAddImageUrlInputResponse>;
  }

  /**
   * Add an image to the list with list Id equal to list Id passed.
   * @param listId List Id of the image list.
   * @param imageStream The image file.
   * @param [options] The optional parameters
   * @returns Promise<Models.ListManagementImageAddImageFileInputResponse>
   */
  addImageFileInput(listId: string, imageStream: msRest.HttpRequestBody, options?: Models.ListManagementImageAddImageFileInputOptionalParams): Promise<Models.ListManagementImageAddImageFileInputResponse>;
  /**
   * @param listId List Id of the image list.
   * @param imageStream The image file.
   * @param callback The callback
   */
  addImageFileInput(listId: string, imageStream: msRest.HttpRequestBody, callback: msRest.ServiceCallback<Models.Image>): void;
  /**
   * @param listId List Id of the image list.
   * @param imageStream The image file.
   * @param options The optional parameters
   * @param callback The callback
   */
  addImageFileInput(listId: string, imageStream: msRest.HttpRequestBody, options: Models.ListManagementImageAddImageFileInputOptionalParams, callback: msRest.ServiceCallback<Models.Image>): void;
  addImageFileInput(listId: string, imageStream: msRest.HttpRequestBody, options?: Models.ListManagementImageAddImageFileInputOptionalParams, callback?: msRest.ServiceCallback<Models.Image>): Promise<Models.ListManagementImageAddImageFileInputResponse> {
    return this.client.sendOperationRequest(
      {
        listId,
        imageStream,
        options
      },
      addImageFileInputOperationSpec,
      callback) as Promise<Models.ListManagementImageAddImageFileInputResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const addImageOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "contentmoderator/lists/v1.0/imagelists/{listId}/images",
  urlParameters: [
    Parameters.endpoint,
    Parameters.listId1
  ],
  queryParameters: [
    Parameters.tag,
    Parameters.label
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Image
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const deleteAllImagesOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "contentmoderator/lists/v1.0/imagelists/{listId}/images",
  urlParameters: [
    Parameters.endpoint,
    Parameters.listId1
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const getAllImageIdsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "contentmoderator/lists/v1.0/imagelists/{listId}/images",
  urlParameters: [
    Parameters.endpoint,
    Parameters.listId1
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ImageIds
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const deleteImageOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "contentmoderator/lists/v1.0/imagelists/{listId}/images/{ImageId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.listId1,
    Parameters.imageId
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const addImageUrlInputOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "contentmoderator/lists/v1.0/imagelists/{listId}/images",
  urlParameters: [
    Parameters.endpoint,
    Parameters.listId1
  ],
  queryParameters: [
    Parameters.tag,
    Parameters.label
  ],
  headerParameters: [
    Parameters.contentType0
  ],
  requestBody: {
    parameterPath: "imageUrl",
    mapper: {
      ...Mappers.BodyModel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Image
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const addImageFileInputOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "contentmoderator/lists/v1.0/imagelists/{listId}/images",
  urlParameters: [
    Parameters.endpoint,
    Parameters.listId1
  ],
  queryParameters: [
    Parameters.tag,
    Parameters.label
  ],
  requestBody: {
    parameterPath: "imageStream",
    mapper: {
      required: true,
      serializedName: "ImageStream",
      type: {
        name: "Stream"
      }
    }
  },
  contentType: "image/gif",
  responses: {
    200: {
      bodyMapper: Mappers.Image
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};
