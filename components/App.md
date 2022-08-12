# ML Technique: T-SNE

T-sne is a dimension reduction algorithm. It's best used to visualize data with lots of features in 2D space.

# Dataset: NKI Breast Cancer Data

To demonstrate through example, we will use the NKI Breast Cancer Dataset [[1]](https://www.google.com/url?q=https://data.world/deviramanan2016/nki-breast-cancer-data&sa=D&source=docs&ust=1660151201266258&usg=AOvVaw3zOXI33wxSbCse84FI3RYY). This dataset contains gene transcription information for 273 samples. There are 3 patient attributes, 10 discrete clinical attributes, and 1554 gene attributes. Each gene attribute is a normalized ratio using common gene expression profiling techniques [[2]](https://www.nature.com/articles/415530a).

# Low Dimentional Visualizations

There are many questions we could ask with such a rich dataset. "What genes correlate with each other? Can we predict survival based only on gene expression? What are the most important features when considering survival?" These questions have been addressed (to some extent) in research papers. [Wu et. al.](https://www.scirp.org/journal/paperinformation.aspx?paperid=84902) applies all the common classical machine learning techniques such as PCA, linear regression, SVM, random forest, and logistic regression. [Nicolaua et. al.](https://d1bp1ynq8xms31.cloudfront.net/wp-content/uploads/2015/02/Topology_Based_Data_Analysis_Identifies_a_Subgroup_of_Breast_Cancer_with_a_unique_mutational_profile_and_excellent_survival.pdf) uses a more advanced topology method to discover a subset of genes (c-MYB+) that, when exhibited, correlate to a 100% chance of survival. They are of a bit different caliber, but well worth a quick read if you would like to learn more about the data.

Today we will focus on the best way to visualize this data. Of course, there are many ways to visualize one feature at a time. Here are two ways to show the distribution of age and survival time, respectively:

{ inset box plot of age and hist of survival }

We can also fairly easily plot 2 dimensions of data at a time:

{ inset scatter plot and side box plots}

Taking a look at one gene: `Contig51749_NC`, we can see how the expression of this gene corresponds to the survival time or survival rate.

In reality, it would be much more useful to take in account all the genes. To do that, we will use T-SNE.

# T-SNE explained

_Here, I attempt to summarize a [state-of-the-art 27-page paper](https://lvdmaaten.github.io/publications/papers/JMLR_2008.pdf) in a few short paragraphs. There are many [blogs](https://www.linkedin.com/pulse/visualization-method-sne-vs-t-sne-implementation-using-tandia), [websites](https://distill.pub/2016/misread-tsne/?_ga=2.135835192.888864733.1531353600-1779571267.1531353600), and [videos](https://youtu.be/NEaUSP4YerM) that do this better than I. I recommend checking them out too!_

## Determining Similarity of Points in Original Space

We would like similar points to be plotted next to each other, and dissimilar points to be far away. A point is similar if its features are close to each other, relative to all other points. This is exactly what Stochastic Neighbor Embedding calculates.

First, we calculate the conditional probability of j given i by finding the euclidian distance between the two points xi and xj, divided by a smoothing constant. In order to know whether this distance is actually "close" or "far", we find the distance of all the other points k and sum them.

$$ p*{j|i|}=\frac{exp(\frac{-\left\| x_i-x_j\right\|^2}{2\sigma_i^2})}{\sum*{k\neq i} exp(\frac{-\left\| x_i-x_k \right\|^2}{2\sigma_i^2})} $$

We also can imagine a case where the probability of $p_{j|i}$ is different from $p_{i|j}$. To account, we just take the average of the two probabilities.

$$ p*{ij} = \frac{p*{j|i} + p\_{i|j}}{2n} $$

## Positioning the Points in the New Space

Second, we apply the same ratio in the lower-dimentional space. Notice, the $\sigma^2$ constant is taken out. Remember that this was simply a smoothing constant (perplexity) that doesn't make sense to include in the new space.

$$ q*{ij}=\frac{exp(-\left\| y_i -y_j \right\|^2)}{\sum*{k \neq l} exp(-\left\| y_k -y_l \right\|^2)} $$

Above is the equation for SNE, which uses a Cauchy distribution. To make this "t-SNE", we will use a Student t-distribution with one degree of freedom.

$$ q*{ij}=\frac{(1+\left\| y_i -y_j \right\|^2)^{-1}}{\sum*{k \neq l}(1+\left\| y_k -y_l \right\|^2)^{-1}} $$

## Iterating over the Cost Function

Now we have the probability that the two points are close to each other in original space ( $p_{ij}$ ) and we have a prediction of how close they should be in low-D space ($q_{ij}$). If this was a perfect match $ p*{ij} $ and $ q*{ij} $ would equal each other.

So we can put this in our cost function. The author of the original paper chose to use the of Kullback-Leibler divergence. Notice how the log in this function. This means that, given the choice between making sure similar points stay together, or similar points are far apart, the function favors clustering similar points together.

Our cost function is:

$$C = KL(P||Q)=\sum_i\sum_jp_{ij}log\frac{p_{ij}}{q_{ij}} $$

What's actually really nice about this cost function is that it's gradient decent w.r.t. $y$ is simply:

$$ \frac{\partial C}{\partial y*i} = 4\sum_j(p*{ij}-q\_{ij})(y_i-y_j) $$

## Quick Summary

To review, we have a dataset that has many features. We calculate $p_{ij}$ which is a ratio that is large if $i$ and $j$ are close to each other and small if they are far apart. Then we sample an initial solution for the low-dimensional points $ q*{ij} $. We make incremental improvements to $q*{ij}$ by minimizing the cost function. The cost function will try to move similar points closer together, while pushing dissimilar points farther away. This push and pulling will eventually (hopefully) create the same clusters seen in high-D space in low-D space.

# Using sci-kit Learn's T-SNE

One day I would like to implement T-SNE from scratch in python as [M. Farhan Tandia did here](https://www.linkedin.com/pulse/visualization-method-sne-vs-t-sne-implementation-using-tandia/). Until then, we will use sci-kit learn's T-SNE api. As a bonus, also allows us to easily compare other visualization methods.
