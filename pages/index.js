import {motion} from 'framer-motion'

export default function Home() {

    return (
        <div className={''}>

            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1,
                    transition: {
                        duration: 2,
                        delay: 0.5
                    }
                }}
            >
                <h1>NextJS Boilerplate</h1>
            </motion.div>
        </div>

    )
}
