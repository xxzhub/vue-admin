<template>
    <component v-bind="linkProps(to)">
        <slot></slot>
    </component>
</template>

<script>
import {isExternal} from '@/utils/validate.js'
export default {
    props:{
        to:{
            type:String,
            required:true
        }
    },
    methods:{
        linkProps(url){
            if(isExternal(url)){
                return {
                    is:'a',
                    herf:url,
                    target:'_blank',
                    rel:'noopener'
                }
            }else {
                return {
                    is:'router_link',
                    to:url
                }
            }
        }
    }
}
</script>
