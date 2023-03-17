import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.716bc990.js";const A=JSON.parse('{"title":"Configuration","description":"","frontmatter":{},"headers":[{"level":2,"title":"config/admin.php","slug":"admin","link":"#admin","children":[]},{"level":2,"title":"app/Admin/bootstrap.php","slug":"bootstrap","link":"#bootstrap","children":[]}],"relativePath":"guide/configuration.md"}'),p={name:"guide/configuration.md"},o=l(`<h1 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration">¶</a></h1><p>After the installation is complete, two configuration files are generated for configuring the management background, <code>config/admin.php</code> and <code>app/Admin/bootstrap.php</code></p><h2 id="admin" tabindex="-1">config/admin.php <a class="header-anchor" href="#admin">¶</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Laravel-admin name</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | This value is the name of laravel-admin, This setting is displayed on the</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | login page.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Laravel-admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Laravel-admin logo</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | The logo of all admin pages. You can also set it as an image by using a</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | \`img\` tag, eg &#39;&lt;img src=&quot;http://logo-url&quot; alt=&quot;Admin logo&quot;&gt;&#39;.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">logo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;b&gt;Laravel&lt;/b&gt; admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Laravel-admin mini logo</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | The logo of all admin pages when the sidebar menu is collapsed. You can</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | also set it as an image by using a \`img\` tag, eg</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | &#39;&lt;img src=&quot;http://logo-url&quot; alt=&quot;Admin logo&quot;&gt;&#39;.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">logo-mini</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;b&gt;La&lt;/b&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Laravel-admin bootstrap setting</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | This value is the path of laravel-admin bootstrap file.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bootstrap</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">app_path</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Admin/bootstrap.php</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Laravel-admin route settings</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | The routing configuration of the admin page, including the path prefix,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | the controller namespace, and the default middleware. If you want to</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | access through the root path, just set the prefix to empty string.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">route</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">prefix</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">env</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ADMIN_ROUTE_PREFIX</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">namespace</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">App</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">Admin</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">Controllers</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">middleware</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">web</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Laravel-admin install directory</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | The installation directory of the controller and routing configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | files of the administration page. The default is \`app/Admin\`, which must</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | be set before running \`artisan admin::install\` to take effect.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">directory</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">app_path</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Laravel-admin html title</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Html title for all pages.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">title</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Access via \`https\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | If your page is going to be accessed via https, set it to \`true\`.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">env</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ADMIN_HTTPS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Laravel-admin auth setting</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Authentication settings for all admin pages. Include an authentication</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | guard and a user provider setting of authentication driver.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | You can specify a controller for \`login\` \`logout\` and other auth routes.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">auth</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">controller</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> App</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Admin</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Controllers</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">AuthController</span><span style="color:#89DDFF;">::</span><span style="color:#F78C6C;">class</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">guards</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">driver</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">session</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">provider</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">providers</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">driver</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">eloquent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">model</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> Encore</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Admin</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Auth</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Database</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Administrator</span><span style="color:#89DDFF;">::</span><span style="color:#F78C6C;">class</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Add &quot;remember me&quot; to login form</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">remember</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Redirect to the specified URI when user is not authorized.</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">redirect_to</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">auth/login</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// The URIs that should be excluded from authorization.</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">excepts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">auth/login</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">auth/logout</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Laravel-admin upload setting</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | File system configuration for form upload files and images, including</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | disk and upload path.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">upload</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Disk in \`config/filesystem.php\`.</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">disk</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Image and file upload path under the disk above.</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">directory</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">image</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">images</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">files</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Laravel-admin database settings</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Here are database settings for laravel-admin builtin model &amp; tables.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">database</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Database connection for following tables.</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">connection</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// User tables and model.</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">users_table</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin_users</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">users_model</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> Encore</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Admin</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Auth</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Database</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Administrator</span><span style="color:#89DDFF;">::</span><span style="color:#F78C6C;">class</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Role table and model.</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">roles_table</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin_roles</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">roles_model</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> Encore</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Admin</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Auth</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Database</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Role</span><span style="color:#89DDFF;">::</span><span style="color:#F78C6C;">class</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Permission table and model.</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">permissions_table</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin_permissions</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">permissions_model</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> Encore</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Admin</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Auth</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Database</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Permission</span><span style="color:#89DDFF;">::</span><span style="color:#F78C6C;">class</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Menu table and model.</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menu_table</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin_menu</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menu_model</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> Encore</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Admin</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Auth</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Database</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Menu</span><span style="color:#89DDFF;">::</span><span style="color:#F78C6C;">class</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Pivot table for table above.</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">operation_log_table</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin_operation_log</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user_permissions_table</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin_user_permissions</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">role_users_table</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin_role_users</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">role_permissions_table</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin_role_permissions</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">role_menu_table</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin_role_menu</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | User operation log setting</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | By setting this option to open or close operation log in laravel-admin.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">operation_log</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">enable</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         * Only logging allowed methods in the list</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         */</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">allowed_methods</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">HEAD</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">POST</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">PUT</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F78C6C;">DELETE</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">CONNECT</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">OPTIONS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TRACE</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">PATCH</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         * Routes that will not log to database.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         * All method to path like: admin/auth/logs</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         * or specific method to path like: get:admin/auth/logs.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         */</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">except</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin/auth/logs*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | User default avatar</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Set a default avatar for newly created users.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">default_avatar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/vendor/laravel-admin/AdminLTE/dist/img/user2-160x160.jpg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Admin map field provider</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Supported: &quot;tencent&quot;, &quot;google&quot;, &quot;yandex&quot;.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">map_provider</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">google</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Application Skin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | This value is the skin of admin pages.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | @see  https://adminlte.io/docs/2.4/layout</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Supported:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |    &quot;skin-blue&quot;, &quot;skin-blue-light&quot;, &quot;skin-yellow&quot;, &quot;skin-yellow-light&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |    &quot;skin-green&quot;, &quot;skin-green-light&quot;, &quot;skin-purple&quot;, &quot;skin-purple-light&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |    &quot;skin-red&quot;, &quot;skin-red-light&quot;, &quot;skin-black&quot;, &quot;skin-black-light&quot;.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">skin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">skin-blue-light</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Application layout</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | This value is the layout of admin pages.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | @see  https://adminlte.io/docs/2.4/layout</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Supported: &quot;fixed&quot;, &quot;layout-boxed&quot;, &quot;layout-top-nav&quot;, &quot;sidebar-collapse&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | &quot;sidebar-mini&quot;.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">layout</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sidebar-mini</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sidebar-collapse</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Login page background image</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | This value is used to set the background image of login page.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">login_background_image</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Show version at footer</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Whether to display the version number of laravel-admin at the footer of</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | each page</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">show_version</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Show environment at footer</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Whether to display the environment at the footer of each page</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">show_environment</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Menu bind to permission</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | whether enable menu bind to a permission</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menu_bind_permission</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Indicates whether to check route permission.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">check_route_permission</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Indicates whether to check menu roles.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">check_menu_roles</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Enable default breadcrumb</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Whether enable default breadcrumb for every page content.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">enable_default_breadcrumb</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Enable/Disable assets minify</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">minify_assets</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Assets will not be minified.</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">excepts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Enable/Disable sidebar menu search</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">enable_menu_search</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Alert message that will displayed on top of the page.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">top_alert</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | The global Grid action display class.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">grid_action_class</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Encore</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Admin</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Grid</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Displayers</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">DropdownActions</span><span style="color:#89DDFF;">::</span><span style="color:#F78C6C;">class</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Extension Directory</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | When you use command \`php artisan admin:extend\` to generate extensions,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | the extension files will be generated in this directory.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">extension_dir</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">app_path</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Admin/Extensions</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | Settings for extensions.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | You can find all available extensions here</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    | https://github.com/laravel-admin-extensions.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">extensions</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#89DDFF;">];</span></span>
<span class="line"></span></code></pre></div><h2 id="bootstrap" tabindex="-1">app/Admin/bootstrap.php <a class="header-anchor" href="#bootstrap">¶</a></h2><p>In this file you can extend or remove your components or introduce front-end resources</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Laravel-admin - admin builder based on Laravel.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#F78C6C;font-style:italic;">@author</span><span style="color:#676E95;font-style:italic;">  z-song &lt;https://github.com/z-song&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Bootstraper for Admin.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Here you can remove builtin form field:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Encore\\Admin\\Form::forget([&#39;map&#39;, &#39;editor&#39;]);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Or extend custom form field:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Encore\\Admin\\Form::extend(&#39;php&#39;, PHPEditor::class);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Or require js and css assets:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Admin::css(&#39;/packages/prettydocs/css/styles.css&#39;);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Admin::js(&#39;/packages/prettydocs/js/main.js&#39;);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Encore</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Admin</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Form</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">forget</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">map</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">editor</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span></code></pre></div>`,7),t=[o];function e(c,r,y,i,D,F){return n(),a("div",null,t)}const E=s(p,[["render",e]]);export{A as __pageData,E as default};
