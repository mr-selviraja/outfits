import React from 'react';
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from '@material-tailwind/react';

const App = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <a href='#' className='flex items-center'>
          Pages
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <a href='#' className='flex items-center'>
          Account
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <a href='#' className='flex items-center'>
          Blocks
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <a href='#' className='flex items-center'>
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className='bg-white sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4'>
        <div className='flex items-center justify-between text-blue-gray-900'>
          <Typography
            as='a'
            href='#'
            className='mr-4 cursor-pointer py-1.5 font-medium'
          >
            Material Tailwind
          </Typography>
          <div className='flex items-center gap-4'>
            <div className='mr-4 hidden lg:block'>{navList}</div>
            <div className='flex items-center gap-x-1'>
              <Button
                variant='text'
                size='sm'
                className='hidden lg:inline-block'
              >
                <span>Log In</span>
              </Button>
              <Button
                variant='gradient'
                size='sm'
                className='hidden lg:inline-block'
              >
                <span>Sign in</span>
              </Button>
            </div>
            <IconButton
              variant='text'
              className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className='flex items-center gap-x-1'>
            <Button fullWidth variant='text' size='sm' className='bg-teal'>
              <span>Log In</span>
            </Button>
            <Button fullWidth variant='gradient' size='sm' className=''>
              <span>Sign in</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>

      <Button>Something</Button>

      <p className='bg-red-500'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
        facere quia ratione harum dolorem debitis corrupti tenetur accusantium
        molestiae expedita quis doloremque rem, alias pariatur aut temporibus
        ipsa. Assumenda dolores quam sunt dolor in impedit vero vitae mollitia
        eveniet unde voluptates rem, reiciendis hic nesciunt aliquam. Sed sunt
        eos hic rem minus temporibus ipsam aut at et? Ad necessitatibus ea
        aliquid provident nesciunt fugiat similique, amet blanditiis voluptates
        maxime minus quidem earum reprehenderit inventore. Impedit atque
        adipisci sint id possimus ab, nemo quisquam itaque, et repellendus quam
        odio! Perspiciatis accusantium molestias labore commodi iste suscipit
        ullam eveniet nostrum aperiam numquam esse ab sed, quod est earum
        distinctio exercitationem sunt mollitia obcaecati nihil minima quam
        placeat explicabo a. Odio dolorum et harum non quaerat similique vel,
        suscipit totam nihil officiis quo provident eius recusandae quidem cum
        consequatur. Adipisci quidem placeat omnis esse ab iure voluptas fugiat
        saepe dignissimos, provident dolore dolorem earum dolorum enim
        distinctio quod aperiam sint ex ratione. Autem architecto obcaecati quae
        sit cupiditate adipisci reiciendis. Vero, quaerat ex minima assumenda
        odit temporibus magnam quae reprehenderit optio? Voluptatibus mollitia
        illo ipsam voluptates consequuntur expedita nostrum deserunt repudiandae
        omnis, aut reprehenderit porro obcaecati laborum dolore. Quia facilis
        dolorem optio suscipit quo, voluptatem odit eum ipsum tempore sequi
        itaque provident vero, facere sapiente eaque nobis consequuntur,
        delectus quam atque explicabo cumque sint tempora harum dolorum! Error
        ad ullam, deleniti, consequuntur expedita aliquam perspiciatis delectus
        voluptatem quibusdam, vero tenetur repellat! Dignissimos delectus quas
        tempore autem, aliquid consectetur exercitationem repellendus quis,
        mollitia eius similique, fugiat nam libero impedit! Repudiandae
        voluptatem facilis repellendus? Sint voluptatum fugit adipisci obcaecati
        at quis. Qui perferendis odit quia quis fugit ab sapiente aspernatur
        enim maiores quas. Voluptatem rem temporibus nostrum officiis dolore
        assumenda, nam doloribus, magni necessitatibus animi maiores odit
        doloremque! Quibusdam cumque nihil ab dolore rerum minus ducimus.
        Adipisci dolorum, officiis qui tenetur natus consectetur deserunt eum
        fugiat maiores ea mollitia explicabo ipsum corrupti voluptatem. Est hic
        cupiditate ea ipsa numquam. Inventore obcaecati reiciendis non
        asperiores sequi rem, consequatur delectus et laborum rerum commodi
        odio, nulla beatae? Mollitia aliquam iste quis dolorum. Odio,
        cupiditate. Assumenda, enim quis dignissimos eos nulla blanditiis hic
        similique ipsam consequuntur eius quae cum commodi dolores
        necessitatibus non voluptas deleniti magni qui, quo corrupti officiis
        earum voluptatem laudantium adipisci. Vel, exercitationem fuga maxime
        eligendi rerum obcaecati laudantium in ipsa perferendis, pariatur
        necessitatibus veniam porro voluptas cumque tempore perspiciatis!
        Assumenda magnam beatae est, iste, amet molestiae dolor fugit placeat
        perspiciatis vero tempore aliquam? Quaerat iure, ratione minus, incidunt
        autem tempore molestiae consequatur culpa corporis enim vitae beatae
        reiciendis rerum perferendis ex facere sed quasi blanditiis deleniti
        suscipit consectetur laboriosam? Iure est cupiditate enim quam vero
        soluta eos harum labore voluptatem quidem dolore quo pariatur,
        reiciendis officia. Debitis magni rerum doloribus temporibus porro sit
        iure. Sunt earum, asperiores laborum quibusdam dolorem corrupti fuga
        consectetur ex nulla, perspiciatis delectus est impedit aliquid
        voluptatibus tempore beatae animi. Eos aperiam facilis excepturi at, non
        voluptas explicabo atque repudiandae blanditiis suscipit quas quae
        possimus. Atque repellendus quos libero in minima? Ut provident hic
        fugit, iure corrupti maiores asperiores nesciunt mollitia ex veritatis
        ad a harum recusandae odio praesentium aspernatur quasi! Repellat libero
        ad ut est molestiae nostrum consequuntur neque in? Consequuntur non eos
        natus accusantium error provident voluptatem, adipisci harum assumenda
        fuga, ipsum incidunt. Ipsa delectus incidunt enim, impedit expedita
        error esse blanditiis, ipsam iure similique fugiat? Excepturi aut
        corrupti itaque enim aperiam! Praesentium deleniti possimus magni ullam
        hic! Aperiam tempora recusandae suscipit quam illum voluptatibus, culpa
        ratione molestiae commodi laudantium, esse fugiat quos. Dolores sit amet
        accusamus quod deserunt vero pariatur quos inventore nulla ea veniam
        quidem cumque magnam doloremque quasi itaque, minus, id nostrum debitis
        qui voluptates expedita. Voluptas esse mollitia magni perferendis optio
        tempore vero ipsum ducimus sequi incidunt exercitationem molestias nemo
        rem laborum eius, veniam, impedit nobis repellendus corrupti velit, eum
        dignissimos expedita sunt fuga! A quaerat dignissimos, provident quam
        laboriosam, molestias vitae ut fugiat odit quia quo voluptas in neque
        tempora nisi numquam, ipsam vero! Tenetur molestiae inventore
        exercitationem vel nulla? Ducimus, pariatur? Eum itaque perferendis ut
        deserunt ab doloribus modi minima quaerat, dolores nostrum dicta odit
        asperiores totam, consequatur hic consequuntur enim qui unde sunt,
        accusantium architecto sit. Quis consequuntur ipsam delectus atque
        laboriosam error similique quisquam, tenetur sit deserunt quae debitis a
        itaque quaerat saepe repudiandae nemo excepturi. Delectus veniam impedit
        facilis quod repudiandae natus reiciendis officia, in eum fugiat tempore
        repellat quibusdam? Molestiae, consequuntur iusto veritatis accusantium
        maiores aliquid dolorum cupiditate culpa quaerat iste inventore dicta
        odit dolor, accusamus veniam saepe facere commodi tempora nemo non
        nobis! Similique quis recusandae ut esse voluptatum, porro sunt cum
        aspernatur et illum tenetur quos. Cumque quas voluptatibus nostrum
        corrupti pariatur dolorum at facere laboriosam quisquam dignissimos
        nihil voluptates accusamus, deserunt id quos sed optio animi quis
        excepturi dolor earum nesciunt ad. Voluptas quis facere exercitationem
        dolore odio accusantium deleniti recusandae culpa fugiat aut. Iusto hic
        ut ullam id fugiat. Voluptate temporibus debitis explicabo. Consequatur
        ut porro reprehenderit tenetur. Provident earum itaque totam quod fuga.
        Iure voluptates inventore velit deserunt repellendus dolor cum
        necessitatibus? Quam, in quia! Iste rerum fugiat ipsa voluptate earum,
        alias temporibus dolores nulla aliquam accusantium voluptatum, laborum
        aspernatur suscipit quam minus repudiandae error omnis harum fugit eos
        quis ut reprehenderit sapiente illum. Nobis, praesentium ad ducimus
        fugiat eius odit esse culpa itaque ut blanditiis voluptas, ab natus.
        Cupiditate officia saepe eaque id, dicta rem dolore. Deleniti ratione,
        sequi hic non quos tempora, nulla necessitatibus quidem expedita
        accusantium aperiam provident, quo nihil ullam esse vel! Voluptate minus
        perferendis adipisci cumque! Voluptas impedit non in perspiciatis velit.
        Expedita distinctio pariatur quam? Obcaecati cumque, cupiditate at
        laboriosam labore sunt architecto odio non sapiente facere amet porro
        assumenda dolor suscipit earum iste! Qui tenetur cupiditate dolorum
        deserunt ut laudantium aperiam voluptates ratione, dolores enim
        laboriosam sapiente assumenda similique officiis architecto eius in
        illum, blanditiis provident quos ad quasi voluptatem repellat. Fugiat
        molestias tempora quo quasi ex, optio quis facilis provident, dolore
        odit deserunt. Quos eius tempora voluptatibus aliquam praesentium
        officia magni odit eveniet molestiae provident!
      </p>
    </>
  );
};

export default App;
