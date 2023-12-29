import React from "react";

const About = () => {
  return (
    <div className="w-full bg-gray-900">
      <div className="w-full bg-[url('/about.png')] bg-cover bg-no-repeat bg-center px-8 sm:px-16 md:px-28 lg:px-48 xl:px-80 py-5 md:py-10 lg:py-[60px] font-semibold flex flex-col gap-5 md:gap-7 lg:gap-10 xl:gap-14">
        <div className="flex flex-col gap-2">
          <div className="w-5 h-1 bg-red-400 rounded-sm md:w-6 lg:w-7 md:h-2 lg:h-3" />
          <h1 className="text-3xl font-semibold text-slate-100 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl max-w-7">
            About Us
          </h1>
        </div>
        <div>
          <p className="text-[14px] leading-10 tracking-wide md:text-base text-slate-100">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            veritatis amet est ullam cumque pariatur alias, quibusdam ipsum
            dolores doloremque repellendus delectus nulla ipsa et commodi
            assumenda, non itaque recusandae? Cumque nihil quo consectetur, eum
            error laboriosam est, animi alias quia nesciunt voluptate,
            aspernatur laudantium ipsam labore dolor culpa. Enim, inventore
            vitae sequi modi autem quo temporibus possimus molestiae ipsa.
            Facilis perferendis rem vero voluptatibus, illo illum aspernatur
            cumque deserunt deleniti assumenda quod sint non voluptas animi
            explicabo suscipit officia excepturi est reprehenderit harum
            maiores, optio expedita? Unde, voluptatum eum. Reiciendis tempora
            vel ea placeat tempore tenetur! Qui aperiam voluptas blanditiis
            repudiandae, nobis sequi accusamus ipsam id numquam pariatur quidem
            impedit eum magni velit facere possimus perspiciatis nam, error
            labore. Aliquid qui eaque voluptates deserunt tempore magnam
            corrupti sint? Deleniti, repellat obcaecati. Cupiditate maiores
            excepturi quibusdam, aliquid fugit asperiores eos reiciendis
            perspiciatis vitae corporis itaque ea explicabo atque ipsum unde!
            Expedita impedit, ex consequuntur aliquam iste qui officiis eos
            fuga, odio earum quos quod repellat? Eum sint consectetur voluptatum
            beatae provident laborum nostrum expedita voluptas soluta. Excepturi
            nisi dolore mollitia!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
