---
title: "BioInf CookBook"
---
Tools, packages and software for bacterial genomics.

The initiative was started in Gelfand lab. I thank all colleagues for their suggetions and comments.

## assemblers

**🔧 Tool** [SPAdes assembler](https://github.com/ablab/spades) ([paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3342519/)) an assembly toolkit containing various assembly pipelines.

<!-- ## genome browser -->

## genome annotation

**🔧 Web Tool** [Rast](https://kbase.us/applist/apps/RAST_SDK/reannotate_microbial_genome/release?gclid=Cj0KCQjw59n8BRD2ARIsAAmgPmI2nvh6bDU_OkagT76hMuxDqv7jBRq2GXqc1u3LZqa-cwpUuOqcfrEaAvdUEALw_wcB) ([paper](https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-9-75)) a fully automated service for annotating bacterial and archaeal genomes. The service identifies protein-encoding, rRNA and tRNA genes, assigns functions to the genes, predicts which subsystems are represented in the genome, uses this information to reconstruct the metabolic network and makes the output easily downloadable for the user.

**🔧 Tool** [Prokka](https://github.com/tseemann/prokka) ([paper](https://academic.oup.com/bioinformatics/article/30/14/2068/2390517)) a command line software tool that can be installed on any Unix system. Prokka coordinates a suite of existing software tools to achieve a rich and reliable annotation of genomic bacterial sequences. Where possible, it will exploit multiple processing cores, and a typical bacterial genome can be annotated in ∼10 min on a quad core desktop computer. It is well suited to iterative models of sequence analysis and integration into genomic software pipelines.

**🔧 Tool** [PaperBLAST](https://papers.genomics.lbl.gov/cgi-bin/litSearch.cgi) ([paper](https://msystems.asm.org/content/2/4/e00039-17)) uses EuropePMC to search the full text of scientific articles for references to genes. PaperBLAST also takes advantage of curated resources (Swiss-Prot, GeneRIF, and EcoCyc) that link protein sequences to scientific articles. PaperBLAST’s database includes over 700,000 scientific articles that mention over 400,000 different proteins. Given a protein of interest, PaperBLAST quickly finds similar proteins that are discussed in the literature and presents snippets of text from relevant articles or from the curators.

<!-- ## databases -->

## alignments

**🔧 Web Tool** [T-Coffee](http://tcoffee.crg.cat/) ([paper](http://tcoffee.crg.cat/)) - a web server for the multiple sequence alignment of protein and RNA sequences using structural information and homology extension, includes different alignment models, such as MAFFT, MUSCLE and Kalign. Pro-Coffee is suiatable for alignment of promoter regions.

**🔧 Tool** [MASCE](https://bioweb.supagro.inra.fr/macse/) - aligns coding NT sequences with respect to their AA translation while allowing NT sequences to contain multiple frameshifts and/or stop codons. MACSE is hence the first automatic solution to align protein-coding gene datasets containing non-functional sequences (pseudogenes) without disrupting the underlying codon structure. It has also proved useful in detecting undocumented frameshifts in public database sequences and in aligning next-generation sequencing reads/contigs against a reference coding sequence.

## pangenomics

**🔧 Tool** [ProteinOrtho](https://www.bioinf.uni-leipzig.de/Software/proteinortho/) ([paper](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-12-124)) - a tool to detect orthologous genes within different species. For doing so, it compares similarities of given gene sequences and clusters them to find significant groups. The algorithm was designed to handle large-scale data and can be applied to hundreds of species at one.

**🔧 Tool** [Roary](https://sanger-pathogens.github.io/Roary/) ([paper](https://sanger-pathogens.github.io/Roary/)) - a tool that rapidly builds large-scale pan genomes, identifying the core and accessory genes. Roary makes construction of the pan genome of thousands of prokaryote samples possible on a standard desktop without compromising on the accuracy of results.

**🔧 Tool** [Piggy](https://sanger-pathogens.github.io/Roary/) ([paper](https://academic.oup.com/gigascience/article/7/4/giy015/4919733))  -  a novel pipeline that emulates Roary except that it is based only on intergenic regions. A key utility provided by Piggy is the detection of highly divergent (“switched”) intergenic regions (IGRs) upstream of genes.

**🔧 Tool** [PANACOTA](https://academic.oup.com/gigascience/article/7/4/giy015/4919733) - a tool that allows to download all genomes of a species, build a database with those passing quality and redundancy controls, define uniform annotation, and use them to build a pangenome, several variants of core or persistent genomes, their alignments, and a rapid but accurate phylogenetic tree. While many programs have become available in the last few years to build pangenomes, we have focused on a method that tackles all the key steps of the process, from download to phylogenetic inference.

**📄 Review** Costa, Sávio & Guimarães, Luís & Silva, Artur & Soares, Siomar & Baraúna, Rafael. (2020). [First Steps in the Analysis of Prokaryotic Pan-Genomes](https://journals.sagepub.com/doi/full/10.1177/1177932220938064). Bioinformatics and Biology Insights. 14. 117793222093806. 10.1177/1177932220938064

**📖 Book** The Pangenome: Diversity, Dynamics and Evolution of Genomes. Editors: Tettelin, Hervé, Medini, Duccio (Eds.) (2020)


## whole-genome alignment

**🔧 Tool** [SibeliaZ]([paper](https://www.nature.com/articles/s41467-020-19777-8)) -  an algorithm for identifying collinear blocks in closely related genomes based on analysis of the de Bruijn graph, incorporated into a multiple whole-genome alignment pipeline. Instruction how to construct synteny blocks with given length threshold [here](https://github.com/ctlab/parallel-rearrangements/blob/master/BLOCKS-OBTAIN.md)

**🔧 Tool** [ProgressiveMauve](http://darlinglab.org/mauve/mauve.html) ([paper](https://www.ncbi.nlm.nih.gov/pubmed/20593022)) is a system for constructing multiple genome alignments in the presence of large-scale evolutionary events such as rearrangement and inversion. The alignment display is organized into one horizontal “panel” per input genome sequence. Each genome’s panel contains the name of the genome sequence, a scale showing the sequence coordinates for that genome, and a single black horizontal center line. Colored block outlines appear above and possibly below the center line. Each of these block outlines surrounds a region of the genome sequence that aligned to part of another genome, and is presumably homologous and internally free from genomic rearrangement. However, the algorithm’s compute time scales cubically in the number of genomes to align, making it unsuitable for datasets containing more than 50-100 bacterial genomes.

## rearrangements

**🔧 Tool** [SkewIT](https://github.com/jenniferlu717/SkewIT) ([paper](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1008439)) is a tool for analyzing GC Skew in bacterial genomes. GC Skew is a phenomenon observed in many bacterial genomes wherein the two strands of the chromosome contain different proportions of guanine/cytosine nucleotides. SkewIT quantifies GC Skew using a single metric that can then be compared/analyzed across thousands of bacterial genomes.

**🔧 Web Tool** [YASS](https://bioinfo.lifl.fr/yass/yass.php) ([paper](https://nar.oxfordjournals.org/cgi/content/abstract/33/suppl_2/W540)) a DNA local alignment tool based on an efficient and sensitive filtering algorithm. It applies transition-constrained seeds to specify the most probable conserved motifs between homologous sequences, combined with a flexible hit criterion used to identify groups of seeds that are likely to exhibit significant alignments.

**🔧 Tool** [PAREBRICK](https://pypi.org/project/PaReBrick/) 


## phylogenetics

**📄 Review** Kapli et al. [Phylogenetic tree building in the genomic age](https://pubmed.ncbi.nlm.nih.gov/32424311/)

**🔧 Tool** [RAxML](https://github.com/stamatak/standard-RAxML) ([paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3998144/)) a popular program for phylogenetic analyses of large datasets under maximum likelihood with substantial extension of substitution models and supported data types, the introduction of SSE3, AVX and AVX2 vector intrinsics, techniques for reducing the memory requirements of the code and a plethora of operations for conducting post-analyses on sets of trees.

**🔧 Tool** [PhaME](https://github.com/LANL-Bioinformatics/PhaME) ([paper](https://www.nature.com/articles/s41598-020-58356-1)) phylogenetic and molecular evolutionary analysis from sequencing reads, draft assemblies or completed genomes of closely related organisms. Rapid phylogenetic characterization of organisms within complex samples without the need for prior assembly.

**📦 Python Package** [ete3](http://etetoolkit.org/) a tool for comparison of phylogenetic trees.

**🔧 Tool** [TreeCmp](https://bioweb.supagro.inra.fr/macse/) [paper](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.13358) - a package of applications for comparing phylogenetic tree sets. Visual TreeCmp includes a graphical web interface allowing the visualization of compared trees and command line application extended by comparison methods recently proposed in the literature.

**🔧 Web Tool** [iTOL](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.13358) - is an online tool for the display, annotation and management of phylogenetic trees. Allows to explore your trees directly in the browser and annotate them with various types of data.

## selection

## horizontal gene transfer (HGT)

**🔧 Tool** [ShadowCaster](https://shadowcaster.readthedocs.io/en/latest/) ([paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7397055/)) - a hybrid approach that sequentially combines nucleotide composition-based predictions by support vector machines (SVMs) under the shadow of phylogenetic models independent of tree reconstruction, to improve the detection of HGT events in prokaryotes. ShadowCaster successfully predicted close and distant HGT events in bacterial genomes. Requires a lot of components (R, Perl, OrthoMCL, Blastp and EMBOSS package).

**🔧 Tool** [BratNextGen](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7397055/)([paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7397055/)) - a method for detecting homologous recombination events from whole-genome sequence data for bacterial population samples on a large scale. The approach can efficiently handle hundreds of whole genome sequenced population samples and identify separate origins of the recombinant sequence, offering an enhanced insight into the diversification of bacterial clones at the level of the whole genome.

## ancestral reconstruction

## visualization

**🔧 Web Tool** [iTOL](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.13358) [paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7397055/) - is an online tool for the display, annotation and management of phylogenetic trees. Allows to explore your trees directly in the browser and annotate them with various types of data.

**🔧 Tool** [Gene Graphics](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7397055/) ([paper](https://academic.oup.com/bioinformatics/article-lookup/doi/10.1093/bioinformatics/btx793))- an application that allows for consistent, visually appealing representations of physical gene neighborhoods with minimal effort or expertise.

**🔧 Web Tool** [Biorender](https://biorender.com/) [paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7397055/) - is a tool to help scientists create and share professional scientific figures.

**🔧 Web Tool** [Overleaf](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7397055/) - a collaborative cloud-based LaTeX editor used for writing, editing and publishing scientific documents. It partners with a wide range of scientific publishers to provide official journal LaTeX templates, and direct submission links.

## datasets

**💾 Data** [A unified catalog of 204,938 reference genomes from the human gut microbiome](https://www.nature.com/articles/s41587-020-0603-3).

**💾 Data** [genomic data of 414 E.coli/Shigella genomes (full assemblies)](https://github.com/zseferbekova/ShigellaProject). The project contains the phylogenetic tree, alignments of common orthogroups, synteny blocks. [Citation](https://www.biorxiv.org/content/10.1101/2020.06.12.147751v1.abstract)
