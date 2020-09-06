// 這是定義所有 http response 時會使用的 model 格式
export interface HttpResponseInterface {
  data: any,
  errorCode: string | number,
  errorMeddage: string
}