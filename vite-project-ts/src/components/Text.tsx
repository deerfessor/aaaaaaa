
type SizeType = "small" | "middle" | "large";
interface TextProp {
    text: string
    size: SizeType
}
export const Text = (props:TextProp) => {
    const {text,size} = props
    const defaultClass = ""
    const classes = {
        sizes: {
            small: "rounded-[100px] font-sm",
            middle: "rounded-[14px] font-base",
            large: "rounded-[16px] font-base min-h-[56px]",
        },
    }
    return (
            <p className={defaultClass + " " + classes.sizes[size]}
            >{text}</p>
    )
}

