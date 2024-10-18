import type { ComponentProps } from "react";
interface TextLogoProps extends ComponentProps<"h1"> {
  text?: string;
}

export function TextLogo({
  className,
  text = "Boulotdey",
  ...restProps
}: TextLogoProps) {
  return (
    <h1
      {...restProps}
      className={
        "w-fit flex items-center justify-center flex-nowrap gap-2 text-xl font-bold text-background-color cursor-pointer " +
        (className || "")
      }
    >
      <img src="/logo.svg" alt="App logo" width={32} height={41} />
      <span className="text-xl">{text}</span>
    </h1>
  );
}

// class Animal {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class Bird extends Animal {
//   legs: string;

//   constructor(name: string, legs: string) {
//     super(name);

//     this.legs = legs;
//   }
// }

// const myAnimal = new Animal("Vanessa");
// const myBird = new Bird("Van", "2");

// const { name } = myAnimal;

// const { } = myBird;
