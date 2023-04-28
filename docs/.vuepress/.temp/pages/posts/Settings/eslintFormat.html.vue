<template><div><blockquote>
<p>在协同开发中为了保证成员的代码风格一致以及代码规范，大部分的项目都会配置代码规范校验（eslint）以及自动化格式化代码</p>
</blockquote>
<h3 id="_1-配置前准备" tabindex="-1"><a class="header-anchor" href="#_1-配置前准备" aria-hidden="true">#</a> 1.配置前准备</h3>
<p>npm install eslint -D<br>
npm install prettier -D</p>
<h3 id="_2-vscode配置" tabindex="-1"><a class="header-anchor" href="#_2-vscode配置" aria-hidden="true">#</a> 2.Vscode配置</h3>
<p>因为vscode有自动格式化的功能，所以我们可以直接在vscode中的settings中配置，使我们保存文件的时候自动格式化</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// 每次保存的时候将代码按格式进行修复</span>
  <span class="token string-property property">"editor.formatOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">"editor.codeActionsOnSave"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"source.fixAll"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"eslint.validate"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"javascript"</span><span class="token punctuation">,</span> <span class="token string">"javascriptreact"</span><span class="token punctuation">,</span> <span class="token string">"vue"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"[javascript]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"[vue]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"[jsonc]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"[html]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"[css]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>格式化的配置项也可以在这里加入，但是在写其他项目的时候同样会格式化，所以我们将配置写到项目的.prettierrc目录下，这样在拉取项目代码的时候可以保证配置一致
Prettier配置</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span> 
  <span class="token comment">// 最大长度80个字</span>
  printWidth<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
  <span class="token comment">// 行末分号</span>
  semi<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 单引号 </span>
  singleQuote<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// JSX双引号</span>
  jsxSingleQuote<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 尽可能使用尾随逗号（包括函数参数）</span>
  trailingComma<span class="token operator">:</span> <span class="token string">"none"</span><span class="token punctuation">,</span>
  <span class="token comment">// 在对象文字中打印括号之间的空格。 </span>
  bracketSpacing<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// > 标签放在最后一行的末尾，而不是单独放在下一行 </span>
  jsxBracketSameLine<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 箭头圆括号</span>
  arrowParens<span class="token operator">:</span> <span class="token string">"avoid"</span><span class="token punctuation">,</span>
  <span class="token comment">// 在文件顶部插入一个特殊的 @format 标记，指定文件格式需要被格式化。</span>
  insertPragma<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
  <span class="token comment">// 缩进 </span>
  tabWidth<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用tab还是空格 </span>
  useTabs<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 行尾换行格式 </span>
  endOfLine<span class="token operator">:</span> <span class="token string">"auto"</span><span class="token punctuation">,</span>
  <span class="token comment">// 指定HTML文件的全局空格敏感度</span>
  HTMLWhitespaceSensitivity<span class="token operator">:</span> <span class="token string">"ignore"</span>
<span class="token punctuation">}</span>;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好了，现在我们在保存文件的时候就会自动化格式化你的代码了（强迫症狂喜）</p>
<h3 id="_3-eslint配置" tabindex="-1"><a class="header-anchor" href="#_3-eslint配置" aria-hidden="true">#</a> 3.Eslint配置</h3>
<p>eslint 规则在项目目录下的.eslintrc.js的rules中配置</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">"babel-eslint"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es6</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"plugin:vue/recommended"</span><span class="token punctuation">,</span> <span class="token string">"eslint:recommended"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">"vue-eslint-parser"</span><span class="token punctuation">,</span>
  <span class="token comment">// add your custom rules here</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体规则详见 <a href="https://cn.eslint.org/docs/rules/" target="_blank" rel="noopener noreferrer">https://cn.eslint.org/docs/rules/<ExternalLinkIcon/></a><br>
prettier格式化规范需和eslint规则保持一致</p>
</div></template>


