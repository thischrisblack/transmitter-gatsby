import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const About = styled.div`
  padding: 1rem 0 3rem 0;

  > h2 {
    margin-bottom: 1rem;
  }

  > p {
    margin: 2rem 0;
    font-size: 1.6rem;
  }
`

const ListBlock = styled.div`
  margin-left: 20px;
  font-size: 1.4rem;

  > p {
    margin-bottom: 1rem;
  }
`

const PressCitation = styled.div`
  font-size: 1.2rem;
  margin-bottom: 2rem;

  > a {
    font-style: italic;
  }
`

const PressQuote = styled.div`
  margin: 1rem 0 0.5rem 0;
  font-size: 1.4rem;
`

export default ({ data }) => (
  <Layout>
    <SEO title="Musical History" description="An accounting of Chris Black's music history and press." pathname="/about/" />
    <About>
      <h2>Musical History and Press</h2>
      <p>
        My name is Chris Black. I am a musician and composer. I play mostly
        double bass, but I'll get involved with anything that makes a sound.
      </p>
      <p>
        I am the founder of the alt-classical chamber music concert series{" "}
        <a href="http://www.chamberlab.org">ChamberLab</a>. I have been a member
        of such groups as Shoulders (Austin, TX), Les Wampas (Paris, FR), Golden
        Arm Trio (Austin, TX), The Wedding's Off (L.A., CA), and the Taraf de
        Tucson (Tucson, AZ).
      </p>
      <p>
        <strong>PRESENT ENSEMBLES</strong>
      </p>
      <ListBlock>
        <p>
          <em>Chris Black / Chris Black Trio</em>
          <br />
          Singer, contrabassist.
        </p>
      </ListBlock>

      <p>
        <strong>SELECTED PAST ENSEMBLES</strong>
      </p>
      <ListBlock>
        <p>
          <em>ChamberLab</em>
          <br />
          2010 &#8211; 2017
          <br />
          Founder, artistic director, composer, performer.
        </p>
        <p>
          <em>Gabriel Sullivan / Gabriel Sullivan and the Taraf de Tucson</em>
          <br />
          2008 &#8211; 2012
          <br />
          Contrabassist, violinist.
        </p>
        <p>
          <em>The Wedding's Off</em>
          <br />
          Los Angeles, CA, 2002 &#8211; 2003.
          <br />
          Drummer.
        </p>
        <p>
          <em>Chris Black &amp; the Holy Ghost / Gadjo Bango</em>
          <br />
          Austin, TX, 1999 &#8211; 2006.
          <br />
          Bandleader, singer, pianist, guitarist.
        </p>
        <p>
          <em>Golden Arm Trio</em>
          <br />
          Austin, TX, 1999 &#8211; 2001, 2006.
          <br />
          Contrabassist.
        </p>
        <p>
          <em>Les Wampas</em>
          <br />
          Paris, France, 1993, 1996.
          <br />
          Bassist.
        </p>
        <p>
          <em>Shoulders</em>
          <br />
          Austin, TX, 1989 &#8211; 1994.
          <br />
          Contrabassist.
        </p>
      </ListBlock>

      <p>
        <strong>MUSIC FOR THEATRE AND FILM (COMPOSER)</strong>
      </p>

      <ListBlock>
        <p>
          <em>Speak Easy</em>
          <br />
          Artifact Dance Project, Tucson, AZ, 2014
        </p>
        <p>
          <em>The General</em> (Buster Keaton)
          <br />
          ChamberLab, Fox Theatre, Tucson, AZ, 2014
        </p>
        <p>
          <em>Happening to Your Body</em>
          <br />
          (Short Film) directed by Jon Ecklund, 2014
        </p>
        <p>
          <em>Eurydice</em>
          <br />
          Beowulf Theatre, Tucson, AZ, 2012
        </p>
        <p>
          <em>Tigers</em>
          <br />
          (Short Film) directed by Rory O'Rear, 2010
        </p>
        <p>
          <em>Fugitive Pieces</em>
          <br />
          Salvage Vanguard Theater, Austin, TX, 2002
        </p>
        <p>
          <em>Tilt Angel</em>
          <br />
          Salvage Vanguard Theater, Austin, TX, 2001
        </p>
      </ListBlock>

      <p>
        <strong>AWARDS and HONORS</strong>
      </p>

      <ListBlock>
        <p>
          Buffalo Exchange Arts Award
          <br />
          2014
        </p>
        <p>
          Golden Hornet Project String Quartet Smackdown
          <br />
          Sweet Sixteen Finalist, 2014
          <br />
          Winner, 2012
        </p>
        <p>
          Best Alternative Packaging for a Compact Disc
          <br />
          Tucson Weekly Staff, 2012 (for Drunk at the Funeral)
        </p>
      </ListBlock>

      <p>
        <strong>PRESS</strong>
      </p>

      <ListBlock>
        <strong>Featured on KXCI Radio</strong>

        <PressQuote>
          30 Minutes spoke with Tucson composer Chris Black and ACLU Attorney
          Billy Peard about the upcoming Vexations marathon to raise money and
          awareness for ACLU of Arizona.
        </PressQuote>

        <PressCitation>
          <a href="https://kxci.org/podcast/chamberlab-orchestrates-vexations-marathon-for-aclu-fundraiser/">
            KXCI Radio
          </a>
          , November 26th, 2017
        </PressCitation>

        <strong>
          Featured on the November 24th, 2017 edition of ARIZONA SPOTLIGHT with
          host Mark McLemore
        </strong>

        <PressQuote>
          Find out why Tucson's "alt-classical" ensemble ChamberLab will perform
          a century-old piece of music by Erik Satie 840 times in a row in
          December during an event called "The Vexathon".
        </PressQuote>

        <PressCitation>
          <a href="https://radio.azpm.org/p/radio-azspot-splash/2017/11/24/120356-xxx/">
            AZPM Radio
          </a>
          , November 24th, 2017
        </PressCitation>

        <strong>16 hours of 1-minute music: Sounds like a marathon</strong>

        <PressQuote>
          How hard can it be to play a one-minute piece of music on the piano -
          or violin, guitar, tuba, oboe, basically your instrument of choice?
          Wait, what? Play it 840 times? Well that's a different story.
        </PressQuote>

        <PressCitation>
          <a href="http://tucson.com/entertainment/music/hours-of--minute-music-sounds-like-a-marathon/article_627bef8a-91f7-5215-bc24-7d68570674d3.html">
            Arizona Daily Star
          </a>
          , November 20th, 2017
        </PressCitation>

        <strong>Marathon for a minute song multiplied by 840</strong>

        <PressQuote>
          You know the neighborhood kid who comes to your door and asks you to
          sponsor him/her in a marathon. You pledge a quarter a lap - a buck if
          you're especially generous or confident the kid won't get far - and
          you pay up based on how many laps/miles they finished.
        </PressQuote>

        <PressCitation>
          <a href="http://tucson.com/entertainment/music/marathon-for-a-minute-song-multiplied-by/article_b4018bd0-5b6d-5190-9262-11c124ba3744.html">
            Arizona Daily Star
          </a>
          , October 23rd, 2017
        </PressCitation>

        <strong>Restless Soul</strong>

        <PressQuote>
          Chris Black's new release, <cite>Lullabies and Nightmares</cite>, is
          such stuff as bad dreams are made of.
        </PressQuote>

        <PressCitation>
          <a
            href="https://www.tucsonweekly.com/tucson/restless-soul/Content?oid=11843937"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tucson Weekly
          </a>
          , September 28th, 2017
        </PressCitation>

        <strong>
          Classical music will expand soundscape at rock 'n' roll venue
        </strong>

        <PressQuote>
          And he and his band of classically trained musicians will do it in a
          place that’s used to loud, crunchy guitars and deafening percussion.
        </PressQuote>

        <PressCitation>
          <a
            href="http://tucson.com/entertainment/music/classical-music-will-expand-soundscape-at-rock-n-roll-venue/article_f30c4fa6-d2ce-52b5-a924-c0854a0451b4.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Arizona Daily Star
          </a>
          , September 5th, 2017
        </PressCitation>

        <strong>Sonic Storytelling</strong>

        <PressQuote>
          <cite>Lullabies &amp; Nightmares</cite> is a 15-song soundtrack to the
          script in your brain. Some tunes are filled with suspense and tension,
          conveying treachery and darkness; other are upbeat, playful and
          heartening.
        </PressQuote>

        <PressCitation>
          <a
            href="http://www.zocalomagazine.com/sonic-storytelling/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zocalo
          </a>
          , September 2nd, 2017
        </PressCitation>

        <strong>Legends &amp; Shadows</strong>

        <PressQuote>
          There were no boundaries to begin with when ChamberLab set out to
          present classical music with a punk ethos. So about a year ago when
          ChamberLab visionary Chris Black got the idea to draw mariachi
          musicians into the fold &hellip; the challenge was set.
        </PressQuote>

        <PressCitation>
          <a
            href="https://www.tucsonweekly.com/tucson/legends-and-shadows/Content?oid=7817560"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tucson Weekly
          </a>
          , March 2nd, 2017
        </PressCitation>

        <strong>Soundbites</strong>

        <PressQuote>
          Chris Black's "alt-classical DIY concert series" ChamberLab is
          consistently one of the coolest things happening in Tucson music, with
          his talented friends taking on contemporary compositions in settings
          often accustomed to rock shows.
        </PressQuote>

        <PressCitation>
          <a
            href="https://www.tucsonweekly.com/tucson/soundbites/Content?oid=4826210"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tucson Weekly
          </a>
          , September 11th, 2014
        </PressCitation>

        <strong>
          Chris Black and Chamberlab: One Year Down and a Wide-Open Future for
          Chamber Music in Popular Culture
        </strong>

        <PressQuote>
          Chris Black revealed a handful of his many dimensions&mdash;first
          whimsy, with a composition for ten players titled, "Around the
          Neighborhood in Socks"; then wizardry, with a lighthearted set of
          short pieces for three bassoons; and, finally, emotive, dark free
          verse, melding music and spoken word into a harrowing first-person
          account of a paranoid-schizophrenic episode.
        </PressQuote>

        <PressCitation>
          <a
            href="https://www.tucsonweekly.com/WeGotCactus/archives/2013/05/29/chris-black-and-chamber-lab-one-year-down-and-a-wide-open-future-for-chamber-music-in-popular-culture"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tucson Weekly
          </a>
          , May 29th, 2013
        </PressCitation>

        <strong>
          Mommy, Why is Chris Black Gonna be Drunk at the Funeral?
        </strong>

        <PressQuote>
          The title track, "Drunk at the Funeral," it's like a soundtrack for
          when some grieving rummy's gonna topple into the casket with the
          deceased unless his friends keep him upright until the paternoster's
          over and the worms are reaching for their bibs.
        </PressQuote>

        <PressCitation>
          <a
            href="https://www.austinchronicle.com/daily/chronolog/2012-11-01/mommy-why-is-chris-black-gonna-be-drunk-at-the-funeral/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Austin Chronicle
          </a>
          , November 1st, 2012
        </PressCitation>

        <strong>Chris Black: Jericho</strong>

        <PressQuote>
          This is no ordinary musician. Reaching beyond the boundaries of genre,
          delving into theatrical representations of hot and cold, Chris Black
          debuts his solo album, a collection of more throb than beat,
          instruments churning and bleeding all over this canvas.
        </PressQuote>

        <PressCitation>
          <a
            href="https://www.austinchronicle.com/music/2006-07-21/388457/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Austin Chronicle
          </a>
          , July 21st, 2006
        </PressCitation>

        <strong>Unusual Inspiration</strong>

        <PressQuote>
          Putting together a new CD doesn't usually involve trips to the
          lumberyard. But for Chris Black's <i>Drunk at the Funeral</i>, the
          lumberyard was just the beginning. &hellip; The unusual
          album&mdash;with its startling, forceful piano and orchestral
          percussion&mdash;also stems from an unusual combination of
          inspirations.{" "}
        </PressQuote>

        <PressCitation>
          <a
            href="https://www.tucsonweekly.com/tucson/unusual-inspirations/Content?oid=3227467"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tucson Weekly
          </a>
          , February 9th, 2012
        </PressCitation>

        <strong>Best of Tucson</strong>

        <PressQuote>
          Multi-instrumentalist Black&mdash;a player and composer of great note
          and the <i>charg&eacute; d'affaires</i> for the acclaimed ChamberLab
          project&mdash;has wearied of releasing CDs in tacky, easily broken
          jewel cases.
        </PressQuote>

        <PressCitation>
          <a
            href="https://www.tucsonweekly.com/tucson/best-alternative-packaging-for-a-compact-disc/BestOf?oid=3534676"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tucson Weekly
          </a>
          , 2012
        </PressCitation>

        <strong>Modern Adaptation</strong>

        <PressQuote>
          {" "}
          [Orpheus's] reputation as a musician is preserved through composer
          Chris Black's sublime incidental music &hellip;{" "}
        </PressQuote>

        <PressCitation>
          <a
            href="https://www.tucsonweekly.com/tucson/modern-adaptation/Content?oid=2504121"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tucson Weekly
          </a>
          , January 27th, 2011
        </PressCitation>

        <strong>Good Juju</strong>

        <PressQuote>
          Now audiences will be able to hear another side of Chris Black with
          the debut of the project ChamberLab, for which he and other
          nonclassical composers have written pieces for a string chamber
          ensemble.
        </PressQuote>

        <PressCitation>
          <a
            href="https://www.tucsonweekly.com/tucson/good-juju/Content?oid=1959986"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tucson Weekly
          </a>
          , May 6th, 2010
        </PressCitation>

        <strong>That Thinking Feeling</strong>

        <PressQuote>
          &hellip; and the musician Chris Black steps up to unleash a tight
          series of gypsy improvisations on his excellent violin, the audience
          is right there. The audience, as Black whacks the devil into his
          fiddlestick, is just about
          <i>grooving</i>.
        </PressQuote>

        <PressCitation>
          <a
            href="https://www.austinchronicle.com/arts/2004-08-27/226174/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Austin Chronicle
          </a>
          , August 27th, 2004
        </PressCitation>

        <strong>Fugitive Pieces</strong>

        <PressQuote>
          Chris Black provides a gorgeous live soundtrack to the show and its
          bursts of song, hammering his drums, pounding and tapping and brushing
          his hanging collection of hubcaps, trash can lids, and buckets,
          rubbing his array of wine glasses to precise effect.
        </PressQuote>

        <PressCitation>
          <a
            href="https://www.austinchronicle.com/arts/2002-03-01/84767/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Austin Chronicle
          </a>
          , March 1st, 2002
        </PressCitation>
      </ListBlock>
    </About>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        image
        imageAlt
      }
    }
  }
`
