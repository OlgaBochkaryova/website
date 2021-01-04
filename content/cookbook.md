---
title: "BioInf CookBook"
---
Tools, packages and software for genomics

## assemblers

## genome browsers

## genome annotation

[Rast](https://kbase.us/applist/apps/RAST_SDK/reannotate_microbial_genome/release?gclid=Cj0KCQjw59n8BRD2ARIsAAmgPmI2nvh6bDU_OkagT76hMuxDqv7jBRq2GXqc1u3LZqa-cwpUuOqcfrEaAvdUEALw_wcB) ([paper](https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-9-75))

[Prokka](https://github.com/tseemann/prokka) ([paper](https://academic.oup.com/bioinformatics/article/30/14/2068/2390517))

[PaperBLAST]() (статья) - по сути обычный BLAST для белков, на выходе выдает публикации, в которых как-либо упоминались похожие на input последовательности. Очень удобный инструмент для: (1) функциональной аннотации гипотетических белков, (2) поиска различных экспериментальных данных об интересующем белке.

## databases

## alignments

[T-Coffee](http://tcoffee.crg.cat/) ([paper](http://tcoffee.crg.cat/)) - комбайн для выравнивания различных аминокислотных и нуклеотидных последовательностей. Есть много разных режимов, можно комбинировать и применять алгоритмы из других программ (Clustal, Muscle, Mafft). Отдельно отмечу алгоритм Pro-Coffee, который заточен на выравнивание гомологичных промоторных областей и, по моему опыту, справляется с этой задачей лучше других.

[MASCE](https://bioweb.supagro.inra.fr/macse/) - кодонные выравнивания, программа создает нуклеотидное и аминокислотые выравнивания

## pangenomics

**🔧 Tool** [Roary](https://sanger-pathogens.github.io/Roary/) ([paper](https://sanger-pathogens.github.io/Roary/)) - как будто бы умеет всю основную пангеномику: строить ряды, выравнивать универсальные гены, рисовать кривые насыщения и другие графики, и ещё много чего. По опыту, работает не всегда хорошо.

**🔧 Tool** [Piggy](https://sanger-pathogens.github.io/Roary/) ([paper](https://academic.oup.com/gigascience/article/7/4/giy015/4919733))  - по мотивам Roary, для анализа межгенников. Умеет, соответственно, вытаскивать межгенники/upstream regions, для них строить presence-absence matrix, выравнивания, разные графики. Отдельно от Roary не работает.

**🔧 Tool** [PANACOTA](https://academic.oup.com/gigascience/article/7/4/giy015/4919733) - пайплайн, который берет на вход название таксона, выкачивает данные, строит ортологи и вроде бы даже дерево

**📄 Review** Costa, Sávio & Guimarães, Luís & Silva, Artur & Soares, Siomar & Baraúna, Rafael. (2020). [First Steps in the Analysis of Prokaryotic Pan-Genomes](https://journals.sagepub.com/doi/full/10.1177/1177932220938064). Bioinformatics and Biology Insights. 14. 117793222093806. 10.1177/1177932220938064

**📖 Book** The Pangenome: Diversity, Dynamics and Evolution of Genomes. Editors: Tettelin, Hervé, Medini, Duccio (Eds.) (2020) - книга


## whole-genome alignment

[Sibelia](http://bioinf.spbau.ru/sibelia) - делает удобные для обработки файлы, но некрасивую визуализацию. Скачивается исполняемый файл (Linux/Windows). Быстро работает (но требует много памяти), выдача - координаты блоков. Основные параметры: общие/все блоки и минимальная длина блока в нуклеотидах.

[SibeliaZ](https://www.biorxiv.org/content/10.1101/548123v2) - новая версия, работает очень быстро.

[ProgressiveMauve](http://darlinglab.org/mauve/mauve.html) ([paper](https://www.ncbi.nlm.nih.gov/pubmed/20593022)) - хорош при работе с малым количеством штаммов, очень удачная визуализация + выравнивания последовательностей в синтенных блоках. Тоже скачивается, есть оболочка под Java, но немного кривая, адекватно работает из командной строки. Существенные недостатки: немного неочевидные параметры и долго считается, может виснуть на большом количестве геномов.

## phylogenetics
**📄 Review**: Kapli et al. [Phylogenetic tree building in the genomic age](https://pubmed.ncbi.nlm.nih.gov/32424311/)

**🔧 Tool** [PhaME](https://github.com/LANL-Bioinformatics/PhaME) ([paper](https://www.nature.com/articles/s41598-020-58356-1)) phylogenetic and molecular evolutionary analysis from sequencing reads, draft assemblies or completed genomes of closely related organisms. Rapid phylogenetic characterization of organisms within complex samples without the need for prior assembly.

**📦 Python Package** [ete3] умеет сравнивать деревья (в том числе разного размера). Подходит для проверки согласованности дерева гена с деревом видов.

[TreeCmp](https://bioweb.supagro.inra.fr/macse/) [paper](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.13358) - пакет плюс онлайн версия для сравнения деревьев. В него зашиты все традиционные меры, удобный интерфейс.

[iTOL](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.13358) - web-based платформа для работы с готовыми деревьями, позволяет производить разнообразные манипуляции и получать на выходе красивую визуализацию. Главная особенность - возможность навешивать на дерево огромное количество разнообразной дополнительной информации (датасеты), начиная от простых обозначений фенотипов и заканчивая heat-maps и выравниваниями (есть мануалы, как это делать).

## selection

## horizontal gene transfer (HGT)

[ShadowCaster](https://shadowcaster.readthedocs.io/en/latest/) ([paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7397055/)) - тул, в котором интегрированы филогенетические и параметрические методы поиска горизонтально перенесенных генов. Заточен для бактов. Написан на python, но требует много других составляющих (R, Perl, OrthoMCL, Blastp and EMBOSS package).

[BratNextGen](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7397055/)([paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7397055/)) - тул, для поиска регионов гомологичной рекомбинации, работает на большом количестве геномов.

## ancestral reconstruction

## visualization

[iTOL](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.13358) [paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7397055/) - web-based платформа для работы с готовыми деревьями, позволяет производить разнообразные манипуляции и получать на выходе красивую визуализацию. Главная особенность - возможность навешивать на дерево огромное количество разнообразной дополнительной информации (датасеты), начиная от простых обозначений фенотипов и заканчивая heat-maps и выравниваниями (есть мануалы, как это делать).

[Gene Graphics](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7397055/) - довольно удобная программа для визуализации геномного контекста (т.е. вид примерно как в SEED). Есть обучалки по использованию. На выходе получаются картинки хорошего качества.

[Biorender](https://biorender.com/) [paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7397055/) - сайт для создания биологических иллюстраций, в нем есть много готовых элементов (ткани, молекулы, мол. машины и пр.). Можно создавать группы и делится иллюстрациями с соавторами. Некоторые важные опции, например сохранение картинки в хорошем качестве, доступны только при платной подписке, но есть двухнедельный бесплатный период.

[Overleaf](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7397055/) - сайт для оформления статей в tex (позволяет совместное форматирование, как googledoc). В нем есть теховские шаблоны большинства научных журналов, удобная визуализация pdf, возможность сохранять версии и видеть правки друг друга.

## datasets

[A unified catalog of 204,938 reference genomes from the human gut microbiome](https://www.nature.com/articles/s41587-020-0603-3).
