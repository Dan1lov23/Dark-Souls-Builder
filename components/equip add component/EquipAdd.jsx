import './equipAdd.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

export default function EquipAdd({ userItem, removeItem, requirementsItem }) {
    return (
        <div className="equipAddMain">
            <div className="equipAddContainer">
                {userItem.map((item, index) => (
                    <div className="equipAdd" key={index}>
                        <button>
                            <img src={item.src} alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAZlBMVEX///8AAAD8/Pz19fVmZmbi4uJAQEDV1dU6Ojr5+fmDg4OpqalSUlLy8vLQ0NDo6Oi4uLhZWVlNTU15eXmampqTk5MfHx8WFhZISEhycnJra2vb29vDw8OLi4thYWE1NTUsLCwODg68TvNiAAAEYklEQVR4nO2cjXayMAyGKYoISAH5UQco3P9NDr+z+bMpJGmb7nyn7wW4Zy1N0jcBz1NXmrVhXvVlcRmaUYzNZV/EVRcGqa/hx1UVySQ+bw7ihZpdmciVTbhVluyHl2w3HYZ1Z2khI1ltZtnukHGesuOtqmJ+6Z517FkRIxkj4L60lhEXX3fC41310XHQ+cGOhnfVLjR+XoKSjnfVqTXLl2zV+IQYaoN4LTCuLCAaexSTRgffpNjIk5h+aMKbtA/180kt23tTrnsRu0ErnxC93rBda8abdNaZ/Cr9fEIU2ggjQuaFaMw0ARriE2Krh9DA8/eto45d7s3xTQFRnTA3ySdEqRptDPMJoVg7tLrS73tJFb70aJxPbAI6X6SxPnivNT0tJxx8U+FA5Wt5+ERDjNepwu0Ip54GaDCD/BTpJId8fGJD4PMLRkDKEjJu8KQCnfEC8ynkSeglNFJDz6jEAu6ZAQW27qLEwO25rKsqLi4UwAQJiMxyxzJ/SAd+m5yxz/AOCZhhlqHIfyUrP6wwDqwQAzbfSbCPtX2T7NMehYguGQJgpJ5xnyUm2OMT8gp0XapmfwJhFlOchnzZkFny+uDxdKRU1ouO5XJwgKdMkjm84HpAHmzwtYZYWM/dO0E/KUcgIDZU3/7A222GXWkj6EGJiYBe9KbzUANvY9CkdKYCev7LPwEu4SQwXmOT3aPa3/GmADeCoe7EXgHQy34+SAM8arEAev6PiIvoI0C3uFACfD7NIyYkQA2ytSKgl91TPyoiQHPJSRXwnlhR/ys4DlID9aPyfzeBGHVHBN8PyR7So1ZtkmQ4uwxczyg5mXSlUD6hYGSqCNxk2fGPrlwFLwfNNJGXhDAodBxirFJEE60x0ONeEmrEQS0Tk1SjzAWTwyCvlGJbVLpaszD5OdZ8KjjPcNThx3+05DmY/JwwH6KhLQuVPOPxFgwUnUpp7e+Ri68jdkeZsgjMDnshfQMqs8rIrR+eSrAlNwZ4TkhHxcO3SEiiD1/wFKr03vyWJccprB9LkUDng1tQKvrr5yPEtZQelLAMzwfU4VZz48rPos6G7A3PpH+LGmBipgpQ0kYHNkzb63lrEl/NdkUiRcAPPpvIJ5xgvt31KAt4SDhNrBV6vjDmNQEDJN7YMVtsyOmfkt2ixA3I8DuUEYqP276aJDF8xClLJWHS8JnttcQHIQzeI6/99yXEO4Cc2eMueJjW0CckyAdXMujBMW5ANvePCHix0+SCA5IHYrgAmW5HZMCDtS8ZAMMMfohbl4CZ5GTtexXAgt9SkLkKxNdYmkW4ClRR26izvgV5Z+di9YspabzfzKqorR3hL2XBrCwlOScnp/9I0WpelvGy02U7r6ONkaybOoiDXtpbRR/m8NtbQ+hs4F8v+ZnHsu4C3+osTAY6QAfoAB2gA3SADtABOkAH6AAdoAN0gA7QATpAB7gg6Nv1ll69hs83WjMwgfODFjvuEvKR6t5mKyLoF3z0cZerNow/AUp3RUWxyKe3AAAAAElFTkSuQmCC"/>
                        </button>
                        <button className="deleteButton" onClick={() => removeItem(index)}><FontAwesomeIcon icon={faTrash}/>
                        </button>
                        {requirementsItem.map((item) => (
                            <h1>{item}</h1>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
