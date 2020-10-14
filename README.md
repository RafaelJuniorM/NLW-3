# NLW-3
 Criação de um projeto durante uma semana, desde front ao back end. 

 * Dia 1:
      - Criação da page-landing do projeto, utilizando as seguinte propriedades:
          * Display flex, block, inline;
          * Animações (@keyframes);
          * Transitions;
          * Estado Hover;
          * Inclusão de fontes externas (google fonts);

  
      - Além disso, também houve a explicação das unindades de medidas rem e em. Na qual, tem sua utilização  primariamente em fontes, porém podendo ser utilizadas em outros lugares. Abaixo segue a explicação de ambas. 
      
      * em = ele irá refletir a medida na qual esta contida no pai. Por exemplo: 
          
          body {
            font-size: 0.6em
          }

          Neste caso, o nosso elemento pai é o HTML (root element), que por padrao do browser é de 16px (podendo variar em diferente navegadores). Descobrindo o elemento pai, sera realizado o seguinte calculo:
            
            16px * 0.6em = 9.6px 
          
      * rem = ele sempre tera referência da font-size do root element (HTML), após isso, realizara o mesmo  calculo descrito acima.  

* Dia 2 :
    clamp;
    