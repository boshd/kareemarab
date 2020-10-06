import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
// import { InlineMath, BlockMath } from 'react-katex'
import MathJax from 'react-mathjax2'
// import 'katex/dist/katex.min.css'
import RemarkMathPlugin from 'remark-math'

function MarkdownWithMath(props) {

    const mathJaxScale = 100;
    const mathJaxWidth = "container";
    const mathJaxAutoLineBreak = true;
    const mathJaxOptions = {
        showMathMenu: false,
        CommonHTML: {
            scale: mathJaxScale,
            linebreaks: {
                width: mathJaxWidth,
                automatic: mathJaxAutoLineBreak
            }
        },
        "HTML-CSS": {
            scale: mathJaxScale,
            linebreaks: {
                width: mathJaxWidth,
                automatic: mathJaxAutoLineBreak
            }
        },
        NativeMML: {
            scale: mathJaxScale,
            linebreaks: {
                width: mathJaxWidth,
                automatic: mathJaxAutoLineBreak
            }
        },
        SVG: {
            scale: mathJaxScale,
            linebreaks: {
                width: mathJaxWidth,
                automatic: mathJaxAutoLineBreak
            }
        },
        PreviewHTML: {
            scale: mathJaxScale,
            linebreaks: {
                width: mathJaxWidth,
                automatic: mathJaxAutoLineBreak
            }
        },
    }

	const newProps = {
		...props,
		plugins: [RemarkMathPlugin],
		renderers: {
			...props.renderers,
            math: (props) => <MathJax.Node className="center">{props.value}</MathJax.Node>,
            inlineMath: (props) => <MathJax.Node inline>{props.value}</MathJax.Node>
		},
    }

	return (
        <MathJax.Context input="tex"
            input='ascii'
            onLoad={() => console.log("Loaded MathJax script!")}
            onError={(MathJax, error) => {
                console.warn(error);
                console.log("Encountered a MathJax error, re-attempting a typeset!");
                MathJax.Hub.Queue(
                    MathJax.Hub.Typeset()
                );
            }}
            script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=AM_HTMLorMML"
            options={mathJaxOptions}
        >
            <ReactMarkdown
                escapeHtml={false}
                {...newProps}
            />
        </MathJax.Context>

        // <MathJax.Context input='tex' options={mathJaxOptions}>
        //     <div>
        //     <ReactMarkdown {...newProps} />
        //         <MathJax.Node inline>

        //             {props.tex}
        //         </MathJax.Node>
        //     </div>
        // </MathJax.Context>
    )
}

export default MarkdownWithMath
