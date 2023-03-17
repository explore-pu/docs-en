import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.716bc990.js";const d=JSON.parse('{"title":"Quick search","description":"","frontmatter":{},"headers":[{"level":2,"title":"Like Search","slug":"Like-Search","link":"#Like-Search","children":[]},{"level":2,"title":"Custom Search","slug":"Custom-Search","link":"#Custom-Search","children":[]},{"level":2,"title":"Quick syntax search","slug":"Quick-syntax-search","link":"#Quick-syntax-search","children":[{"level":3,"title":"Compare Query","slug":"Compare-Query","link":"#Compare-Query","children":[]},{"level":3,"title":"In, NotIn query","slug":"InNotIn-query","link":"#InNotIn-query","children":[]},{"level":3,"title":"Between Query","slug":"Between-Query","link":"#Between-Query","children":[]},{"level":3,"title":"Time Date Function Query","slug":"Time-Date-Function-Query","link":"#Time-Date-Function-Query","children":[]},{"level":3,"title":"Like Query","slug":"Like-Query","link":"#Like-Query","children":[]},{"level":3,"title":"Regular query","slug":"Regular-query","link":"#Regular-query","children":[]},{"level":3,"title":"Multi-conditional combination search","slug":"Multi-conditional-combination-search","link":"#Multi-conditional-combination-search","children":[]},{"level":3,"title":"Label as the name of the query field","slug":"Label-as-name-of-query-field","link":"#Label-as-name-of-query-field","children":[]}]}],"relativePath":"guide/model-grid-quick-search.md"}'),l={name:"guide/model-grid-quick-search.md"},o=e(`<h1 id="quick-search" tabindex="-1">Quick search <a class="header-anchor" href="#quick-search">¶</a></h1><blockquote><p>Since v1.7.0</p></blockquote><p><code>Quick Search</code> is another table data search method other than <code>filter</code>, which is used to quickly filter the data you want. The way to open it is as follows:</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">grid</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">quickSearch</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span></code></pre></div><p>A search box will appear in the header:</p><p><img src="https://user-images.githubusercontent.com/1479100/59140479-8e976480-89d0-11e9-8496-db958c012128.png" alt="WX20190608-093334"></p><p>Set different search methods by passing different parameters to the <code>quickSearch</code> method. There are several ways to use them.</p><h2 id="Like-Search" tabindex="-1">Like Search <a class="header-anchor" href="#Like-Search">¶</a></h2><p>The first way, by setting the field name for a simple <code>like</code> query</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">grid</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">quickSearch</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">title</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// After submitting the model will execute the following query</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">where</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">title</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">like</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">{$</span><span style="color:#A6ACCD;">input</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><p>Or do a &#39;like\` query on multiple fields:</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">grid</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">quickSearch</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">title</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">desc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">content</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// After submitting the model will execute the following query</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">where</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">title</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">like</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">{$</span><span style="color:#A6ACCD;">input</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">orWhere</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">desc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">like</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">{$</span><span style="color:#A6ACCD;">input</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">orWhere</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">content</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">like</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">{$</span><span style="color:#A6ACCD;">input</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h2 id="Custom-Search" tabindex="-1">Custom Search <a class="header-anchor" href="#Custom-Search">¶</a></h2><p>The second way gives you more control over your search criteria.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">grid</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">quickSearch</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">where</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">title</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">)-&gt;</span><span style="color:#82AAFF;">orWhere</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">desc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">like</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">{$</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span>
<span class="line"></span></code></pre></div><p>The parameter <code>$query</code> of the closure is filled in for the content in the search box, and the query in the closure is submitted after the submission.</p><h2 id="Quick-syntax-search" tabindex="-1">Quick syntax search <a class="header-anchor" href="#Quick-syntax-search">¶</a></h2><p>The third way is to refer to the search syntax of <code>Github</code> for quick search. The calling method is as follows:</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> Do not pass parameters</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">grid</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">quickSearch</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span></code></pre></div><p>Fill in the contents of the search box according to the following syntax, after the submission will be the corresponding query:</p><h3 id="Compare-Query" tabindex="-1">Compare Query <a class="header-anchor" href="#Compare-Query">¶</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">title:foo\`,\`title:!foo</span></span>
<span class="line"><span style="color:#A6ACCD;">$model-&gt;where(&#39;title&#39;, &#39;foo&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$model-&gt;where(&#39;title&#39;, &#39;!=&#39;, &#39;foo&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">rate:&gt;10\`, \`rate:&lt;10\`, \`rate:&gt;=10\`, \`rate:&lt;=10</span></span>
<span class="line"><span style="color:#A6ACCD;">$model-&gt;where(&#39;rate&#39;, &#39;&gt;&#39;, 10);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$model-&gt;where(&#39;rate&#39;, &#39;&lt;&#39;, 10);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$model-&gt;where(&#39;rate&#39;, &#39;&gt;=&#39;, 10);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$model-&gt;where(&#39;rate&#39;, &#39;&lt;=&#39;, 10);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="InNotIn-query" tabindex="-1">In, NotIn query <a class="header-anchor" href="#InNotIn-query">¶</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">status:(1,2,3,4)\`, \`status:!(1,2,3,4)</span></span>
<span class="line"><span style="color:#A6ACCD;">$model-&gt;whereIn(&#39;status&#39;, [1,2,3,4]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$model-&gt;whereNotIn(&#39;status&#39;, [1,2,3,4]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="Between-Query" tabindex="-1">Between Query <a class="header-anchor" href="#Between-Query">¶</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">score:[1,10]</span></span>
<span class="line"><span style="color:#A6ACCD;">$model-&gt;whereBetween(&#39;score&#39;, [1, 10]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="Time-Date-Function-Query" tabindex="-1">Time Date Function Query <a class="header-anchor" href="#Time-Date-Function-Query">¶</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">created_at:date,2019-06-08</span></span>
<span class="line"><span style="color:#A6ACCD;">$model-&gt;whereDate(&#39;created_at&#39;, &#39;2019-06-08&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">created_at:time, 09:57:45</span></span>
<span class="line"><span style="color:#A6ACCD;">$model-&gt;whereTime(&#39;created_at&#39;, &#39;09:57:45&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">created_at:day,08</span></span>
<span class="line"><span style="color:#A6ACCD;">$model-&gt;whereDay(&#39;created_at&#39;, &#39;08&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">created_at:month,06</span></span>
<span class="line"><span style="color:#A6ACCD;">$model-&gt;whereMonth(&#39;created_at&#39;, &#39;06&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">created_at:year,2019</span></span>
<span class="line"><span style="color:#A6ACCD;">$model-&gt;whereYear(&#39;created_at&#39;, &#39;2019&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="Like-Query" tabindex="-1">Like Query <a class="header-anchor" href="#Like-Query">¶</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">content:%Laudantium%</span></span>
<span class="line"><span style="color:#A6ACCD;">$model-&gt;where(&#39;content&#39;, &#39;like&#39;, &#39;Laudantium&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="Regular-query" tabindex="-1">Regular query <a class="header-anchor" href="#Regular-query">¶</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">username:/song/</span></span>
<span class="line"><span style="color:#A6ACCD;">$model-&gt;where(&#39;username&#39;, &#39;REGEXP&#39;, &#39;song&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>Please use MYSQL regular syntax here</p></blockquote><h3 id="Multi-conditional-combination-search" tabindex="-1">Multi-conditional combination search <a class="header-anchor" href="#Multi-conditional-combination-search">¶</a></h3><p>You can implement AND query of multiple fields by separating multiple search statements with commas, such as <code>username:%song% status:(1,2,3)</code>, after running, the following search will be run.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">where</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">username</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">like</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%song%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)-&gt;</span><span style="color:#82AAFF;">whereIn</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span></code></pre></div><p>If a condition is an <code>OR</code> query, just add a <code>|</code> symbol before the statement unit: <code>username:%song% |status:(1,2,3)</code></p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">where</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">username</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">like</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%song%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)-&gt;</span><span style="color:#82AAFF;">orWhereIn</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span></code></pre></div><p>If the filled query text contains spaces, you need to put it in double quotes: <code>updated_at:&quot;2019-06-08 09:57:45&quot;</code></p><h3 id="Label-as-name-of-query-field" tabindex="-1">Label as the name of the query field <a class="header-anchor" href="#Label-as-name-of-query-field">¶</a></h3><p>If it is not convenient to get the field name, you can directly use the <code>label</code> name as the query field.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// For example, the header column of \`user_status\` is set to \`user state\`.</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">grid</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">column</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user_status</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user status</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><p>Then you can fill in the <code>user status: (1, 2, 3)</code> to execute the following query</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">whereIn</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user_status</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span></code></pre></div>`,44),p=[o];function t(c,r,D,i,y,F){return a(),n("div",null,p)}const h=s(l,[["render",t]]);export{d as __pageData,h as default};