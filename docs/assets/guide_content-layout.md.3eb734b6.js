import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.716bc990.js";const i=JSON.parse('{"title":"Page content","description":"","frontmatter":{},"headers":[{"level":2,"title":"Laout","slug":"Layout","link":"#Layout","children":[]}],"relativePath":"guide/content-layout.md"}'),p={name:"guide/content-layout.md"},o=l(`<h1 id="page-content" tabindex="-1">Page content <a class="header-anchor" href="#page-content">¶</a></h1><p>The layout usage of <code>laravel-admin</code> can be found in the <code>index()</code> method of the home page&#39;s layout file <a href="https://github.com/z-song/laravel-admin/blob/master/src/Console/stubs/HomeController.stub" target="_blank" rel="noreferrer">HomeController.php</a>.</p><p>The <code>Encore\\Admin\\Layout\\Content</code> class is used to implement the layout of the content area. The <code>Content::body ($element)</code> method is used to add page content:</p><p>The page code for an unfilled content is as follows：</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">index</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">content</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Content</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// optional</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">header</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">page header</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// optional</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">description</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">page description</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// add breadcrumb since v1.5.7</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">breadcrumb</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Dashboard</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">url</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">User management</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">url</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/admin/users</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Edit user</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Fill the page body part, you can put any renderable objects here</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">body</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Add another contents into body</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">body</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// method \`row\` is alias for \`body\`</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">row</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Direct rendering view, Since v1.6.12</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">view</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dashboard</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Method <code>$content-&gt;body();</code> can accepts any renderable objects, like string, number, class that has method <code>__toString</code>, or implements <code>Renderable</code>、<code>Htmlable</code> interface , include Laravel View objects.</p><h2 id="Layout" tabindex="-1">Laout <a class="header-anchor" href="#Layout">¶</a></h2><p><code>laravel-admin</code> use grid system of bootstrap,The length of each line is 12, the following is a few simple examples:</p><p>Add a line of content:</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">row</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">---------------------------------</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">hello                          </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                               </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                               </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                               </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                               </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                               </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">---------------------------------</span></span>
<span class="line"></span></code></pre></div><p>Add multiple columns within the line：</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">row</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Row</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">column</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">column</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">column</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">baz</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#89DDFF;">----------------------------------</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">foo       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">bar       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">baz       </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">----------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">row</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Row</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">column</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">column</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#89DDFF;">----------------------------------</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">foo       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">bar                  </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                     </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                     </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                     </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                     </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                     </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">----------------------------------</span></span>
<span class="line"></span></code></pre></div><p>Column in the column：</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">row</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Row</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">column</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">column</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Column</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">column</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">column</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">row</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">111</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">column</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">row</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">222</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">column</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">row</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">333</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#89DDFF;">----------------------------------</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">xxx       </span><span style="color:#89DDFF;">|</span><span style="color:#F78C6C;">111</span><span style="color:#A6ACCD;">                  </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|---------------------|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#F78C6C;">222</span><span style="color:#A6ACCD;">                  </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|---------------------|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#F78C6C;">333</span><span style="color:#A6ACCD;">                  </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                     </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">----------------------------------</span></span>
<span class="line"></span></code></pre></div><p>Add rows in rows and add columns：</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">row</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Row</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">column</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">column</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Column</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">column</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">column</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">row</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">111</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">column</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">row</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">222</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">column</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">row</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Row</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">column</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">444</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">column</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">555</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#89DDFF;">----------------------------------</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">xxx       </span><span style="color:#89DDFF;">|</span><span style="color:#F78C6C;">111</span><span style="color:#A6ACCD;">                  </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|---------------------|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#F78C6C;">222</span><span style="color:#A6ACCD;">                  </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|---------------------|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#F78C6C;">444</span><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#F78C6C;">555</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">----------------------------------</span></span>
<span class="line"></span></code></pre></div>`,16),e=[o];function t(D,c,F,r,y,C){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};