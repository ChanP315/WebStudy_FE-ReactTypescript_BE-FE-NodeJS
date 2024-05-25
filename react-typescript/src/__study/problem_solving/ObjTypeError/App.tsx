import React from 'react';
import './App.css'
import {render, myImg} from'./modeule'
import Box from './Box';

const userchoice:render = {
  rock: {
    name : "rock",
    img : "data:image/jpeg;base64,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"
  },
  scissors: {
    name : "scissors",
    img : "data:image/png;base64,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"
  },
  paper: {
    name : "paper",
    img : "data:image/jpeg;base64,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"
  }
}
const computerchoice:{[key:string]:myImg} = {
  rock: {
    name : "rock",
    img : "data:image/jpeg;base64,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"
  },
  scissors: {
    name : "scissors",
    img : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///9VYGXb2N3t7e1OWl9QXGFJVlvf3OFMWF3a19zy8vJQW2FGU1lRXGLi3uNFUlhYY2hgam/Z29yHjpF4gISprrDT0db19vZjbHGWnJ9tdnpocXbGxcp/h4qXnaC1ubuvsLXk5eagpajU1tfDwsfHysu0uLqNlJe5ub7e4OGZnKJzfH/Lzc6mp6ywtLWMkJbosKZeAAAXhklEQVR4nO1dCXfyOs5+Q+LEhB3CFkhpWEopS///vxtiSY6zOIUkQO+c6jvfOTP3dkIUW7L06JH879+f/Mmf/Mmf/Mmf/Mmf/F9IuD+Op69+iRyZXoK1WceDQstiba+OJ9UsXpvxvlvDg0aWYRj2uoYn1Str+/pe/K36g8KeEUlvU/1RtcoG36v6Io6YAVLHfqhP3D68lVV5EU0LFbSCOl6sNgnovVhVJzjm+CTDvtTyavXIxabX4qtqT5oODCm9YT1vV4MMe/KtOotqj9q0Yw2N/m85Fad95a3sah9+34oesoAnWqOa3rCqjMAI+zPxVpUOsqlwpNb7O2x7u+Ker0lW+Dbv70LTfpVnwSblTQe/mn2o6y0ryAEUZCNnYlf2D+tIMeY5jcNCrCYb1Pae5WUAJ/Ss2XCO0X+0xlUeJpbw3Wma6HL4vrYXLSt7OL/spdNwzlZFbzoVTtmaNJqhiyeQva3vXUvJFt6Dn7uNhrOEbVr+aZvoAcxvNBqm6aIpsrC+ty0hIWxRFjjXt2o0hTdtl4+ZRUDDvp1IQzOE/c/8Gt/3fvFBw8EkUrDhBJ1oPT9KP27UEoYMGron3B81JCyl5Q2N8NMBDb+EKyzvHIQDtbagoemOQcXersZXvk92EK3xr24DNPyMNO6U3lYQHPUnDdDQdIMWBEq1YAclxISfZ0dYwcjVsErhZNgR506DNDRDiN7YqzAND4ywPyENGxPxRp2yn/wgHI3flRq6OzSDKmdseVmDlVifUsFGA0LTsqGWOOVZEGtouvgjL8E0NikjjKQrXEXp9GJn02FBGpruETfK8xOpKRqhr6xgoyvexz6VfCZo+HV9YpM0NA+GMM4XYBro5tgkoaEwTbusd19FVtcSGoZyEckUn41pYNR4DZIbqoaB0LBsVic0tJIami4dus/FNIboZb4TCqKGpbGaXA1N0xf7lFVKPO+WPoSMi0ajTg1jO2w4ioaYgT4V06AM/OSkNKxmh5vYl6oaupjAtJ+HaaxyjTDS0K/kS8Xeh/OwaaoqzsEU2bMwjQPLNcLoyy/Ety7rE0QuBjFNwhBNEzCNqlDlzYIQyqyZVrDRBBSi7Kd2DRmXNruJRRzCIj4J00Dcgi8zS9hYGpXiUoBp+pBsJtbQ/UBTfEYitQOIyD53Mwo6W+GBBqUjLE/mh0lDjDGNzuMxjSRukdJQIKbl80MAE8GBpQzRDGfih1vHGnXJlyRukdLwW7iK8saihN6J8yJaxA2EifajMY03xH+3OUvYaPiVDnyq/0IckV5Eghd7Zc+i2+SUkzLFMmGVDourCGOzJllvakpMo/PQ4nAGt0huUgHTVMFL/+2ZEkmkNDRDjBUfiWlI3CJPQTLDKvgmGKLn5G1T0z1hsPg4TGOcg1uoGsIOrpLIueIXOH7B9CK6WAKvgDkXCxZLRHqTu0kB1K90YonkxDrnL6Lp4iYyHoNpTPEk9PMVbHSBJ1ItdoQ0YgGOrJnW0AxBwQdhGrm4hSIT2KTVjARoKxDWZN1pjGmUrxzohXALjRE2HBGQGLxiWLW3lIgpZ5+uQcXSiKVeMLq39hoFsfDUqerKIaFnGNY7aQ1N8/io4jCWuhbZlAmX8F18gtL5vZRjR13EzD41MTCuHdOgcqXOCDE1rMZTEAJIs73V7tPHYBorTJkyuIVcwjMsYQ2oph9n+pFkFlFiGnUmUnJn6BTEkNRgNfwYMk7oY+aYol9/cViPW6AAjFiTEx/BsTTRmaI7hFORz+v4NSGIW7Ac3AK/M8TcnVktPxe2jDg6zTVFNJraisNY6rXP+j0Kbqa6IwWB+JevScWsKe7R8dVTHDY78DQvNycUSwjhIqstlgLEwpbBRdYUF3ViGnTE6o0QnZtdW2oaIl+VTDHjbdwNeLZaCO/rQtyiIXOKWg+ojzZ4S/yqOd4Gg8gaEqkT8svWWgWXSAatNd4H5yaPpxxvg8TryrRrSpnycQshxCKsN2dbdBLeLettzAEU3aoGwkc4m/oFJyF8S6tmqNZE297qDn5pitXStR9wi6uC50fxlvCM6uu9Db4cr1Ic3uAzNLhF5GXwQ9YXXkgBBdixoTdFCA0q8DRy+RYJBSdIWnoI1g77n39rvY1Z2ccRrUybMjUwBq6loysjU8BH44Qms4inioR3YunqjZAIwg9C9w5gitZSa4rEyyqHaRzASXItbuFgz0DvYVSXLRz8VAbKyfgxXpyVMcUpUXR1OxSZiAZ/IEcC4sGCNOPQx2Uo8XDELQxtyjSZ4Sd4JOUMgmJZCcoc/C4eKiVOqxWmTHrcAvHnxzLN3SQLOcfbIGWqde9rhBipjHQpU/eLP+ioTwqVErTexoSw615MYwphYYb0FK8gJhSP79cFjy5hzKy3GfYhhL2vOIwZn9YIH5NQ5As4BCvQeRsXCUzte4rDyLfgetzCf0hCkSvo1Plahy8SvMhvjzswrgf+Va4RoqMtzQ26SzDjb39q8UX/XkzD/wG3cCiheFJPEm6pvg5fJHjx5kQKyzta3MLZ4lH/gIRC80Z2IvjImiJSpm4MHyll0uIWk+c3JMHZqwc1CF7s3OIXpriCnvaoJ/r8EztZsNU4ppplTHFwO6BJfAudEVJC8TC6QK4M8eDfag5+d3Mz4X38U6kXE4r2k9tYVj95m8uNmMZPuIUDBMsXNJLD1tGDGshe/OmInhLtSF/Lxlrw83tYgLLPv3VpRji45dsjNNjX4RZO8LrWVTNdpc2YIqRDhdg7bva2zgi760dhh7cIwu9Ml2YQvFgA3R6Ib6GJ1rBM+LIBQIgvzgjUyJgi7LCO1oSms2LcgrBD62VDnEADPaiBpqgNtvY/pEwyoXjZ9B90hPxNc/C7p8Li8PYHvgUlFFUYslUlTDmKjCmio2jnxVv4P7a+dUZ4fnpvTo6gL6R9lj34EV7MS6T8/GYtqSAlFC8eVAHAUwxqpE2R4MWsM3z7gW/xgoQiX3wBPMWgRnoRdxpM4yfcgrDDl7XGS4HWoeuJpfM2uFZW0h+a1OKnMULCDp+bUOQLzXX51B38fh7hHVO+gc4I8ah/dkKRL5cf0owh0GMSmAbiFlyDW8iE4pcMicMsQgdqELyoYBo0RERnhM1FhQrPA2S6YEmbSu/TOSYQ9L5ou7nNWmIJX5hQ5EuY6p/L4Iv4CWjPFfeJPJCMUF6w4sQ0oIaLveZt4EqOaSCTxgi32KnyykE4GcHoTHobnSlGEaYED/MPCkooWr9sKqwnDv7WUZNmILwYYRFToBa1tLjFQ8kI5QWdB99rvA12ZF6DzFExbtH9xpPw98yhRBkmS7gZU6S9iW5Sx7eQ2OEjelQqCpoa06QZBC9iwpDfMRmTEV4/+S5HEF/UgRrUHJ2IDtLyFDJCecFAxNPgizjwTUh6vgUZ4VPICOUF65zxDkwt4okWMTvfAhXE2upd5eOnyqk4zZiugbamwy0kdvgrEop8wWilv8w/+BewBWe6hOJ5ZITygvgiYS8JFcnV5M23EPJEMkJ5QRqDFWRN0b0U4xaS3fwb5twWiDbNcIeYEWmitd+YUOTLFiman+mDH066jqbUS9jhI9jNdQsiT6k0gyr7mpTJwUamx7Cb65ZjstwiDn5Kn3Sl3leQEcqLy2AsnwpqIMNGa4QvISOUlw2lGdjG7xCiqKOoy4TiN11OUCiYRkimRjhP01KTCj6B3Vy3oFuhecafZIT50drkdWSE0kLFXQFqEPDSEb7HySwjHfV304pfKiaNcO/GfjIyQmfynj4uul9PGVZUu1Bp6b1LNZYoZXK+bN721DPf6b6YjFBeEF801u80l7OLU+KVBmbHWZ7/CwlFvniYDGI4GqVMMAdBgvlO491n+K9fR0YoL0hjQBEAFThVHBnkNM59Tn/yHHZz3XJQ7qgh3MKzmSXKFdf1G8hriIze77j85G5ZyRt95MZsroN9FNd0t36sn2H/SuzwFhnTJuzHvjM6Dx3ny1K28OsoT9WFoKckbuEsZzF0WudkhOfLLnc4rnOWC4jx6K9P63WCIwFTw3Gdb7JAZv0aRklJAapNcsiM0zziDu3YwcENfgkrqJxgVJMADx3MI67/eLGbyoFv/72QLRIspyWGzDiTBSrYfjNdM6ZMlZ5X/UJx+4ic5q0gs3YugoxUH//vRW2IfqtG6CAZ75opHlyJFGN9/JedidPwdHkbBZ4XjObj7SHn+4+TLSdC5BZlm1hB84DbNqcc4x5W63ngHb1gv14Nn7fK5mo0s21utVgkLctu971xKnLGmNRO8C0oEzY6C6We4WIqmb4gbjj2+m3bYqxz/T9m8bZxXD8Fitt5zG4ZKWGcDy7KN6bWehU8dAKlBnxUKzbYA69WZNzxgHOW/hXL7r89GOqYXpjdSauHwnt7eXCPEkiUkO48UccfKfsUOzLj3pNw3+OaX7F6x0cu5Kpva34Yft1+g3VEbrQ6ZIYgUe5RFTRWkToykX/hvmU3iSKdtvcoIsrQT+jHLMvinF8NRVnHfpTohVkEn+iU9vwfrqV1UlSkKYnRFlwZSljOrvvfvho9bym/wh7US7q25Y9clTMWwdf5/fPz/fx9vP53+a/awZTmcvqKl2kq3D08R/qKt5lSG9i/adCOf4Ub/vyy2u12q8v8aFixYfJ+/Vt16skFZMz/2ja7DknX2X75UkdrJklPihGOJOlLgqmtQDVFHPgWyLyK8cX6ZE5dKeZmfGRyeWsfbxIO5N3Oxn7ppGDd63/ffreSKVGeEdrgCKkZ/KLsU5wyRW6sxUcnU/0C4o/czZtBLqhdLy5woJ9m/GuSRa2FkpORrebt6pCZCX53ygORrNk6qDVw1cjbwdBN6wd/Fq7JDfE6E+ch/brlTbSzDBvd5UJuosSkJyfA5iH5QJoCo2ihUKaswWmapx7qGOAy8vqqqTh25Lr9tJNVQJPGl7SiibpHseskfiLypu2VulB0UTPfZ/ZnUscVHap1raKL8TJbJOAW9DNJHd+xGq9+Chz4m7hLGHeF6k/llKmPpH7kaJR/MsQUpS4WsYcskGNTQeOdxvL9fJXPpNtxtpFT5Spu0YWFTSW50I5gzdV9GkXrzN6p/8g1T6vxej3+2IWKkq55JFZAHQpSluApq7f88vk19o7OfLsTvCvOx1kuOsZIXVe4eLmTHocNe7J3UNfmzWjN4kDAdYdjv00/01usN8rupc9eQ5iKA75k0/ZVv0/PshIhhvEd79/r4iZvt4Ph95kBEsCBY4n41D0oSringKs/cw0KvW381/UNL/ZTEw+6Sy8T9F8tf9/QkdXgKM8WsMHBWhuNO7m6zGwKYx9lZhnCP6renIgsEYnpOmsrN7mw+hqiDIzRy9lN0OWcjGxiBVdW5jOCjhSxE6266jjRKXbySjgpiA/ma16qxsNWHl8Nl9DKc3pQ7Od5i0jojVAhskMmP6sdyL8Rnyins/EuWaXmtBDYabRs2x/tR96gLSOZPCIC3JOSP/AXGvSSlogvvycFW20jeBuP30aDnqTfeklTrAgnw8FDaIuDHsxo9UYn3B3myu+hjjm3ak3wUMh9OCyifcgoiAmWYbXnMhUM1xxjGQs3Nl49Ue1+C3R4yKUkPJ7xfWJNDpR3ZPgyjriKx2jng0hAZ0icieLNKUS150kbG7eI3Qf/i6kn9m6luwNwtDu4GcoQ2CCTnK1Yfq9W0yhYwmt4CjlVkklMd2WxbA4Y+ti+DlEBNsNXYoWLs5AdYQkxQ2CLnBUZGjhxJ11lgn2oeTxcnsHHiUXEC3nZLM++0Eww2nNFeMsqUKkgUsTiWPe7qOsxzCNXOvAG+gBZ7BG2SJ4T4IA0IPgRfTMs4kWYTbu8hvNWvPWIfKZzXRsc+a04G2yzK5iHBWcaT4SiOKBJE465cHwZ4J4O4gUrMBphCQD0dDCA1sYQwJy1lfzD+RYvUHR/gbgqRj0wsFSjn750SuxsUYAsf6UVVDjptqcBrJH2r6diXiJT0grgsxV6c7wTS7luGJxbwVfxlJ3trq1iM/hBIImDwxD5hUV+C4winpuHmW+vqN4whTte4kwYZjAUTSKGJrn2Rlnx0tf4wA0yaIZfYIYFfw6XNsSD82Aqwg+3FYGvkXAG1ROLvkpf2abDQt/wo4yF5YmbVvES89z4Uor4kziEbYJFFdMQQKM2bVPcdoVfBf4EbDcUDamls0RxIKN37Bo/v674IoxANoJnfpj1BSAVbVNXZJPFgRj4mpkbn4il7wjfww4C/y8Og+Jr6k7xDckN6rT78Y7QPWxl0hBuoS6MUkywXTcOD0rXyMUVOvjGgEXYhQsCd0BTs/PkhlX/Jzk3tE39n9dkCncCusoXKUvIyWrYKtRQBGGElDqf1k1OAFqk5aEPu66QqTgVD+6ZNWio7tLb1xCropBW3HBUCW/aogRDzLm7Yw2r7VLV09xvh6LZ8IZwYyVYtb5585rADbccNBS7unRnO54WjuJLCz8W+FIMaiCMvYEZC3gNG4KGYuWtG3zpAha92s3j6omP52EhKCISUgzy8Ky4JTuFKAaAQhe+UmFFQj0PD9VO/ETUBoF30RtDGIv9+ADQ5ICIWdmrhniCFS2yBnBNojSHlYDSUZsaeTuwoEWJykciLr39PumEIcKYvqIjH9I0exMveYVrLCG3CZTcouBhADwy7NOegEu/xUDQc4SKIRoFN7kIW+j4SiZSbDuFksiAMT/UujlIhDDJRzPkN/0M4KYrFXvh2gB4p+aHIfi/8hlwAsVAmEZn1ZDU0NkCjunGa93x3IWq6BRQUF2PELJyAahBxKPKvdzw1nDmO3u89CB3A2F9k/DEyS15BQnmFwfMn3Asau4Gn+IAvLUSs1W6RAvRxIkSaBpWnooh3tiFWFsXs8nbagpT6Dl9Q6AXL1Uy8o5xxNz74JZgInWlIiLCS9DvGuOlmc+7s5J4KXwMLU6aFpwFFqppft4NnAesRhNeCl6pWm0GUf0l4omIeRO7CyXcY+sIDcRwvsF53BpqwOXGchHxomijnaSwuWvk1Nn4hxu4h6JaqRvBS+IYUt2CG/MNfjn3NLKw0EeEZwQe7wCIcAboBoPTC36xjn1c4dk/jak0fGQqR0XVMjBV12g2kqw9WXbfH83no4Uha0828dgcdIe3x8NoDUfKg8fUT8S4NfC90d7v83TtCR3pTWFTkWyTs5GcIKZFslarFdP2GKPKE7ZU3vXTQIW216TiSuEDdjotpU5pE7g6RMpJ5V4NrJfPCEA7q1zEWKyBvDcQm0Kte34aiWCSiOFuFrlET8YkVQwoOVULpP8oporHqzlLz87oyPi+Kf89/KM7h3XhZBuD6vSuOWYZFm2nFwwlZIXnRmUF4zsX6TILx9mmuBiW9S3pF84SuhDu5t7jJUp9SUVww7XBlQ3DLO5JKopb6xAG5GfzgOgWTne59vsWEF3YwDvHZDdZv7m7f8IEciBTePyuudsv+hFx5/r//eNYYfONcFfXM2+JWF+WHxNlnO5k+Xk+r8+fy0lXpbBRS8z9uMIJ/WdLIbtdVTpsdpfxZbs5xOq5IVKpa2uPpuuAWf9TrZ1liG2OQ8y9UmN0qOWUz5PMvQytbUdEu3pu5Y7kQBwhe6S/XdKJGydLXvGI/LKIfZnPLoUFJKJGrRNqsYgdxcNnzXgSZzmS36FsKHwhjrcdbHQM2gsR3S2/1iaaULae88Gbanm0YbcBuT3GyzMHaMS70eLBzkwr6brDtWwAt72a54RM41YEix3Py5jILpjsMyv+AlXixI1BZDbGB/ud6SqyGfsKk/0B7d9rLplXzLIND5oR3tffPlf6FKpOslK6ETrM7g1G68tqtfoYz4+8HR/ClvGQ1uGhr4wQMKJmq6ihJMGws2fVOyW3fTWWgV9J9q2w3uhRjcMrVtgVxPmlDttw3ySHLU9Y239k59PFyAaltD+NcV22b86tLIcV96e9eHRD7S7IUZLZzKvVMqYrn2cYtMxqD+bPGC9srvaLdsS/hgZL3m7P9tv6DSP8GPV78a/YbX5cb543ScrdrMZvo1HUJLvaPKx9dWqePtb7IIh+Zjf8D83J+pM/+ZM/+ZM/+ZM/+ZN75X8bAajOC2CgCAAAAABJRU5ErkJggg=="
  },
  paper: {
    name : "paper",
    img : "data:image/jpeg;base64,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"
  }
}


const App:React.FC = () => {
  //* ReactTest Code
  // const [myModule, setmyModule] = useState<module>(obj);

  // const changeAddress = (address1:Address):void => {
  //   setmyModule({...myModule, address:address1});
  // }

  const [userSelect, setUserSelect] = React.useState<myImg>();
  const [computerSelect, setComputerSelect] = React.useState<myImg>();

  const playing = (name:string) => {
    console.log(name);

    setUserSelect(userchoice[name as keyof render]); //setComputerSelect(computerchoice[name]);
    let computerChoice = randomChoice()
  }

  const randomChoice = () =>
  {

  };
  
  return (
    <React.Fragment>
    <div className="main">
        {
          //<Box info={myModule} changeAddress={changeAddress}></Box>
        }
        <Box title="my" imgOBJ={userSelect}></Box>
        <Box title="computer" imgOBJ={computerSelect}></Box>
      </div>
      <div className='main'>
        <button onClick={() => playing("scissors")}>가위</button>
        <button onClick={() => playing("rock")}>바위</button>
        <button onClick={() => playing("paper")}>보</button>
      </div>
    </React.Fragment>
  );
}

export default App;