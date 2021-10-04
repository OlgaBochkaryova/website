---
title: "Collection of tools and packages for bacterial genomics"
---

The initiative was started in Gelfand lab. I thank all colleagues for their suggetions and comments.

## databases

**💾 Data** [NCBI](https://www.ncbi.nlm.nih.gov/) - a series of databases relevant to biotechnology and biomedicine and is an important resource for bioinformatics tools and services. Major databases include GenBank for DNA sequences and PubMed, a bibliographic database for biomedical literature. Other databases include the NCBI Epigenomics database. All these databases are available online through the Entrez search engine.

**💾 Data** [PDB](https://www.rcsb.org/) - Protein Data Bank, archive-information about the 3D shapes of proteins, nucleic acids, and complex assemblies that helps students and researchers understand all aspects of biomedicine and agriculture, from protein synthesis to health and disease.

**💾 Data** [COG](https://www.ncbi.nlm.nih.gov/research/cog) ([paper2020](https://academic.oup.com/nar/article/49/D1/D274/5964069)) - release of 4877 Clusters of Orthologous Genes. The database covers complete genomes of 1187 bacteria and 122 archaea, typically, with a single genome per genus.

**💾 Data** [KEGG](https://www.genome.jp/kegg/pathway.html) ([paper](https://academic.oup.com/nar/article/44/D1/D457/2502600)) - an integrated database resource for biological interpretation of genome sequences and other high-throughput data. Molecular functions of genes and proteins are associated with ortholog groups and stored in the KEGG Orthology (KO) database.

**💾 Data** [UNIPROT](https://www.uniprot.org/) ([paper](https://academic.oup.com/nar/article/47/D1/D506/5160987)) -  a freely accessible database of protein sequence and functional information, many entries being derived from genome sequencing projects. It contains a large amount of information about the biological function of proteins derived from the research literature.
  
**💾 Data** [OMA orthology database](https://omabrowser.org/oma/home/) ([paper](https://academic.oup.com/bioinformatics/article/33/14/i75/3953943)) - a method and database for the inference of orthologs among complete genomes.

**💾 Data** [DoriC](http://tubic.org/doric/public/index.php) ([paper](https://academic.oup.com/nar/article/47/D1/D74/5144951)) - a database of replication origins including chromosomes and plasmid. It was initially created to present the bacterial oriCs predicted by Ori-Finder or determined by experiments. Current release contains (i) inclusion of oriCs on more bacterial chromosomes increased from 1633 to 7580; (ii) inclusion of oriCs on more archaeal chromosomes increased from 86 to 226; (iii) inclusion of 1209 plasmid replication origins retrieved from NCBI annotations or predicted by in silico analysis; (iv) inclusion of more replication origin elements on bacterial chromosomes including DnaA-trio motifs.

**💾 Data** [PHI-base](https://academic.oup.com/nar/article/48/D1/D613/5626528) ([host-pathogen interactions](http://www.phi-base.org/)) - a database that contains expertly curated molecular and biological information on genes proven to affect the outcome of pathogen–host interactions reported in peer reviewed research articles. The release of PHI-base version 4.8 (September 2019) contains 3454 manually curated references, and provides information on 6780 genes from 268 pathogens, tested on 210 hosts in 13,801 interactions.

**💾 Data** [BacDive](http://bacdive.dsmz.de) ([paper](https://academic.oup.com/nar/article/47/D1/D631/5106998)) -  a comprehensive resource for structured data on the taxonomy, morphology, physiology, cultivation, isolation and molecular data of prokaryotes. The database offers information for 63 669 bacterial and archaeal strains

**💾 Data**  [PATRIC](https://www.patricbrc.org/) ([paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3965095/)) - the all-bacterial Bioinformatics Resource Center (BRC) that provides researchers with an online resource that stores and integrates a variety of data types [e.g. genomics, transcriptomics, protein–protein interactions (PPIs), three-dimensional protein structures and sequence typing data] and associated metadata.

**💾 Data** [ProGenomes](https://progenomes.embl.de/) provides 84,096 consistently annotated bacterial and archaeal genomes from over 12000 species. These can be interactively explored and downloaded, whereby subsets can be customized e.g. taxonomic clades, representatives of each species or habitat-specific subsets. For each species cluster, precomputed pangenomes are available. In this update, genomes flagged for contamination were removed to provide a higher quality dataset. 

## assemblers

**🔧 Tool** [SPAdes assembler](https://github.com/ablab/spades) ([paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3342519/)) - an assembly toolkit containing various assembly pipelines.

<!-- ## genome browser -->

## genome annotation

**🌍 WebTool** [Rast](https://kbase.us/applist/apps/RAST_SDK/reannotate_microbial_genome/release?gclid=Cj0KCQjw59n8BRD2ARIsAAmgPmI2nvh6bDU_OkagT76hMuxDqv7jBRq2GXqc1u3LZqa-cwpUuOqcfrEaAvdUEALw_wcB) ([paper](https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-9-75)) - a fully automated service for annotating bacterial and archaeal genomes. The service identifies protein-encoding, rRNA and tRNA genes, assigns functions to the genes, predicts which subsystems are represented in the genome, uses this information to reconstruct the metabolic network and makes the output easily downloadable for the user.

**🔧 Tool** [Prokka](https://github.com/tseemann/prokka) ([paper](https://academic.oup.com/bioinformatics/article/30/14/2068/2390517)) - a command line software tool that can be installed on any Unix system. Prokka coordinates a suite of existing software tools to achieve a rich and reliable annotation of genomic bacterial sequences. Where possible, it will exploit multiple processing cores, and a typical bacterial genome can be annotated in ∼10 min on a quad core desktop computer. It is well suited to iterative models of sequence analysis and integration into genomic software pipelines.

**🔧 Tool** [Prodigal](https://github.com/hyattpd/Prodigal) ([paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2848648/)) - a fast, lightweight, open source gene prediction program, focused specifically on the three goals of improved gene structure prediction, improved translation initiation site recognition, and reduced false positives.

**🌍 WebTool** [PaperBLAST](https://papers.genomics.lbl.gov/cgi-bin/litSearch.cgi) ([paper](https://msystems.asm.org/content/2/4/e00039-17))  -  web tool uses EuropePMC to search the full text of scientific articles for references to genes. PaperBLAST also takes advantage of curated resources (Swiss-Prot, GeneRIF, and EcoCyc) that link protein sequences to scientific articles. PaperBLAST’s database includes over 700,000 scientific articles that mention over 400,000 different proteins. Given a protein of interest, PaperBLAST quickly finds similar proteins that are discussed in the literature and presents snippets of text from relevant articles or from the curators.

**🌍 WebTool** [InterProScan](https://www.ebi.ac.uk/interpro/search/sequence/) ([paper]()) - a resource that provides functional analysis of protein sequences by classifying them into families and predicting the presence of domains and important sites. To classify proteins in this way, InterPro uses predictive models, known as signatures, provided by several collaborating databases (referred to as member databases) that collectively make up the InterPro consortium. A key value of InterPro is that it combines protein signatures from these member databases into a single searchable resource, capitalising on their individual strengths to produce a powerful integrated database and diagnostic tool. InterPro integrates signatures from the following 13 member databases: CATH, CDD, HAMAP, MobiDB Lite, Panther, Pfam, PIRSF, PRINTS, Prosite, SFLD, SMART, SUPERFAMILY AND TIGRfams. 

## alignments

**🌍 WebTool** [T-Coffee](http://tcoffee.crg.cat/) ([paper](http://tcoffee.crg.cat/)) - a web server for the multiple sequence alignment of protein and RNA sequences using structural information and homology extension, includes different alignment models, such as MAFFT, MUSCLE and Kalign. Pro-Coffee is suiatable for alignment of promoter regions.

**🔧 Tool** [MAFFT-DASH](https://mafft.cbrc.jp/alignment/software/) ([paper](https://academic.oup.com/nar/article/47/W1/W5/5486273)) - a web server that integrates structural alignments with the MAFFT multiple sequence alignment (MSA) tool.

**🔧 Tool** [MACSE](https://bioweb.supagro.inra.fr/macse/) - a tool aligns coding NT sequences with respect to their AA translation while allowing NT sequences to contain multiple frameshifts and/or stop codons. MACSE is hence the first automatic solution to align protein-coding gene datasets containing non-functional sequences (pseudogenes) without disrupting the underlying codon structure. It has also proved useful in detecting undocumented frameshifts in public database sequences and in aligning next-generation sequencing reads/contigs against a reference coding sequence.

## orthologs

**🔧 Tool** [ProteinOrtho](https://www.bioinf.uni-leipzig.de/Software/proteinortho/) ([paper](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-12-124)) - a tool to detect orthologous genes within different species. For doing so, it compares similarities of given gene sequences and clusters them to find significant groups. The algorithm was designed to handle large-scale data and can be applied to hundreds of species at one.

**💾 Data** [OMA orthology database](https://omabrowser.org/oma/home/) ([paper](https://academic.oup.com/bioinformatics/article/33/14/i75/3953943)) - a method and database for the inference of orthologs among complete genomes. 


## pangenomics

**📄 Review** Costa, Sávio & Guimarães, Luís & Silva, Artur & Soares, Siomar & Baraúna, Rafael. (2020). [First Steps in the Analysis of Prokaryotic Pan-Genomes](https://journals.sagepub.com/doi/full/10.1177/1177932220938064). Bioinformatics and Biology Insights. 14. 117793222093806. 10.1177/1177932220938064

**📖 Book** The Pangenome: Diversity, Dynamics and Evolution of Genomes. Editors: Tettelin, Hervé, Medini, Duccio (Eds.) (2020)

**🔧 Tool** [Roary](https://sanger-pathogens.github.io/Roary/) ([paper](https://academic.oup.com/bioinformatics/article/31/22/3691/240757)) - a tool that rapidly builds large-scale pan genomes, identifying the core and accessory genes. Roary makes construction of the pan genome of thousands of prokaryote samples possible on a standard desktop without compromising on the accuracy of results.

**🔧 Tool** [Piggy](https://github.com/harry-thorpe/piggy) ([paper](https://academic.oup.com/gigascience/article/7/4/giy015/4919733)) - a novel pipeline that emulates Roary except that it is based only on intergenic regions. A key utility provided by Piggy is the detection of highly divergent (“switched”) intergenic regions (IGRs) upstream of genes.

**🔧 Tool** [PanACoTA](https://github.com/gem-pasteur/PanACoTA) ([paper](https://academic.oup.com/nargab/article/3/1/lqaa106/6090162)) - a tool that allows to download all genomes of a species, build a database with those passing quality and redundancy controls, define uniform annotation, and use them to build a pangenome, several variants of core or persistent genomes, their alignments, and a rapid but accurate phylogenetic tree. While many programs have become available in the last few years to build pangenomes, we have focused on a method that tackles all the key steps of the process, from download to phylogenetic inference.

## whole-genome alignment

**🔧 Tool** [SibeliaZ]([paper](https://www.nature.com/articles/s41467-020-19777-8)) - an algorithm for identifying collinear blocks in closely related genomes based on analysis of the de Bruijn graph, incorporated into a multiple whole-genome alignment pipeline. Instruction how to construct synteny blocks with given length threshold [here](https://github.com/ctlab/parallel-rearrangements/blob/master/BLOCKS-OBTAIN.md)

**🔧 Tool** [ProgressiveMauve](http://darlinglab.org/mauve/mauve.html) ([paper](https://www.ncbi.nlm.nih.gov/pubmed/20593022)) is a system for constructing multiple genome alignments in the presence of large-scale evolutionary events such as rearrangement and inversion. The alignment display is organized into one horizontal “panel” per input genome sequence. Each genome’s panel contains the name of the genome sequence, a scale showing the sequence coordinates for that genome, and a single black horizontal center line. Colored block outlines appear above and possibly below the center line. Each of these block outlines surrounds a region of the genome sequence that aligned to part of another genome, and is presumably homologous and internally free from genomic rearrangement. However, the algorithm’s compute time scales cubically in the number of genomes to align, making it unsuitable for datasets containing more than 50-100 bacterial genomes.

## rearrangements

**📄 Review** Elise Darmon, David R. F. Leach [Bacterial Genome Instability](https://mmbr.asm.org/content/78/1/1) Microbiology and Molecular Biology Reviews Mar 2014, 78 (1) 1-39

**🔧 Tool** [SkewIT](https://github.com/jenniferlu717/SkewIT) ([paper](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1008439)) - a tool for analyzing GC Skew in bacterial genomes. GC Skew is a phenomenon observed in many bacterial genomes wherein the two strands of the chromosome contain different proportions of guanine/cytosine nucleotides. SkewIT quantifies GC Skew using a single metric that can then be compared/analyzed across thousands of bacterial genomes.

**🌍 WebTool** [YASS](https://bioinfo.lifl.fr/yass/yass.php) ([paper](https://nar.oxfordjournals.org/cgi/content/abstract/33/suppl_2/W540)) - a DNA local alignment tool based on an efficient and sensitive filtering algorithm. It applies transition-constrained seeds to specify the most probable conserved motifs between homologous sequences, combined with a flexible hit criterion used to identify groups of seeds that are likely to exhibit significant alignments.

**🔧 Tool** [PAREBRICK](https://pypi.org/project/PaReBrick/) ([paper]) - a  tool  to  identify  parallelrearrangements in bacterial population. It takes synteny blocks and a phylogenetic tree as input and outputs rearrangement events, such as inversions, insertions, deletions and multiplications. The tool tests each rearrangement for consistency with a tree and sorts the events by their parallelism score. As various molecular mechanisms might be responsible for variations in blocks content,  the tool provides diagrams of the neighbors for each block of interest allowing the detection of horizontally transferred blocks or its extra copies as well as the inversions in which copied blocks are involved.

## phylogenetics

**📄 Review** Kapli et al. [Phylogenetic tree building in the genomic age](https://pubmed.ncbi.nlm.nih.gov/32424311/)

**🔧 Tool** [RAxML](https://github.com/stamatak/standard-RAxML) ([paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3998144/)) - a popular program for phylogenetic analyses of large datasets under maximum likelihood with substantial extension of substitution models and supported data types, the introduction of SSE3, AVX and AVX2 vector intrinsics, techniques for reducing the memory requirements of the code and a plethora of operations for conducting post-analyses on sets of trees.

**🔧 Tool** [MrBayes](https://github.com/NBISweden/MrBayes/tree/v3.2.7a) ([paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3329765/)) - a program for Bayesian inference and model choice across a wide range of phylogenetic and evolutionary models. MrBayes uses Markov chain Monte Carlo (MCMC) methods to estimate the posterior distribution of model parameters.

**🔧 Tool** [PhaME](https://github.com/LANL-Bioinformatics/PhaME) ([paper](https://www.nature.com/articles/s41598-020-58356-1)) - phylogenetic and molecular evolutionary analysis from sequencing reads, draft assemblies or completed genomes of closely related organisms. Rapid phylogenetic characterization of organisms within complex samples without the need for prior assembly.

**📦 Python Package** [ete3](http://etetoolkit.org/) a tool for comparison of phylogenetic trees.

**🔧 Tool** [TreeCmp](https://bioweb.supagro.inra.fr/macse/) [paper](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.13358) - a package of applications for comparing phylogenetic tree sets. Visual TreeCmp includes a graphical web interface allowing the visualization of compared trees and command line application extended by comparison methods recently proposed in the literature.

**🌍 WebTool** [iTOL](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.13358) - an online tool for the display, annotation and management of phylogenetic trees. Allows to explore your trees directly in the browser and annotate them with various types of data.

**🔧 Tool** [Treemmer](https://git.scicore.unibas.ch/TBRU/Treemmer) ([paper](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-018-2164-8)) - a tool to reduce large phylogenetic datasets with minimal loss of diversity. Treemmer can reduce the size of datasets with different phylogenetic structures and levels of redundancy while maintaining a sub-sample that is representative of the original diversity. Additionally, it is possible to fine-tune the behavior of Treemmer including any kind of meta-information, making Treemmer particularly useful for empirical studies.

## horizontal gene transfer (HGT)

**🔧 Tool** [ShadowCaster](https://shadowcaster.readthedocs.io/en/latest/) ([paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7397055/)) - a hybrid approach that sequentially combines nucleotide composition-based predictions by support vector machines (SVMs) under the shadow of phylogenetic models independent of tree reconstruction, to improve the detection of HGT events in prokaryotes. ShadowCaster successfully predicted close and distant HGT events in bacterial genomes. Requires a lot of components (R, Perl, OrthoMCL, Blastp and EMBOSS package).

**🔧 Tool** [BratNextGen](http://www.helsinki.fi/bsg/software/BRAT-NextGen/)([paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3245952/)) - a method for detecting homologous recombination events from whole-genome sequence data for bacterial population samples on a large scale. The approach can efficiently handle hundreds of whole genome sequenced population samples and identify separate origins of the recombinant sequence, offering an enhanced insight into the diversification of bacterial clones at the level of the whole genome.

**🌍 WebTool** [Genome Complexity Browser](https://gcb.rcpcm.org/) ([paper](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1008222&rev=2)) - a tool that allows the visualization of gene contexts, in a graph-based format, and the quantification of variability for different segments of a genome. The graph-based visualization allows the inspection of changes in gene contents and neighborhoods across hundreds of genomes, simultaneously, which may facilitate the identification of conserved and variable segments of operons or the estimation of the overall variability associated with a particular genome locus.

## ancestral reconstruction

**🔧 Tool** [MrBayes](https://github.com/NBISweden/MrBayes/tree/v3.2.7a) ([paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3329765/)) - a program for Bayesian inference and model choice across a wide range of phylogenetic and evolutionary models. MrBayes uses Markov chain Monte Carlo (MCMC) methods to estimate the posterior distribution of model parameters.

**🔧 Tool** [PAML](http://abacus.gene.ucl.ac.uk/software/paml.html) ([paper](https://academic.oup.com/mbe/article/24/8/1586/1103731)) - a package of programs for phylogenetic analyses of DNA and protein sequences using maximum likelihood (ML). The programs may be used to compare and test phylogenetic trees, but their main strengths lie in the rich repertoire of evolutionary models implemented, which can be used to estimate parameters in models of sequence evolution and to test interesting biological hypotheses.

## evolutionary rates

**🔧 Tool** [ETE](http://etetoolkit.org/documentation/ete-evol/) - a tool that automates CodeML and Slr analyses by using pre-configured evolutionary models and directly producing a graphical representation of the results.

**🔧 Tool** [ProtParCon])(https://pypi.org/project/ProtParCon/) ([paper](doi: 10.1093/molbev/msw046)) - an application framework for manipulating molecular data and identifying parallel and convergent amino acid replacements at the molecular level. Although ProtParCon was not designed for implementing new methods or algorithms for molecular data manipulation, ProtParCon integrates several widely used programs for multiple sequence alignment (MSA), ancestral states reconstruction (ASR), protein sequence simulation, Maximum-Likelihood tree inference (ML Tree) and molecular convergence identification. Therefore, it can be used as a general tool to do MSA, ASR, and simulation under a common interface by using various pre-existed programs under hood.


## GO enrichment

**📦 R Package** [topGO](https://bioconductor.org/packages/release/bioc/html/topGO.html) ([documentation]()) - a tool set for testing GO terms while accounting for the topology of the GO graph. Different test statistics and different methods for eliminating local similarities and dependencies between GO terms can be implemented and applied.


## visualization

**🌍 WebTool** [iTOL](https://itol.embl.de/) ([paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4987883/)) - an online tool for the display, annotation and management of phylogenetic trees. Allows to explore your trees directly in the browser and annotate them with various types of data.

**🌍 WebTool** [Phandango](https://github.com/jameshadfield/phandango/wiki) ([paper](https://academic.oup.com/bioinformatics/article/34/2/292/4212949)) - a fully interactive tool to allow visualisation of a phylogenetic tree, associated metadata and genomic information such as recombination blocks, pan-genome contents or GWAS results.
 
**🔧 Tool** [Gene Graphics](https://katlabs.cc/genegraphics/) ([paper](https://academic.oup.com/bioinformatics/article-lookup/doi/10.1093/bioinformatics/btx793)) - an application that allows for consistent, visually appealing representations of physical gene neighborhoods with minimal effort or expertise.

**🌍 WebTool** [Biorender](https://biorender.com/) - a tool to help scientists create and share professional scientific figures.

**🌍 WebTool** [Overleaf](https://www.overleaf.com/) - a collaborative cloud-based LaTeX editor used for writing, editing and publishing scientific documents. It partners with a wide range of scientific publishers to provide official journal LaTeX templates, and direct submission links.

## datasets

**💾 Data** [A unified catalog of 204,938 reference genomes from the human gut microbiome](https://www.nature.com/articles/s41587-020-0603-3).

**💾 Data** [genomic data of 414 E.coli/Shigella genomes (full assemblies)](https://github.com/zseferbekova/ShigellaProject). The project contains the phylogenetic tree, alignments of common orthogroups, synteny blocks. [Citation](https://www.biorxiv.org/content/10.1101/2020.06.12.147751v1.abstract)