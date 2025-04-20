import { Hero } from '@/components/hero'
import styles from './styles.module.scss'
import { getItemBySlug } from '@/utils/actions/get-data'
import { PostProps } from '@/utils/actions/post.type'
import { Phone } from 'lucide-react'
import { Container } from '@/components/container'
import Image from 'next/image'
import { Metadata } from 'next'

export async function generateMetadata({ params: { slug }}: {
    params: { slug: string }
}): Promise<Metadata> {
    try {
        const { objects }: PostProps = await getItemBySlug(slug)
        .catch (() => {
            return {
                title: 'Oficina do seu Zé - Sua Oficina Especializada!',
                description: 'Oficina em São Paulo, especializada em serviços automotivos de qualidade.',
            }
        })

        return {
            title: `Oficina do seu Zé - ${objects[0].title}`,
            description: `${objects[0].metadata.description.text}`,
            keywords: ['oficina', 'ofiicina carros', 'carros', 'manutenção de carros'],
            openGraph: {
                title: `Oficina do seu Zé - ${objects[0].title}`,
                images: [objects[0].metadata.banner.url]
        },
            robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                    index: true,
                    follow: true,
                    noimageindex: true,
                }
            }
        }
    } catch (err) {
        return {
            title: 'Oficina do seu Zé - Sua Oficina Especializada!',
            description: 'Oficina em São Paulo, especializada em serviços automotivos de qualidade.',
        }
    }
}

export default async function Page({params: {slug}}: {
    params: {slug : string}
}) {

    const { objects }: PostProps = await getItemBySlug(slug)

    return (
        <>
    <Hero
      heading={objects[0].title}
      buttonTitle={objects[0].metadata.button.title}
      buttonUrl={objects[0].metadata.button.url}
      bannerUrl={objects[0].metadata.banner.url}
      icon={<Phone size={24} color="#fff" />}      
      />

        <Container>
        <section  className={styles.about}>
            <article className={styles.innerAbout}>
                <h1 className={styles.title}>
                    {objects[0].metadata.description.title}
                </h1>
                <p>
                    {objects[0].metadata.description.text}
                </p>
                {objects[0].metadata.description.button_active && (
                    <a 
                    target='_blank'
                    href={objects[0].metadata.description.button_url as string} 
                    className={styles.link}
                    >
                        {objects[0].metadata.description.button_title}
                    </a>
                )}
             
            </article>

            <div className={styles.bannerAbout}>
                <Image className={styles.imageAbout}
                alt={objects[0].title}
                quality={100}
                fill={true}
                priority={true}
                src={objects[0].metadata.description.banner.url}
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw"
                />

                
            </div>
        </section>
        </Container>

        </>
    )
}
