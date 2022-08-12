const elementos = [
    {id: "elemento_1" , class: "elemento e_7" , nome: "Hidrogênio" , simbolo: "H" , numeroAtomico: "1" , massaAtomica: "1.008" , configEletronica: "1s<sup>1</sup>" } , 
    {id: "vazio" , class:"elemento_vazio", qtd: 16},
    {id: "elemento_2" , class: "elemento e_9" , nome: "Hélio" , simbolo: "He" , numeroAtomico: "2" , massaAtomica: "4.003" , configEletronica: "1s<sup>2</sup>" } , 
    {id: "elemento_3" , class: "elemento e_1" , nome: "Lítio" , simbolo: "Li" , numeroAtomico: "3" , massaAtomica: "6.941" , configEletronica: "1s<sup>2</sup> 2s<sup>1</sup>" } , 
    {id: "elemento_4" , class: "elemento e_2" , nome: "Berílio" , simbolo: "Be" , numeroAtomico: "4" , massaAtomica: "9.012" , configEletronica: "1s<sup>2</sup> 2s<sup>2</sup>" } , 
    {id: "vazio" , class:"elemento_vazio", qtd: 10},
    {id: "elemento_5" , class: "elemento e_10" , nome: "Boro" , simbolo: "B" , numeroAtomico: "5" , massaAtomica: "10.811" , configEletronica: "1s<sup>2</sup> 2s<sup>2</sup> 2p¹" } , 
    {id: "elemento_6" , class: "elemento e_7" , nome: "Carbono" , simbolo: "C" , numeroAtomico: "6" , massaAtomica: "12.011" , configEletronica: "1s<sup>2</sup> 2s<sup>2</sup> 2p²" } , 
    {id: "elemento_7" , class: "elemento e_7" , nome: "Nitrogênio" , simbolo: "N" , numeroAtomico: "7" , massaAtomica: "14.007" , configEletronica: "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup>" } , 
    {id: "elemento_8" , class: "elemento e_7" , nome: "Oxigênio" , simbolo: "O" , numeroAtomico: "8" , massaAtomica: "15.999" , configEletronica: "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup>" } , 
    {id: "elemento_9" , class: "elemento e_8" , nome: "Flúor" , simbolo: "F" , numeroAtomico: "9" , massaAtomica: "18.998" , configEletronica: "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup>" } , 
    {id: "elemento_10" , class: "elemento e_9" , nome: "Neônio" , simbolo: "Ne" , numeroAtomico: "10" , massaAtomica: "20.18" , configEletronica: "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup>" } , 
    {id: "elemento_11" , class: "elemento e_1" , nome: "Sódio" , simbolo: "Na" , numeroAtomico: "11" , massaAtomica: "22.99" , configEletronica: "[Ne] 3s<sup>1</sup>" } , 
    {id: "elemento_12" , class: "elemento e_2" , nome: "Magnésio" , simbolo: "Mg" , numeroAtomico: "12" , massaAtomica: "24.305" , configEletronica: "[Ne] 3s<sup>2</sup>" } , 
    {id: "vazio" , class:"elemento_vazio", qtd: 10},
    {id: "elemento_13" , class: "elemento e_4" , nome: "Alumínio" , simbolo: "Al" , numeroAtomico: "13" , massaAtomica: "26.982" , configEletronica: "[Ne] 3s<sup>2</sup> 3p¹" } , 
    {id: "elemento_14" , class: "elemento e_10" , nome: "Silício" , simbolo: "Si" , numeroAtomico: "14" , massaAtomica: "28.086" , configEletronica: "[Ne] 3s<sup>2</sup> 3p²" } , 
    {id: "elemento_15" , class: "elemento e_7" , nome: "Fósforo" , simbolo: "P" , numeroAtomico: "15" , massaAtomica: "30.974" , configEletronica: "[Ne] 3s<sup>2</sup> 3p<sup>3</sup>" } , 
    {id: "elemento_16" , class: "elemento e_7" , nome: "Enxofre" , simbolo: "S" , numeroAtomico: "16" , massaAtomica: "32.065" , configEletronica: "[Ne] 3s<sup>2</sup> 3p<sup>4</sup>" } , 
    {id: "elemento_17" , class: "elemento e_8" , nome: "Cloro" , simbolo: "Cl" , numeroAtomico: "17" , massaAtomica: "35.453" , configEletronica: "[Ne] 3s<sup>2</sup> 3p<sup>5</sup>" } , 
    {id: "elemento_18" , class: "elemento e_9" , nome: "Argônio" , simbolo: "Ar" , numeroAtomico: "18" , massaAtomica: "39.948" , configEletronica: "[Ne] 3s<sup>2</sup> 3p<sup>6</sup>" } , 
    {id: "elemento_19" , class: "elemento e_1" , nome: "Potássio" , simbolo: "K" , numeroAtomico: "19" , massaAtomica: "39.098" , configEletronica: "[Ar] 4s<sup>1</sup>" } , 
    {id: "elemento_20" , class: "elemento e_2" , nome: "Cálcio" , simbolo: "Ca" , numeroAtomico: "20" , massaAtomica: "40.078" , configEletronica: "[Ar] 4s<sup>2</sup>" } , 
    {id: "elemento_21" , class: "elemento e_3" , nome: "Escândio" , simbolo: "Sc" , numeroAtomico: "21" , massaAtomica: "44.956" , configEletronica: "[Ar] 3d¹ 4s<sup>2</sup>" } , 
    {id: "elemento_22" , class: "elemento e_3" , nome: "Titânio" , simbolo: "Ti" , numeroAtomico: "22" , massaAtomica: "47.867" , configEletronica: "[Ar] 3d² 4s<sup>2</sup>" } , 
    {id: "elemento_23" , class: "elemento e_3" , nome: "Vanádio" , simbolo: "V" , numeroAtomico: "23" , massaAtomica: "50.942" , configEletronica: "[Ar] 3d<sup>3</sup> 4s<sup>2</sup>" } , 
    {id: "elemento_24" , class: "elemento e_3" , nome: "Cromo" , simbolo: "Cr" , numeroAtomico: "24" , massaAtomica: "51.996" , configEletronica: "[Ar] 3d<sup>5</sup> 4s<sup>1</sup>" } , 
    {id: "elemento_25" , class: "elemento e_3" , nome: "Manganês" , simbolo: "Mn" , numeroAtomico: "25" , massaAtomica: "54.938" , configEletronica: "[Ar] 3d<sup>5</sup> 4s<sup>2</sup>" } , 
    {id: "elemento_26" , class: "elemento e_3" , nome: "Ferro" , simbolo: "Fe" , numeroAtomico: "26" , massaAtomica: "55.845" , configEletronica: "[Ar] 3d<sup>6</sup> 4s<sup>2</sup>" } , 
    {id: "elemento_27" , class: "elemento e_3" , nome: "Cobalto" , simbolo: "Co" , numeroAtomico: "27" , massaAtomica: "58.933" , configEletronica: "[Ar] 3d<sup>7</sup> 4s<sup>2</sup>" } , 
    {id: "elemento_28" , class: "elemento e_3" , nome: "Níquel" , simbolo: "Ni" , numeroAtomico: "28" , massaAtomica: "58.693" , configEletronica: "[Ar] 3d<sup>8</sup> 4s<sup>2</sup>" } , 
    {id: "elemento_29" , class: "elemento e_3" , nome: "Cobre" , simbolo: "Cu" , numeroAtomico: "29" , massaAtomica: "63.546" , configEletronica: "[Ar] 3d<sup>10</sup> 4s<sup>1</sup>" } , 
    {id: "elemento_30" , class: "elemento e_3" , nome: "Zinco" , simbolo: "Zn" , numeroAtomico: "30" , massaAtomica: "65.409" , configEletronica: "[Ar] 3d<sup>10</sup> 4s<sup>2</sup>" } , 
    {id: "elemento_31" , class: "elemento e_4" , nome: "Gálio" , simbolo: "Ga" , numeroAtomico: "31" , massaAtomica: "69.723" , configEletronica: "[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p¹" } , 
    {id: "elemento_32" , class: "elemento e_10" , nome: "Germânio" , simbolo: "Ge" , numeroAtomico: "32" , massaAtomica: "72.64" , configEletronica: "[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p²" } , 
    {id: "elemento_33" , class: "elemento e_10" , nome: "Arsênio" , simbolo: "As" , numeroAtomico: "33" , massaAtomica: "74.922" , configEletronica: "[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>3</sup>" } , 
    {id: "elemento_34" , class: "elemento e_7" , nome: "Selênio" , simbolo: "Se" , numeroAtomico: "34" , massaAtomica: "78.96" , configEletronica: "[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>4</sup>" } , 
    {id: "elemento_35" , class: "elemento e_8" , nome: "Bromo" , simbolo: "Br" , numeroAtomico: "35" , massaAtomica: "79.904" , configEletronica: "[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>5</sup>" } , 
    {id: "elemento_36" , class: "elemento e_9" , nome: "Criptônio" , simbolo: "Kr" , numeroAtomico: "36" , massaAtomica: "83.798" , configEletronica: "[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>6</sup>" } , 
    {id: "elemento_37" , class: "elemento e_1" , nome: "Rubídio" , simbolo: "Rb" , numeroAtomico: "37" , massaAtomica: "85.468" , configEletronica: "[Kr] 5s<sup>1</sup>" } , 
    {id: "elemento_38" , class: "elemento e_2" , nome: "Estrôncio" , simbolo: "Sr" , numeroAtomico: "38" , massaAtomica: "87.62" , configEletronica: "[Kr] 5s<sup>2</sup>" } , 
    {id: "elemento_39" , class: "elemento e_3" , nome: "Ítrio" , simbolo: "Y" , numeroAtomico: "39" , massaAtomica: "88.906" , configEletronica: "[Kr] 4d¹ 5s<sup>2</sup>" } , 
    {id: "elemento_40" , class: "elemento e_3" , nome: "Zircônio" , simbolo: "Zr" , numeroAtomico: "40" , massaAtomica: "91.224" , configEletronica: "[Kr] 4d² 5s<sup>2</sup>" } , 
    {id: "elemento_41" , class: "elemento e_3" , nome: "Nióbio" , simbolo: "Nb" , numeroAtomico: "41" , massaAtomica: "92.906 38" , configEletronica: "[Kr] 4d<sup>4</sup> 5s<sup>1</sup>" } , 
    {id: "elemento_42" , class: "elemento e_3" , nome: "Molibdênio" , simbolo: "Mo" , numeroAtomico: "42" , massaAtomica: "95.94" , configEletronica: "[Kr] 4d<sup>5</sup> 5s<sup>1</sup>" } , 
    {id: "elemento_43" , class: "elemento e_3" , nome: "Tecnécio" , simbolo: "Tc" , numeroAtomico: "43" , massaAtomica: "[98]" , configEletronica: "[Kr] 4d<sup>5</sup> 5s<sup>2</sup>" } , 
    {id: "elemento_44" , class: "elemento e_3" , nome: "Rutênio" , simbolo: "Ru" , numeroAtomico: "44" , massaAtomica: "101.07" , configEletronica: "[Kr] 4d<sup>7</sup> 5s<sup>1</sup>" } , 
    {id: "elemento_45" , class: "elemento e_3" , nome: "Ródio" , simbolo: "Rh" , numeroAtomico: "45" , massaAtomica: "102.905 50" , configEletronica: "[Kr] 4d<sup>8</sup> 5s<sup>1</sup>" } , 
    {id: "elemento_46" , class: "elemento e_3" , nome: "Paládio" , simbolo: "Pd" , numeroAtomico: "46" , massaAtomica: "106.42" , configEletronica: "[Kr] 4d<sup>10</sup> 5s<sup>0</sup>" } , 
    {id: "elemento_47" , class: "elemento e_3" , nome: "Prata" , simbolo: "Ag" , numeroAtomico: "47" , massaAtomica: "107.868" , configEletronica: "[Kr] 4d<sup>10</sup> 5s<sup>1</sup>" } , 
    {id: "elemento_48" , class: "elemento e_3" , nome: "Cádmio" , simbolo: "Cd" , numeroAtomico: "48" , massaAtomica: "112.411" , configEletronica: "[Kr] 4d<sup>10</sup> 5s<sup>2</sup>" } , 
    {id: "elemento_49" , class: "elemento e_4" , nome: "Índio" , simbolo: "In" , numeroAtomico: "49" , massaAtomica: "114.818" , configEletronica: "[Kr] 4d<sup>10</sup> 5s<sup>2</sup> 5p¹" } , 
    {id: "elemento_50" , class: "elemento e_4" , nome: "Estanho" , simbolo: "Sn" , numeroAtomico: "50" , massaAtomica: "118.71" , configEletronica: "[Kr] 4d<sup>10</sup> 5s<sup>2</sup> 5p²" } , 
    {id: "elemento_51" , class: "elemento e_10" , nome: "Antimônio" , simbolo: "Sb" , numeroAtomico: "51" , massaAtomica: "121.76" , configEletronica: "[Kr] 4d<sup>10</sup> 5s<sup>2</sup> 5p<sup>3</sup>" } , 
    {id: "elemento_52" , class: "elemento e_10" , nome: "Telúrio" , simbolo: "Te" , numeroAtomico: "52" , massaAtomica: "127.6" , configEletronica: "[Kr] 4d<sup>10</sup> 5s<sup>2</sup> 5p<sup>4</sup>" } , 
    {id: "elemento_53" , class: "elemento e_8" , nome: "Iodo" , simbolo: "I" , numeroAtomico: "53" , massaAtomica: "126.904 47" , configEletronica: "[Kr] 4d<sup>10</sup> 5s<sup>2</sup> 5p<sup>5</sup>" } , 
    {id: "elemento_54" , class: "elemento e_9" , nome: "Xenônio" , simbolo: "Xe" , numeroAtomico: "54" , massaAtomica: "131.293" , configEletronica: "[Kr] 4d<sup>10</sup> 5s<sup>2</sup> 5p<sup>6</sup>" } , 
    {id: "elemento_55" , class: "elemento e_1" , nome: "Césio" , simbolo: "Cs" , numeroAtomico: "55" , massaAtomica: "132.905" , configEletronica: "[Xe] 6s<sup>1</sup>" } , 
    {id: "elemento_56" , class: "elemento e_2" , nome: "Bário" , simbolo: "Ba" , numeroAtomico: "56" , massaAtomica: "137.327" , configEletronica: "[Xe] 6s<sup>2</sup>" } , 
    
    {id: "elemento_57-71" , class: "elemento e_lat" , nome: "" , simbolo: "" , numeroAtomico: "57-71" , massaAtomica: "" , configEletronica: "" } , 
    {id: "elemento_72" , class: "elemento e_3" , nome: "Háfnio" , simbolo: "Hf" , numeroAtomico: "72" , massaAtomica: "178.49" , configEletronica: "[Xe] 4f<sup>14</sup> 5d² 6s<sup>2</sup>" } , 
    {id: "elemento_73" , class: "elemento e_3" , nome: "Tântalo" , simbolo: "Ta" , numeroAtomico: "73" , massaAtomica: "180.948" , configEletronica: "[Xe] 4f<sup>14</sup> 5d<sup>3</sup> 6s<sup>2</sup>" } , 
    {id: "elemento_74" , class: "elemento e_3" , nome: "Tungstênio" , simbolo: "W" , numeroAtomico: "74" , massaAtomica: "183.84" , configEletronica: "[Xe] 4f<sup>14</sup> 5d<sup>4</sup> 6s<sup>2</sup>" } , 
    {id: "elemento_75" , class: "elemento e_3" , nome: "Rênio" , simbolo: "Re" , numeroAtomico: "75" , massaAtomica: "186.207" , configEletronica: "[Xe] 4f<sup>14</sup> 5d<sup>5</sup> 6s<sup>2</sup>" } , 
    {id: "elemento_76" , class: "elemento e_3" , nome: "Ósmio" , simbolo: "Os" , numeroAtomico: "76" , massaAtomica: "190.23" , configEletronica: "[Xe] 4f<sup>14</sup> 5d<sup>6</sup> 6s<sup>2</sup>" } , 
    {id: "elemento_77" , class: "elemento e_3" , nome: "Irídio" , simbolo: "Ir" , numeroAtomico: "77" , massaAtomica: "192.217" , configEletronica: "[Xe] 4f<sup>14</sup> 5d<sup>7</sup> 6s<sup>2</sup>" } , 
    {id: "elemento_78" , class: "elemento e_3" , nome: "Platina" , simbolo: "Pt" , numeroAtomico: "78" , massaAtomica: "195.084" , configEletronica: "[Xe] 4f<sup>14</sup> 5d<sup>9</sup> 6s<sup>1</sup>" } , 
    {id: "elemento_79" , class: "elemento e_3" , nome: "Ouro" , simbolo: "Au" , numeroAtomico: "79" , massaAtomica: "196.967" , configEletronica: "[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>1</sup>" } , 
    {id: "elemento_80" , class: "elemento e_3" , nome: "Mercúrio" , simbolo: "Hg" , numeroAtomico: "80" , massaAtomica: "200.59" , configEletronica: "[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>2</sup>" } , 
    {id: "elemento_81" , class: "elemento e_4" , nome: "Tálio" , simbolo: "Tl" , numeroAtomico: "81" , massaAtomica: "204.383" , configEletronica: "[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>2</sup> 6p¹" } , 
    {id: "elemento_82" , class: "elemento e_4" , nome: "Chumbo" , simbolo: "Pb" , numeroAtomico: "82" , massaAtomica: "207.2" , configEletronica: "[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>2</sup> 6p²" } , 
    {id: "elemento_83" , class: "elemento e_4" , nome: "Bismuto" , simbolo: "Bi" , numeroAtomico: "83" , massaAtomica: "208.98" , configEletronica: "[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>2</sup> 6p<sup>3</sup>" } , 
    {id: "elemento_84" , class: "elemento e_10" , nome: "Polônio" , simbolo: "Po" , numeroAtomico: "84" , massaAtomica: "[210]" , configEletronica: "[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>2</sup> 6p<sup>4</sup>" } , 
    {id: "elemento_85" , class: "elemento e_8" , nome: "Ástato" , simbolo: "At" , numeroAtomico: "85" , massaAtomica: "[210]" , configEletronica: "[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>2</sup> 6p<sup>5</sup>" } , 
    {id: "elemento_86" , class: "elemento e_9" , nome: "Radônio" , simbolo: "Rn" , numeroAtomico: "86" , massaAtomica: "[220]" , configEletronica: "[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>2</sup> 6p<sup>6</sup>" } , 
    {id: "elemento_87" , class: "elemento e_1" , nome: "Frâncio" , simbolo: "Fr" , numeroAtomico: "87" , massaAtomica: "[223]" , configEletronica: "[Rn] 7s<sup>1</sup>" } , 
    {id: "elemento_88" , class: "elemento e_2" , nome: "Rádio" , simbolo: "Ra" , numeroAtomico: "88" , massaAtomica: "[226]" , configEletronica: "[Rn] 7s<sup>2</sup>" } , 
    {id: "elemento_89-103" , class: "elemento e_act" , nome: "" , simbolo: "" , numeroAtomico: "89-103" , massaAtomica: "" , configEletronica: "" } , 
    
    {id: "elemento_104" , class: "elemento e_3" , nome: "Rutherfórdio" , simbolo: "Rf" , numeroAtomico: "104" , massaAtomica: "261" , configEletronica: "[Rn] 5f<sup>14</sup> 6d<sup>2</sup> 7s<sup>2</sup>" } , 
    {id: "elemento_105" , class: "elemento e_3" , nome: "Dúbnio" , simbolo: "Db" , numeroAtomico: "105" , massaAtomica: "[262]" , configEletronica: "[Rn] 5f<sup>14</sup> 6d<sup>3</sup> 7s<sup>2</sup>" } , 
    {id: "elemento_106" , class: "elemento e_3" , nome: "Seabórgio" , simbolo: "Sg" , numeroAtomico: "106" , massaAtomica: "[266]" , configEletronica: "[Rn] 5f<sup>14</sup> 6d<sup>4</sup> 7s<sup>2</sup>" } , 
    {id: "elemento_107" , class: "elemento e_3" , nome: "Bóhrio" , simbolo: "Bh" , numeroAtomico: "107" , massaAtomica: "[264]" , configEletronica: "[Rn] 5f<sup>14</sup> 6d<sup>5</sup> 7s<sup>2</sup>" } , 
    {id: "elemento_108" , class: "elemento e_3" , nome: "Hássio" , simbolo: "Hs" , numeroAtomico: "108" , massaAtomica: "[277]" , configEletronica: "[Rn] 5f<sup>14</sup> 6d<sup>6</sup> 7s<sup>2</sup>" } , 
    {id: "elemento_109" , class: "elemento e_3" , nome: "Meitnério" , simbolo: "Mt" , numeroAtomico: "109" , massaAtomica: "[268]" , configEletronica: "[Rn] 5f<sup>14</sup> 6d<sup>7</sup> 7s<sup>2</sup>" } , 
    {id: "elemento_110" , class: "elemento e_3" , nome: "Darmstádio" , simbolo: "Ds" , numeroAtomico: "110" , massaAtomica: "[271]" , configEletronica: "[Rn] 5f<sup>14</sup> 6d<sup>9</sup> 7s<sup>1</sup>" } , 
    {id: "elemento_111" , class: "elemento e_3" , nome: "Roentgênio" , simbolo: "Rg" , numeroAtomico: "111" , massaAtomica: "[272]" , configEletronica: "[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>1</sup>" } , 
    {id: "elemento_112" , class: "elemento e_3" , nome: "Copernício" , simbolo: "Cn" , numeroAtomico: "112" , massaAtomica: "[277]" , configEletronica: "[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup>" } , 
    {id: "elemento_113" , class: "elemento e_4" , nome: "Nihônio" , simbolo: "Nh" , numeroAtomico: "113" , massaAtomica: "[286]" , configEletronica: "[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup>7p<sup>1</sup>" } , 
    {id: "elemento_114" , class: "elemento e_4" , nome: "Fleróvio" , simbolo: "Fl" , numeroAtomico: "114" , massaAtomica: "[289]" , configEletronica: "[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup>7p<sup>2</sup>" } , 
    {id: "elemento_115" , class: "elemento e_4" , nome: "Moscóvio" , simbolo: "Mc" , numeroAtomico: "115" , massaAtomica: "[288]" , configEletronica: "[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup>7p<sup>3</sup>" } , 
    {id: "elemento_116" , class: "elemento e_4" , nome: "Livermório" , simbolo: "Lv" , numeroAtomico: "116" , massaAtomica: "[293]" , configEletronica: "[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup>7p<sup>4</sup>" } , 
    {id: "elemento_117" , class: "elemento e_8" , nome: "Tenessino" , simbolo: "Ts" , numeroAtomico: "117" , massaAtomica: "[294]" , configEletronica: "[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup>7p<sup>5</sup>" } , 
    {id: "elemento_118" , class: "elemento e_9" , nome: "Oganessônio" , simbolo: "Og" , numeroAtomico: "118" , massaAtomica: "[294]" , configEletronica: "[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup>7p<sup>6</sup>" } , 
    {id: "vazio" , class:"elemento_vazio", qtd: 18},
    {id: "vazio" , class:"elemento_vazio", qtd: 3},
    {id: "elemento_57" , class: "elemento e_5" , nome: "Lantânio" , simbolo: "La" , numeroAtomico: "57" , massaAtomica: "138.905" , configEletronica: "[Xe] 5d<sup>1</sup> 6s<sup>2</sup>" } , 
    {id: "elemento_58" , class: "elemento e_5" , nome: "Cério" , simbolo: "Ce" , numeroAtomico: "58" , massaAtomica: "140.116" , configEletronica: "[Xe] 4f² 6s<sup>2</sup>" } , 
    {id: "elemento_59" , class: "elemento e_5" , nome: "Praseodímio" , simbolo: "Pr" , numeroAtomico: "59" , massaAtomica: "140.908" , configEletronica: "[Xe] 4f<sup>3</sup> 6s<sup>2</sup>" } , 
    {id: "elemento_60" , class: "elemento e_5" , nome: "Neodímio" , simbolo: "Nd" , numeroAtomico: "60" , massaAtomica: "144.242" , configEletronica: "[Xe] 4f<sup>4</sup> 6s<sup>2</sup>" } , 
    {id: "elemento_61" , class: "elemento e_5" , nome: "Promécio" , simbolo: "Pm" , numeroAtomico: "61" , massaAtomica: "[145]" , configEletronica: "[Xe] 4f<sup>5</sup> 6s<sup>2</sup>" } , 
    {id: "elemento_62" , class: "elemento e_5" , nome: "Samário" , simbolo: "Sm" , numeroAtomico: "62" , massaAtomica: "150.36" , configEletronica: "[Xe] 4f<sup>6</sup> 6s<sup>2</sup>" } , 
    {id: "elemento_63" , class: "elemento e_5" , nome: "Európio" , simbolo: "Eu" , numeroAtomico: "63" , massaAtomica: "151.964" , configEletronica: "[Xe] 4f<sup>7</sup> 6s<sup>2</sup>" } , 
    {id: "elemento_64" , class: "elemento e_5" , nome: "Gadolínio" , simbolo: "Gd" , numeroAtomico: "64" , massaAtomica: "157.25" , configEletronica: "[Xe] 4f<sup>7</sup> 5d<sup>1</sup> 6s<sup>2</sup>" } , 
    {id: "elemento_65" , class: "elemento e_5" , nome: "Térbio" , simbolo: "Tb" , numeroAtomico: "65" , massaAtomica: "158.925" , configEletronica: "[Xe] 4f<sup>9</sup> 6s<sup>2</sup>" } , 
    {id: "elemento_66" , class: "elemento e_5" , nome: "Disprósio" , simbolo: "Dy" , numeroAtomico: "66" , massaAtomica: "162.5" , configEletronica: "[Xe] 4f<sup>10</sup> 6s<sup>2</sup>" } , 
    {id: "elemento_67" , class: "elemento e_5" , nome: "Hólmio" , simbolo: "Ho" , numeroAtomico: "67" , massaAtomica: "164.930 32" , configEletronica: "[Xe] 4f<sup>11</sup> 6s<sup>2</sup>" } , 
    {id: "elemento_68" , class: "elemento e_5" , nome: "Érbio" , simbolo: "Er" , numeroAtomico: "68" , massaAtomica: "167.259" , configEletronica: "[Xe] 4f<sup>12</sup> 6s<sup>2</sup>" } , 
    {id: "elemento_69" , class: "elemento e_5" , nome: "Túlio" , simbolo: "Tm" , numeroAtomico: "69" , massaAtomica: "168.934" , configEletronica: "[Xe] 4f<sup>13</sup> 6s<sup>2</sup>" } , 
    {id: "elemento_70" , class: "elemento e_5" , nome: "Itérbio" , simbolo: "Yb" , numeroAtomico: "70" , massaAtomica: "173.04" , configEletronica: "[Xe] 4f<sup>14</sup> 6s<sup>2</sup>" } , 
    {id: "elemento_71" , class: "elemento e_5" , nome: "Lutécio" , simbolo: "Lu" , numeroAtomico: "71" , massaAtomica: "174.967" , configEletronica: "[Xe] 4f<sup>14</sup> 5d¹ 6s<sup>2</sup>" } , 
    {id: "vazio" , class:"elemento_vazio", qtd: 3},
    {id: "elemento_89" , class: "elemento e_6" , nome: "Actínio" , simbolo: "Ac" , numeroAtomico: "89" , massaAtomica: "[227]" , configEletronica: "[Rn] 6d¹ 7s<sup>2</sup>" } , 
    {id: "elemento_90" , class: "elemento e_6" , nome: "Tório" , simbolo: "Th" , numeroAtomico: "90" , massaAtomica: "232.03806" , configEletronica: "[Rn] 6d² 7s<sup>2</sup>" } , 
    {id: "elemento_91" , class: "elemento e_6" , nome: "Protactínio" , simbolo: "Pa" , numeroAtomico: "91" , massaAtomica: "231.03588" , configEletronica: "[Rn] 5f<sup>2</sup> 6d<sup>1</sup> 7s<sup>2</sup>" } , 
    {id: "elemento_92" , class: "elemento e_6" , nome: "Urânio" , simbolo: "U" , numeroAtomico: "92" , massaAtomica: "238.02891" , configEletronica: "[Rn] 5f<sup>3</sup> 6d<sup>1</sup> 7s<sup>2</sup>" } , 
    {id: "elemento_93" , class: "elemento e_6" , nome: "Netúnio" , simbolo: "Np" , numeroAtomico: "93" , massaAtomica: "[237]" , configEletronica: "[Rn] 5f<sup>4</sup> 6d<sup>1</sup> 7s<sup>2</sup>" } , 
    {id: "elemento_94" , class: "elemento e_6" , nome: "Plutônio" , simbolo: "Pu" , numeroAtomico: "94" , massaAtomica: "[244]" , configEletronica: "[Rn] 5f<sup>6</sup> 7s<sup>2</sup>" } , 
    {id: "elemento_95" , class: "elemento e_6" , nome: "Amerício" , simbolo: "Am" , numeroAtomico: "95" , massaAtomica: "[243]" , configEletronica: "[Rn] 5f<sup>7</sup> 7s<sup>2</sup>" } , 
    {id: "elemento_96" , class: "elemento e_6" , nome: "Cúrio" , simbolo: "Cm" , numeroAtomico: "96" , massaAtomica: "[247]" , configEletronica: "[Rn] 5f<sup>7</sup> 6d<sup>1</sup> 7s<sup>2</sup>" } , 
    {id: "elemento_97" , class: "elemento e_6" , nome: "Berquélio" , simbolo: "Bk" , numeroAtomico: "97" , massaAtomica: "[247]" , configEletronica: "[Rn] 5f<sup>9</sup> 7s<sup>2</sup>" } , 
    {id: "elemento_98" , class: "elemento e_6" , nome: "Califórnio" , simbolo: "Cf" , numeroAtomico: "98" , massaAtomica: "[251]" , configEletronica: "[Rn] 5f<sup>10</sup> 7s<sup>2</sup>" } , 
    {id: "elemento_99" , class: "elemento e_6" , nome: "Einsténio" , simbolo: "Es" , numeroAtomico: "99" , massaAtomica: "[252]" , configEletronica: "[Rn] 5f<sup>11</sup> 7s<sup>2</sup>" } , 
    {id: "elemento_100" , class: "elemento e_6" , nome: "Férmio" , simbolo: "Fm" , numeroAtomico: "100" , massaAtomica: "[257]" , configEletronica: "[Rn] 5f<sup>12</sup> 7s<sup>2</sup>" } , 
    {id: "elemento_101" , class: "elemento e_6" , nome: "Mendelévio" , simbolo: "Md" , numeroAtomico: "101" , massaAtomica: "[258]" , configEletronica: "[Rn] 5f<sup>13</sup> 7s<sup>2</sup>" } , 
    {id: "elemento_102" , class: "elemento e_6" , nome: "Nobélio" , simbolo: "No" , numeroAtomico: "102" , massaAtomica: "[259]" , configEletronica: "[Rn] 5f<sup>14</sup> 7s<sup>2</sup>" } , 
    {id: "elemento_103" , class: "elemento e_6" , nome: "Laurêncio" , simbolo: "Lr" , numeroAtomico: "103" , massaAtomica: "[262]" , configEletronica: "[Rn] 5f<sup>14</sup> 7s<sup>2</sup> 7p<sup>1</sup>" } 
    ];

