import { InfoCard } from '@/components/info-card'
import { title } from '@/components/primitives'

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center m-auto mb-5 gap-4 max-w-[800px]">
      <div className="">
        <h1 className={title({ color: 'blue' })}>Nosotros</h1>
        <p className="py-0 my-5 text-base text-default-500">
          WatchStore nació con la visión de redefinir la experiencia de comprar
          un reloj, proporcionando no solo un accesorio, sino una pieza de arte
          que pueda ser apreciada y valorada por generaciones. Desde nuestros
          humildes comienzos, hemos crecido para convertirnos en un nombre
          confiable en la industria de la relojería, conocido por nuestra
          atención al detalle y nuestro compromiso con la satisfacción del
          cliente.
        </p>
      </div>
      <InfoCard title="Visión">
        <p className="py-0 my-0 text-base text-default-500">
          En WatchStore, aspiramos a ser la tienda líder en la venta de relojes
          de alta calidad, reconocida por nuestra dedicación a la excelencia y
          nuestro compromiso con la satisfacción del cliente. Queremos ser la
          primera opción para aquellos que buscan estilo, precisión y
          durabilidad en sus relojes, convirtiéndonos en un referente en el
          mercado de la relojería a nivel mundial. Nos esforzamos por innovar
          continuamente, ofreciendo productos que combinan tecnología avanzada
          con diseños atemporales, para acompañar a nuestros clientes en cada
          momento importante de sus vidas.
        </p>
      </InfoCard>
      <InfoCard title="Misión">
        <p className="py-0 my-0 text-base text-default-500">
          Nuestra misión en Watch-Store es proporcionar a nuestros clientes una
          experiencia de compra excepcional, ofreciendo una amplia gama de
          relojes que se adapten a todos los estilos y necesidades. Nos
          comprometemos a ofrecer productos de la más alta calidad, con un
          enfoque en la precisión, la durabilidad y el diseño elegante.
          Valoramos la confianza de nuestros clientes y trabajamos
          incansablemente para mantenerla, brindando un servicio al cliente
          impecable y garantizando la satisfacción total con cada compra. En
          Watch-Store, creemos que un reloj no es solo un accesorio, sino una
          expresión de personalidad y un símbolo de momentos importantes, y
          estamos dedicados a ayudar a nuestros clientes a encontrar el reloj
          perfecto para cada ocasión.
        </p>
      </InfoCard>
    </section>
  )
}
