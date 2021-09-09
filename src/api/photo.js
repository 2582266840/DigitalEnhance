import request from '@/utils/request'
export function input(first){
    return request({
        url: '/input',
        method: 'get',
        params:{
        Long:first
        }
    })
}
export function output(){
    return request({
        url: '/output',
        method: 'get',
    })
}