let legendas = [
    {id: "legenda e_1" , descricao: "Metais alcalinos" },
    {id: "legenda e_2" , descricao: "Metais alcalino-terrosos" },
    {id: "legenda e_3" , descricao: "Metais de transição" },
    {id: "legenda e_4" , descricao: "Outros metais" },
    {id: "legenda e_5" , descricao: "Lantanídeos" },
    {id: "legenda e_6" , descricao: "Actinídios" },
    {id: "legenda e_7" , descricao: "Não metais" },
    {id: "legenda e_8" , descricao: "Halogênios" },
    {id: "legenda e_9" , descricao: "Gases nobres" },
    {id: "legenda e_10", descricao: "Semimetais" }    
];

let tabelaPeriodicaDiv;

function tabelaPeriodica(){
    limparConteudo();
    
    tabelaPeriodicaDiv = document.createElement("div");
    tabelaPeriodicaDiv.id = 'tabelaPeriodica';

    titulo.innerHTML = "<h1>Tabela Periódica</h1>";
    


    for(let cont of range(elementos.length)){

        if(elementos[cont].id == 'vazio'){
            criaBloco(elementos[cont].qtd);
        }
        else {

            let elemento = document.createElement("div");
            elemento.className = elementos[cont].class;
            elemento.innerHTML = elementos[cont].numeroAtomico;   

            let elementoSimbolo = document.createElement("div");
            elementoSimbolo.className = 'simbolo';
            elementoSimbolo.innerHTML = elementos[cont].simbolo; 


            elemento.appendChild(elementoSimbolo);
            tabelaPeriodicaDiv.appendChild(elemento);
        }
    }

    conteudo.appendChild(tabelaPeriodicaDiv);

    criaLegendas();
    criaMostraDetalhes();
}

function criaBloco(qtdBlocos){
    for(let x of range(qtdBlocos)){
        let elemento = document.createElement("div");
        elemento.className = 'elemento elementoVazio';
        tabelaPeriodicaDiv.appendChild(elemento);
    }
}

function criaLegendas(){
    let divLegendas = document.createElement("div");
    divLegendas.id = 'divLegendas';

    for(let x of range(legendas.length)){
        let divDescricaoLegenda = document.createElement("div");
        divDescricaoLegenda.id = 'divDescricaoLegenda';
        divDescricaoLegenda.className = legendas[x].id;
        divDescricaoLegenda.innerHTML = legendas[x].descricao;
        divLegendas.appendChild(divDescricaoLegenda);
    }


    tabelaPeriodicaDiv.appendChild(divLegendas);
}

function criaMostraDetalhes(){

}
