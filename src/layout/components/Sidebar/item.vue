<script>
export default {
    name: 'MenuItem',
    functional:true,
    props:{
        icon:{
            type:String,
            default:''
        },
        title:{
            type:String,
            default:''
        }
    },
    render(h,context){
        const vnodes = []
        const {icon,title} = context.props

        if(icon){
            vnodes.push(<svg-icon icon-class={icon}/>)
        }
        if(title){
            vnodes.push(<span slot="title">{(title)}</span>)
        }
        return vnodes
    }
}
</script>