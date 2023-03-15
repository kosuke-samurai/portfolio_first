import { useInView } from 'react-intersection-observer';
import { FC, ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export const FadeIn: FC<Props> = ({ children }) => {
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-10px', // ref要素が現れてから50px過ぎたら
        triggerOnce: true, // 最初の一度だけ実行
    });

    return (
        <div
            ref={ref}
            className={`${inView ? "opacity-100" : "opacity-0 translate-y-[50%]"} duration-[1s]`}
        >
            {children}
        </div>
    )
}