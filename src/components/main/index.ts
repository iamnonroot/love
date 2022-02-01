import { Component, ComponentHelper, RenderOnInit } from '@townland-project/dom'

@Component({
    id: 'app-main',
    template: require('./component.html'),
    style: require('./component.scss')
})
export class MainComponent extends ComponentHelper implements RenderOnInit {
    RenderOnInit(): void {
        this.Colors.forEach((color, i) =>
            setTimeout(() => {
                this.AddLove(color)
            }, 300 * i)
        )
    }

    private Colors: string[] = ['#d63031', '#ff7675', '#e17055', '#fab1a0', '#fdcb6e', '#ffeaa7', '#00b894', '#55efc4', '#00cec9', '#81ecec', '#0984e3', '#74b9ff', '#6c5ce7', '#a29bfe', '#e84393', '#fd79a8']

    private AddLove(color: string): void {
        let string = `
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="${color}"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        `

        let template = document.createElement('template')
        template.innerHTML = string

        let svg = template.content.childNodes[1]!


        this.Element.querySelector('div.loves')?.appendChild(
            svg
        )

        setTimeout(() => {
            this.Element.querySelector('div.loves')?.removeChild(
                svg
            )
            this.AddLove(color)
        }, 4800);
    }
}
